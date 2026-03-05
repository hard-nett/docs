---
title: Fine Tune
---
**Yes, tokenization is the key step that turns your raw text data into a format compatible with fine-tuning—but it produces integer token IDs, *not* vector embeddings.** The embeddings happen later inside the model (via an `nn.Embedding` lookup table). Here's exactly how data preparation works for Qwen models (Qwen2 / Qwen2.5 / Qwen3) in a **tinygrad** workflow.

### 1. Start with raw text data (the easiest formats)
You need instruction / conversational data. The simplest and most compatible formats are:

- **Hugging Face datasets** (recommended for quick start)  
  Examples that work great with Qwen:  
  - `mlabonne/FineTome-100k`  
  - `HuggingFaceH4/ultrachat_200k`  
  - `teknium/OpenHermes-2.5`  
  - Or any dataset with columns like `"messages"` (list of `{"role": "user/assistant", "content": "..."}`) or the classic Alpaca format (`"instruction"`, `"input"`, `"output"`).

- **Your own data** as a JSONL file (one JSON object per line):  
  ```json
  {"messages": [{"role": "user", "content": "Explain tinygrad"}, {"role": "assistant", "content": "It's a tiny ML framework..."}]}
  ```

These are loaded with the `datasets` library (install `pip install datasets`).

### 2. Tokenization: text → integer token IDs (this is the serialization step)
Qwen models use a **tiktoken-style** tokenizer with special chat tokens (`<|im_start|>`, `<|im_end|>`, etc.). You **do not** create embeddings here—only IDs (0 to ~151,936 for Qwen2).

```python
from transformers import AutoTokenizer
import numpy as np
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen2-0.5B-Instruct")  # or your Qwen model

# Load your dataset
dataset = load_dataset("mlabonne/FineTome-100k", split="train")

def tokenize_example(example):
    # Qwen chat template handles roles perfectly
    text = tokenizer.apply_chat_template(example["messages"], tokenize=False, add_generation_prompt=False)
    tokens = tokenizer.encode(text, add_special_tokens=False)
    return tokens

# Apply tokenization (this can take a while for big datasets)
tokenized = dataset.map(lambda x: {"tokens": tokenize_example(x)}, remove_columns=dataset.column_names)

# Flatten everything into one giant list of integers
all_tokens = []
for item in tokenized:
    all_tokens.extend(item["tokens"])

# Serialize to a tiny, fast binary format (this is what your training script will read)
tokens_array = np.array(all_tokens, dtype=np.uint32)  # uint32 is safe (vocab < 2^18)
tokens_array.tofile("train.bin")   # ~few hundred MB even for 100k examples
```

**Why `.bin` (flat uint32 array)?**  
- It's the format used by every simple LLM trainer (nanoGPT, lit-gpt, the community tinygrad GPT-2 efforts, and OpenFormer).  
- Super fast to `mmap` (memory-map) — no Python overhead.  
- One file = entire dataset. You can shard it (`train_00.bin`, `train_01.bin`, …) if it gets > a few GB.

### 3. How the training script consumes the data (tinygrad style)
In your fine-tuning script (or in `kreasof-ai/OpenFormer`'s `train_sft.py`), you do this:

```python
import numpy as np
from tinygrad import Tensor

data = np.memmap("train.bin", dtype=np.uint32, mode="r")  # memory-mapped, zero-copy

def get_batch(batch_size=8, context_length=2048):
    starts = np.random.randint(0, len(data) - context_length - 1, batch_size)
    x = np.stack([data[i:i+context_length] for i in starts])      # inputs
    y = np.stack([data[i+1:i+context_length+1] for i in starts])  # targets (next token)
    return Tensor(x), Tensor(y)   # tinygrad Tensors — ready for .backward()
```

Then in your training loop (exactly like `beautiful_mnist.py` or the transformer example):
```python
for step in range(steps):
    X, Y = get_batch(...)
    with Tensor.train():
        logits = model(X)                # embedding layer turns IDs → vectors here
        loss = logits.sparse_categorical_crossentropy(Y)
        loss.backward()
        optimizer.step()
```

### 4. Bonus: Ready-made options (so you don't write everything from scratch)
- **Recommended**: Use **OpenFormer** (https://github.com/kreasof-ai/OpenFormer) — it's built *specifically* for tinygrad + Qwen/Llama3 fine-tuning.  
  It already does the HF dataset + tokenizer + chat template + LoRA + SFT masking internally. Just run:
  ```bash
  python src/train_sft.py --model_id Qwen/Qwen2-0.5B-Instruct --dataset_id mlabonne/FineTome-100k
  ```
  You can still feed it your own `.bin` if you want.

- Official tinygrad has no LLM fine-tuning script yet (only inference in `llama.py`/`gpt2.py` and a toy `transformer.py`), but the community GPT-2 pre-training repos on Discord/Reddit use exactly the `.bin` + `memmap` pattern above.

### Quick checklist before you start fine-tuning
1. Install tokenizer deps: `pip install transformers datasets`
2. Run the tokenization script above → get `train.bin`
3. Use (or copy) a training script that expects `np.uint32` token sequences
4. For instruction tuning, always use `apply_chat_template` so Qwen sees the correct `<|im_start|>` tokens
5. Mask loss on user/prompt tokens (OpenFormer does this automatically)

That's it — once you have the `.bin` file, the rest of the tinygrad workflow is literally the same as `beautiful_mnist.py`: define model, loss, optim, `.backward()`, `.step()`. No PyTorch DataLoader, no complicated packing, just raw token IDs in a binary file.

If you want, drop your dataset format (JSONL, HF name, etc.) and I can give you the exact 20-line tokenization script tailored to it. Happy fine-tuning! 🚀
---
title: workspace setup
---

# Initial Development Workspace Environment setup

This tutorial will guide you through the process of setting up an Development Workspace Environment (DWE) for developing CosmWasm smart contracts. Since CosmWasm contracts are currently built using Rust, this tutorial will focus on setting up your DWE for Rust development.

# Prerequisites

Please refer to the Installation guide to [install](./installation.md) the Rust compiler (rustc) before proceeding.

# Install IDE Of Choice

Visual Studio 

## Configure IDE

To enable Rust support in VS Code, you need to install a few extensions, namely **rust-analyzer** and **CodeLLDB**, that provide syntax highlighting, code completion, debugging capabilities and other essential functionalities.

#### Rust-analyzer

The rust-analyzer extension is a language server for the Rust programming language, which provides features such as code completion, error checking, and documentation while writing Rust code in VS Code.

Follow these steps to install the extension:

1. Go to the **Extension** panel
2. In the Search field enter **rust-analyzer**
3. Click the **install** button to the bottom right of **rust-analyzer**

For additional information as to the benefits and features of rust-analyzer, see the rust-analyzer [User Manual](https://rust-analyzer.github.io/manual.html).

#### CodeLLDB

The **CodeLLDB** extension is a native debugger used for debugging Rust and other compiled languages.

Follow these steps to install the extension:

1. Go to the **Extension** panel
2. In the **Search** field enter **CodeLLDB**
3. Click the **install** button to the bottom right of **CodeLLDB**

For full details on how to use the CodeLLDB extension, please see the [Manual](https://github.com/vadimcn/codelldb/blob/v1.9.0/MANUAL.md).

# Cosmy wasmy

[Cosmy Wasmy](https://marketplace.visualstudio.com/items?itemName=spoorthi.cosmy-wasmy) is a VS Code plugin that simplifies the process of developing and interacting with CosmWasm smart contracts. It comes pre-configured with the most popular testnets for CosmWasm chains, making chain interactions during testing a breeze. With Cosmy Wasmy, you can perform all interactions within VS Code without having to use the CLI.
For more information about installation, configuration, and the commands and features available, check out [Cosmy Wasmy](https://marketplace.visualstudio.com/items?itemName=spoorthi.cosmy-wasmy).

# CosmWasm IDE

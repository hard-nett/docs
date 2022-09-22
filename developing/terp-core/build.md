---
title: Build and Test
---

# Build and Test Terp-Core Source Code


## Install Go 1.19

Currently, Terp-Core uses Go 1.19 to compile the code.

Install [Go 1.19](https://go.dev/doc/install) by following instructions there.

Verify the installation by typing `go version` in your terminal.

```sh
$ go version
go version go1.19.1 darwin/amd64
```

## Build Terp-Core

In order to build Flink you need the source code. Either [download the source of a release](https://github.com/terpnetwork/terp-core/releases) or [clone the git repository](https://github.com/terpnetwork/terp-core).

Build Terp-Core from the source code:

```sh
cd terp-core
make build
```

After building, you should see a new executable file `terp-core/build/terpd`.

## Run Tests

Run tests from the source code:

```sh
cd terp-core
make test
```

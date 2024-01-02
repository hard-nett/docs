---
sidebar_position: 3
---

# Working With Docker
There are multiple ways to use Terp-Core with Docker. If you want to run Terp-Core inside a Docker setup and possibly connect the Docker container to other containerized compatible blockchain binaries, check out the guide on building a Docker image containing the Terp binary. If you instead want to generate a binary for use outside of Docker, but want to ensure the correct dependencies are used by building the binary inside a Docker container, then go ahead to the section on building the Terp-Core binary with Docker.


## Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Go](https://go.dev/doc/install)
- Strangelove's [Heighliner](https://github.com/strangelove-ventures/heighliner) 

## General Setup

In order to build Terp-Core binaries with Heighliner, it is necessary to
- Have go installed.
- Clone the heighliner repository to your local machine (e.g. `git clone https://github.com/strangelove-ventures/heighliner`)
- Checkout the commit, branch, or release tag you want to build for Terp Network  (e.g. `terpnetwork/barberry`)

## Building A Docker Image 

### Install Heighliner
```
go download
```
### Build a docker image & save it locally 
```
./heighliner build -c terpnetwork --git-ref v4.1.0
```
This will create an image with the name `terpnetwork/terp-core` and the version tag `v4.1.0`. Now it is possible to run the `terpd` binary in the container, e.g. evaluating its version: 
```
docker run -it --rm terpnetwork/terp-core:v4.1.0 terpd version
```


## Nice!
Now that you have built the terp-core binary, either for local use or in a Docker container, you'll find information to run a node instance in the following section on setting up a local network.
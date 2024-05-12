---
title: g. configure reverse proxy & DNS
sidebar_position: 6
---
To create an endpoint that others may use, we will want to configure our nodes into a setup which optimizes your endpoints UX, reliability & security. For this tutorial, we start from a basic Ubuntu server. 

## Requirements
This guide shows how to setup a node with custom HTTPS endpoints via Nginx, Certbot, and Cloudflare. 

## Installation

### 1.  Install nginx & certbot
```sh
sudo apt install nginx certbot python3-certbot-nginx
```

### 2. Setup nginx linked files

remove default nginx file
```sh
sudo rm -rf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
```

setup nginx file for rpc/api
```sh
sudo nano /etc/nginx/sites-available/<your-endpoint-dns>
```

:::info
A template for the nginx configuration can be found [here](https://github.com/permissionlessweb/o-line-playbook/blob/main/nginx/sites-available/rpc-api-grpc-peer).
:::

link `sites-available` to `sites-enabled` 
```sh 
sudo ln -s /etc/nginx/sites-available/<your-endpoint-dns> /etc/nginx/sites-enabled/
```

test configuration is good to go
```
sudo nginx -t 
```

restart nginx service
```
sudo systemctl restart nginx
```

### 3. Request SSL Certificates 

A quick & temporary way to setup ssl certificates is through Let’s Encrypt. To setup certificates for your endpoint, you will need to have pointed your DNS endpoints to your nodes ip address. 

Here, we setup certificates for RPC & API endpoints

```sh
sudo certbot --nginx -d <your-rpc-prefix>.<your-endpoint-dns> -d <your-api-prefix>.<your-endpoint-dns>
```


:::warning
note that this is just one example of how configuring a node with dns may be applied. Please do further research before deciding which method works best for you.
:::
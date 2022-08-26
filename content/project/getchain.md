---
categories: ["Projects"]
date: "2021-10-10"
description: "A website that aggregates multiple blockchain APIs into a single API endpoint. Built using ASP.NET Core's Razor Pages, with a built in REST WebAPI."
featured: "/me.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "GetChain"
slug: "getchain"
type: "project"

# headImage: /img/getchain/getchain-website-screenshot.png
---

{{< image src="/img/getchain/getchain-frontpage.png" >}}

GetChain is deployed to [https://getchain.dev/](https://getchain.dev/){:target="_blank"}.  
The source code is here: [https://github.com/pippinmole/getchain/](https://github.com/pippinmole/getchain/){:target="_blank"}.

## TL;DR

GetChain aggregates the API endpoints of these blockchains under a single domain:
* Binance Smart Chain
* Ethereum
* Goerli
* Kovan
* Rinkeby
* Ropsten

## Technologies

GetChain was written in C# using [Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-6.0). I decided to use Razor Pages because I needed a framework that has a backend (for user accounts, generating and storing API keys etc).

For the database, I pretty much always go with [MongoDB](https://www.mongodb.com/) because it's a NoSQL (schema based) solution, meaning I can change a database schema and not have to rewrite any SQL statements.

## Usage

The front-end doesn't need to do anything but allow a user to create an account and generate an API key, so it's relatively simple.

#### Creating an API key

![Creating an API key](/img/getchain/creating-api-key.gif)

#### Using the API

The homepage shows how to use the API in your program: 

{{< image src="/img/getchain/how-to-use-api.png" >}}
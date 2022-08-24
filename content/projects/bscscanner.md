---
title: BscScanner
summary: A wrapper library for the BscScan WebAPI, with dependency injection support.
status: Complete
headImage: /img/bscscanner/bscscanner.png
---

BscScanner is a C# library that encapsulates all of the web api endpoints exposed by [BscScan](https://bscscan.com/), the explorer that shows transactions on the Binance Smart Chain blockchain. It has been downloaded by 2,100+ people on [NuGet](https://www.nuget.org/packages/BscScanner).

The package is split up into 3 packages:
* [BscScanner](https://www.nuget.org/packages/BscScanner) - The core library containing all methods pertaining to the BscScan API
* [BscScanner.Extensions.Convert](https://github.com/pippinmole/BscScanner.Extensions.Convert) - A conversion libary to convert BNB to [GWEI](https://academy.binance.com/en/glossary/gwei) and back
* [BscScanner.Extensions.DependencyInjection](https://github.com/pippinmole/BscScanner.Extensions.DependencyInjection) - A dependency injection library that allows users to inject the core library's classes into services.
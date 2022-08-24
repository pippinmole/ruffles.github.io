---
categories: ["Projects"]
date: "2022-03-25"
description: "A C# wrapper library for the BscScan Web API, with dependency injection support."
featured: "/me.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "BscScanner"
slug: "bscscanner"
type: "project"
# cover: "/img/bscscanner/bscscanner.png"

# status: Complete
# headImage: /img/bscscanner/bscscanner.png
---



BscScanner is a C# library that encapsulates all Web-API endpoints exposed by [BscScan](https://docs.bscscan.com/), the explorer that shows transactions on the Binance Smart Chain blockchain. It has been downloaded by **2,100+ people** on [NuGet](https://www.nuget.org/packages/BscScanner).

The package is split up into 3 packages:
* [BscScanner](https://www.nuget.org/packages/BscScanner) - The core library containing all methods pertaining to the BscScan API
* [BscScanner.Extensions.Convert](https://github.com/pippinmole/BscScanner.Extensions.Convert) - A conversion libary to convert BNB to [GWEI](https://academy.binance.com/en/glossary/gwei) and back
* [BscScanner.Extensions.DependencyInjection](https://github.com/pippinmole/BscScanner.Extensions.DependencyInjection) - A dependency injection library that allows users to inject the core library's classes into services.

The choice to split functionality into 3 packages is commonly used in .NET development. Some people may want to use the core package without dependency injection, in something such as a console application, while some may opt into using the Dependency Injection package in an ASP.NET Core application.

### Why?
Why did I make these packages? At the start of 2020 I started investing in projects on the Binance Smart Chain, and soon after got the idea to make my own website that keeps track of a wallet address. I knew I needed to interact with the BscScan explorer, and so started writing classes to do this. 

Quickly, I found that their API was not designed in the best way (incorrect use of status codes, json data was formatted in a strange way), and so knew my code was going to be messy.

I looked through the NuGet package library, and found that there were no .NET libraries that interacted with the BscScan explorer.

{{< image src="/img/bscscanner/bscscan-nuget.png" position="center" figure="The other two packages were not available at the time of creating BscScanner" >}}

So, I decided to task myself with creating it myself, bearing in mind, I had never made one before.

### What
The library needed to solve the problem of getting data from the blockchain:

* API Mapping - Map a URL endpoint to a callable, awaitable method in C#.
* Asynchronous methods - Web requests take time, and so awaiting the task prevents blocking of the main thread.
* Dependency Injection - I wanted to use this in an ASP.NET Core project, which relies heavily on DI to function.

### How

The whole library revolves around a class and interface. The user of the library only has to reference the interface in their code:
```cs
public interface IBscScanClient {
    Task<float> GetBnbBalanceSingleAsync(string address);
    Task<IEnumerable<BscBalance>> GetBnbBalanceMultipleAsync(IEnumerable<string> addresses);
    Task<IEnumerable<BscTransaction>> GetTransactionsByAddress(string address, int startBlock = 1, int endBlock = 99999999);
    Task<IEnumerable<BscTransaction>> GetTransactionsByHash(string hash);
    Task<IEnumerable<BscTransaction>> GetTransactionsByBlockRange(int startBlock = 1, int endBlock = 99999999);
    Task<IEnumerable<BscTransaction>> GetBep20TokenTransferByContractAddress(string contract);
    Task<IEnumerable<BscTransaction>> GetBep20TokenTransfersByAddress(string address = null, string contractAddress = null);
    Task<IEnumerable<BscTransaction>> GetErc721TokenTransfersByAddress(string address = null, string contractAddress = null);
    Task<IEnumerable<BscTransaction>> GetErc721TokenTransferByContractAddress(string contract);
    Task<IEnumerable<BscBlock>> GetBlocksValidatedByAddress(string address);
    Task<string> GetAbiFromSourceAddress(string address);
    Task<IEnumerable<BscContract>> GetSourceCodeFromSourceAddress(string address);
    Task<BscTxStatus> GetTransactionReceiptStatus(string txHash);
    Task<BscBlockReward> GetBlockRewardByBlock(int block);
    Task<BscBlockCountdown> GetBlockCountdownByBlock(int block);
    Task<int> GetBlockNumberByTimestamp(DateTime time);
    Task<int> GetBlockNumberByTimestamp(long unixTime);
    Task<int> GetLatestBlock();
    Task<double> GetTokenTotalSupply(string address);
    Task<double> GetTokenCirculatingSupply(string address);
    Task<double> GetAccountBalanceByContractAddress(string contractAddress, string accountAddress);
    Task<double> GetBnbTotalSupply();
    Task<IEnumerable<BscValidator>> GetBscValidators();
    Task<BscBnbPrice> GetBnbLastPrice();
}
```

Each method invokes its subsequent web request and returns the formatted result:
```cs
public async Task<float> GetBnbBalanceSingleAsync(string address) {
    var url = $"https://api.bscscan.com/api?module=account&action=balance&address={address}&tag=latest&apikey={_apiKey}";
    var obj = await Get<BscBalanceSingleSchema>(_client, url);

    return float.Parse(obj.Result);
}
```

You may notice that I have to use ``float.Parse(obj.Result)`` to obtain the float value from the ``BscBalanceSingleSchema``, which is due to the fact that BscScan returns everything as string, even though JSON supports int and floats. Annoying!


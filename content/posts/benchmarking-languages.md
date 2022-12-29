---
categories: ["JavaScript", "Java", "C#", "Golang"]
date: "2022-12-27"
description: "Benchmarking each language"
featured: "/me.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "Which language is the fastest?"
slug: "benchmarking-languages"
type: "project"
---

{{<image src="/img/blog/benchmarking-languages/programming-languages.jpg" style="height:300px;width:auto" position="center" >}}

## Why?

Good point! Why benchmark languages? Well, when using Hugo, the entire project compiles in 300ms, compared with frameworks such as React.js take almost 12 seconds!

Obviously, they are two entirely different technologies and some are faster than others, but I was interested to see how much of a factor the language is.

## How?

The only fair way of testing if a specific language is faster than another is by benchmarking it under the same exact conditions. For this, I decided to benchmark how quickly it can find the first N prime numbers using the Sieve of Eratosthenes algorithm:

{{<image src="/img/blog/benchmarking-languages/Sieve-of-Eratosthenes.png" style="height:300px;width:auto" position="center" figure="Pseudocode for the Sieve of Eratosthenes algorithm" >}}

There are many ways to test how quickly a function can run in a specific language, but I've decided to use libraries that do the benchmarking for me because they often give more accurate results.

## Results

If you don't want to read on and simply want the results, here they are:

| **Language** 	| **1**   	| **100**   	| **10,000**    	| **1,000,000**   	| **100,000,000**     	|
|--------------	|---------	|-----------	|---------------	|-----------------	|---------------------	|
| Python       	| 614.16 ns | 70,653.38 ns  | 9,780,469.12 ns  	| 889,441,796.00 ns | 90,486,564,681.200 ns |
| JavaScript   	|         	|           	|               	|                 	|                     	|
| Java         	|         	|           	|               	|                 	|                     	|
| Golang       	| 17.54 ns  | 2397.00 ns    | 170,880.00 ns     | 18,716,736.00 ns  | 2,062,528,239.00 ns   |
| C#           	| 27.33 ns 	| 890.95 ns 	| 102,216.59 ns 	| 9,748,457.98 ns 	| 1,098,015,650.97 ns 	|
| Haskell      	|         	|           	|               	|                 	|                     	|

### Python

For my benchmarking library I used [pytest-benchmark](https://pypi.org/project/pytest-benchmark/).

{{<image src="/img/blog/benchmarking-languages/python-results.png" position="center" figure="Results of running GetPrimes" >}}

### JavaScript

### Java

### Golang

{{<image src="/img/blog/benchmarking-languages/golang-results.png" position="center" figure="Results of running GetPrimes" >}}

### C#

For my benchmarking library I used [Benchmark.NET](https://github.com/dotnet/BenchmarkDotNet).

{{<image src="/img/blog/benchmarking-languages/csharp-results.png" position="center" figure="Results of running GetPrimes" >}}

### Haskell

[Criterion](https://hackage.haskell.org/package/criterion)

## Notes about benchmarking

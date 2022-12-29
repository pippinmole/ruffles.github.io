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
| Python       	| 614.16 ns | 0.0706 ms     | 9.7805 ms  	    | 889.4418 ms       | 90.4866 s             |
| JavaScript   	|  -       	| -          	| -              	| -                	| -                    	|
| Golang       	| 17.54 ns  | 2397.00 ns    | 0.1709 ms         | 18.7167 ms        | 2.0625 s              |
| C#           	| 27.33 ns 	| 890.95 ns 	| 0.1022 ms 	    | 9.7485 ms 	    | 1.0980 s 	            |
<!-- | Java         	|         	|           	|               	|                 	|                     	| -->
<!-- | Haskell      	|         	|           	|               	|                 	|                     	| -->

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

<!-- ### Haskell

[Criterion](https://hackage.haskell.org/package/criterion) -->

## Notes about benchmarking

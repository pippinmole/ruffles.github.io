---
categories: ["Decay", "Unity"]
date: "2020-11-25"
description: "A first look at ASP.NET Core"
featured: "/me.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "Should you get started with ASP.NET Core?"
slug: "aspnetcore-first-look"
type: "project"
---

> **_NOTE:_**  This post is ported from Illusive. You can find it [here](https://forum.ruffles.pw/post?id=6fa9fcfe-ab0e-4dc2-975e-b074d29ecb6d).

tl;dr: It's pretty cool you should try it

Web development in C# (while I understand why some people hate it), is actually quite a painless process, everything seems to fit together nicely if you understand most of the concepts before starting a project.

In fact, I got this forum working relatively easily using just the docs and a little help from some experienced users of the framework.

The getting-started template looks like this:

{{< image src="/img/blog/aspnetcore-firstlook/aspnetcore-defaultproject.png" position="left" figure="GetHostName Web API endpoint" >}}

Previously to getting into web development, I was a game developer working in a C# environment, so I already had the majority skill-set to get a project up and running, and so I picked up the niches of the framework relatively quickly.

You can take several different approaches when creating ASP.NET applications:

1. Create a [REST API](https://www.ibm.com/cloud/learn/rest-apis).
2. Create a website application with a user interface, such as the one you're currently on. You have a choice of [Razor](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio) or [Blazor pages](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-5.0).

## What I like
1. Method names are implicitly called, and while I understand the flexibility of this, can be EXTREMELY hard to debug things... Especially when you're handling requests.
2. Parameters are implicitly injected - again, I understand the concept, but it's not very beginner-friendly, especially when coming from other aspects of programming (or even C#).
3. Some of the features given to you (e.g. UserManager) can sometimes be annoying when it comes to customization, for example, one of the features with the user manager, is that it automatically enters the user's data into your specified database, but also provides a crap load of (potentially useless) properties: 

{{< image src="/img/blog/aspnetcore-firstlook/mongodb-record.png" position="left" figure="GetHostName Web API endpoint" >}}

## Suggestions for newbies


1. Read the docs.
2. Don't get mixed up between [ASP.NET](https://dotnet.microsoft.com/apps/aspnet), and [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0). The former is the older (and more painful) framework.
3. Join the C# community [discord server](https://discord.gg/csharp).
4. Don't be afraid of asking questions.

If you want to start learning, I highly recommend you watch these playlists:

1. Razor Pages
{{< youtube 3F9SpUYTB6Y >}}

2. Model-View-Controller
{{< youtube -pzwRwYlXMw >}}

Clear, understandable and straight to the point.

I am relatively new to ASP.NET Core development, and I still have a CRAZY amount to learn, but so far it's been extremely fun.
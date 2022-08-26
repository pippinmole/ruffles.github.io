---
categories: ["Projects"]
date: "2022-01-16"
description: "A 3D multiplayer survival game"
featured: "pic01.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "Decay"
slug: "decay"
type: "project"

# status: In-Progress
# headImage: /img/decay/decay-game-screenshot.png
---

**Please Note**: This project did not get finished. [See more here](#the-downfall)

## TL;DR

Decay is an open-world multiplayer low-poly game designed and programmed by myself. Some of the features include a modular building system, persistent saving, 

## The Beginning

One of my favourite games when I was 16 was [Rust](https://store.steampowered.com/app/252490/Rust/), an open-world survival game where you fight other players and raid their bases to gain items. Coincidentally the style of the game is very close to how I wanted to make my dream game.

As a hobbyist game developer, it was always interesting looking at the underlying source code of Unity games to see how popular games worked. You can use tools such as [JetBrains dotPeek](https://www.jetbrains.com/decompiler/) to decompile C# DLL libraries, which is what non-IL2CPP Unity games build to.

{{< image src="/img/decay/jetbrains-dotpeek-assembly.png" >}}

## Art

Check out my [Twitter](https://twitter.com/pippinmole) to see some of the posts I made about Decay artwork.

I used [Blender](https://www.blender.org/) to create all my 3D models, mainly because it is simple to use and free to use. As Decay was a survival game, I decided to create models in order of how the game would progress (wood, stone THEN metal). This means I needed a tree.

{{< image src="/img/decay/decay-tree-1.png" style="height:300px" >}}

Hmm... Not enough variation... More tree.

{{< image src="/img/decay/decay-tree-2.png" style="height:300px" >}}

Great! Now I only needed a couple more things:
* Axes
* Guns
* Player Models (with animations)
* Building blocks (foundation, wall, doorway, door, roof, ramp, beds) all in varying materials
* Vegetation (with shaders)
* ...

{{< image src="/img/decay/decay-modelshowcase.png" figure="A small collection of models made for Decay" >}}

That should be it! Just import all of the models, and we should have a working game!

**Wrong.**

## Networking

Yes I made it multiplayer, because it isn't aleady a behemoth task to create a fully working open-world survival game.

The networking package I used was [Photon Bolt](https://www.photonengine.com/bolt). This was because I was already familiar with the Photon ecosystem and Bolt was the latest package at the time.

Bolt makes it really easy for you to implement multiplayer into a game. They support input commands, much like many of the Source projects do. This means that instead of synchronising a position every tick, you synchronise inputs and infer the positions from the inputs:

{{< image src="/img/decay/decay-commands.png" >}}

This makes it harder for cheaters to fly around the map like you can find in games like Fall Guys and GTA 5.

## Steam

I wanted to deploy the game to Steam. This was because Rust was on Steam (contributing factor to [the downfall](#the-downfall)).

> Rust sold 530,000 copies during 2020, and grossed $43 million during the year. [Source](https://www.gamedeveloper.com/business/how-did-rust-make-1-million-in-steam-revenue-in-a-day---twice-2)

Also I needed a way for servers to keep track of a user's stats, so when a user logs on/off, they maintain their identity.

There are a couple of good Steam libraries for Unity, both with their pros and cons:
* [Steamworks.NET](https://steamworks.github.io/)
* [Facepunch.Steamworks](https://github.com/Facepunch/Facepunch.Steamworks/)

Facepunch.Steamworks is made by [Garry Newman](https://twitter.com/garrynewman), my idol, so of course I went with it. Also Steamworks.NET uses this horrible C++ style naming convention for everything:

```cs
public class SteamScript : MonoBehaviour {
	protected Callback<GameOverlayActivated_t> m_GameOverlayActivated;

	private void OnEnable() {
		if (SteamManager.Initialized) {
			m_GameOverlayActivated = Callback<GameOverlayActivated_t>.Create(OnGameOverlayActivated);
		}
	}

	private void OnGameOverlayActivated(GameOverlayActivated_t pCallback) {
		if(pCallback.m_bActive != 0) {
			Debug.Log("Steam Overlay has been activated");
		} else {
			Debug.Log("Steam Overlay has been closed");
		}
	}
}
```

Yuck.

## The Downfall

Many factors contributed to the downfall of Decay:

* **Burning out** - At the time I was studying for my A Levels, and so if I wasn't revising or in school, I was at home working on Decay.
* **Ridin' Solo** - Turns out making a fully open world low poly multiplayer survival game isn't achievable by yourself. Who would've thought.
* **Technical Debt** - It felt like every time I wrote a bit of code, I refactored it weeks or even days later which was a massive waste of time.
* **Money** - Pro tip: Don't develop a game in hopes of making money. 

## Summary
I have learnt so much in the time spent on this project, and I wouldn't change it for the world. The magic about learning is finding your limits, and this is a perfect example of that.

If I was to come back to this project, the scale of the project would drastically decrease, maybe by dropping multiplayer, or not implementing and open-world map. 

Who knows, I may pick up the project if I find some free time.

## Photos and Videos

I may move this to a separate post when I find time because I have ALOT of content on the development.

{{< youtube yyp_fsBvE_I >}}

{{< image src="/img/decay/decay-mainmenu.png" figure="A little farm which is seen from the main menu" >}}
{{< video src="/img/decay/decay-modularbuilding.mp4" figure="First working modular building system" >}}
{{< image src="/img/decay/human-aiming.gif" figure="Scuffed inverse kinematics system" >}}
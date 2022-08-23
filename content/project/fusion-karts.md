---
title: Fusion Karts
summary: This is a summary of the project, it's shown on the homepage
status: In-Progress
# content: This is one of the sites containing information about a project I have worked on or am working on.
headImage: /img/fusionkart-screenshot.png
---


### Introduction
Fusion Karts is an arcade style karting game designed and created by **Daniel, Hucota and Me**. It is influenced by the Mario Kart franchise, and **supports multiplayer and game controllers**.

The project sample can be found here: [https://doc.photonengine.com/en-us/fusion/current/samples/game-samples/fusion-karts](https://doc.photonengine.com/en-us/fusion/current/samples/game-samples/fusion-karts)

### The Story
It started off when I saw that Dan and Hucota were looking for somebody to help with adding multiplayer to their game. Since I had past experience in multiplayer programming, I took the job. We started with [Photon Bolt](https://www.photonengine.com/bolt) as our networking solution, as I was most familiar with Bolt.

As time progressed, we found out that the physics simulation in Bolt wasn't up to spec with what we wanted. When the player's kart would collide with other karts, it would jitter and cause all sorts of issues which even the developers of Bolt couldn't help us with.

Nonetheless, we progressed through with the migration and had a few playtests. Not everything worked, but we got driving networked. This was one of our first running instances:

![Gif of Kart Bolt playtest](/img/fusion-kart/bolt-first-playtest.gif)

It was about this time that one of the Photon team suggested to us that we use their new networking package, [Photon Fusion](https://doc.photonengine.com/en-us/fusion/current/getting-started/fusion-intro), and that they would pay us to create a sample for them to put on their website! Bingo! They promised better physics interactions, and easier workflow, and of course, we took the offer.

This was new technology to us, and so we had to get used to this new workflow. It was quite different to Bolt, however it was trivial to get a test project working + we even got a physic test working on the first day.

![Gif of first Fusion Kart playtest](/img/fusion-kart/fusion-first-playtest.gif)
![Gif of second Fusion Kart playtest](/img/fusion-kart/fusion-coin-and-bananas.gif)

{{< youtube QRvlgWAnaks >}}
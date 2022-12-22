---
categories: ["Vue.js", "React", "Web Development"]
date: "2022-12-21"
description: "My experience with Vue and React"
featured: "/me.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "React vs Vue: First Look"
slug: "react-vs-vue-firstlook"
type: "project"
---

# Introduction

Vue.js and React.js are two popular JavaScript libraries for building user interfaces (UI) and single-page applications (SPAs). Both libraries are widely used in the web development community and have a strong following among developers. 

Vue.js, which was created by Evan You in 2014, is a progressive framework that is designed to be incrementally adoptable, meaning that it can be easily integrated into a project in small pieces rather than all at once.

React.js, on the other hand, was developed by Facebook in 2013 and is known for its virtual DOM (Document Object Model) system, which allows for efficient rendering of UI components.

{{<image src="https://2muchcoffee.com/blog/content/images/2021/11/The-Most-Popular-Web-Frameworks--According-to-Stack-Overflow-report-.png" style="height:450px" position="center">}}

Both Vue.js and React.js offer a rich set of features and tools for building modern web applications, including components, state management, and performance optimizations. Ultimately, the choice between the two will depend on the specific needs and goals of a project.

# My Plan

I had the idea of learning Vue.js and React together. This idea was sparked by the amount of job positions I found requiring that you had at least one of the two frameworks as a skill, and since I didn't know any, .

Next up was to think of a website idea that I could implement using front-end only. And then I thought: what better than a **weather app**. It's simple (so I can rapidly prototype), and also involves getting data from an external source (asynchronous code incoming).

So I set up two repositories:
1. Vue.js Weather App: [https://github.com/pippinmole/test-weather-project/](https://github.com/pippinmole/test-weather-project/)
2. React Weather App: [https://github.com/pippinmole/test-weather-react-app/](https://github.com/pippinmole/test-weather-react-app/)

They will implement pretty much exactly the same front-end style, but obviously one will be written using React, and the other using Vue.js.

The IDE I chose to use was [IntelliJ WebStorm](https://www.jetbrains.com/webstorm/). This pretty much boiled down to the fact that it has good auto-complete and suggestions.

For the front-end styling, I decided to use [Bootstrap](https://getbootstrap.com/) (and [Bootstrap Icons](https://icons.getbootstrap.com/)) because they have well designed pre-made components which I can use.

And finally, to deploy the code, I used [Vercel](https://vercel.com/) because it takes literally 2 minutes to set up auto-deployment from GitHub.

# Comparison

## State Management

A nice metric to measure a framework's simplicity is how its code looks in different scenarios. I created a button that simply increments a counter and displays the updated result of each click.

{{<image src="/img/blog/react-vs-vuejs-firstlook/increment-value.jpg" style="height:250px">}}

A common criticism React gets is something called ['callback hell'](https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/). It's where lots of callbacks are nested and so the code becomes difficult to understand.

Although Vue.js consumes more lines of code for the same result, my opinion is that it is cleaner and more functional that React's approach. This is because, given an example of asynchronous code where you may be awaiting a response from an API, all you have to do is set the state variable and let Vue update the DOM automatically. With React, you are required to call the state hook with the new value which is only available to you in certain instances.

## Learning Curve
Vue.js is by far the easier language to learn over React because of the simplicity of it. React uses alot of technical features such as ``useEffect``, convoluted 'dependency' watching (it takes experience to understand how it works), while Vue.js is pretty simple to understand.

## Bundle Size
Vue.js wins this in my limited testing that I've had. For my [test increment button](#updating-a-state-variable), the JavaScript client bundle for Vue.js was ``288.10kB`` and the React bundle was ``357.31kB`` (a 21% difference).

This does however depend heavily on:
1. Which ``npm`` packages are installed and imported into the project
2. How much custom code is in the codebase

Both React and Vue projects used the minimal amount of packages necessary to run. Both frameworks minimize the amount of JavaScript served at build time.

You can use npm packages such as [compression](https://www.npmjs.com/package/compression) that reduce the bundle size, but at the cost of the CPU.

## Build Times

Vue.js definitely wins on build times; React takes roughly 4.5 seconds to start up, while Vue.js takes a mere 0.9s. 

On top of this, hot-reloading is quicker with Vue.js, as it reloads quick enough to allow me to tab into a browser and see the effects instantly, while I have to wait a few moments for React to recompile and refresh the browser. While this is a statistically minimal difference in times, you can definitely notice it when rapidly prototyping.

## Community and Ecosystem

Both React and Vue.js have very large communities and great official documentation on their websites. It seems that JavaScript libraries are pretty 'main-stream', so there's no unique situation that's never been asked before on StackOverflow.

Personally, I found this [very helpful discord](https://discord.gg/javascript-mastery-programming-coding-community-710138849350647871) full of people who use both frameworks. It has 16k+ users with quite a few regular helpers.



# Conclusion

In conclusion, if I were to create a project frontend, I would choose to use Vue.js over React due to its simplicity and ease of use. Vue.js is a lightweight and flexible JavaScript library that allows developers to build user interfaces quickly and efficiently. 

I will definitely be using both of the frameworks more over this year in order to learn more and become competent if I were to get into a job requiring these skills. It's definitely different to anything I've used in my time developing web applications, since all of my experience has been with server-side rendering.
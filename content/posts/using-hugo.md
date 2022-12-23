---
categories: ["Hugo", "Web Development"]
date: "2022-12-23"
description: "Using Hugo (and themes) to make a portfolio site."
featured: "/me.jpg"
featuredalt: ""
featuredpath: "date"
linktitle: ""
title: "Hugo: Making a portfolio site"
slug: "hugo-portfolio"
type: "project"
---

{{<image src="/img/blog/using-hugo/hugo_logo.png" style="width:95%">}}

## Why Hugo?

If you choose to build your portfolio site using only HTML and CSS, you may run into the issue of repetitive code.

> Example: Let's say you have a blog post called ``my-blog-post.html`` and you want to create another post.

What do you do? You could duplicate the file and rewrite the content, but what if you change the layout of the post? You have to make the change in every file!

That's where Hugo comes in as a solution. Hugo is a tool that helps you avoid repetition in your code and allows you to focus on creating content rather than worrying about the technical details.

## What is Hugo?

Hugo solves the issue explained in the section above; Originally created by Steve Francia in 2013, Hugo is a popular static site generator that allows you to quickly create websites using simple templates and content written in Markdown or HTML.

Also it's written in [Golang](https://go.dev/), so it's [blazingly fast](https://forestry.io/blog/hugo-vs-jekyll-benchmark/).

## Installation

Interested? Installation steps are extremely easy to follow:
- Windows: [https://gohugo.io/installation/windows/](https://gohugo.io/installation/windows/)
- Mac: [https://gohugo.io/installation/macos/](https://gohugo.io/installation/macos/)
- Linux: [https://gohugo.io/installation/linux/](https://gohugo.io/installation/linux/)
- BSD: [https://gohugo.io/installation/bsd/](https://gohugo.io/installation/bsd/)

You can verify Hugo has been installed correctly by running the following command:
```bash
hugo version
```

## Creating a project

1. Create a Hugo project and create Git repository
```bash
hugo new site quickstart
cd quickstart
git init
```

2. Install a Hugo theme

You can find Hugo themes everywhere. Some good sites I like to use are:
- [https://jamstackthemes.dev/ssg/hugo/](https://jamstackthemes.dev/ssg/hugo/)
- [https://hugothemesfree.com/](https://hugothemesfree.com/)
- [https://gethugothemes.com/shop](https://gethugothemes.com/shop) (Paid)

Once you have found a Hugo theme you like, get the repository URL and add it as a submodule:

```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
```

3. Start Hugo server
```bash
hugo server
```

## Customization

> NOTE: This section depends heavily on what type of site you're making and which theme is being used. 

Hugo is highly customizable, allowing you to alter the appearance and functionality of your website to meet your needs. 

Some of the aspects of your Hugo site that you can customize include:
1. Layout and Design
2. Navigation and menu structure
3. Content Organization and Hierarchy
4. Metadata

You can also add custom shortcodes and templates to extend the functionality of your site and integrate it with other tools and platforms.

> Remember: To customize a theme, you can't have it as a git submodule. Clone it as a folder in your repo and alter the code.

## Deployment

The great thing about Hugo is that it's a *static-site generator*, meaning you can host your site on something like [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/) or [Static.app](https://static.app/) for free.

For this blog post I will keep it simple and use GitHub Pages. Before we can host anything, we first need to build and [minify](https://gohugo.io/hugo-pipes/minification/) the project.

- The minify stage simply reduces the size of the built files
- The build stage converts the ``.md`` files into ``.html`` files, ready to be hosted on a service of your choice.

You can find a working example of a GitHub Action that does these things [here](https://github.com/pippinmole/ruffles.github.io/blob/main/.github/workflows/publish.yml). The action performs the following every time a push occurs:
1. Install Hugo on the build server
2. Builds the project
3. Deploys the built files to a new branch called 'gh-pages'.

Great! Now, every time we push to branch 'main', a build gets psuhed to 'gh-pages'... Let's make this branch useful!

Setting up GitHub Pages is easy. Navigate to your repository, ``Settings > Pages`` and select the branch to deploy from.

{{<image src="/img/blog/using-hugo/ghpages.png">}}

Done! Your Hugo website should be available at the URL provided by GitHub Pages.

## Summary

I have had a great experience using Hugo. It has a fast compilation time, is easy to use, offers a wide selection of excellent themes, and has a supportive community.

My portfolio site took a matter of hours to get from an empty repository to a working theme installed and layout working. Compared to my [old portfolio site](https://old.ruffles.pw/), adding blog posts and even changing the layout of the site is much quicker.

... And I'm not done! I'm still writing blog posts and exploring new themes to test out. 
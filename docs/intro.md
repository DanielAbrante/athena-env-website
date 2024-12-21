---
sidebar_position: 1
---

# Intro

## About

AthenaEnv is a project that seeks to facilitate and at the same time brings a complete kit for users to create homebrew software for PlayStation 2 using the JavaScript language. It has dozens of built-in Methods, both for creating games and apps. The main advantage over using AthenaEnv project instead of the pure PS2SDK is above all the practicality, you will use one of the simplest possible languages to create what you have in mind, besides not having to compile, just script and test, fast and simple. Also it uses a slightly modified version of the QuickJS interpreter for JavaScript language, which means that it brings almost modern JavaScript features so far.

## Prerequisites

Using AthenaEnv you only need one way to code and one way to test your code, that is, if you want, you can even create your code on PS2, but I'll leave some recommendations below.

- PCSX2 (1.7.0 or above) or PS2Client for test.
- Enable HostFS on PCSX2

### Qt version

![image](https://github.com/DanielSant0s/AthenaEnv/assets/47725160/e90471f6-7ada-4176-88e8-8a9d2c1e7eb4)  

:::tip
Enable console output
:::

![console0](https://github.com/DanielSant0s/AthenaEnv/assets/47725160/7ced1570-0013-4072-ad01-66b8a63dab6e)

### (old) WxWidgets version

![image](https://user-images.githubusercontent.com/47725160/145600021-b07dd873-137d-4364-91ec-7ace0b1936e2.png) 

## Getting Started

```js
const font = new Font("default");

os.setInterval(() => { // Basically creates an infinite loop, similar to while true(you can use it too).
  Screen.clear(); // Clear screen for the next frame.
  font.print(0, 0, "Hello World!"); // x, y, text
  Screen.flip(); // Updates the screen.
}, 0)`
```

## How to run it

Athena is basically a JavaScript loader, so it loads .js files. It runs "main.js" by default, but you can run other file names by passing it as the first argument when launching the ELF file.

## Demo

If you try to just download it on releases tab from [here](https://github.com/DanielSant0s/AthenaEnv/tags) and run it, that's what you will see: 

![_50bda816_20230409025946](https://user-images.githubusercontent.com/47725160/230757268-5968d7e0-79df-4e98-9c02-4ec5252e056f.png)

That's the default dashboard, coded in default main.js file. It searchs JavaScript files with the first line containing the following structure:

```js
// {"name": "App name", "author": "Who did it?", "version": "04012023", "icon": "app_icon.png", "file": "my_app.js"}
// Now you can freely code below:
```
Once it was found, it will appear on the dashboard app list.


## Docs info

Parameters followed by "?" (question mark) are optional, e.g.:

```js
Color.new(r, g, b, a?); 
```

Parameters followed by "=" (equal sign) are default values, e.g.:

```js
readAsString(max_size = undefined);
```
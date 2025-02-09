---
sidebar_position: 1
---

# Intro

## About

AthenaEnv is a project that seeks to facilitate and at the same time brings a complete kit for users to create homebrew software for PlayStation 2 using the JavaScript language. It has dozens of built-in Methods, both for creating games and apps. 

The main advantage over using AthenaEnv project instead of the pure PS2SDK is above all the practicality, you will use one of the simplest possible languages to create what you have in mind, besides not having to compile, just script and test, fast and simple. 

## Prerequisites

Using AthenaEnv you only need one way to code and one way to test your code, that is, if you want, you can even create your code on PS2, but I'll leave some recommendations below.

### PC
  - [Visual Studio Code](https://code.visualstudio.com/) (with JavaScript extension)
  - [PCSX2](https://github.com/ps2dev/ps2client) (1.7.0 or above) or [PS2Client](https://github.com/ps2dev/ps2client) for test.
  - Enable HostFS on PCSX2

### Android
  - [QuickEdit](https://play.google.com/store/apps/details?id=com.rhmsoft.edit&hl=pt_BR&gl=US)
  - PS2 with wLE for test.

Oh, and I also have to mention that an essential prerequisite for using AthenaEnv is knowing how to code in JavaScript.

## PCSX2

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
}, 0)
```

See more examples at [AthenaEnv samples](https://github.com/DanielSant0s/AthenaEnv/tree/main/bin).

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

## Features

Also it uses a slightly modified version of the QuickJS interpreter for JavaScript language, which means that it brings almost modern JavaScript features so far.

### Float32

This project introduces a (old)new data type for JavaScript: single floats. Despite being less accurate than the classic doubles for number semantics, they are important for performance on the PS2, as the console only processes 32-bit floats on its FPU.

You can write single floats on AthenaEnv following the syntax below:

```js
let test_float = 15.0f; // The 'f' suffix makes QuickJS recognizes it as a single float.
``` 
or  
```js
let test_float = Math.fround(15.0); // Math.fround returns real single floats on Athena.


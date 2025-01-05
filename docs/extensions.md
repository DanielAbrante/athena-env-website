---
sidebar_position: 5
---

# Extensions

## List

A collection of extensions to enhance development with AthenaEnv.

| Name | Author 
| --- | --- |
[Types](https://github.com/Wellinator/athenaenv-starter-js/tree/main/%40types/athena-env) | Wellinator
[Utilities](https://github.com/j0sedavi/Modules-athena-Env) | j0sedavi
[FontOutline](https://github.com/PauloDevv/Outline-in-Text-for-AthenaENV-PS2) | NGN MODS  
[Mercury SM](https://github.com/GustavoFurtad2/MercurySM-AthenaPS2) | GustavoFurtad2      
[Hot Reload](https://github.com/DanielAbrante/athena-env-website/tree/main/extensions/hot_reload.mjs) | Daniel Abrante      
  
## Hot Reload (Linux only - x11)

### Prerequisites

Before you begin, make sure you have the following installed:

1. [Node.js](https://nodejs.org/en/download/) _(version 18 or greater)_.
2. [xdotool](https://github.com/jordansissel/xdotool)

### How to use

1. Download the [extension](https://github.com/DanielAbrante/athena-env-website/tree/main/extensions/hot_reload.mjs)
2. Open the **hot_reload.mjs** file and modify the ```pcsx2_config``` object and ```RESET_VIRTUAL_MACHINE_KEY``` variable

```js
const pcsx2_config = {
    path: "",
    elf_name: "",
    args: ['-fastboot', '-nogui', '-elf'],
}

// ...

const RESET_VIRTUAL_MACHINE_KEY = "";
```

- **path:** Absolute path to the pcsx2 application (Flatpak or AppImage format). Example: */home/user/applications/pcsx2.AppImage*
- **elf_name**: The base name of the *ELF* file, without the extension. Example: *MyGame*
- **args**: Default arguments passed to pcsx2, feel free to modify them.
- **RESET_VIRTUAL_MACHINE_KEY**: Bind a shortcut to this setting in the PCSX2 hotkeys section.

After making the changes, the configuration might look like this:

```js
const pcsx2_config = {
    path: "/home/user/applications/pcsx2.AppImage",
    elf_name: "MyGame",
    args: ['-fastboot', '-nofullscreen', '-nogui', '-elf'],
}

// ...

const RESET_VIRTUAL_MACHINE_KEY = 'alt+r';
```

4. Open the ```main.js``` file and insert the line of code below at the beginning

```js
console.log("AthenaEnv Started");
```

3. Run the project
```sh
node hot_reload.mjs
```
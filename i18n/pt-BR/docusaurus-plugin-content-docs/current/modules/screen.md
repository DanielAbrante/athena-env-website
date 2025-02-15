# Screen

The entire screen of your project (2D and 3D), being able to change the resolution, enable or disable parameters.

## Métodos

### display

Makes the specified function behave like a main loop, when you don't need to clear or flip the screen because it's done automatically.  

```js
Screen.display(func);
```

### clearColor

Sets a constant clear color for Screen.display function.

```js
Screen.clearColor(color?);
```

### clear

Clears screen with the specified color. If you don't specify any argument, it will use black as default.  

```js
Screen.clear(color?);
```

### flip

Run the render queue and jump to the next frame, i.e.: Updates your screen.  

```js
Screen.flip();
```

### getFreeVRAM

Returns the total of free Video Memory.  

```js
const freevram = Screen.getFreeVRAM();
```

### setVSync

Toggles VSync, which makes the framerate stable in 15, 30, 60(depending on the mode) on screen.  

```js
Screen.setVSync(bool);
```

### setFrameCounter

Toggles frame counting and FPS collecting.  

```js
Screen.setFrameCounter(bool);
```

### waitVblankStart

Waits for a vertical sync.  

```js
Screen.waitVblankStart();
```

### getFPS

Get Frames per second measure within the specified frame_interval in msec. Dependant on Screen.setFrameCounter(true) to work.

```js
const fps = Screen.getFPS(frame_interval);
```

### getMode

Get actual video mode parameters. Returns an object.

```js
const canvas = Screen.getMode();
```

#### Propriedades

- **canvas.width**: Screen width. Default: 640.
- **canvas.height**: Screen height. Default: 448 on NTSC consoles, 512 on PAL consoles.
- **canvas.psm**: Color mode. Available colormodes: CT16, CT16S, CT24, CT32.
- **canvas.interlace**: Available interlaces: INTERLACED, PROGRESSIVE.
- **canvas.field**: Available fields: FIELD, FRAME.
- **canvas.double_buffering**: Enable or disable double buffering(bool).
- **canvas.zbuffering**: Enable or disable Z buffering (3D buffering)(bool).
- **canvas.psmz**: ZBuffering color mode. Available zbuffer colormodes: Z16, Z16S, Z24, Z32.

### setMode

Set the current video mode, get an video mode object as an argument.

```js
Screen.setMode(canvas);
```
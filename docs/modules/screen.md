# Screen

The entire screen of your project (2D and 3D), being able to change the resolution, enable or disable parameters.

## Methods

```js
Screen.display(func);
```

Makes the specified function behave like a main loop, when you don't need to clear or flip the screen because it's done automatically.  
<br />


```js
Screen.clearColor(color?);
```

Sets a constant clear color for Screen.display function.
<br />


```js
Screen.clear(color?);
```

Clears screen with the specified color. If you don't specify any argument, it will use black as default.  
<br />


```js
Screen.flip();
```

Run the render queue and jump to the next frame, i.e.: Updates your screen.  
<br />


```js
let freevram = Screen.getFreeVRAM();
```

Returns the total of free Video Memory.  
<br />


```js
Screen.setVSync(bool);
```

Toggles VSync, which makes the framerate stable in 15, 30, 60(depending on the mode) on screen.  
<br />


```js
Screen.setFrameCounter(bool);
```

Toggles frame counting and FPS collecting.  
<br />


```js
Screen.waitVblankStart();
```

Waits for a vertical sync.  
<br />


```js
let fps = Screen.getFPS(frame_interval);
```

Get Frames per second measure within the specified frame_interval in msec. Dependant on Screen.setFrameCounter(true) to work.
<br />


```js
const canvas = Screen.getMode();
```

Get actual video mode parameters. Returns an object.

- **canvas.mode**: Available modes: NTSC, DTV_480p, PAL, DTV_576p, DTV_720p, DTV_1080i.  
- **canvas.width**: Screen width. Default: 640.  
- **canvas.height**: Screen height. Default: 448 on NTSC consoles, 512 on PAL consoles.  
- **canvas.psm**: Color mode. Available colormodes: CT16, CT16S, CT24, CT32.  
- **canvas.interlace**: Available interlaces: INTERLACED, PROGRESSIVE.  
- **canvas.field**: Available fields: FIELD, FRAME.  
- **canvas.double_buffering**: Enable or disable double buffering(bool).  
- **canvas.zbuffering**: Enable or disable Z buffering (3D buffering)(bool).  
- **canvas.psmz**: ZBuffering color mode. Available zbuffer colormodes: Z16, Z16S, Z24, Z32.  

<br />

```js
Screen.setMode(canvas);
```

Set the current video mode, get an video mode object as an argument.
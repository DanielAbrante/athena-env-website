# Mouse

Basic USB mouse support.

## Methods

```js
Mouse.init();
```

Initialize mouse routines.
<br />


```js
const mouse = Mouse.get();
```

Returns mouse actual properties on the object format below:

- mouse.x
- mouse.y
- mouse.wheel
- mouse.buttons
<br />


```js
Mouse.setBoundary(minX, maxX, minY, maxY);
```

Set mouse x and y bounds.
<br />


```js
const mode = Mouse.getMode();
```

Get mouse mode (absolute or relative).
<br />


```js
Mouse.setMode(mode);
```

Set mouse mode.
<br />


```js
const acceleration = Mouse.getAccel();
```

Get mouse acceleration.
<br />


```js
Mouse.setAccel(val);
```

Set mouse acceleration.
<br />


```js
Mouse.setPosition(x, y);
```

Set mouse pointer position.
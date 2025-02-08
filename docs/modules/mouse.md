# Mouse

Basic USB mouse support.

## Methods

### init

Initialize mouse routines.

```js
Mouse.init();
```

### get

```js
const mouse = Mouse.get();
```
Returns mouse actual properties on the object format below:

- mouse.x
- mouse.y
- mouse.wheel
- mouse.buttons

### setBoundary

Set mouse x and y bounds.

```js
Mouse.setBoundary(minX, maxX, minY, maxY);
```

### getMode

Get mouse mode (absolute or relative).

```js
const mode = Mouse.getMode();
```

### setMode

Set mouse mode.

```js
Mouse.setMode(mode);
```

### getAccel

Get mouse acceleration.

```js
const accel = Mouse.getAccel();
```

### setAccel

Set mouse acceleration.

```js
Mouse.setAccel(val);
```

### setPosition

Set mouse pointer position.

```js
Mouse.setPosition(x, y);
```
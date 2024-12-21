# Draw

Shape drawing, triangles, circles etc.

## Methods

### point 

Draws a pixel on the specified color and position on the screen.

```js
Draw.point(x, y, color);
```

### rect 

Draws a rectangle on the specified color, position and size on the screen.

```js
Draw.rect(x, y, width, height, color);
```

### line 

Draws a line on the specified colors and position on the screen.

```js
Draw.line(x, y, x2, y2, color);
```

### circle 

Draws a circle on the specified color, position, radius and fill on the screen.

```js
Draw.circle(x, y, radius, color, filled?);
```

### triangle 

Draws a triangle on the specified points positions and colors on the screen.

```js
Draw.triangle(x, y, x2, y2, x3, y3, color, color2?, color3?);
```

### quad

Draws a quad on the specified points positions and colors on the screen.

```js
Draw.quad(x, y, x2, y2, x3, y3, x4, y4, color, color2?, color3?, color4?);
```
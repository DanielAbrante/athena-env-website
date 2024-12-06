# Render

Basic 3D support powered by a VU1 renderer.

## Methods

:::info
- Remember to enable zbuffering on screen mode, put the line of code below 
- Default NTSC mode(3D enabled): 
:::

```js
const canvas = Screen.getMode();
canvas.zbuffering = true;
canvas.psmz = Z16S;

Screen.setMode(canvas);
```

<br />


```js
Render.setView(aspect, fov?);
```

Initializes rendering routines.
:::info
- default aspect is 4/3, widescreen is 16/9.
- default fov: 0.2
:::

<br />

```js
Render.vertex(x, y, z, n1, n2, n3, s, t, r, g, b, a);
```

Returns a vertex to build a 3D mesh. It should be used to create vertex arrays.  

- **x, y, z** - Vertex position on 3D world.  
- **x, n1, n2, n3** - Vertex normal.  
- **x, s, t** - Vertex texture coordinates.  
- **x, r, g, b, a** - Vertex color. 

# Render

Basic 3D support powered by a VU1 renderer.

## Methods

### setMode

```js
const canvas = Screen.getMode();
canvas.zbuffering = true;
canvas.psmz = Z16S;

Screen.setMode(canvas);
```

:::info
- Remember to enable zbuffering on screen mode
- Default NTSC mode(3D enabled)
:::

### setView

Initializes rendering routines.

```js
Render.setView(aspect, fov?);
```

:::info
- default aspect is 4/3, widescreen is 16/9.
- default fov: 0.2
:::

### vertex

Returns a vertex to build a 3D mesh. It should be used to create vertex arrays.  

```js
Render.vertex(x, y, z, n1, n2, n3, s, t, r, g, b, a);
```

- **x, y, z** - Vertex position on 3D world.  
- **n1, n2, n3** - Vertex normal.  
- **s, t** - Vertex texture coordinates.  
- **r, g, b, a** - Vertex color. 

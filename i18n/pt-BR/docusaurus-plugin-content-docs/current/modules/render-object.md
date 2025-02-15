# RenderObject

## Construção

```js
const model = new RenderObject(mesh, texture?);
```

:::info
- Load simple WaveFront OBJ files or vertex arrays.
- MTL is supported on OBJs (including per-vertex colors and multi-texturing).
- If you don't have a MTL file but you want to bind a texture on it, just pass the image as a second argument if you want to use it. 
:::

## Propriedades

- **vertices**: A Render.vertex array that can be modified and read.
- **size**: Vertex quantity.

## Métodos

### draw

Draws the object on screen.

```js
draw(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z);
```

### drawBounds

Draws object bounding box.

```js
drawBounds(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z);
```

### getTexture

Gets the nth texture object from the model.

```js
getTexture(id);
```

### setTexture

Changes or sets the nth texture on models.

```js
setTexture(id, texture, range?);
```

### getPipeline

Returns the current rendering pipeline loaded for the model.

```js
getPipeline();
```

### setPipeline

Sets the current pipeline for the model. 

```js
setPipeline(pipeline);
```

#### Available pipelines

- **Render.PL_NO_LIGHTS_COLORS**: Colors and lights disabled.
- **Render.PL_NO_LIGHTS_COLORS_TEX**: Colors, lights and textures disabled.
- **Render.PL_NO_LIGHTS**: Lights disabled, colors still working.
- **Render.PL_NO_LIGHTS_TEX**: Textures and lights disabled, colors still working.
- **Render.PL_DEFAULT**: Default for textured models. Lights and colors enabled.
- **Render.PL_DEFAULT_NO_TEX**: Default for non-textured models. Lights and colors enabled.

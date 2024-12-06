# RenderObject

## Construction

```js
const model = new RenderObject(mesh, texture?);
```

:::info
- Load simple WaveFront OBJ files or vertex arrays.
- MTL is supported on OBJs (including per-vertex colors and multi-texturing).
- If you don't have a MTL file but you want to bind a texture on it, just pass the image as a second argument if you want to use it. 
:::

## Methods

```js
draw(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z);
```

Draws the object on screen.
<br />


```js
drawBounds(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z);
```

Draws object bounding box.
<br />


```js
getTexture(id);
```

Gets the nth texture object from the model.
<br />


```js
setTexture(id, texture, range?);
```

Changes or sets the nth texture on models.
<br />


```js
getPipeline();
```

Returns the current rendering pipeline loaded for the model.
<br />


```js
setPipeline(pipeline);
```

Sets the current pipeline for the model. 

**Available pipelines**

- **Render.PL_NO_LIGHTS_COLORS:** Colors and lights disabled.
- **Render.PL_NO_LIGHTS_COLORS_TEX:** Colors, lights and textures disabled.
- **Render.PL_NO_LIGHTS:** Lights disabled, colors still working.
- **Render.PL_NO_LIGHTS_TEX:** Textures and lights disabled, colors still working.
- **Render.PL_DEFAULT:** Default for textured models. Lights and colors enabled.
- **Render.PL_DEFAULT_NO_TEX:** Default for non-textured models. Lights and colors enabled.
  
## Properties

```vertices```

A Render.vertex array that can be modified and read.

```size```

Vertex quantity.
  
## Camera

```js
Camera.position(x, y, z);
```

```js
Camera.rotation(x, y, z);
```


## Lights

You have 4 lights to use in 3D scenes, use set to configure them.

```js
Lights.set(id, attribute, x, y, z);
```

**Avaiable light attributes**

- Lights.DIRECTION
- Lights.AMBIENT
- Lights.DIFFUSE
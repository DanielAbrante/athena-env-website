# Font

Methods that control the texts that appear on the screen, loading texts, drawing and unloading from memory.

## Construction

```js
const font = new Font(path); 
```

```js
const osdFont = new Font();             // Load BIOS font, not available for all console models  
const font = new Font("Segoe UI.ttf");  // Load trueType font 
``` 

:::info
- **path**: specify the location to a font file, E.g.: "images/atlas.png", "fonts/font.png".\
- **formats**: *png*, *bmp*, *jpg*, *otf* and *ttf*.
:::

## Properties

```color```

Define font tinting, default value is Color.new(255, 255, 255, 128).

```scale```

Proportional scale, default: 1.0f

## Methods

```js
print(x, y, text);
```

Draw text on screen(call it every frame). Example: font.print(10.0, 10.0, "Hello world!);
<br />

```js
getTextSize(text);
```

Returns text absolute size in pixels (width, height). Example: const size = font.getTextSize("Hello world!");

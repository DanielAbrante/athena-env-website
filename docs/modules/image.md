# Image  

Image drawing.

## Construction  

```js
const image = new Image(path, mode?, async_list?);
```

```js
const imageVRAM = new Image("owl.png", VRAM); 
``` 
:::info
- **path:** Path to the file, E.g.: "images/test.png".  
- **mode:** Choose between storing the image between **RAM** or **VRAM**, default value is RAM.  
- **async_list:** Gets a ImageList object, which is a asynchronous image loading list, if you want to load images in the background.  
:::


## Properties

```width, height```

 Image drawing size, default value is the original image size.
 
```startx, starty```

 Beginning of the area that will be drawn from the image, the default value is 0.0.
 
```endx, endy```

 End of the area that will be drawn from the image, the default value is the original image size.
 
```angle```

 Define image rotation angle, default value is 0.0.
 
```color```

 Define image tinting, default value is Color.new(255, 255, 255, 128).
 
```filter```

 Choose between **LINEAR** or **NEAREST**, default value is NEAREST.
 
```size```

 Returns image real size occupied in memory.
 
```bpp```

 Returns image bits per-pixel qantity.
 
```delayed```

 If true, your texture was loaded in RAM, else, VRAM.
 
```pixels```

 The image pixel ArrayBuffer.
 
```palette```

 If is a palette image, it has a palette ArrayBuffer right here.
 

## Methods

```js
draw(x, y);
```

Draw loaded image onscreen(call it every frame). Example: image.draw(15.0, 100.0);
<br />

```js
optimize();
```

If your image has 24 bits per-pixel (aka RGB), you can use this to make it 16 bits per-pixel, saving some memory!
<br />

```js
ready();
```

```js
const loaded = image.ready();  
```

Returns true if an asynchronous image was successfully loaded in memory.

## ImageList

Load and manage multiple images while your code is running, multithreaded loading!

### Construction

```js
const async_list = new ImageList(); 
```
This constructor creates a new thread and a queue to load images in background, avoid building multiple ImageList objects.

### Methods

```js
async_list.process();
```

This method starts the thread and loads added images on the queue. 
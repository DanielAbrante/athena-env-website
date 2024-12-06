# Sound

Sound Methods, supporting WAV, OGG and ADPCM.

## Methods

```js
Sound.setVolume(volume, slot?);
```

*If slot is specified, it will change ADPCM slot volume, else it will change master volume.
<br />


```js
const audio = Sound.load(path);
```


```js
Sound.play(audio, slot?);
```

*ADPCM: If slot isn't specified, it will use 0.
<br />


```js
Sound.free(audio);
```

<br />

```js
const playing = Sound.isPlaying();
```

*Doesn't apply for ADPCM
<br />


```js
const msec = Sound.duration();
```
<br />

```js
Sound.repeat(false);
```

*Doesn't apply for ADPCM
<br />


```js
Sound.pause(audio);
```

*Doesn't apply for ADPCM
<br />


```js
Sound.resume(audio);
```

*Doesn't apply for ADPCM


<br />
```js
Sound.deinit();
```
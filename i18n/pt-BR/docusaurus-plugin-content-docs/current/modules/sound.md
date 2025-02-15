# Sound

Sound Métodos, supporting WAV, OGG and ADPCM.

## Métodos

### setVolume

```js
Sound.setVolume(volume, slot?);
```

*If slot is specified, it will change ADPCM slot volume, else it will change master volume.

### load

```js
const audio = Sound.load(path);
```

### play

```js
Sound.play(audio, slot?);
```

*ADPCM: If slot isn't specified, it will use 0.

### free

```js
Sound.free(audio);
```

### isPlaying

```js
const playing = Sound.isPlaying();
```

*Doesn't apply for ADPCM

### duration

```js
const msec = Sound.duration();
```

### repeat

```js
Sound.repeat(false);
```

*Doesn't apply for ADPCM

### pause

```js
Sound.pause(audio);
```

*Doesn't apply for ADPCM

### resume

```js
Sound.resume(audio);
```

*Doesn't apply for ADPCM

### deinit

```js
Sound.deinit();
```
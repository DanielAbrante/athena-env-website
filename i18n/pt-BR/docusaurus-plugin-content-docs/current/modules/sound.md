# Sound

Métodos de som, suportando WAV, OGG e ADPCM.

## Métodos

### setVolume

```js
Sound.setVolume(volume, slot?);
```

Se o slot for especificado, ele alterará o volume do slot ADPCM; caso contrário, alterará o volume master.

### load

```js
const audio = Sound.load(path);
```

### play

```js
Sound.play(audio, slot?);
```

*ADPCM: Se o slot não for especificado, será utilizado o slot 0.

### free

```js
Sound.free(audio);
```

### isPlaying

```js
const playing = Sound.isPlaying();
```

*Não se aplica para ADPCM.

### duration

```js
const msec = Sound.duration();
```

### repeat

```js
Sound.repeat(false);
```

*Não se aplica para ADPCM.

### pause

```js
Sound.pause(audio);
```

*Não se aplica para ADPCM.

### resume

```js
Sound.resume(audio);
```

*Não se aplica para ADPCM.

### deinit

```js
Sound.deinit();
```
# Keyboard

Basic USB keyboard support.

## Methods

```js
Keyboard.init();
```

Initialize keyboard routines.
<br />


```js
const char = Keyboard.get();
```

Get keyboard current char.
<br />


```js
Keyboard.setRepeatRate(ms);
```

Set keyboard repeat rate.
<br />


```js
Keyboard.setBlockingMode(mode);
```

Sets keyboard to block(or not) the thread waiting for the next key to be pressed.
<br />


```js
Keyboard.deinit();
```

Destroy keyboard routines.
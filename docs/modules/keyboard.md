# Keyboard

Basic USB keyboard support.

## Methods

### init

Initialize keyboard routines.

```js
Keyboard.init();
```

### get

Get keyboard current char.

```js
const c = Keyboard.get();
```

### setRepeatRate

Set keyboard repeat rate.

```js
Keyboard.setRepeatRate(msec);
```

### setBlockingMode

Sets keyboard to block (or not) the thread waiting for the next key to be pressed.

```js
Keyboard.setBlockingMode(mode);
```

### deinit

Destroy keyboard routines.

```js
Keyboard.deinit();
```
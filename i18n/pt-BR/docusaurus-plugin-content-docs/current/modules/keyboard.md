# Keyboard

Suporte básico para teclado USB.

## Métodos

### init

Inicializa as rotinas do teclado.

```js
Keyboard.init();
```

### get

Obtém o caractere atual do teclado.

```js
const c = Keyboard.get();
```

### setRepeatRate

Define a taxa de repetição do teclado.

```js
Keyboard.setRepeatRate(msec);
```

### setBlockingMode

Define se o teclado irá bloquear (ou não) a thread aguardando a próxima tecla ser pressionada.

```js
Keyboard.setBlockingMode(mode);
```

### deinit

Destrói as rotinas do teclado.

```js
Keyboard.deinit();
```
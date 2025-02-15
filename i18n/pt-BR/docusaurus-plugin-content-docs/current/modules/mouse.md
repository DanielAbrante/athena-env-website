# Mouse

Suporte básico para mouse USB.

## Métodos

### init

Inicializa as rotinas do mouse.

```js
Mouse.init();
```

### get

```js
const mouse = Mouse.get();
```

Retorna as propriedades atuais do mouse no formato de objeto abaixo:

- mouse.x
- mouse.y
- mouse.wheel
- mouse.buttons

### setBoundary

Define os limites x e y do mouse.

```js
Mouse.setBoundary(minX, maxX, minY, maxY);
```

### getMode

Obtém o modo do mouse (absoluto ou relativo).

```js
const mode = Mouse.getMode();
```

### setMode

Define o modo do mouse.

```js
Mouse.setMode(mode);
```

### getAccel

Obtém a aceleração do mouse.

```js
const accel = Mouse.getAccel();
```

### setAccel

Define a aceleração do mouse.

```js
Mouse.setAccel(val);
```

### setPosition

Define a posição do ponteiro do mouse.

```js
Mouse.setPosition(x, y);
```
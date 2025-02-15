# Socket

Bom, sockets.

## Construção  

```js
const s = new Socket(domain, type);
```

```js
const s = new Socket(AF_INET, SOCK_STREAM);
```

## Métodos

### connect

```js
connect(host, port);
```

### bind

```js
bind(host, port);
```

### listen

```js
listen();
```

### send

Enviar dados com Buffer

```js
send(data);
```

### recv

Receber dados para um buffer

```js
recv(size);
```

### close

```js
close();
```
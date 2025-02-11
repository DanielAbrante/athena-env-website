# Socket

Well, sockets.

## Construction  

```js
const s = new Socket(domain, type);
```

```js
const s = new Socket(AF_INET, SOCK_STREAM);
```

## Methods

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

Send data with Buffer

```js
send(data);
```

### recv

Receive data to a buffer

```js
recv(size);
```

### close

```js
close();
```
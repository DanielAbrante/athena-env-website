# Socket

Well, sockets.

## Construction  

```js
new Socket(domain, type);
```
```js
const socket = new Socket(AF_INET, SOCK_STREAM);
```

## Methods

```js
connect(host, port);
```

```js
bind(host, port);
```

```js
listen();
```

```js
send(data);
```

Send data with Buffer
<br />

```js
recv(size);
```

Receive data to a buffer
<br />

```js
close();
```
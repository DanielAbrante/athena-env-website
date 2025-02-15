# Request

## Construção  

```js
const r = new Request();
```

## Propriedades 

- **keepalive** (boolean)
- **useragent** (string)
- **userpwd** (string)
- **headers** (string[])

## Métodos

### get

```js
get(url);
```

### head

```js
head(url);
```

### post

```js
post(url, data);
```

### download

```js
download(url, fname);
```

## Asynchronous Métodos

### asyncGet

```js
asyncGet(url);
```

### asyncDownload

```js
asyncDownload(url, fname);
```

### ready

```js
ready(timeout?, conn_timeout?);
```

### getAsyncData

```js
getAsyncData();
```

### getAsyncSize

```js
getAsyncSize();
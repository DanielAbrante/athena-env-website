# Request

## Construction  

```js
const r = new Request();
```

## Properties 

- **keepalive** (boolean)
- **useragent** (string)
- **userpwd** (string)
- **headers** (string[])

## Methods

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

## Asynchronous methods

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
# Request

## Construction  

```js
const request = new Request();
```

## Properties 

- **keepalive:** bool
- **useragent:** string
- **userpwd:** string
- **headers:** string array

## Methods

```js
get(url);
```


```js
head(url);
```


```js
post(url, data);
```


```js
download(url, fileName);
```


  
## Asynchronous methods

```js
asyncGet(url);
```


```js
asyncDownload(url, fileName);
```


```js
ready(timeout?, conn_timeout?);
```


```js
getAsyncData();
```


```js
getAsyncSize();
```
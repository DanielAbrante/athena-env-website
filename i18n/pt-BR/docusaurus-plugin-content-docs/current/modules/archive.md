# Archive

Um extrator e gerenciador de arquivos comprimidos simples.

## Métodos

### open

```js
const zip = Archive.open(fname);
```

### list

```js
const list = Archive.list(zip);
```

### extractAll

```js
Archive.extractAll(zip);
```

### close

```js
Archive.close(zip);
```

### untar

```js
Archive.untar(fname);
```
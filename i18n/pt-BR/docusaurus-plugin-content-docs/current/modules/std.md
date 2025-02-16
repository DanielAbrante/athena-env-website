# STD

O módulo std fornece wrappers para as bibliotecas padrão do C (stdlib.h e stdio.h), além de algumas outras utilidades.

Wrappers para os arquivos padrão do libc: stdin, stdout e stderr.

- std.in
- std.out
- std.err

## Enumeração

Objeto que contém os valores inteiros dos erros comuns (códigos de erro adicionais podem ser definidos).

- std.EINVAL
- std.EIO
- std.EACCES
- std.EEXIST
- std.ENOSPC
- std.ENOSYS
- std.EBUSY
- std.ENOENT
- std.EPERM
- std.EPIPE

## Métodos

### evalScript

Avalia a string str como um script (eval global).

```js
std.evalScript(str, options = undefined);
```

options é um objeto opcional contendo as seguintes propriedades opcionais:

- std.backtrace_barrier - Boolean (padrão = false). Se verdadeiro, os rastreamentos de erro não listam os frames da pilha abaixo do evalScript.

### loadScript

Avalia o arquivo filename como um script (eval global).

```js
std.loadScript(filename);
```
### exists

Retorna um booleano indicando se o arquivo existe ou não.

```js
const hasfile = std.exists(filename);
```
### loadFile

Carrega o arquivo filename e retorna seu conteúdo como uma string, assumindo codificação UTF-8. Retorna null em caso de erro de I/O.

```js
const fstr = std.loadFile(filename);
```

### open

Abre um arquivo (wrapper para fopen() do libc). Retorna o objeto FILE ou null em caso de erro de I/O. Se errorObj for definido, sua propriedade errno será configurada com o código do erro ou 0 se não houver erro.

```js
const file = std.open(filename, flags, errorObj = undefined);
```

### fdopen

Abra um arquivo a partir de um descritor de arquivo (envoltório para o libc fdopen()). Retorna o objeto FILE ou null em caso de erro de I/O. Se errorObj não estiver indefinido, defina a propriedade errno como o código de erro ou 0 se não ocorrer erro.

```js
std.fdopen(fd, flags, errorObj = undefined);
```

### tmpfile

Abre um arquivo temporário. Retorna o objeto FILE ou null em caso de erro de I/O. Se errorObj não for undefined, define sua propriedade errno com o código de erro ou 0 se nenhum erro ocorrer.

```js
std.tmpfile(errorObj = undefined);
```

### puts

Equivalente a std.out.puts(str).

```js
std.puts(str);
```

### printf

Equivalente a std.out.printf(fmt, ...args).

```js
std.printf(fmt, ...args);
```

### sprintf

Equivalente à função sprintf() do libc.

```js
std.sprintf(fmt, ...args);
```

### strerror

Retorna uma string que descreve o erro errno.

```js
std.strerror(errno);
```

### gc

Invoca manualmente o algoritmo de remoção de ciclos. Ele é iniciado automaticamente quando necessário, então esta função é útil para casos de restrições específicas de memória ou para testes.

```js
std.gc();
```

### parseExtJSON

Analisa str usando um superconjunto do JSON.parse.

```js
std.parseExtJSON(str);
```

As seguintes extensões são aceitas:

- Comentários de linha única e múltiplas linhas
- propriedades sem aspas (identificadores ASCII-only do JavaScript)
- vírgula final em definições de array e objeto
- strings com aspas simples
- \f e \v são aceitos como caracteres de espaço
- sinal de mais (+) antes de números
- números octais (prefixo 0o) e hexadecimais (prefixo 0x)

## FILE

### open

```js
const file = std.open(filename, flags);
```

```js
const file = std.open("test.txt", "w");
```

:::info
  - filename - Caminho para o arquivo, Ex.: "samples/test.txt".
  - flags - Modo do arquivo, Ex.: "w", "r", "wb", "rb", etc.
:::

### close

Fecha o arquivo. Retorna 0 se bem-sucedido ou -errno em caso de erro de I/O.

```js
close();
```

### puts

Exibe a string com codificação UTF-8.

```js
puts(str);
```

### printf

printf formatado.

```js
printf(fmt, ...args);
```

:::info
Suporta os mesmos formatos da função printf da biblioteca padrão C. Tipos de formato inteiros (ex.: %d) truncam Numbers ou BigInts para 32 bits. Use o modificador l (ex.: %ld) para truncar para 64 bits.
:::

### flush

Esvazia o buffer do arquivo.

```js
flush();
```

### seek

Move-se para uma posição específica no arquivo (whence é std.SEEK_*). offset pode ser um número ou bigint. Retorna 0 se bem-sucedido ou -errno em caso de erro de I/O.

```js
seek(offset, whence);
```

Constantes:

- std.SEEK_SET
- std.SEEK_CUR
- std.SEEK_END

### tell

Retorna a posição atual no arquivo.

```js
tell();
```

### tello

Retorna a posição atual no arquivo como um bigint.

```js
tello();
```

### eof

Retorna verdadeiro se for o fim do arquivo.

```js
eof();
```

### fileno

Retorna o identificador do sistema operacional associado.

```js
fileno();
```

### error

Retorna true se houver um erro.

```js
error();
```

### clearerr

Limpa a indicação de erro.

```js
clearerr();
```

### read

Lê o comprimento de bytes do arquivo para o buffer do ArrayBuffer na posição do byte (wrapper para libc fread).

```js
read(buffer, position, length);
```

### write

Escreve o comprimento de bytes do arquivo para o buffer do ArrayBuffer na posição do byte (wrapper para libc fwrite).

```js
write(buffer, position, length);
```

### getline

Retorna a próxima linha do arquivo, assumindo codificação UTF-8, excluindo a quebra de linha no final.

```js
getline();
```

### readAsString

Lê um número máximo de bytes do arquivo e retorna como uma string UTF-8. Se max_size não for especificado, lê até o final do arquivo.
```js
readAsString(max_size = undefined);
```

### getByte

Retorna o próximo byte do arquivo. Retorna -1 se o final do arquivo for atingido.

```js
getByte();
```

### putByte

Escreve um byte no arquivo.

```js
putByte(c);
```
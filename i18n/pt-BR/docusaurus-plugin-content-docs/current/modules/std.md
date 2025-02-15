# STD

The std module provides wrappers to the libc stdlib.h and stdio.h and a few other utilities. 

Wrappers to the libc file stdin, stdout, stderr:

- std.in
- std.out
- std.err

## Enumeration

object containing the integer value of common errors (additional error codes may be defined)

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

Evaluate the string str as a script (global eval). 

```js
std.evalScript(str, options = undefined);
```

options is an optional object containing the following optional Propriedades:

- std.backtrace_barrier - Boolean (default = false). If true, error backtraces do not list the stack frames below the evalScript.

### loadScript

Evaluate the file filename as a script (global eval).

```js
std.loadScript(filename);
```
### exists

Returns a bool that determines whether the file exists or not.

```js
const hasfile = std.exists(filename);
```
### loadFile

Load the file filename and return it as a string assuming UTF-8 encoding. Return null in case of I/O error.

```js
const fstr = std.loadFile(filename);
```

### open

Open a file (wrapper to the libc fopen()). Return the FILE object or null in case of I/O error. If errorObj is not undefined, set its errno property to the error code or to 0 if no error occured.

```js
const file = std.open(filename, flags, errorObj = undefined);
```

### fdopen

Open a file from a file handle (wrapper to the libc fdopen()). Return the FILE object or null in case of I/O error. If errorObj is not undefined, set its errno property to the error code or to 0 if no error occured.

```js
std.fdopen(fd, flags, errorObj = undefined);
```

### tmpfile

Open a temporary file. Return the FILE object or null in case of I/O error. If errorObj is not undefined, set its errno property to the error code or to 0 if no error occured.

```js
std.tmpfile(errorObj = undefined);
```

### puts

Equivalent to std.out.puts(str).

```js
std.puts(str);
```

### printf

Equivalent to std.out.printf(fmt, ...args).

```js
std.printf(fmt, ...args);
```

### sprintf

Equivalent to the libc sprintf().

```js
std.sprintf(fmt, ...args);
```

### strerror

Return a string that describes the error errno.

```js
std.strerror(errno);
```

### gc

Manually invoke the cycle removal algorithm. The cycle removal algorithm is automatically started when needed, so this function is useful in case of specific memory constraints or for testing.

```js
std.gc();
```

### parseExtJSON

Parse str using a superset of JSON.parse.

```js
std.parseExtJSON(str);
```

The following extensions are accepted:

- Single line and multiline comments
- unquoted Propriedades (ASCII-only Javascript identifiers)
- trailing comma in array and object definitions
- single quoted strings
- \f and \v are accepted as space characters
- leading plus in numbers
- octal (0o prefix) and hexadecimal (0x prefix) numbers

## FILE

### open

```js
const file = std.open(filename, flags);
```

```js
const file = std.open("test.txt", "w");
```

:::info
  - filename - Path to the file, E.g.: "samples/test.txt".
  - flags - File mode, E.g.: "w", "r", "wb", "rb", etc.
:::

### close

Close the file. Return 0 if OK or -errno in case of I/O error.

```js
close();
```

### puts

Outputs the string with the UTF-8 encoding.

```js
puts(str);
```

### printf

Formatted printf.

```js
printf(fmt, ...args);
```

:::info
The same formats as the standard C library printf are supported. Integer format types (e.g. %d) truncate the Numbers or BigInts to 32 bits. Use the l modifier (e.g. %ld) to truncate to 64 bits.
:::

### flush

Flush the buffered file.

```js
flush();
```

### seek

Seek to a give file position (whence is std.SEEK_*). offset can be a number or a bigint. Return 0 if OK or -errno in case of I/O error.

```js
seek(offset, whence);
```

Constants:

- std.SEEK_SET
- std.SEEK_CUR
- std.SEEK_END

### tell

Return the current file position.

```js
tell();
```

### tello

Return the current file position as a bigint.

```js
tello();
```

### eof

Return true if end of file.

```js
eof();
```

### fileno

Return the associated OS handle.

```js
fileno();
```

### error

Return true if there was an error.

```js
error();
```

### clearerr

Clear the error indication.

```js
clearerr();
```

### read

Read length bytes from the file to the ArrayBuffer buffer at byte position position (wrapper to the libc fread).

```js
read(buffer, position, length);
```

### write

Write length bytes to the file from the ArrayBuffer buffer at byte position position (wrapper to the libc fwrite).

```js
write(buffer, position, length);
```

### getline

Return the next line from the file, assuming UTF-8 encoding, excluding the trailing line feed.

```js
getline();
```

### readAsString

Read max_size bytes from the file and return them as a string assuming UTF-8 encoding. If max_size is not present, the file is read up its end.

```js
readAsString(max_size = undefined);
```

### getByte

Return the next byte from the file. Return -1 if the end of file is reached.

```js
getByte();
```

### putByte

Write one byte to the file.

```js
putByte(c);
```
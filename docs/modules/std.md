# STD

The std module provides wrappers to the libc stdlib.h and stdio.h and a few other utilities.

## Methods

```js
std.evalScript(str, options = undefined);
```
Evaluate the string str as a script (global eval). options is an optional object containing the following optional properties:

- std.backtrace_barrier - Boolean (default = false). If true, error backtraces do not list the stack frames below the evalScript.
<br />

```js
std.loadScript(filename);
```

Evaluate the file filename as a script (global eval).
<br />

```js
const hasfile = std.exists(filename);
```

Returns a bool that determines whether the file exists or not.
<br />

```js
const fstr = std.loadFile(filename);
```

Load the file filename and return it as a string assuming UTF-8 encoding. Return null in case of I/O error.
<br />

```js
const file = std.open(filename, flags, errorObj = undefined);
```

Open a file (wrapper to the libc fopen()). Return the FILE object or null in case of I/O error. If errorObj is not undefined, set its errno property to the error code or to 0 if no error occured.
<br />

```js
std.fdopen(fd, flags, errorObj = undefined);
```

Open a file from a file handle (wrapper to the libc fdopen()). Return the FILE object or null in case of I/O error. If errorObj is not undefined, set its errno property to the error code or to 0 if no error occured.
<br />

```js
std.tmpfile(errorObj = undefined);
```

Open a temporary file. Return the FILE object or null in case of I/O error. If errorObj is not undefined, set its errno property to the error code or to 0 if no error occured.
<br />

```js
std.puts(str);
```

Equivalent to std.out.puts(str).
<br />

```js
std.printf(fmt, ...args);
```

Equivalent to std.out.printf(fmt, ...args).
<br />

```js
std.sprintf(fmt, ...args);
```

Equivalent to the libc sprintf().
<br />

- std.in
- std.out
- std.err

Wrappers to the libc file stdin, stdout, stderr.
<br />

- std.SEEK_SET
- std.SEEK_CUR
- std.SEEK_END

Constants for seek().

## Enumeration objects

containing the integer value of common errors (additional error codes may be defined)

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

- std.strerror(errno): Return a string that describes the error errno.
- std.gc(): Manually invoke the cycle removal algorithm. The cycle removal algorithm is automatically started when needed, so this function is useful in case of specific memory constraints or for testing.
- std.parseExtJSON(str): Parse str using a superset of JSON.parse. The following extensions are accepted:
  - Single line and multiline comments
  - unquoted properties (ASCII-only Javascript identifiers)
  - trailing comma in array and object definitions
  - single quoted strings
  - \f and \v are accepted as space characters
  - leading plus in numbers
  - octal (0o prefix) and hexadecimal (0x prefix) numbers

## FILE

### Construction

```js
const file = std.open(filename, flags);
```

:::info
  - filename - Path to the file, E.g.: "samples/test.txt".
  - flags - File mode, E.g.: "w", "r", "wb", "rb", etc.
:::

### Methods

```js
const file = std.open("test.txt", "w");
```

<br />


```js
close();
```

Close the file. Return 0 if OK or -errno in case of I/O error.
<br />

```js
puts(str);
```

Outputs the string with the UTF-8 encoding.
<br />

```js
printf(fmt, ...args);
```

Formatted printf.

:::info
The same formats as the standard C library printf are supported. Integer format types (e.g. %d) truncate the Numbers or BigInts to 32 bits. Use the l modifier (e.g. %ld) to truncate to 64 bits.
:::

<br />

```js
flush();
```

Flush the buffered file.
<br />

```js
seek(offset, whence);
```

Seek to a give file position (whence is std.SEEK_*). offset can be a number or a bigint. Return 0 if OK or -errno in case of I/O error.
<br />

```js
tell();
```

Return the current file position.
<br />

```js
tello();
```

Return the current file position as a bigint.
<br />

```js
eof();
```

Return true if end of file.
<br />

```js
fileno();
```

Return the associated OS handle.
<br />

```js
error();
```

Return true if there was an error.
<br />

```js
clearerr();
```

Clear the error indication.
<br />

```js
read(buffer, position, length);
```

Read length bytes from the file to the ArrayBuffer buffer at byte position position (wrapper to the libc fread).
<br />

```js
write(buffer, position, length);
```

Write length bytes to the file from the ArrayBuffer buffer at byte position position (wrapper to the libc fwrite).
<br />

```js
getline();
```

Return the next line from the file, assuming UTF-8 encoding, excluding the trailing line feed.
<br />

```js
readAsString(max_size = undefined);
```

Read max_size bytes from the file and return them as a string assuming UTF-8 encoding. If max_size is not present, the file is read up its end.
<br />

```js
getByte();
```

Return the next byte from the file. Return -1 if the end of file is reached.
<br />

```js
putByte(c);
```

Write one byte to the file.
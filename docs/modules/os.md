# OS

The OS module provides Operating System specific Methods

- low level file access
- signals
- timers
- asynchronous I/O

:::note
The OS Methods usually return 0 if OK or an OS specific negative error code.
:::

## Properties

### os.platform

Return a string representing the platform: "linux", "darwin", "win32", "ps2" or "js".

## Methods

### open

Open a file. Return a handle or < 0 if error.

```js
let fd = os.open(filename, flags, mode = 0o666)
```

#### Flags 

- os.O_RDONLY
- os.O_WRONLY
- os.O_RDWR
- os.O_APPEND
- os.O_CREAT
- os.O_EXCL
- os.O_TRUNC
  
:::info
POSIX open flags.
:::

### close

Close the file handle fd.

```js
os.close(fd);
```

### seek

Seek in the file. Use std.SEEK_* for whence. offset is either a number or a bigint. If offset is a bigint, a bigint is returned too.

```js
os.seek(fd, offset, whence);
```

### read

Read length bytes from the file handle fd to the ArrayBuffer buffer at byte position offset. Return the number of read bytes or < 0 if error.

```js
os.read(fd, buffer, offset, length);
```

### write

Write length bytes to the file handle fd from the ArrayBuffer buffer at byte position offset. Return the number of written bytes or < 0 if error.

```js
os.write(fd, buffer, offset, length);
```

### remove

Remove a file. Return 0 if OK or -errno.

```js
os.remove(filename);
```

### rename

Rename a file. Return 0 if OK or -errno.

```js
os.rename(oldname, newname);
```

### realpath

Return [str, err] where str is the canonicalized absolute pathname of path and err the error code.

```js
os.realpath(path);
```

### getcwd

Return [str, err] where str is the current working directory and err the error code.

```js
os.getcwd();
```

### chdir

Change the current directory. Return 0 if OK or -errno.

```js
os.chdir(path);
```

### mkdir

Create a directory at path. Return 0 if OK or -errno.

```js
os.mkdir(path, mode = 0o777);
```

### stat

Return [obj, err] where obj is an object containing the file status of path. err is the error code. The following fields are defined in obj: dev, ino, mode, nlink, uid, gid, rdev, size, blocks, atime, mtime, ctime. The times are specified in milliseconds since 1970. 

```js
os.stat(path);
```

Constants to interpret the mode property returned by stat(). They have the same value as in the C system header sys/stat.h.

- os.S_IFMT
- os.S_IFIFO
- os.S_IFCHR
- os.S_IFDIR
- os.S_IFBLK
- os.S_IFREG
- os.S_IFSOCK
- os.S_IFLNK
- os.S_ISGID
- os.S_ISUID

### lstat

lstat() is the same as stat() excepts that it returns information about the link itself.

```js
os.lstat(path);
```

### utimes
  
Change the access and modification times of the file path. The times are specified in milliseconds since 1970. Return 0 if OK or -errno.

```js
os.utimes(path, atime, mtime);
```

### readdir

Return [array, err] where array is an array of strings containing the filenames of the directory path. err is the error code.

```js
os.readdir(path);
```

### setReadHandler

Add a read handler to the file handle fd. func is called each time there is data pending for fd. A single read handler per file handle is supported. Use func = null to remove the handler.

```js
os.setReadHandler(fd, func);
```

### setWriteHandler

Add a write handler to the file handle fd. func is called each time data can be written to fd. A single write handler per file handle is supported. Use func = null to remove the handler.

```js
os.setWriteHandler(fd, func);
```

### sleep

Sleep during delay_ms milliseconds.

```js
os.sleep(delay_ms);
```

### setTimeout

Call the function func after delay ms. Return a handle to the timer.

```js
os.setTimeout(func, delay);
```

### setInterval

Call the function func at specified intervals (in milliseconds). Return a handle to the timer.

```js
os.setInterval(func, interval);
```

### setImmediate

Executes a given function immediately.

```js
os.setImmediate(func);
```

### clearTimeout

Cancel a timer.

```js
os.clearTimeout(handle);
```

### clearInterval

Cancel a interval.

```js
os.clearInterval(handle);
```

### clearImmediate

Cancel a immediate execution.

```js
os.clearImmediate(handle);
```
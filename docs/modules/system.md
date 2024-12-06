# System

Files, folders and system stuff.

## Methods

```js
const listdir = System.listDir(path?);
```

- listdir[index].name: return file name on indicated index(string)  
- listdir[index].size: return file size on indicated index(integer)  
- listdir[index].directory: return if indicated index is a file or a directory(bool)  

<br />

```js
System.removeDirectory(path);
```

```js
System.copyFile(source, dest);
```

```js
System.moveFile(source, dest);
```

```js
System.rename(source, dest);
```

```js
System.sleep(sec);
```

```js
System.exitToBrowser();
```

```js
System.setDarkMode(value);
```

<br />


```js
let temps = System.getTemperature();
```

:::info
It only works with SCPH-500XX and later models.
:::
<br />

```js 
const info = System.getMCInfo(slot);
```

- info.type
- info.freemem
- info.format

<br />

  
```js
const ee_info = System.getCPUInfo();
```

- ee_info.implementation
- ee_info.revision
- ee_info.FPUimplementation
- ee_info.FPUrevision
- ee_info.ICacheSize
- ee_info.DCacheSize
- ee_info.RAMSize
- ee_info.MachineSize

<br />

```js
const gs_info = System.getGPUInfo();
```

- gs_info.id
- gs_info.revision

<br />

  
```js
const ram_usage = System.getMemoryStats();
```

- **ram_usage.core**: Kernel + Native code size in RAM
- **ram_usage.nativeStack**: Kernel + Native stack size
- **ram_usage.allocs**: Dynamic allocated memory tracking
- **ram_usage.used**: All above, but combined
  
## Asynchronous Methods

```js
System.threadCopyFile(source, dest);
```

<br />


```js
const progress = System.getFileProgress();
```

- progress.current
- progress.final
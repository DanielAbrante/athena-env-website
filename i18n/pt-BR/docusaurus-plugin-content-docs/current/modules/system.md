# System

Files, folders and system stuff.

## Methods

### listDir

```js
const listdir = System.listDir(path?);
```

- **listdir[index].name**: return file name on indicated index(string)  
- **listdir[index].size**: return file size on indicated index(integer)  
- **listdir[index].directory**: return if indicated index is a file or a directory(bool)  

### removeDirectory

```js
System.removeDirectory(path);
```
### copyFile

```js
System.copyFile(source, dest);
```
### moveFile

```js
System.moveFile(source, dest);
```
### rename

```js
System.rename(source, dest);
```
### sleep

```js
System.sleep(sec);
```
### exitToBrowser

```js
System.exitToBrowser();
```
### setDarkMode

```js
System.setDarkMode(value);
```

### getTemperature

```js
let temps = System.getTemperature();
```

:::info
It only works with SCPH-500XX and later models.
:::

### getMCInfo

```js 
const info = System.getMCInfo(slot);
```

- info.type
- info.freemem
- info.format

### getCPUInfo
  
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

### getGPUInfo

```js
const gs_info = System.getGPUInfo();
```

- gs_info.id
- gs_info.revision

### getMemoryStats
  
```js
const ram_usage = System.getMemoryStats();
```

- **ram_usage.core**: Kernel + Native code size in RAM
- **ram_usage.nativeStack**: Kernel + Native stack size
- **ram_usage.allocs**: Dynamic allocated memory tracking
- **ram_usage.used**: All above, but combined
  
## Asynchronous Methods

### threadCopyFile

```js
System.threadCopyFile(source, dest);
```

### getFileProgress

```js
const progress = System.getFileProgress();
```

- progress.current
- progress.final
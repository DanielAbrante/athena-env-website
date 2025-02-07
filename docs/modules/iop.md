# IOP

The PlayStation 2 has an I/O processor to deal with drivers and modules. Take control of it!

## Properties

- **IOP.keyboard**: USB Keyboard  

- **IOP.mouse**: USB Mouse  

- **IOP.freeram**: IOP RAM Info  

- **IOP.ds34bt**: Bluetooth DualShock 3/4 pads  

- **IOP.ds34usb**: USB DualShock 3/4 pads  

- **IOP.network**: Network drivers  

- **IOP.pads**: DualShock 1/2 pads  

- **IOP.memcard**: Memory Card  

- **IOP.audio**: Audio driver  

- **IOP.usb_mass**: USB Mass storage, supports FAT32 and exFAT  

- **IOP.cdfs**: Disc driver  

- **IOP.hdd**: Internal HDD driver  

- **IOP.boot_device**: Storage device used to boot Athena 

## Methods

### loadModule

```js
const result = IOP.loadModule(fname, arg_len?, args?);
```

### loadModuleBuffer

```js
const result = IOP.loadModuleBuffer(mod_buf, arg_len?, args?);
```

### loadDefaultModule

```js
IOP.loadDefaultModule(mod_id);
```

### reset

```js
IOP.reset();
``` 

### getMemoryStats

```js
const stats = IOP.getMemoryStats();
```

:::warning
Requires **IOP.loadDefaultModule(IOP.freeram)** first!
:::

#### Properties

- stats.free
- stats.used
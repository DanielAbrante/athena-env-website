# IOP

O PlayStation 2 possui um processador de E/S para gerenciar drivers e módulos. Assuma o controle dele!

## Propriedades

- **IOP.keyboard**: Teclado USB
- **IOP.mouse**: Mouse USB
- **IOP.freeram**: Informação da RAM do IOP  
- **IOP.ds34bt**: Controle DualShock 3/4 via Bluetooth
- **IOP.ds34usb**: Controle DualShock 3/4 via USB
- **IOP.network**: Drivers de rede 
- **IOP.pads**: Conroles DualShock 1/2  
- **IOP.memcard**: Cartão de Memória
- **IOP.audio**: Driver de áudio 
- **IOP.usb_mass**: Armazenamento USB, compatível com FAT32 e exFAT 
- **IOP.cdfs**: Driver de disco
- **IOP.hdd**: Driver de HDD interno  
- **IOP.boot_device**: Dispositivo de armazenamento usado para inicializar o Athena

## Métodos

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
Requer **IOP.loadDefaultModule(IOP.freeram)** primeiro!
:::

#### Propriedades

- stats.free
- stats.used
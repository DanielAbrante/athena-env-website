# Network

Básicos de internet e requisições web :D.

## Métodos

### init

```js
Network.init(ip?, netmask?, gateway?, dns?);
```

```js
Network.init("192.168.0.10", "255.255.255.0", "192.168.0.1", "192.168.0.1"); // Modo estático
Network.init(); // Modo DHCP, dinâmico.
```

### getConfig

```js
const conf = Network.getConfig();
```

Retorna 

- conf.ip
- conf.netmask
- conf.gateway
- conf.dns

### deinit

Desligar rede.

```js
Network.deinit();
```
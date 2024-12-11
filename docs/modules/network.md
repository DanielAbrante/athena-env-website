# Network

Net basics and web requests :D.

## Methods

### init

```js
Network.init(ip?, netmask?, gateway?, dns?);
```

```js
Network.init("192.168.0.10", "255.255.255.0", "192.168.0.1", "192.168.0.1"); // Static mode
Network.init(); // DHCP Mode, dynamic.
```

### getConfig

Returns conf.ip, conf.netmask, conf.gateway, conf.dns.

```js
const config = Network.getConfig();
```

### deinit

Shutdown network.

```js
Network.deinit();
```
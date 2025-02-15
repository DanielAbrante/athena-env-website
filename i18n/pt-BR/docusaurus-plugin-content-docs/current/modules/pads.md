# Pads

Above being able to draw and everything else, A human interface is important. Supports rumble and pressure sensitivity.

![analog_graph](https://user-images.githubusercontent.com/47725160/154816009-99d7e5da-badf-409b-9a3b-3618fd372f09.png)

## Buttons List 

| Type            | Buttons                                                     |
|-----------------|-------------------------------------------------------------|
| Directional     | `Pads.UP`, `Pads.DOWN`, `Pads.LEFT`, `Pads.RIGHT`           |
| Action          | `Pads.TRIANGLE`, `Pads.CIRCLE`, `Pads.CROSS`, `Pads.SQUARE` |
| System          | `Pads.SELECT`, `Pads.START`                                 |
| Shoulder        | `Pads.L1`, `Pads.R1`, `Pads.L2`, `Pads.R2`                  |
| Stick           | `Pads.L3`, `Pads.R3`                                        |


## Métodos

### get

Returns a pad object

```js
const pad = Pads.get(port?);
```

#### Propriedades

- **pad.btns**: Button state on the current check.  
- **pad.old_btns**: Button state on the last check.  
- **pad.lx**: Left analog horizontal position (left = -127, default = 0, right = 128).  
- **pad.ly**: Left analog vertical position (up = -127, default = 0, down = 128).  
- **pad.rx**: Right analog horizontal position (left = -127, default = 0, right = 128).     
- **pad.ry**: Right analog vertical position (up = -127, default = 0, down = 128).  

### update 

Updates all pads pressed and stick positions data.  

```js
update();
```

### pressed 

Checks if a button is being pressed (continuously).  

```js
pressed(button);
```

### justPressed 

Checks if a button was pressed only once.  

```js
justPressed(button);
```

### setEventHandler 

Sets the pad object to listen events defined by Pads.newEvent, so it doesn't need to be updated.  

```js
setEventHandler();
```

### newEvent
  
Creates an asynchronous pad event, returns the event id. 

```js 
const event_id = Pads.newEvent(button, kind, function);
```

:::warning
Remember to set the pad object event handler first!
:::

:::info[Pad Events]
- Pads.PRESSED  
- Pads.JUST_PRESSED  
- Pads.NON_PRESSED
:::

### deleteEvent

Deletes the event created by Pads.newEvent.

```js
Pads.deleteEvent(event_id);
```

### getType

Gets gamepad type in the specified port.

```js 
const type = Pads.getType(port?);
```

:::info[Pad Types]
- Pads.DIGITAL  
- Pads.ANALOG  
- Pads.DUALSHOCK
:::

### getPressure 

Get button pressure level.

```js
const press = Pads.getPressure(port?, button);
```

### rumble

Rumble your gamepad.

```js
Pads.rumble(port, big, small);
```
# Pads

Além de ser capaz de desenhar e realizar outras funções, uma interface humana é importante. Suporta vibração e sensibilidade à pressão.

![analog_graph](https://user-images.githubusercontent.com/47725160/154816009-99d7e5da-badf-409b-9a3b-3618fd372f09.png)

## Lista de Botões 

| Tipo            | Botões                                                      |
|-----------------|-------------------------------------------------------------|
| Direcional      | `Pads.UP`, `Pads.DOWN`, `Pads.LEFT`, `Pads.RIGHT`           |
| Ação            | `Pads.TRIANGLE`, `Pads.CIRCLE`, `Pads.CROSS`, `Pads.SQUARE` |
| Sistema         | `Pads.SELECT`, `Pads.START`                                 |
| Ombro           | `Pads.L1`, `Pads.R1`, `Pads.L2`, `Pads.R2`                  |
| Analógico       | `Pads.L3`, `Pads.R3`                                        |


## Métodos

### get

Retorna um objeto de controle (pad).

```js
const pad = Pads.get(port?);
```

#### Propriedades

- **pad.btns**: Estado do botão na verificação atual.  
- **pad.old_btns**: Estado do botão na última verificação.
- **pad.lx**: Posição horizontal do analógico esquerdo (esquerda = -127, padrão = 0, direita = 128).
- **pad.ly**: Posição vertical do analógico esquerdo (cima = -127, padrão = 0, baixo = 128). 
- **pad.rx**: Posição horizontal do analógico direito (esquerda = -127, padrão = 0, direita = 128).    
- **pad.ry**: Posição vertical do analógico direito (cima = -127, padrão = 0, baixo = 128).

### update 

Atualiza todos os dados dos botões pressionados e posições dos analógicos.

```js
update();
```

### pressed 

Verifica se um botão está sendo pressionado (continuamente).

```js
pressed(button);
```

### justPressed 

Verifica se um botão foi pressionado apenas uma vez.

```js
justPressed(button);
```

### setEventHandler 

Define o objeto do controle para escutar eventos definidos por Pads.newEvent, assim não é necessário atualizá-lo.

```js
setEventHandler();
```

### newEvent
  
Cria um evento assíncrono para o controle, retorna o ID do evento.

```js 
const event_id = Pads.newEvent(button, kind, function);
```

:::warning
Lembre-se de definir o manipulador de eventos do objeto pad primeiro!
:::

:::info[Eventos de Pad]
- Pads.PRESSED  
- Pads.JUST_PRESSED  
- Pads.NON_PRESSED
:::

### deleteEvent

Exclui o evento criado por Pads.newEvent.

```js
Pads.deleteEvent(event_id);
```

### getType

Obtém o tipo de gamepad na porta especificada.

```js 
const type = Pads.getType(port?);
```

:::info[Tipos de Pads]
- Pads.DIGITAL  
- Pads.ANALOG  
- Pads.DUALSHOCK
:::

### getPressure 

Obtém o nível de pressão do botão.

```js
const press = Pads.getPressure(port?, button);
```

### rumble

Faz o controle vibrar.

```js
Pads.rumble(port, big, small);
```
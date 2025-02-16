# Screen

Toda a tela do seu projeto (2D e 3D), com a possibilidade de alterar a resolução, ativar ou desativar parâmetros.

## Métodos

### display

Faz com que a função especificada se comporte como um loop principal, quando você não precisa limpar ou alternar a tela, pois isso é feito automaticamente.

```js
Screen.display(func);
```

### clearColor

Define uma cor de limpeza constante para a função Screen.display.

```js
Screen.clearColor(color?);
```

### clear

Limpa a tela com a cor especificada. Se nenhum argumento for especificado, será usada a cor preta como padrão.

```js
Screen.clear(color?);
```

### flip

Executa a fila de renderização e pula para o próximo quadro, ou seja, atualiza sua tela.

```js
Screen.flip();
```

### getFreeVRAM

Retorna o total de memória de vídeo livre.

```js
const freevram = Screen.getFreeVRAM();
```

### setVSync

Alterna o VSync, que torna a taxa de quadros estável em 15, 30 ou 60 (dependendo do modo) na tela.

```js
Screen.setVSync(bool);
```

### setFrameCounter

Alterna a contagem de quadros e a coleta de FPS.

```js
Screen.setFrameCounter(bool);
```

### waitVblankStart

Espera por uma sincronização vertical.

```js
Screen.waitVblankStart();
```

### getFPS

Obtém a medida de quadros por segundo dentro do intervalo de quadro especificado em milissegundos. Depende de Screen.setFrameCounter(true) para funcionar.

```js
const fps = Screen.getFPS(frame_interval);
```

### getMode

Obtém os parâmetros do modo de vídeo atual. Retorna um objeto.

```js
const canvas = Screen.getMode();
```

#### Propriedades

- **canvas.width**: Largura da tela. Padrão: 640.
- **canvas.height**: Altura da tela. Padrão: 448 em consoles NTSC, 512 em consoles PAL.
- **canvas.psm**: Modo de cor. Modos de cor disponíveis: CT16, CT16S, CT24, CT32.
- **canvas.interlace**: Interlaces disponíveis: INTERLACED, PROGRESSIVE.
- **canvas.field**: Campos disponíveis: FIELD, FRAME.
- **canvas.double_buffering**: Ativar ou desativar o double buffering(bool).
- **canvas.zbuffering**: Ativar ou desativar o Z buffering (3D buffering)(bool).
- **canvas.psmz**: Modo de cor do ZBuffering. Modos de cor de ZBuffer disponíveis: Z16, Z16S, Z24, Z32.

### setMode

Define o modo de vídeo atual, recebendo um objeto de modo de vídeo como argumento.

```js
Screen.setMode(canvas);
```
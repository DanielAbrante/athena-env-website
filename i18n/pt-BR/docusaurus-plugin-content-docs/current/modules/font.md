# Font

Métodos que controlam os textos exibidos na tela, carregando, desenhando e descarregando-os da memória.

## Construção

```js
const font = new Font(path); 
```

```js
const osdFont = new Font();             // Carrega a fonte BIOS, não disponível para todos os modelos de console   
const font = new Font("Segoe UI.ttf");  // Carrega fonte TrueType
``` 

:::info
- **path**: especifique o local de um arquivo de fonte, ex.: "images/atlas.png", "fonts/font.png".
- **formats**: png, bmp, jpg, otf e ttf.
:::

## Propriedades

- **color**: Define a tonalidade da fonte, o valor padrão é Color.new(255, 255, 255, 128).
- **scale**: Escala proporcional, valor padrão: 1.0f.

## Métodos

### print

Desenha o texto na tela (deve ser chamado a cada quadro).

```js
print(x, y, text);
```

```js
font.print(10.0, 10.0, "Hello world!");  // Exemplo
```

### getTextSize

Retorna o tamanho absoluto do texto em pixels (largura, altura).

```js
getTextSize(text);
```

```js
const size = font.getTextSize("Hello world!");  // Exemplo
```
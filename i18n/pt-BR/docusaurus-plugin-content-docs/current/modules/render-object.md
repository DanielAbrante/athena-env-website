# RenderObject

## Construção

```js
const model = new RenderObject(mesh, texture?);
```

:::info
- Carrega arquivos simples WaveFront OBJ ou arrays de vértices.
- MTL é suportado nos arquivos OBJs (incluindo cores por vértice e multi-texturização).
- Se você não tiver um arquivo MTL, mas quiser vincular uma textura a ele, basta passar a imagem como um segundo argumento, se quiser usá-la.
:::

## Propriedades

- **vertices**: Um array de vértices Render.vertex que pode ser modificado e lido.
- **size**: Quantidade de vértices.

## Métodos

### draw

Desenha o objeto na tela.

```js
draw(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z);
```

### drawBounds

Desenha a caixa delimitadora do objeto.

```js
drawBounds(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z);
```

### getTexture

Obtém o n-ésimo objeto de textura do modelo.

```js
getTexture(id);
```

### setTexture

Altera ou define a n-ésima textura nos modelos.

```js
setTexture(id, texture, range?);
```

### getPipeline

Retorna o pipeline de renderização atual carregado para o modelo.

```js
getPipeline();
```

### setPipeline

Define o pipeline atual para o modelo.

```js
setPipeline(pipeline);
```

#### Available pipelines

- **Render.PL_NO_LIGHTS_COLORS**: Cores e luzes desativados.
- **Render.PL_NO_LIGHTS_COLORS_TEX**: Cores, luzes e texturas desativados.
- **Render.PL_NO_LIGHTS**: Luzes desativadas, cores ainda funcionando.
- **Render.PL_NO_LIGHTS_TEX**: Texturas e luzes desativadas, cores ainda funcionando.
- **Render.PL_DEFAULT**: Padrão para modelos texturizados. Luzes e cores ativadas.
- **Render.PL_DEFAULT_NO_TEX**: Padrão para modelos não texturizados. Luzes e cores ativadas.

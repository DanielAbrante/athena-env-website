# Render

Suporte básico para 3D com renderizador VU1.

## Métodos

### setMode

```js
const canvas = Screen.getMode();
canvas.zbuffering = true;
canvas.psmz = Z16S;

Screen.setMode(canvas);
```

:::info
- Lembre-se de ativar o zbuffering no modo de tela
- Modo NTSC padrão (3D ativado)
:::

### setView

Inicializa as rotinas de renderização.

```js
Render.setView(aspect, fov?);
```

:::info
- aspecto padrão é 4/3, o widescreen é 16/9.
- fov padrão: 0.2
:::

### vertex

Retorna um vértice para construir uma malha 3D. Deve ser usado para criar arrays de vértices.

```js
Render.vertex(x, y, z, n1, n2, n3, s, t, r, g, b, a);
```

- **x, y, z**: Posição do vértice no mundo 3D.
- **n1, n2, n3**: Normal do vértice.  
- **s, t**: Coordenadas de textura do vértice.
- **r, g, b, a**: Cor do vértice. 

# Draw

Desenho de formas, triângulos, círculos, etc.

## Métodos

### point 

Desenha um pixel na cor e posição especificadas na tela.

```js
Draw.point(x, y, color);
```

### rect 

Desenha um retângulo na cor, posição e tamanho especificados na tela.

```js
Draw.rect(x, y, width, height, color);
```

### line 

Desenha uma linha nas cores e posição especificadas na tela.

```js
Draw.line(x, y, x2, y2, color);
```

### circle 

Desenha um círculo na cor, posição, raio e preenchimento especificados na tela.

```js
Draw.circle(x, y, radius, color, filled?);
```

### triangle 

Desenha um triângulo nas posições dos pontos e cores especificados na tela.

```js
Draw.triangle(x, y, x2, y2, x3, y3, color, color2?, color3?);
```

### quad

Desenha um quadrilátero nas posições dos pontos e cores especificados na tela.

```js
Draw.quad(x, y, x2, y2, x3, y3, x4, y4, color, color2?, color3?, color4?);
```
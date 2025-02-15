# Image  

Desenho de imagens.

## Construção  

```js
const image = new Image(path, mode?, async_list?);
```

```js
const imageVRAM = new Image("owl.png", VRAM); 
``` 
:::info
- **path:** Caminho do arquivo, ex.: "images/test.png".  
- **mode:** Escolha entre armazenar a imagem na **RAM** ou **VRAM**, o valor padrão é RAM.
- **async_list:** Recebe um objeto ImageList, que é uma lista de carregamento assíncrono de imagens, útil para carregar imagens em segundo plano.  
:::

## Propriedades

- **width, height**: Tamanho da imagem ao ser desenhada, o valor padrão é o tamanho original da imagem.
- **startx, starty**: Posição inicial da área da imagem que será desenhada, o valor padrão é 0.0.
- **endx, endy**: Posição final da área da imagem que será desenhada, o valor padrão é o tamanho original da imagem.
- **angle**: Define o ângulo de rotação da imagem, o valor padrão é 0.0.
- **color**: Define a tonalidade da imagem, o valor padrão é Color.new(255, 255, 255, 128).
- **filter**: Escolha entre **LINEAR** ou **NEAREST**, o valor padrão é NEAREST.
- **size**: Retorna o tamanho real da imagem ocupada na memória.
- **bpp**: Retorna a quantidade de bits por pixel da imagem.
- **delayed**: Se for true, a textura foi carregada na RAM, caso contrário, na VRAM.
- **pixels**: ArrayBuffer contendo os pixels da imagem.
- **palette**: Se for uma imagem com paleta de cores, ela terá um ArrayBuffer de paleta aqui.
 
## Métodos

### draw

Desenha a imagem carregada na tela (deve ser chamado a cada quadro). Exemplo: image.draw(15.0, 100.0);

```js
draw(x, y);
```

### optimize

Se sua imagem tiver 24 bits por pixel (RGB), este método a converte para 16 bits por pixel, economizando memória.

```js
optimize();
```

### ready

Retorna true se a imagem assíncrona foi carregada com sucesso na memória.

```js
ready();
```

```js
const loaded = image.ready();  
```

## ImageList

Carrega e gerencia múltiplas imagens enquanto o código está em execução, permitindo carregamento em múltiplas threads.

### Construção

Este construtor cria uma nova thread e uma fila para carregar imagens em segundo plano. Evite criar múltiplos objetos ImageList.

```js
const async_list = new ImageList(); 
```

### Métodos

#### process

Este método inicia a thread e carrega as imagens adicionadas à fila.

```js
async_list.process();
```
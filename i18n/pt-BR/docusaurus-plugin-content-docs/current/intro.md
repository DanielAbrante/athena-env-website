---
sidebar_position: 1
---

# Introdução

## Módulos

AthenaEnv é um projeto que busca facilitar e, ao mesmo tempo, fornecer um kit completo para que os usuários criem software homebrew para PlayStation 2 usando a linguagem JavaScript. Ele conta com dezenas de métodos integrados, tanto para a criação de jogos quanto de aplicativos.

A principal vantagem de usar o AthenaEnv em vez do PS2SDK puro é, acima de tudo, a praticidade. Você utilizará uma das linguagens mais simples possíveis para desenvolver suas ideias, sem a necessidade de compilação — basta escrever o script e testar, de forma rápida e simples.

## Pré-requisitos

Com o AthenaEnv, você precisa de apenas uma forma de programar e uma forma de testar seu código. Ou seja, se quiser, pode até criar seu código diretamente no PS2. Porém, deixarei algumas recomendações abaixo.

### PC
  - [Visual Studio Code](https://code.visualstudio.com/) (com extensão JavaScript)
  - [PCSX2](https://github.com/ps2dev/ps2client) (1.7.0 ou acima) ou [PS2Client](https://github.com/ps2dev/ps2client) para testes.
  - Habilite HostFS no PCSX2

### Android
  - [QuickEdit](https://play.google.com/store/apps/details?id=com.rhmsoft.edit&hl=pt_BR&gl=US)
  - PS2 com wLE para testes.

Ah, e também preciso mencionar que um pré-requisito essencial para usar o AthenaEnv é saber programar em JavaScript.

## PCSX2

### Versão Qt

![image](https://github.com/DanielSant0s/AthenaEnv/assets/47725160/e90471f6-7ada-4176-88e8-8a9d2c1e7eb4)  

:::tip
Habilite a saída no console
:::

![console0](https://github.com/DanielSant0s/AthenaEnv/assets/47725160/7ced1570-0013-4072-ad01-66b8a63dab6e)

### (antiga) versão WxWidgets

![image](https://user-images.githubusercontent.com/47725160/145600021-b07dd873-137d-4364-91ec-7ace0b1936e2.png) 

## Primeiros Passos

```js
const font = new Font("default");

os.setInterval(() => { // Basicamente cria um loop infinito, similar ao while true (você também pode usá-lo).
  Screen.clear(); // Limpa a tela para o próximo quadro.
  font.print(0, 0, "Hello World!"); // x, y, texto
  Screen.flip(); // Atualiza a tela.
}, 0)
```

Veja mais exemplos em [AthenaEnv samples](https://github.com/DanielSant0s/AthenaEnv/tree/main/bin).

## Como executar

O Athena é basicamente um carregador de JavaScript, ou seja, ele carrega arquivos .js. Ele executa o main.js por padrão, mas você pode executar outros arquivos passando o nome como o primeiro argumento ao iniciar o arquivo ELF.

## Demo

Se você tentar apenas fazer o download na aba de releases [aqui](https://github.com/DanielSant0s/AthenaEnv/tags) e executá-lo, isso é o que você verá:

![_50bda816_20230409025946](https://user-images.githubusercontent.com/47725160/230757268-5968d7e0-79df-4e98-9c02-4ec5252e056f.png)

Esse é o painel padrão, codificado no arquivo main.js padrão. Ele procura arquivos JavaScript cuja primeira linha contenha a seguinte estrutura:

```js
// {"name": "Nome do app", "author": "Quem fez isso?", "version": "04012023", "icon": "app_icone.png", "file": "meu_app.js"}
// Agora você pode programar livremente abaixo:
```
Uma vez encontrado, ele aparecerá na lista de aplicativos do painel.

## Funcionalidades

Além disso, ele usa uma versão levemente modificada do interpretador QuickJS para a linguagem JavaScript, o que significa que traz quase todos os recursos modernos do JavaScript até agora.

### Float32

Este projeto introduz um (antigo) novo tipo de dado para o JavaScript: floats simples. Apesar de serem menos precisos do que os doubles tradicionais em termos de semântica numérica, eles são importantes para o desempenho no PS2, já que o console só processa floats de 32 bits em sua FPU.

Você pode escrever floats simples no AthenaEnv seguindo a sintaxe abaixo:

```js
let test_float = 15.0f; // O sufixo 'f' faz com que o QuickJS o reconheça como um float simples.
``` 
ou

```js
let test_float = Math.fround(15.0); // Math.fround retorna floats simples reais no Athena.
```
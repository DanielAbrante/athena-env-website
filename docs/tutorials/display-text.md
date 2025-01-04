# Display Text

## Top Left Screen

```js
const font = new Font();

os.setInterval(() => {
    Screen.clear();

    font.print(0, 0, "Top Left Screen");

    Screen.flip();
}, 0);
```

## Specific Location

```js
const font = new Font();

const positionX = 70;
const positionY = 150;
const text = "Specific location";

os.setInterval(() => {
    Screen.clear();

    font.print(positionX, positionY, text);

    Screen.flip();
}, 0);
```

## Middle of the screen

```js
const font = new Font();
const canvas = Screen.getMode();

const text = "Middle of the screen";
const textWidth = font.getTextSize(text).width;

const { height, width } = canvas;
const verticalCenter = height / 2;
const horizontalCenter = (width / 2) - (textWidth / 2);

os.setInterval(() => {
    Screen.clear();

    font.print(horizontalCenter, verticalCenter, text);

    Screen.flip();
}, 0);
```

## Colored

```js
const font = new Font();

const alertText = "alert!";
const cautionText = "caution";
const safeText = "safe";

const red = Color.new(255, 0, 0);
const yellow = Color.new(255, 255, 0);
const green = Color.new(0, 255, 0);

os.setInterval(() => {
    Screen.clear();

    font.color = red;
    font.print(0, 0, alertText);

    font.color = yellow;
    font.print(0, 50, cautionText);

    font.color = green;
    font.print(0, 100, safeText);

    Screen.flip();
}, 0);
```

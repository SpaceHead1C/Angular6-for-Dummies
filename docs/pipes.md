# Pipes

Синтаксис:

```html
{{ today | date }}
```

Слева указывается свойство,  потом '|', справа имя пайпа и опционально параметры.

```html
{{ today | date : 'dd-MM-yyy' }}
```

![пайп](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs//src/pipes.png)

Пайпы применяются также в полях ввода:

```html
<input type="text" [value]="title | uppercase">
```

Пайпы бывают:
- встроенные (Built-in):
  - date (дата)
  - number, decimal, percent, currency (числа, валюта)
  - json, slice
  - lowercase, uppercase (регистр строки)
  - ...
- пользовательские (Custom)

Пайпы можно использовать последовательно:

```html
{{ today | date | uppercase }}
```

### json

Позволяет выводить объекты в json.

![пайп json](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs//src/pipes-json.png)

Часто используется в отладке.
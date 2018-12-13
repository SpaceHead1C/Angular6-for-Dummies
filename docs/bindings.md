# Привязки

![привязки](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/bindings.png)

**Angular bindings** – это механизм, позволяющий шаблону и классу компонента обмениваться информацией.

### Interpolation

![привязки интерполяция](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/bindings-interpolation.png)

Этот вид связки служит для вывода в определённое (любое) место шаблона значения свойства класса, результат выполнения его метода или какое либо выражение.

### Property binding

![привязки интерполяция](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/bindings-property.png)

Этот вид привязки также является односторонним, как *Interpolation*, и направлен от класса к шаблону. Но здесь результат выполнения метода (значение свойства) привязывается к орпеделённому свойству DOM-модели.

```html
<mytag [class]="getClass()">{{ myData }}</mytag>
```

*Property binding* может использоваться только внутри html-тега.

### Two-way data binding (propety binding)

![двусторонняя привязка](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/bindings-two-way.png)

Эта привязка связывает данные в обе стороны. Изменённое значение в классе выводится и обновляется в шаблоне, изменения значения свойства в шаблоне изменяют свойство класса.

Часто двусторонняя привязка используется с директивой *ngModel*:

```html
<input [(ngModel)]="title">
```

```typescript
export class AppComponent {
    title: string = 'app';
}
```

Для использования в шаблоне директивы *ngModel* в модуле использующего шаблон компонента требуется импортировать *FormsModule*.

### Event binding (output binding)

![привязка по событию](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/bindings-event.png)

Связка по событию (по выходу) представляет вид связи, когда в шаблоне есть подписка на определённое событие, например, на щелчёк по кнопке. Когда событие происходит, вызывается метод класса.

```html
<button (click)="onButtonClick()">Click me!</button>
```

```typescript
public onButtonClick() {
    this.title = 'Button clicked!';
}
```

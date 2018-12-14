# Имитация web-сервера (API)

При отсутствии реальной серверной части сервисы могут возвращать предопределённые в них данные требуемого типа, например `Array<any>`.

![сервис возвращает готовые данные](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/api-service-return-array.png)

При взаимодействии с серверной стороной тип возвращаемых данных станет *Observable*.

![клиент-серверное взаимодействие](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/api-service-return-observable.png)

*Observable* – это тип данных, который выполняет определённый метод, и по его завершению генерирует событие, на которое можно подписаться в методе *subscribe(...)*. Когда данные будут полностью получены (например, http-запрос будет завершён), сформируется это событие.

```typescript
private something: any;

constructor(private apiService: ApiService) {
    apiService.getSomething().subscribe(something => this.something = something);
  }
```

## InMemoryDataService

Есть возможность эмулировать взаимодействие с серверной стороной посредствам класса *InMemoryDataService*.

![эмуляция](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/api-server-emulation.png)

Внедрение сервиса:

```typescript
@NgModule({
    imports: [
        BrowserModule, FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ]
})
```

Параметр ```{ dataEncapsulation: false }``` указывает, что данные вернутся в виде:

```json
{
    users: [
        {
            firstname: 'Пётр',
            lastname: 'Петров'
        },
        ...
    ]
}
```

Если передать ```{ dataEncapsulation: true }``` (значение по умолчанию), то основные данные обернутся в объект *data*:

```json
{
    data: {
        users: [
            {
                firstname: 'Пётр',
                lastname: 'Петров'
            },
            ...
        ]
    }
}

```

В `@NgModule` добавляется определение сервиса `HttpClientInMemoryWebApiModule`. Этот сервис будет перехватывать все http-запросы приложения и перенаправлять их на сервис `InMemoryDataService`, у которого будет своё хранилище данных.

Для остальных компонент это обращения будут выглядеть, как настоящие обращения к серверной части.

Для использования сервиса `InMemoryDataService` требуется его установка командой ```npm install angular-in-memory-web-api --save```.
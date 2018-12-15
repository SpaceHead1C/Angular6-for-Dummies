# Пагинация

![виды пагинации](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/pagination.png)

## Серверная пагинация

![пагинация на сервере](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/pagination-server.png)

**Достоинства:**
- более эффективна, когда происходит выборка малой части из большого количества данных
- экономия ресурсов клиента и сервера
- сокращение трафика

**Недостатки:**
- усложнённый интерфейс между клиентом и сервером
- больше кода

## Пагинация на клиенте

![пагинация на клиенте](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/pagination-client.png)

**Достоинства:**
- проще в реализации
- меньше запросов на сервер

**Недостатки:**
- чрезмерное потребление ресурсов при больших объёмах данных
- большой объём трафика

## Формула для постраничной разбивки данных

![формула пагинации](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/pagination-formula.png)

```typescript
let startIndex = itemsPerPage * (page - 1);
let result = rows.slice(startIndex, itemsPerPage);
```

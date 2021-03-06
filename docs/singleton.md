# Singleton

**Singleton** (одиночка) – это паттерн (шаблон) проектирования, при котором экземпляр определённого класса создаётся лишь единожды, и обрабатывает все запросы в одиночку, на протяжении всей жизни приложения/модуля.

Примеры из жизни:
- Директор школы
- Начальник отдела

В текущем приложении используется сервис *UsersService*

![сервис](https://github.com/SpaceHead1C/Angular6-for-Dummies/blob/master/docs/src/singleton-service.png)

1. Внедрение сервиса в родительский компонент (или модуль)
2. Внедрение сервиса в каждый дочерний компонент

После внедрения объект сервиса будет доступен как singleton во всех дочерних компонентах (если таковые имеются).

Во втором случае у каждого дочернего компонента будет внедрён свой отдельный объект сервиса.
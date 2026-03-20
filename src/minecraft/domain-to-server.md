---
order: 5
authors:
  - c1oudychan
  - envizar
---

# Привязка домена к серверу

## Создание A-записи {#a-record}

:::warning Важно
Для пользователей панельного хостинга выполнять этот шаг не требуется.
:::

- В **Name** укажите нужный поддомен. Можно указать что угодно, но не забудьте указать то же самое на следующем шаге в поле **Target**.
- В **IPv4 address** укажите IP адрес сервера.
- Для Cloudflare: Оставьте **Proxy status** в **выключенном** состоянии. (DNS only)

::: info Пример
Привязка `120.120.120.120` к `srv.example.com`
![A Record](/minecraft/domain/a-record.png)
:::

## Создание SRV-записи {#srv-record}

- В **Name** укажите `_minecraft._tcp.<поддомен>`. Впишите `_minecraft._tcp.`, если поддомен не нужен.
- В **Priority** и **Weight** впишите `0`.
- В **Port** введите порт вашего сервера.
- В **Target** введите [полный домен ноды](/host/nodes) или созданную A-запись.

::: info Пример
Привязка `c1.play2go.cloud:54321` к `play.example.com`
![SRV Record](/minecraft/domain/srv-record.png)
:::

## :warning: Важный момент {#important-notice}

Если на Вашем узле есть сервер с портом 25565 (стандартный порт Майнкрафта),
то иногда он может появляться вместо Вашего.

Происходит это из-за того, что сначала берётся A/CNAME запись домена,
и если SRV запись не прогружается, происходит обращение к стандартному
порту Майнкрафта. Эта проблема **на стороне вашего провайдера/DNS сервера**,
и наша поддержка в такой ситуации ничем не поможет.


## Использование TCPShield {#tcp-shield}

В случае блокировки IP адреса ущла мы рекомендуем использовать TCPShield.

- Зайдите на [panel.tcpshield.com](https://panel.tcpshield.com), нажмите Register.
- Заполните требуемые данные, зарегистрируйтесь и войдите в аккаунт.
![TCPShield Panel](/minecraft/domain/tcpshield-register.png)
- В панели нажмите Add Service, далее Add network (Minecraft) и введите любое название.
![TCPShield Panel](/minecraft/domain/tcpshield-dash.png)
- Нажмите на созданную сеть, зайдите в Backends, нажмите Add Set и введите IP адрес сервера и любое название бэкенда.
![TCPShield Panel](/minecraft/domain/tcpshield-backend.png)
::: info Важно
Для того чтобы сервер получал корректный IP игрока, вам нужно включить Proxy Protocol.
- Если вы используете Velocity: `velocity.toml` -> `haproxy-protocol = true`
- Если вы используете Paper: `config/paper-global.yml` -> `proxy-protocol: true`
:::
- Зайдите в Domains, нажмите Add Domain, выберите созданный Backend Set и введите свой домен.
::: info Использование домена верхнего уровня (example.com)
- Если вы хотите использовать домен формата example.com, добавьте его и верифицируйте с помощью TXT записи.
- После этого создайте **CNAME** запись play.example.com, которая ведёт на EXAMPLE.ipv4.tcpshield.com (нужную запись можно найти на этой же странице)
- Создайте SRV запись и заполните её как на скриншоте.
![TCPShield Panel](/minecraft/domain/tcpshield-srv.png)

:::
::: info Использование play домена (play.example.com)
- Добавьте домен и создайте **CNAME** запись play.example.com, которая ведёт на EXAMPLE.ipv4.tcpshield.com (нужную запись можно найти на этой же странице)
:::

*Более подробная документация доступна на [сайте TCPShield](https://docs.tcpshield.com/panel/)*
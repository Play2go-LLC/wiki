---
order: 5
authors:
  - c1oudychan
  - envizar
  - luverktoya
---

# Привязка домена к серверу

## Если у вас виртуальный сервер (VPS) {#vps}

- В **Name** укажите нужный поддомен. (Укажите `@` если хотите использовать корневой домен, `example.com`)
- В **IP-адрес** укажите IP вашего сервера.
- Для Cloudflare: Оставьте **Proxy status** в **выключенном** состоянии. (DNS only)

::: info Пример
Привязка `166.0.0.0` к `play.example.com`
![A Record](/minecraft/domain/a-new.png)
:::
::: info Cloudflare
Если вы используете NS Cloudflare, укажите все как на скриншоте, замените данные на свои.
![A Record](/minecraft/domain/a-record.png)
:::

## Если у вас GAMING сервер {#gaming}

- В **Name** укажите `_minecraft._tcp.<поддомен>`. Впишите `_minecraft._tcp`, если поддомен не нужен.

::: info Информация
Если указываете `_minecraft._tcp.play` - вход на сервер будет по `play.domain.com`
Если указываете `_minecraft._tcp` - вход на сервер будет по `domain.com`
:::

- В **Priority** и **Weight** впишите `0`
- В **Port** введите порт вашего сервера.
- В **Target** введите [поддомен вашего узла](/host/nodes).

::: info Пример
Привязка `f1.play2go.cloud:25565` к `example.com`
![SRV Record](/minecraft/domain/srv-new.png)
:::

::: info Cloudflare
Если вы используете NS Cloudflare, укажите все как на скриншоте, замените данные на свои.
![SRV Record](/minecraft/domain/srv-record.png)
:::

## Проверка подключения {#verification}

После обновления DNS проверьте адрес в клиенте Minecraft. Для независимой проверки доступности используйте [проверку статуса сервера ServerBuddy](https://serverbuddy.net/tools/minecraft-server-status). Сервис следует по SRV-записи Java Edition и опрашивает конечный адрес и порт. Это помогает отличить проблему с DNS от тайм-аута, отказа в подключении или ответа, который не соответствует протоколу Minecraft.

## Использование TCPShield {#tcp-shield}

В случае блокировки IP адреса узла мы рекомендуем использовать TCPShield.

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

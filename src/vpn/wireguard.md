---
order: 6
authors:
  - c1oudychan
---

# WireGuard

<VpnProtocolBlockedNotice />

## Что это? {#what}

[WireGuard](https://www.wireguard.com/) — это современный VPN-протокол, известный своей простотой и безопасностью. Он использует передовые криптографические методы для установления защищенных соединений и отличается высокой производительностью и легкостью настройки.

## Как его установить? {#setup}

1. Скачиваем скрипт для автоматической установки: `wget -O wireguard.sh https://get.vpnsetup.net/wg`. \
Теперь у вас два пути: установить автоматически с параметрами по умолчанию, либо сделать свои параметры.
2. С параметрами по умолчанию: `sudo bash wireguard.sh --auto`
3. Со своими параметрами: `sudo bash wireguard.sh`
4. Теперь вы установили Wireguard. Чтобы добавить еще пользователей, вам нужно запустить скрипт еще раз.

:::tip Устранение неполадок

1. Если у вас нет `wget`, то можно использовать `curl`: `curl -fL -o wireguard.sh https://get.vpnsetup.net/wg`
2. Альтернативные ссылки, если текущая недоступна: \
   https://github.com/hwdsl2/wireguard-install/raw/master/wireguard-install.sh; \
   https://gitlab.com/hwdsl2/wireguard-install/-/raw/master/wireguard-install.sh;
:::

## Как использовать его?

:::warning Внимание
WireGuard заблокирован в России. Чтобы он заработал, нужно использовать клиент AmneziaWG.

- Android: https://play.google.com/store/apps/details?id=org.amnezia.awg&hl=de
- Windows: https://github.com/amnezia-vpn/amneziawg-windows-client
- MacOS: https://apps.apple.com/pl/app/amneziawg/id6478942365
- Linux: на данный момент отсутствует
:::

1. Установите WireGuard: https://www.wireguard.com/install/
2. Загрузите конфигурацию из `/root/client.conf`, либо сканируйте QR-код и импортируйте в клиент WireGuard.
3. Используйте VPN.

## Информация как использовать скрипт `wireguard.sh` {#using}

```txt
Использование: bash wireguard.sh [опции]

Опции:

  --addclient [имя клиента]      добавить нового клиента
  --dns1 [IP-адрес DNS сервера]  основной DNS сервер для нового клиента (необязательно, по умолчанию: Google Public DNS)
  --dns2 [IP-адрес DNS сервера]  вторичный DNS сервер для нового клиента (необязательно)
  --listclients                  вывести список существующих клиентов
  --removeclient [имя клиента]   удалить существующего клиента
  --showclientqr [имя клиента]   показать QR-код для существующего клиента
  --uninstall                    удалить WireGuard и все конфигурации
  -y, --yes                      автоматически отвечать "да" на запросы при удалении клиента или WireGuard
  -h, --help                     показать это сообщение и выйти

Опции установки (необязательно):

  --auto                         автоматическая установка WireGuard с использованием стандартных или пользовательских опций
  --serveraddr [DNS имя или IP]  адрес сервера, должен быть полным доменным именем (FQDN) или IPv4-адресом
  --port [номер]                 порт для WireGuard (1-65535, по умолчанию: 51820)
  --clientname [имя клиента]     имя для первого клиента WireGuard (по умолчанию: client)
  --dns1 [IP-адрес DNS сервера]  основной DNS сервер для первого клиента (по умолчанию: Google Public DNS)
  --dns2 [IP-адрес DNS сервера]  вторичный DNS сервер для первого клиента

Для настройки опций вы также можете запустить этот скрипт без аргументов.
```

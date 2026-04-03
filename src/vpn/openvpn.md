---
order: 5
authors:
  - c1oudychan
---

# OpenVPN

<VpnProtocolBlockedNotice />

## Что это? {#what}

[OpenVPN](https://openvpn.net/) — это популярный VPN-протокол с открытым исходным кодом, который обеспечивает безопасное и зашифрованное соединение через интернет.

## Как его установить? {#setup}

1. Скачиваем скрипт для автоматической установки: `wget -O openvpn.sh https://get.vpnsetup.net/ovpn`. \
Теперь у вас два пути: установить автоматически с параметрами по умолчанию, либо сделать свои параметры.
2. С параметрами по умолчанию: `sudo bash openvpn.sh --auto`
3. Со своими параметрами: `sudo bash openvpn.sh`
4. Теперь вы установили OpenVPN. Чтобы добавить еще пользователей, вам нужно запустить скрипт еще раз.

:::warning Устранение неполадок

1. Если у вас нет `wget`, то можно использовать `curl`: `curl -fL -o openvpn.sh https://get.vpnsetup.net/ovpn`
2. Альтернативные ссылки, если текущая недоступна: \
   https://github.com/hwdsl2/openvpn-install/raw/master/openvpn-install.sh; \
   https://gitlab.com/hwdsl2/openvpn-install/-/raw/master/openvpn-install.sh;
:::

## Как использовать его?

:::warning Внимание
OpenVPN заблокирован в России, используйте [WireGuard с клиентом AmneziaWG](/vpn/wireguard).
:::

1. Установите OpenVPN Connect:
   - Android: https://play.google.com/store/apps/details?id=net.openvpn.openvpn
   - Windows: https://openvpn.net/client/client-connect-vpn-for-windows/
   - MacOS: https://openvpn.net/client-connect-vpn-for-mac-os/
   - Linux: [(длинная ссылка)](https://openvpn.net/cloud-docs/tutorials/configuration-tutorials/connectors/operating-systems/linux/tutorial--learn-to-install-and-control-the-openvpn-3-client.html)
2. Загрузите конфигурацию из `/root/client.ovpn`, либо сканируйте QR-код и импортируйте в клиент OpenVPN.
3. Используйте VPN.

## Информация для использования скрипта `openvpn.sh` {#using}

```txt
Использование: bash openvpn.sh [опции]

Опции:

  --addclient [имя клиента]      добавить нового клиента
  --exportclient [имя клиента]   экспортировать конфигурацию для существующего клиента
  --listclients                  вывести список существующих клиентов
  --revokeclient [имя клиента]   отозвать существующего клиента
  --uninstall                    удалить OpenVPN и все конфигурации
  -y, --yes                      автоматически отвечать "да" на запросы при отзыве клиента или удалении OpenVPN
  -h, --help                     показать это сообщение и выйти

Опции установки (необязательно):

  --auto                         автоматическая установка OpenVPN с использованием стандартных или пользовательских опций
  --listenaddr [IPv4 адрес]      IPv4 адрес, на котором OpenVPN должен слушать запросы
  --serveraddr [DNS имя или IP]  адрес сервера, должен быть полным доменным именем (FQDN) или IPv4-адресом
  --proto [TCP или UDP]          протокол для OpenVPN (TCP или UDP, по умолчанию: UDP)
  --port [номер]                 порт для OpenVPN (1-65535, по умолчанию: 1194)
  --clientname [имя клиента]     имя для первого клиента OpenVPN (по умолчанию: client)
  --dns1 [IP-адрес DNS сервера]  основной DNS сервер для клиентов (по умолчанию: Google Public DNS)
  --dns2 [IP-адрес DNS сервера]  вторичный DNS сервер для клиентов

Для настройки опций вы также можете запустить этот скрипт без аргументов.
```

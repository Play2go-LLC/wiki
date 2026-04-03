---
order: 2
authors:
  - c1oudychan
---

# VPN: OpenVPN/WireGuard

<VpnProtocolBlockedNotice />

## Что это? {#what}

[OpenVPN](https://openvpn.net/) — это популярный VPN-протокол с открытым исходным кодом, который обеспечивает безопасное и зашифрованное соединение через Интернет.

[WireGuard](https://www.wireguard.com/) — это современный VPN-протокол, известный своей простотой и безопасностью. Он использует передовые криптографические методы для установления защищенных соединений и отличается высокой производительностью и легкостью настройки.

## Как их установить и купить сервер? {#setup}

:::info Информация
[На нашем сайте](https://p2g.one/wiki) можно купить виртуальные сервера в Германии, Швеции и Финляндии. Рекомендуется покупать Low-cost тариф в Германии, но если он недоступен, то сервер в Финляндии или Швеции.
:::

1. Заходим [на сайт](https://p2g.one/wiki) и регистрируемся.
2. Заходим на страницу [приобретения услуги](https://new.play2go.cloud/me/buy).
3. Выбираем нужный вам тариф в нужной для вас локации.
4. Создаём пароль и логин для входа на сервер. Можно нажать на кнопку для генерации безопасного пароля и логина.
5. Выбираем нужный для вас ВПН сервер. Советуем WireGuard, так как OpenVPN заблокирован в России.
6. Переходим к следующему этапу:

- WireGuard: [#wireguard](#wireguard)
- OpenVPN: [#openvpn](#openvpn)
<AImg src="/vds/installvpn/order-1.png" alt="Страница покупки и выбор ПО"/>

### OpenVPN {#openvpn}

:::warning :warning: Внимание
OpenVPN заблокирован в России, используйте [WireGuard с клиентом AmneziaWG](#wireguard).
:::

1. Выбираем `OpenVPN` в поле для выбора дополнительного ПО.
2. Покупаем сервер, и после его установки заходим на него с помощью гайда [`Как подключиться к VDS по SSH`](/vds/ssh). Логин, пароль и айпи сервера должны быть на вашей почте.
3. Далее переходим в SFTP. В **Termius** для такого есть специальная вкладка, а для других клиентов используйте **WinSCP**. Подключение в нем простое, как порт используйте 22.
4. Переходим в папку `/etc/openvpn/easy-rsa/keys/`, там должен быть файл `название.ovpn`. Перетащите его в любую папку вашего компьютера.
5. Теперь скачиваем клиент OpenVPN Connect и заходим в него.
    - Android: https://play.google.com/store/apps/details?id=net.openvpn.openvpn
    - Windows: https://openvpn.net/client/client-connect-vpn-for-windows/
    - MacOS: https://openvpn.net/client-connect-vpn-for-mac-os/
    - Linux: [(длинная ссылка)](https://openvpn.net/cloud-docs/tutorials/configuration-tutorials/connectors/operating-systems/linux/tutorial--learn-to-install-and-control-the-openvpn-3-client.html)
6. Чтобы подключиться, нужно импортировать файл. Кликаем на кнопку `+`, выбираем вкладку `Import file` и закидываем скачанный файл с сервера.
7. Подключаемся и пользуемся **своим ВПН**.

### WireGuard {#wireguard}

:::warning Внимание
WireGuard заблокирован в России. Чтобы он заработал, нужно использовать клиент AmneziaWG.

- Android: https://play.google.com/store/apps/details?id=org.amnezia.awg&hl=de
- Windows: https://github.com/amnezia-vpn/amneziawg-windows-client
- MacOS: https://apps.apple.com/pl/app/amneziawg/id6478942365
- Linux: https://github.com/amnezia-vpn/amnezia-client/releases (Если не устанавливается, следуйте [этой](https://docs.amnezia.org/documentation/installing-app-on-linux/) и [этой](https://docs.amnezia.org/troubleshooting/not-running-on-linux) статье)
:::

1. Выбираем `WireGuard` в поле для выбора дополнительного ПО.
2. Покупаем сервер, и после его установки заходим на него с помощью гайда [`Как подключиться к VDS по SSH`](/vds/ssh). Логин, пароль и айпи сервера должны быть на вашей почте.
3. Далее переходим в SFTP. В **Termius** для такого есть специальная вкладка, а для других клиентов используйте **WinSCP**. Подключение в нем простое, как порт используйте 22.
4. Переходим в папку `/etc/wireguard/client/`, там должен быть файл `client.conf`. Перетащите его в любую папку вашего компьютера.
5. Теперь скачиваем клиент [WireGuard](https://www.wireguard.com/install/)/AmneziaWG и заходим в него.
6. Чтобы подключиться, нужно импортировать файл. Кликаем на кнопку `Импорт туннелей из файла` и выбираем скачанный файл с сервера.
7. Подключаемся и пользуемся **своим ВПН**.

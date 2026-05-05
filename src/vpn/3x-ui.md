---
order: 4
authors:
  - envizar
  - whydarcy
---

# 3x-ui

## Что это? teast {#what}

[3x-ui](https://github.com/MHSanaei/3x-ui) — продвинутая веб-панель для управления Xray VPN, поддерживающая
множество протоколов (Vmess, VLESS, Trojan, ShadowSocks и Wireguard). В панели есть управление
пользователями. Также существует аналог — [Marzban](marzban).

## Установка и настройка {#setup}

:::warning Обратите внимание
Здесь описан минимальный сетап, который подойдёт большинству пользователей.
У 3x-ui гораздо больше возможностей кастомизации и поддержимаемых протоколов.
:::

1. Вводим команду для установки:

   ```bash
   bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
   ```

   Отказываемся менять порт, если устраивает случайный.
2. Сохраняем данные, которые нам выдаёт. Они выглядят так:

   ```yaml
   Username: <логин>
   Password: <пароль>
   Port: <порт>
   WebBasePath: <путь>
   Access URL: http://<ip-сервера>:<порт>/<путь>
   ```

3. Устанавливаем nginx и создаём конфиг:

   ```bash
   sudo apt install -y nginx
   cd /etc/nginx/sites-enabled
   nano 3xui.conf
   ```

4. Вставляем конфиг и заменяем значения:

   ```nginx
   server {
     listen 80;
     server_name <домен>;
     rewrite ^ https://$server_name$request_uri? permanent;
   }
   
   server {
     server_name <домен>;
     ssl_certificate /etc/letsencrypt/live/<домен>/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/<домен>/privkey.pem;
     location / {
       proxy_pass http://127.0.0.1:<порт>;
     }
  
     # Тут уже не надо ничего менять
     listen 443 ssl http2;
     keepalive_timeout 75 75;
     ssl_session_timeout 5m;
     add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
     proxy_buffer_size 12k;
     proxy_set_header Host $host;
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     proxy_set_header X-Forwarded-Host $host;
     proxy_set_header X-Forwarded-Server $host;
     proxy_set_header X-Forwarded-Proto https;
   }
   ```

5. Получаем сертификат, выполняя инструкции от certbot:

   ```bash
   sudo apt install -y certbot
   certbot -d <домен> --manual --preferred-challenges dns certonly
   ```

6. В панели управления DNS создаём A-запись, где указываем IP своего сервера.
7. Перезагружаем nginx:

   ```bash
   sudo systemctl restart nginx
   ```

8. В браузере заходим по пути `https://<домен>/<путь>`. Путь берём из шага 2. Вводим логин/пароль из шага 2.
9. Переходим в **Подключения** -> **Добавить подключение**. Параметры:
    - Протокол: `vless`
    - Протокол передачи: `TCP (RAW)`
    - Безопасность: `Reality`
    - Dest (Target): `ya.ru:443`
    - SNI: `ya.ru`
    - Чтобы заполнить приватный/публичный ключи, нажимаем **Get New Cert**.

    Корректно всё заполнив, жмём **Создать**.
10. Нажимаем на **+** рядом с ID, далее на кнопочку **Информация**.
    Там копируем URL для подключения, начинающийся с `vless://`.
    Если не знаете, что с этим URL делать, почитайте [данную статью](connect).

## Чем "плох" 3x-ui? {#criticism}

Панель позволяет не заморачиваться с HTTPS, давая возможность подключаться по "голому" HTTP. Но делать так НЕЛЬЗЯ!

Многие гайды не описывают настройку HTTPS, поэтому часто люди используют небезопасное подключение по HTTP.
Из-за этого Xray сообщество ругает 3x-ui.

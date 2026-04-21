---
order: 2
authors:
  - Sharikfi
---

# Часто задаваемые вопросы

[[toc]]

## Где взять логин/пароль? {#credentials}

Стандартный логин для Linux - `root`, для Windows Server - `administrator`

Данные для подключения дублируются на почту.

## Как сменить пароль? {#change-password}

Перейдите в [панель управления](https://vm.play2go.cloud), найдите нужный вам VDS сервер, нажмите три точки, "Change password", введите нужный вам пароль и нажмите "Save".

![Смена пароля](/vds/faq/pwd.png)

:::warning Обратите внимание
Пароль для Windows Server должен быть от 16 символов.
:::

## "Нет свободных узлов" {#no-slots}

Ошибка указывает на недостаточное количество узлов для выбранного типа VDS.


## "You have been disconnected because another connection was made to the remote РС." {#another-connection}

Чаще всего это ошибка `0x516` с расширенным кодом ошибки `0x0`, она означает что у вас не настроен лимит сессий для RDP и уже кто-то подключен к вашему серверу.

Для решения этой проблемы вы можете перезагрузить VDS/выделенный сервер и убрать этот параметр.

Чтобы это сделать, нажмите комбинацию клавиш Win+R, напишите `gpedit.msc`, перейдите в `Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session host > Connections`, найдите `Limit number of connections`, нажмите по политике 2 раза левой кнопкой мыши, выберите `Enabled` в открывшемся окне, и установите нужное вам кол-во подключений.

![Step 1](/vds/faq/gpedit.png)

Далее найдите `Restrict Remote Desktop Services users to a single Remote Desktop Services session`, нажмите по политике 2 раза левой кнопкой мыши, выберите `Disabled`, перезагрузите VDS/выделенный сервер, чтобы применить изменения.

![Step 2](/vds/faq/rrds.png)

:::warning Важно
Если вы не уверены что ваш VDS/выделенный сервер не взломали, смените пароль, чтобы он был длиною от 16 символов.
:::

:::info Дополнение
`gpedit.msc` работает только на Windows Server, данная утилита не работает на Home версиях. Также, выполняйте данные шаги через VNC.
:::

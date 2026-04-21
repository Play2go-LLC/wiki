---
order: 10
authors:
  - luverktoya
---

# Измерение скорости интернета на сервере

Для **корректного** измерения скорости интернета на сервере вам нужно установить **официальную** утилиту Speedtest.

## Установка на Ubuntu/Debian {#install}

:::warning Внимание
`speedtest-cli` **не является** официальной утилитой от Ookla, его результаты **не могут** рассматриваться как достоверная информация.<br>
Техническая поддержка **не принимает** результаты `speedtest-cli` как доказательства низкой скорости сервера.
:::

```bash
# Удаляем неофициальную утилиту speedtest-cli
apt remove speedtest-cli
# Устанавливаем snap daemon
apt install snapd
# Устанавливаем официальный пакет Speedtest от Ookla
snap install speedtest
```

## Использование {#use}

Что-бы запустить проверку скорости, введите команды, указанные ниже для каждой локации:

```bash 
# Германия - 23M GmbH
snap run speedtest --accept-license --accept-gdpr -s 44081
``` 
```bash
# Нидерланды - Eranium B.V.
snap run speedtest --accept-license --accept-gdpr -s 13764
```
```bash
# Швеция/Финляндия - Telia
snap run speedtest --accept-license --accept-gdpr -s 14928
```
<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <div
    class="vpn-protocol-blocked-notice">
    Протоколы <strong>WireGuard</strong> и <strong>OpenVPN</strong> активно блокируются. Мы рекомендуем установить
    <a :href="withBase('/vpn/3x-ui')" class="marked">3x-ui</a> для VPN на протоколе
    <strong>VLESS</strong>.
  </div>
</template>

<style scoped lang="scss"> // вайтпресс это ужас
.vpn-protocol-blocked-notice {
  @apply mt-4 leading-snug [&_a]:text-inherit [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-90 p-6 bg-white/5;
  border-radius: 8px;
  border-color: rgb(225, 29, 72);
  border-width: 1px;
  border-style: solid;

  & strong {
    @apply font-extrabold text-rose-600;
  }

  & a {
    @apply text-inherit underline underline-offset-2 hover:opacity-90;
  }
}

.marked {
  @apply font-extrabold !important;
  color: rgb(225, 29, 72) !important;
}

</style>

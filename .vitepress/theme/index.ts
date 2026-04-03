import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/base.scss'
import 'virtual:uno.css'
import Layout from "./Layout.vue"
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import AImg from "./components/AImg.vue";
import VpnProtocolBlockedNotice from "./components/VpnProtocolBlockedNotice.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app as any) 
    app.component('AImg', AImg)
    app.component('VpnProtocolBlockedNotice', VpnProtocolBlockedNotice)
  }
} satisfies Theme  //ts-ignore НЕ работает
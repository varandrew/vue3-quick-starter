import { createApp } from 'vue'
import importUiFramework from '@/utils/import-ui-framework'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import '@/style/basic.styl'
// svg icon
import 'virtual:svg-icons-register'

const app = createApp(App)
importUiFramework(app).use(router).use(store, key).mount('#app')

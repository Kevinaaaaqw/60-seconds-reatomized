import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import 'virtual:uno.css'
import '@/style.css'
import 'quill/dist/quill.snow.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css';
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')





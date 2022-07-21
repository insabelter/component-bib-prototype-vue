import { createApp } from 'vue'
import { LibraryComponents } from '../src/main'
import App from './App.vue'

import '../src/assets/styles.css'

const app = createApp(App)
app.use(LibraryComponents)
app.mount('#app')


import './lib/wanwan.scss'
import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'

import {router} from './router.ts'
import Markdown from './components/markdown.vue';
import 'github-markdown-css'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown", Markdown)

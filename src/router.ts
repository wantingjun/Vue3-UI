import {createRouter, createWebHashHistory} from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import start from './markdown/start.md'

import { h } from 'vue';
import Markdown from './components/markdown.vue';
const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
                {path:'',redirect:'/doc/intro'},
                {path:'intro',component: md(intro)},
                {path:'start',component: md(start)},
                {path:'install',component: md(install)},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo},
            ]}
    ]
})
router.afterEach(()=>{

})

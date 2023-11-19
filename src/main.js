import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleExclamation)

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

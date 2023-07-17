import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as directives from 'vuetify/directives'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
    theme:{
        defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    }
  })

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')

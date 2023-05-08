import { createApp, reactive } from 'vue'
import App from './App.vue'
import './style.css'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'



// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
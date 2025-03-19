
import './assets/css/bootstrap.css'
import './assets/css/taptap.css'

import './assets/css/star.sass'
import './assets/css/dvcrop.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JS
import './assets/css/styles.css' 
import './assets/css/animation.css' 
// import './assets/js/owl-carousel.js'
import './assets/css/dboard.css'
// import './assets/js/imagesloaded.js'
// import './assets/js/custom.js'
import { createPinia } from 'pinia';
// // import './assets/js/bootstrap.min.js'
// import './assets/js/swiper.min.js'
// import'./assets/js/scripts.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persistedstate';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist);
app.use(pinia)
app.use(router)

app.mount('#app')
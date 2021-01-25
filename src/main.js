import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import * as VideoPlayer from 'vue-videojs7'

const firebaseConfig = {
      apiKey: "AIzaSyD0f7VVJpu4oK60Xx5Jsmz0evqBlf4m7tE",
      authDomain: "rconjoe.firebaseapp.com",
      projectId: "rconjoe",
      storageBucket: "rconjoe.appspot.com",
      messagingSenderId: "334091477961",
      appId: "1:334091477961:web:9281afafd34c318bdefe18"
};
firebase.initializeApp(firebaseConfig)

Vue.use(VideoPlayer)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

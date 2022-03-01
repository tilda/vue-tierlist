import Vue from 'vue'
import App from './App'
import TierList from './plugin'

Vue.use(TierList)

new Vue({
    render: (h) => h(App)
}).$mount("#app")
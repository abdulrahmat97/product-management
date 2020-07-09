import Vue from 'vue'
import Vuex from 'vuex'

import account from './account'
import alert from './alert'
import category from './category'
import product from './product'
import checkout from './checkout'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    account,
    alert,
    category,
    product,
    checkout
  }
})

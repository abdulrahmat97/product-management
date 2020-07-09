import Vue from 'vue'
import Router from 'vue-router'
import Admin from './admin'
import Account from './account'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '127.0.0.1:8080',
  routes: [
    Admin,
    Account,
  ]
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title + ' - StoreFront Admin v1.0';
  
  const accountPages = ['/account/login', '/account/register'];
  const authRequired = !accountPages.includes(to.path);
  const loggedIn = JSON.parse(localStorage.getItem('user'));
  
  if (authRequired && !loggedIn) {
    return next('/account/login');
  }
  
  next();
});

export default router

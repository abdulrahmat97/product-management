export default {
    path: '/account',
    component: () => import('@/views/account/Index.vue'),
    children: [
        //account
        {
            path: 'login',
            name: 'login',
            component: () => import('@/views/account/Login.vue'),
            meta: {
                title: 'Login'
            }
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/views/account/Register.vue'),
            meta: {
                title: 'Register'
            }
        },
        {
            path: 'logout',
            name: 'logout',
            component: () => import('@/views/account/Logout.vue'),
            meta: {
                title: 'Logging out....'
            }
        }
    ]
}


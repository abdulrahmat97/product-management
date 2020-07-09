export default {
    path:'/admin',
    //name:'admin',
    component: () => import('@/views/admin/Admin.vue'),
    children:[
        {
            path:'', 
            name:'dashboard',
            component: () => import('@/views/admin/Dashboard.vue'),
            alias:'dashboard',
            meta: {
                title: 'Beranda'
            }
        },

        //product
        {
            path:'products',
            name:'products',
            component: () => import('@/views/admin/product/Product.vue'),
            meta: {
                title: 'Produk'
            }
        },
        {
            path:'products/add',
            name:'products-add',
            component: () => import('@/views/admin/product/Input.vue'),
            meta: {
                title: 'Produk Baru'
            }
        },
        {
            path:'products/:productId/edit',
            name:'products-edit',
            component: () => import('@/views/admin/product/Edit.vue'),
            meta: {
                title: 'Edit Produk'
            }
        },
        
        // categories
        {
            path:'categories',
            name:'categories',
            component: () => import('@/views/admin/category/Category.vue'),
            meta: {
                title: 'Kategori Produk'
            }
        },
        {
            path:'categories/add',
            name:'categories-add',
            component: () => import('@/views/admin/category/Input.vue'),
            meta: {
                title: 'Kategori Baru'
            }
        },
        {
            path:'categories/:categoryId/edit',
            name:'categories-edit',
            component: () => import('@/views/admin/category/Edit.vue'),
            meta: {
                title: 'Edit Kategori'
            }
        },

        //checkouts
        {
            path:'checkouts',
            name:'checkouts',
            component: () => import('@/views/admin/checkout/Checkout.vue'),
            meta: {
                title: 'Checkout Order'
            }
        },
        {
            path:'checkouts/:checkoutId/edit',
            name:'checkouts-edit',
            component: () => import('@/views/admin/checkout/Edit.vue'),
            meta: {
                title: 'Edit Checkout Order'
            }
        },

        // settings
        {
            path:'settings',
            name:'settings',
            component: () => import('@/views/account/Setting.vue'),
            meta: {
                title: 'Pengaturan Akun'
            }
        }
    ]
}
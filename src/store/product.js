import { product as ProductService } from '../services';
import { stores as StoreHelper } from '../helpers';
import router from '../routes';

export default {
    namespaced: true,
    state: {
        products: [],
        product: {},
        productActivate: {},
        productImage: {}
    },
    getters: {
        fetchAllProducts: state => {
            return state.products;
        },
        fetchProduct: state => {
            return state.product;
        },
        fetchActivateProduct: state => {
            return state.productActivate;
        },
        fetchProductImage: state => {
            return state.productImage;
        }
    },
    mutations: {
        FETCH_ALL_PRODUCTS(state, products) {
            return state.products = products;
        },
        FETCH_PRODUCT(state, product) {
            return state.product = product;
        },
        FETCH_ACTIVATE_PRODUCT(state, productActivate) {
            return state.productActivate = productActivate;
        },
        FETCH_PRODUCT_IMAGE(state, productImage) {
            return state.productImage = productImage;
        },
        ADDNEW_PRODUCT(state, product) {
            return state.products.unshift(product);
        },
        UPDATE_PRODUCT(state, product) {
            return state.products.splice(
                state.products.findIndex((item) => item.Id == product.Id), 1, product);
        },
        DESTROY_PRODUCT(state, product) {
            return state.products.splice(
                state.products.findIndex((item) => item.Id == product.Id), 1);
        }
    },
    actions: {
        getAll({ commit, dispatch }) {
            ProductService.index()
                .then((data) => {
                    commit('FETCH_ALL_PRODUCTS', data);
                })
                .catch(StoreHelper.alertError(dispatch));
        },
        get({ commit, dispatch }, productId) {
            ProductService.show(productId)
                .then((data) => {
                    commit('FETCH_PRODUCT', data);
                })
                .catch(StoreHelper.alertError(dispatch));
        },
        getActivate({ dispatch }, productId) {
            return ProductService.show(productId)
                .then((data) => data)
                .catch(StoreHelper.alertError(dispatch));
        },
        store({ commit, dispatch }, product) {
            ProductService.create(product)
                .then((data) => {
                    commit('ADDNEW_PRODUCT', product);
                    router.push('/admin/products');
                    dispatch('alert/success', data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch))
        },
        storeImage({ commit, dispatch }, productImage) {
            return ProductService.createImage(productImage)
                .then((data) => {
                    commit('FETCH_PRODUCT_IMAGE', data);

                    return data;
                })
                .catch(StoreHelper.alertError(dispatch))
        },
        destroy({ commit, dispatch }, productId) {
            ProductService.destroy(productId)
                .then((data) => {
                    commit('DESTROY_PRODUCT', productId);
                    router.push('/admin/products');
                    dispatch('alert/success', data.message, { root: true });
                });
        },
        activate({ commit, dispatch }, product) {
            ProductService.update(product.Id, product)
                .then((data) => {
                    commit('UPDATE_PRODUCT', product);
                    router.push('/admin/products');
                    dispatch('alert/success', data.message, { root: true });
                });
        },
        update({ commit, dispatch }, product) {
            ProductService.update(product.Id, product)
                .then((data) => {
                    commit('UPDATE_PRODUCT', product);
                    router.push('/admin/products');
                    dispatch('alert/success', data.message, { root: true });
                });
        }
    }
}
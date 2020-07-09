import { category as CategoryService } from '../services';
import { stores as StoreHelper } from '../helpers';
import router from '../routes'

export default {
    namespaced: true,
    state: {
        categories: [],
        category: {}
    },
    getters: {
        fetchAllCategories: state => {
            return state.categories;
        },
        fetchCategory: state => {
            return state.category;
        }
    },
    mutations: {
        FETCH_ALL_CATEGORIES(state, categories) {
            return state.categories = categories;
        },
        FETCH_CATEGORY(state, category) {
            return state.category = category;
        },
        ADDNEW_CATEGORY(state, category) {
            return state.categories.unshift(category);
        },
        UPDATE_CATEGORY(state, category) {
            return state.categories.splice(
                state.categories.findIndex((item) => item.Id === category.Id), 1, category);
        },
        DESTROY_CATEGORY(state, categoryId) {
            return state.categories.splice(
                state.categories.findIndex((item) => item.Id === categoryId), 1);
        }
    },
    actions: {
        getAll({ commit, dispatch }) {
            CategoryService.index()
                .then((data) => {
                    commit('FETCH_ALL_CATEGORIES', data);
                })
                .catch(StoreHelper.alertError(dispatch));
        },
        get({ commit, dispatch }, categoryId) {
            CategoryService.show(categoryId)
                .then((data) => {
                    commit('FETCH_CATEGORY', data);
                })
                .catch(StoreHelper.alertError(dispatch));
        },
        store({ commit, dispatch }, category) {
            CategoryService.create(category)
                .then((data) => {
                    console.log(data);
                    commit('ADDNEW_CATEGORY', category);
                    router.push('/admin/categories');
                    dispatch('alert/success', data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch))
        },
        update({ commit, dispatch }, category) {
            CategoryService.update(category.Id, category)
                .then((data) => {
                    console.log(data);
                    commit('UPDATE_CATEGORY', category);
                    router.push('/admin/categories');
                    dispatch('alert/success', data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch))
        },
        destroy({ commit, dispatch }, categoryId) {
            CategoryService.destroy(categoryId)
                .then((data) => {
                    console.log(data);
                    commit('DESTROY_CATEGORY', categoryId);
                    dispatch('alert/success', data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch));
        }
    }
}
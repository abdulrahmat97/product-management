import { user as UserService } from '../services'
import router from '../routes'

const userAccount = JSON.parse(localStorage.getItem('user'));

export default {
    namespaced: true,
    state: {
        user: userAccount ? userAccount : {},
        status: userAccount ? { loggedIn: true } : {},
        userDetail: userAccount ? (typeof userAccount.Detail !== 'undefined' ? userAccount.Detail : {}) : {}
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {}
            state.user = null
        },
        registerRequest(state, user) {
            state.status = { registering: true };
            console.log(user);
        },
        registerSuccess(state, user) {
            state.status = {};
            console.log(user);
        },
        registerFailure(state, error) {
            state.status = {};
            console.error(error);
        },
        setUserDetail(state, userDetail) {
            state.userDetail = userDetail;
        }
    },
    getters: {
        fetchUserDetail: state => {
            return state.userDetail;
        }
    },
    actions: {
        updateProfile({ dispatch }, userProfile) {
            UserService.updateProfile(userProfile)
                .then((user) => {
                    console.log(user);
                    dispatch('accountDetail');
                    setTimeout(() => {
                        dispatch('alert/success', 'Updated profile successful', { root: true });
                    })
                })
                .catch((error) => {
                    dispatch('alert/error', error, { root: true });
                });
        },
        accountDetail({ dispatch, commit }) {
            UserService.getDetail()
                .then((user) => {
                    commit('setUserDetail', user);
                })
                .catch((error) => {
                    dispatch('alert/error', error, { root: true })
                });
        },
        login({ dispatch, commit }, { email, password }) {
            commit('loginRequest', { email });

            UserService.login(email, password)
                .then((user) => {
                    commit('loginSuccess', user);
                    dispatch('accountDetail');
                    router.push('/admin/dashboard');
                })
                .catch((error) => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                });
        },
        logout({ commit }) {
            UserService.logout();
            commit('logout');
        },
        register({ dispatch, commit }, user) {
            commit('registerRequest', user);

            UserService.register(user)
                .then((user) => {
                    commit('registerSuccess', user);
                    router.push('/account/login');
                    setTimeout(() => {
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                })
                .catch((error) => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                });
        }
    }
}

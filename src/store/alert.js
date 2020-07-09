export default {
    namespaced: true,
    state: {
        type: null,
        message: null
    },
    mutations: {
        success(state, message) {
            state.type = 'success';
            state.icon = 'check_circle';
            state.message = message;
        },
        error(state, message) {
            state.type = 'error';
            state.icon = 'warning';
            state.message = message;
        },
        clear(state) {
            state.type = null;
            state.icon = null;
            state.message = null;
        }
    },
    actions: {
        success({ commit }, message) {
            commit('success', message);
        },
        error({ commit }, message) {
            commit('error', message);
        },
        clear({ commit }) {
            commit('clear');
        }
    }
}
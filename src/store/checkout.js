import { checkout as CheckoutService } from '../services';
import { stores as StoreHelper } from '../helpers';
import router from '../routes'

export default {
    namespaced: true,
    state: {
        orders:[],
        order:{}
    },
    getters: {
        fetchAllOrders: state =>{
            return state.orders
        },
        fetchOrder: state => {
            return state.order
        }
    },
    mutations: {
        FETCH_ALL_ORDERS(state,orders){
            return state.orders=orders;
        },
        FETCH_ORDER(state,order){
            return state.order = order;
        },
        UPDATE_ORDER(state,order){
            return state.orders.splice(
                state.orders.findIndex((item) => item.Id === order.Id),1,order);
        },
        PAID_STATUS_ORDER(state,status){
            state.order.Status = status
            return state.order
        },
        FINISHED_STATUS_ORDER(state,status){
            state.order.Status = status
            return state.order
        }

    },
    actions: {
        getAll({ commit,dispatch }){
            CheckoutService.index()
                .then((data) => {
                    commit('FETCH_ALL_ORDERS',data);
                })
                .catch(StoreHelper.alertError(dispatch));
        },
        get({ commit,dispatch },orderId){
            CheckoutService.show(orderId)
                .then((data) => {
                    commit('FETCH_ORDER',data)
                })
                .catch(StoreHelper.alertError(dispatch))
        },
        update({ commit,dispatch },order){
            CheckoutService.update(order.Id,order)
                .then((data) => {
                    commit('UPDATE_ORDER',order);
                    router.push('/admin/checkouts');
                    dispatch('alert/success', data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch));
        },
        statusUpdatePaid({ commit,dispatch },order){
            CheckoutService.update(order.Id,order)
                .then((data) => {
                    commit('PAID_STATUS_ORDER',order.Status);
                    dispatch('alert/success',data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch))
        },
        statusUpdateFinished({ commit,dispatch },order){
            CheckoutService.update(order.Id,order)
                .then((data) => {
                    commit('FINISHED_STATUS_ORDER',order.Status);
                    dispatch('alert/success',data.message, { root: true })
                })
                .catch(StoreHelper.alertError(dispatch))
        }
    }
}
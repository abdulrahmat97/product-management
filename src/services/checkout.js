import { authHeader, ApiRequest, defaultHeaders, handleResponse } from '../helpers/services';

export default {
    index() {
        return ApiRequest.get(`/order`, authHeader(defaultHeaders))
            .then(handleResponse)
            .then((data) => data.data);
    },
    show(checkoutId) {
        return ApiRequest.get(`/order/${checkoutId}`, authHeader(defaultHeaders))
            .then(handleResponse);
    },
    update(checkoutId, checkout) {
        return ApiRequest.put(`/order/${checkoutId}`, checkout, authHeader(defaultHeaders))
            .then(handleResponse)
    },
    destroy(checkoutId) {
        return ApiRequest.delete(`/order/${checkoutId}`, authHeader(defaultHeaders))
            .then(handleResponse)
    }
}

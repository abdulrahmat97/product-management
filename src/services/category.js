import { authHeader, ApiRequest, defaultHeaders, handleResponse } from '../helpers/services';

export default {
    index() {
        return ApiRequest.get(`/category`, authHeader(defaultHeaders))
            .then(handleResponse)
            .then((data) => data.data)
    },
    show(id) {
        return ApiRequest.get(`/category/${id}`, authHeader(defaultHeaders))
            .then(handleResponse)
    },
    create(category) {
        return ApiRequest.post(`/category`, category, authHeader(defaultHeaders))
            .then(handleResponse)
    },
    update(id, category) {
        return ApiRequest.put(`/category/${id}`, category, authHeader(defaultHeaders))
            .then(handleResponse)
    },
    destroy(id) {
        return ApiRequest.delete(`/category/${id}`, authHeader(defaultHeaders))
            .then(handleResponse)
    }
}
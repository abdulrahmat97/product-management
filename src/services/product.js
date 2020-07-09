import { authHeader, ApiRequest, defaultHeaders, handleResponse } from '../helpers/services';

export default {
    index() {
        return ApiRequest.get(`/product`, authHeader(defaultHeaders))
            .then(handleResponse)
            .then((data) => data.data);
    },
    show(productId) {
        return ApiRequest.get(`/product/${productId}`, authHeader(defaultHeaders))
            .then(handleResponse)
            .then((data) => data.data);
    },
    create(product) {
        return ApiRequest.post(`/product`, product, authHeader(defaultHeaders))
            .then(handleResponse);
    },
    update(productId, product) {
        return ApiRequest.put(`/product/${productId}`, product, authHeader(defaultHeaders))
            .then(handleResponse);
    },
    destroy(productId) {
        return ApiRequest.delete(`/product/${productId}`, authHeader(defaultHeaders))
            .then(handleResponse);
    },
    createImage(image) {
        let formData = new FormData();
        formData.append("SKU", image.SKU);
        formData.append("Image", image.Image);

        return ApiRequest.post(`/product/image`, formData, authHeader())
            .then(handleResponse);
    },
    destroyImage(imageId) {
        return ApiRequest.delete(`/product/image/${imageId}`, authHeader(defaultHeaders))
            .then(handleResponse);
    }
}

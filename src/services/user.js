import { authHeader, ApiRequest, defaultHeaders, handleResponse } from '../helpers/services';

export default {
    login(email, password) {
        return ApiRequest.post('/auth/authenticate', {email, password}, defaultHeaders)
            .then(handleResponse)
            .then((user) => {
                if (user.Token) { 
                    localStorage.setItem('user', JSON.stringify(user)); 
                }
                return user;
            });
    },
    register(user) {
        return ApiRequest.post('/auth/register', user, defaultHeaders)
            .then(handleResponse);
    },
    logout() {
        localStorage.removeItem('user');
    },
    getDetail() {
        return ApiRequest.get('/auth/account', authHeader(defaultHeaders))
            .then(handleResponse)
            .then((data) => data.data[0]);
    },
    updateProfile(user) {
        return ApiRequest.put(`/auth/account/${user.Id}`, user, authHeader(defaultHeaders))
            .then(handleResponse);
    }
}
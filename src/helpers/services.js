const axios = require('axios');

const defaultHeaders = {
    headers: { 'Content-Type': 'application/json' }
}

const ApiRequest = axios.create({
    // baseURL: 'http://cimangko.com:2695/api',
    baseURL: 'http://139.59.115.174:2695/api',
    headers: {}
});

const authHeader = (anotherHeaders = { headers: {}}) => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.Token) {
        Object.assign(anotherHeaders.headers, { 'Authorization': 'Bearer ' + user.Token });
    }

    return anotherHeaders;
}

const handleResponse = (res) => {
    const data = res.data;
    const unauthorizedStatus = [401, 403];

    if (res.statusText !== 'OK') {
        if (unauthorizedStatus.indexOf(res.status) !== -1) {
            localStorage.removeItem('user');
            location.reload(true);
        }

        const error = (data && data.error.message) || res.statusText;
        return Promise.reject(error);
    }

    return data;
}

export {
    authHeader,
    handleResponse,
    defaultHeaders,
    ApiRequest
}
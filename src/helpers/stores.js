const alertError = (dispatchCallback) => (error) => {
    dispatchCallback('alert/error', error, { root: true });
}

export default {
    alertError
}
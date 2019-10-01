let timeoutWrapper = (function () {
    let ids = new Set();
    setTimeoutWrapper(callback, timeout) {
        ids.add(setTimeout(callback, timeout));
    }
    clearTimeoutWrapper(id) {
        ids.delete(id);
    }
    clearAllTimeout() {
        for (let id of ids)
            ids.delete(id);
    }
    return {
        setTimeoutWrapper,
        clearTimeoutWrapper,
        clearAllTimeout
    };
})();

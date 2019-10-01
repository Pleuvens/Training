let timeoutWrapper = (function () {
    let ids = new Set();
    setTimeoutWrapper(callback, timeout) {
        ids.add(setTimeout(callback, timeout));
    }
    clearTimeoutWrapper(id) {
        clearTimeout(id);
        ids.delete(id);
    }
    clearAllTimeout() {
        for (let id of ids)
            clearTimeoutWrapper(id);
    }
    return {
        setTimeoutWrapper,
        clearTimeoutWrapper,
        clearAllTimeout
    };
})();

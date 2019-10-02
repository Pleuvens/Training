class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    addListener (eventName, fn)
    {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }

    on (eventName, fn)
    {
        return this.addListener(eventName, fn);
    }

    removeListener (eventName, fn)
    {
        let listeners = this.listeners[eventName];
        if (!listeners)
            return this;
        for (let i = 0; i < listeners.length; i++)
        {
            if (listeners[i] == fn)
            {
                listeners.splice(i, 1);
                break;
            }
        }
        return this;
    }

    off (eventName, fn)
    {
        return this.removeListener(eventName, fn);
    }

    once (eventName, fn)
    {
        this.listeners[eventName] = this.listeners[eventName] || [];
        const wrapper = () => {
            fn();
            this.off(eventName, fn);
        }
        this.listeners[eventName].push(wrapper);
        return this;
    }

    emit(eventName, ...args)
    {
        let funcs = this.listeners[eventName];
        if (!funcs)
            return false;
        funcs.forEeach(func => {
            func(...args);
        });
        return true;
    }

    listenerCount(eventName)
    {
        if (!this.listeners[eventName])
            return 0;
        return this.listeners[eventName].length;
    }

    rawListeners(eventName)
    {
        return this.listeners[eventName];
    }
}

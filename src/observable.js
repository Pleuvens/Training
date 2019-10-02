class Observer = {
    constructor(handlers) {
        this.handlers = handlers;
        this.isUnsubscribed = false;
    }

    next(value) {
        if (this.handlers.next && !this.isUnsubscribed)
            console.log(value);
    }

    error(err) {
        if (this.isUnsubscribed)
            return;
        if (this.handlers.error)
            console.error(err);
        this.unsubscribe();
    }

    complete() {
        if (this.isUnsubscribed)
            return;
        if (this.handlers.complete)
            console.log('done');
        this.unubscribe();
    }

    unsubscribe() {
        this.isUnsubscribed = true;

        if (this._unsubscribe)
            this._unsubscribe();
    }
};

class Observable {
    constructor(subscribe) {
        this._subscribe = subscribe;
    }

    subscribe(obs) {
        const observer = new Observer(obs);

        observer._unsubscribe = this._subscribe(observer);

        return ({
            unsubscribe() {
                observer.unsubscribe();
            }
        });
    }
}
Observable.from = (values) => {
    return new Observable(observer => {
        values.forEach(value => observer.next(value));

        observer.complete();

        return () => {
            console.log('Observable.from: unsubscribed');
        }
    });
}



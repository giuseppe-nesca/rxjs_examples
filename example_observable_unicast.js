class Observable {
    handlers = [];  // observer array

    subscribe = (fn) => {
        this.handlers.push(fn);
        // console.log('subscribe', this.handlers.length)
    }
    unsubscribe = (fn) => {
        this.handlers = this.handlers.filter(
            (handler) => {
                if (handler !== fn) {
                    return handler;
                }
            }
        );
        // console.log('unsubscribe', this.handlers.length)
    }
    update = (value) => {
        this.handlers.forEach((handler) => {
            // handler.call(this, value) // multicast
            handler.call(this, Math.random() * 10 + 1) // unicast
        })
    }
}

function run() {
    var clickHandler = function (item) {
        console.log("value: " + item);
    };
    var subject = new Observable();
    subject.subscribe((item) => console.log("another value: " + item))
    subject.subscribe(clickHandler);
    subject.update('event');
}

run()
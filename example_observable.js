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
            handler.call(this, value)
        })
    }
}

function run() {
    var clickHandler = function (item) {
        console.log("fired: " + item);
    };
    var subject = new Observable();
    subject.subscribe((item) => console.log("uooooooo" + item))
    subject.subscribe(clickHandler);
    subject.update('event #1');
    subject.unsubscribe(clickHandler);
    subject.update('event #2');
    subject.subscribe(clickHandler);
    subject.update('event #3');
}

run()
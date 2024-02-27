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
    var handler = function (value) {
        console.log('handler', "value: " + value);
    };
    var subject = new Observable();
    subject.subscribe((value) => console.log('adder', value + " + 1 = " + ++value))
    subject.subscribe(handler);
    subject.update(1);
    subject.unsubscribe(handler);
    subject.update(2);
    subject.subscribe(handler);
    subject.update(3);
}

run()
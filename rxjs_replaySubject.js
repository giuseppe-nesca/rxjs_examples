import {ReplaySubject} from "rxjs";

// const rxjs_subject = new ReplaySubject(3);
const rxjs_subject = new ReplaySubject(3, 100);

rxjs_subject.subscribe(x => console.log('observer 1', x))

rxjs_subject.next(2);
rxjs_subject.next(3);
rxjs_subject.next(4);
rxjs_subject.next(5);

setTimeout(v => {
    rxjs_subject.next(11)
    rxjs_subject.subscribe(x => console.log('observer 3', x))
}, 10000)

rxjs_subject.next(10);


rxjs_subject.subscribe(x => console.log('observer 2', x))

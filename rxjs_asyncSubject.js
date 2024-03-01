import {AsyncSubject} from "rxjs";

// const rxjs_subject = new BehaviorSubject();
const rxjs_subject = new AsyncSubject();

rxjs_subject.subscribe(x => console.log('observer 1', x))

rxjs_subject.next(2);
rxjs_subject.next(3);
rxjs_subject.next(4);
rxjs_subject.next(5);


rxjs_subject.subscribe(x => console.log('observer 2', x))

rxjs_subject.complete()

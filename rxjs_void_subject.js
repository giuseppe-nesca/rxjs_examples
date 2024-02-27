import {Subject} from "rxjs";

// const rxjs_subject: Subject<void>= new Subject();
const rxjs_subject = new Subject();

rxjs_subject.subscribe(x => console.log('ping'))

rxjs_subject.next();
import {BehaviorSubject} from "rxjs";

// const rxjs_subject = new BehaviorSubject();
const rxjs_subject = new BehaviorSubject(123);

let value = 0;
rxjs_subject.subscribe(newValue => {
    const oldValue = value;
    value = newValue;
    console.log(`variable ${oldValue} -> ${newValue}`);
});

rxjs_subject.next(1);

rxjs_subject.subscribe(newValue => {
    console.log('reader',`variable ${newValue} -> ${newValue}`);
})

rxjs_subject.next(2);
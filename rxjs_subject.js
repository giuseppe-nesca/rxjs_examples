import {Subject, tap, throwError} from "rxjs";

const rxjs_subject = new Subject();

let value = 0;
rxjs_subject.subscribe(newValue => {
    const oldValue = value;
    value = newValue;
    console.log(`variable ${oldValue} -> ${newValue}`);
});

rxjs_subject.next(1);

rxjs_subject
    .pipe(tap(v => {if (v < 0) Rx.Observable.throw(new Error('negative value'))}))
    .subscribe({
    next: newValue => {
        console.log('reader', `variable ${newValue} -> ${newValue}`)
    },
    error: error => console.error('reader', 'Error occurred: ' + error),
    complete: () => console.log('reader', 'complete')
})

rxjs_subject.next(-1)

rxjs_subject.next(2);

rxjs_subject.complete();

rxjs_subject.next(111)

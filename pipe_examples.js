import {filter, iif, of, Subject, tap} from "rxjs";


const subject = new Subject();
const strategySelector = false;
//
// subject.pipe(
//     iif((value) => strategySelector, of(true), of(false)),
//
// ).subscribe()



const s1 = new Subject();

s1
    .pipe(
        filter(() => false),
        tap((value) => console.log('c1', value)
    ))
    .subscribe()

s1.next("hey")
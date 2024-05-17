import {iif, map, mergeMap, of, Subject, switchMap, tap} from "rxjs";


var subject = new Subject()
var condition = true

subject = subject.pipe(
    map(
        () => iif(
            () => condition,
            of('trueeee'),
            of('falseeee')
        )
    ),
    tap(value => console.log('tap', value))
)
subject.subscribe(value => console.log('subscribe', value))
subject.next(null)


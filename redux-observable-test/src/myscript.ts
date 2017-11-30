import * as Rx from 'rxjs';

const a: Rx.Observable<number>  = Rx.Observable.of(2, 10);
const b: Rx.Observable<number> = Rx.Observable.of(3);
const c: Rx.Observable<number> = Rx.Observable.concat(a, b);
const d: Rx.Observable<number> = c.map( v => v + 2);
const e = d.reduce((acc, val) => acc + val);

c.subscribe(x => console.log('c', x));

d.subscribe(x => console.log('d', x));

e.subscribe(x => console.log('e', x));

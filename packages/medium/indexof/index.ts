import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
    Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
    Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
    Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
];

type IsAny<T> = 0 extends 1 & T ? true : false;

type IndexOf<T extends unknown[], U, P extends unknown[] = []> = T extends [infer first, ...infer rest] ?
    Equal<U, first> extends true ? P['length'] : IndexOf<rest, U, [...P, 0]>
    : -1;
type res = IndexOf<[1, any, number, 'a', never], never>


import type { Equal, Expect } from '@type-challenges/utils'
import { Length } from '../../easy/easy-tuple-length/index';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

// type LengthOfString<T extends string,Num extends unknown[] = []> = T extends ''? Num['length'] : T extends `${infer first}${infer rest}` ? LengthOfString<rest,[first,...Num]> : never;
type LengthOfString<T extends string,Num extends unknown[] = []> = T extends `${infer first}${infer rest}` ? LengthOfString<rest,[first,...Num]> :Num['length']
type res = LengthOfString<'Sound!Euphonium'>


type AExtractB = Extract<1 | 2 | 3, 1 | 2 | 4>; // 1 | 2

type _AExtractB =
  | (1 extends 1 ? 1 : never) // 1
  | (2 extends 1 | 2 | 4 ? 2 : never) // 2
  | (3 extends 1 | 2 | 4 ? 3 : never); // never


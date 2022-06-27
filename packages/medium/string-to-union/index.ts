import type { Equal, Expect } from '@type-challenges/utils'
import { Length } from '../../easy/easy-tuple-length/index';

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
];

type StringToUnion<T extends string,P extends unknown[] = []> = T extends `${infer first}${infer rest}` ? 
StringToUnion<rest,[first,...P]>
:P[number];
type res = StringToUnion<'hello'>;
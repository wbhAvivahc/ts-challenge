import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>,
];

type IsRequiredKey<T,U extends　keyof T> = T extends Required<Pick<T,U>> ? true : false
type res = IsRequiredKey<{ a?: number; b?: string },'a'>
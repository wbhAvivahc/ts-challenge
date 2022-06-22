import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type Last<T extends any[]> = T extends [...infer arg, infer last] ? last :2 ;
type res = Last<[() => 123, { a: string }]>
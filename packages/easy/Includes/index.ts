import type { Equal, Expect } from '@type-challenges/utils'
import { ExpandRecursively } from '../../../util'
type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

// 这道题很有意思！
// 这道题如果是普通情况比如 ['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'
// 我们只需要 type Includes<T extends any[],U> = U extends T[number] ? true :false; 即可.

// [{ readonly a: 'A' }], { a: 'A' }
// 但是我们的那种解决方案不能处理上面这种复杂类型
// 所以我们需要单独遍历，取出每一项，然后循环遍历。
type Includes<T extends any[],U> = T extends [infer K,...infer P] ? ( Equal<K,U> extends true?  true : Includes<P,U>)  : false

type res = Equal<{a:1}&{b:1},{a:1,b:1}>;// we want true but response is false

// export type Equal<X, Y> =
//   (<T>() => T extends X ? 1 : 2) extends
//   (<T>() => T extends Y ? 1 : 2) ? true : false
// 对于 Equal 这个类型方法，实现的方案很神奇
// https://github.com/microsoft/TypeScript/issues/27024
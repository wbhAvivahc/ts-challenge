import type { Equal, Expect } from '@type-challenges/utils'
import { ExpandRecursively } from '../../../util'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]

// interface fun{
//   PromiseAll: <T>(T) => T
// }
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
}>
const  res12 =   promiseAllTest3
type res1 = [number,string];
type res2 = {
  0:1,
  1:3
}
type a<T> = Promise<{
  [K in keyof T]: T[K]
}>
type res = a<[number,string,1,2]>
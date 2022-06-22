import type { Equal, Expect } from '@type-challenges/utils'
import { ExpandRecursively } from '../../../util'

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}
type b = () => void
type aaa = b extends string ? true : false
type aaa1 = ExpandRecursively<aaa>
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
// }
// 你的答案
type DeepReadonly<T> = T extends Record<string, unknown> ? { readonly [Key in keyof T]: DeepReadonly<T[Key]> } : T;
// type res = Record<'name'|'age', unknown>
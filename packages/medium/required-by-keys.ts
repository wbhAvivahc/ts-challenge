

import type { Equal, Expect } from '@type-challenges/utils'
import {ExpandRecursively} from '../../util'
interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}
type cases = [
//   Expect<Equal<boom, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
];

type RequiredByKeys<T,U = keyof T> = (T & Required<Pick<T,U & keyof T>> ) extends infer R ? {[K in keyof R] : R[K]} :never
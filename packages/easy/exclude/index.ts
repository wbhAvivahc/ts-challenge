import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

type MyExclude<T, U> = T extends U ? never : T;
//extends 需要检测的类型为泛型联合类型。 
//extends 左边的会取出来分别与右边的进行对比
//如果不希望分别检测的话，可以增加 type MyExclude<T, U> =[ T ] extends [ U ] ? never : T;
type res = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>


import type { Equal, Expect } from '@type-challenges/utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]

type bbb = ExtractValuesOfTuple<['a','b']>

//  提取
type unionToIntersection<T> = (T extends T ? (p:() => T) => unknown: never) extends (p:infer P) => unknown ? P : never;
type getReturnType<T> = unionToIntersection<T> extends () => infer ReturnType ? ReturnType : never;

type UnionToTuple<T,P extends unknown[] = []> = 
    [T] extends [never] ? P : 
      UnionToTuple<Exclude<T,getReturnType<T>>,[...P,getReturnType<T>]> 
    ;
type res = UnionToTuple<'d' >

type try1 =  unionToIntersection<'a'|'b'>extends () => infer ReturnType ? ReturnType : never;

type bbb1<T > = T extends T ?  Exclude<T,'a'> : never;
type n<T> =  UnionToTuple<Exclude<T,getReturnType<T>>,[...P,getReturnType<T>]> 
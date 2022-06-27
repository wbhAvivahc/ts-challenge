import type { Equal, Expect } from '@type-challenges/utils'
import {ExpandRecursively} from '../../../util' 
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog;
type res = ExpandRecursively<Dog[keyof Dog]>;
// type res = ExpandRecursively<keyof Cat | keyof Dog>;
type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
];
// T extends T 触发分布式条件约束 Cat | Dog extens Cat | Dog
// 
// type extends type|breeds|color
// type LookUp<T ,U,P=T> =  T extends T ? (
//     [T] extends [P] ? (U extends T[keyof T] ? T : never) :never
// ) : never
type LookUp<T ,U,P=T> =  T extends T ? (
    (U extends T[keyof T] ? T : never)
) : never
type re = LookUp<Animal, 'dog'>
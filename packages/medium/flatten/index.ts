import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Flatten<[]>, []>>,
    Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
    Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
    Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

type Flatten<T extends unknown[]> =
    T extends [infer first, ...infer args] ? (
        first extends unknown[] ? [...Flatten<first>, ...Flatten<args>]
        : [first, ...Flatten<args>])
    : T

    type a = Partial<{a:string}>
//     type example = [1, 2, [3, 4], [[[5]]]];
// type ReturnType<T extends (...arg:unknown[]) => void> = T extends (...arg:unknown[]) => infer R ? R : never

// 首先我们必须保证泛型收缩为一个数组
// type Flatten<T extends unknown[]> = 
// // 我们提取数组中的第一个,以及通过 ... 操作符将剩余的存放到数组中
// T extends [infer first,...infer args] ? 
//     //判断数组中是否为数组类型
//     first extends unknown[] ? 
//     //是数组，进入递归
//     [...Flatten<first>,...Flatten<args>] :
//     // 不是数组，直接返回
//     [first,...Flatten<args>]
// //一个空数组的情况,  直接返回
// : T
type res = Flatten<[1,[2, 3],  4]>

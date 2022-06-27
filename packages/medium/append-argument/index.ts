import type { Equal, Expect } from '@type-challenges/utils'

export type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
]
// type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>;
type AppendArgument<T extends (...params: any[]) => unknown, U> = T extends (...params: infer P) => infer R ? (...arg: [...P,  U]) => R : never;

function boom(...params:unknown[]){
    console.log('%c 🍎 params: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', params);

}

boom(1,2)

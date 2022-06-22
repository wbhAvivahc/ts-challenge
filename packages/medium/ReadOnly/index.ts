

import type { Alike, Expect } from '@type-challenges/utils'
import { ExpandRecursively } from '../../../util'
type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

// 首先我们通过 keyof T = keyof T 设置默认值
// 我们通过 映射类型 将我们目标 形状 转化为 readOnly
//  最后，我们将原来的接口描述中，我们指定属性删除掉，即可。
// interface Todo2 {
//   readonly title: string
//   description?: string
//   completed: boolean
// }  我们以这个为例，我们希望将 ‘completed’ 转化 ===>  {readonly completed:boolean} & { title: string ,description: string}
type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [K in  U]:T[K]
} & Omit<T,U>
type res = ExpandRecursively<MyReadonly2<Todo2, 'title' | 'description'>>

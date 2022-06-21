import { Expand, ExpandRecursively } from "../../../util";
export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P] 
}
type b = ExpandRecursively<MyReadonly<Todo1>>

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
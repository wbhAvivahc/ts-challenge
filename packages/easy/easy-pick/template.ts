export type MyPick<T, K extends keyof T> = {
  [P in  K]:T[P]
}
// 首先我们将第二个参数进行限制，收缩他的类型为 T的子类型。
// 然后我们遍历 K，取出对应 T 中的形状描述即可。
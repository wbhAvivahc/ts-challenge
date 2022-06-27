

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

//type TrimLeft<T extends string> = T extends `${infer trim}${infer str}` ? (trim extends ' '|'\n'|'\t' ? TrimLeft<str> : `${trim}${str}`):  T;
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer U}` ? TrimLeft<U> : S
type res = TrimLeft<' \n\t'>
import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
];

type AppendToObject<T,U extends string,P> = {
    [K in keyof T | U] : K extends keyof T ? T[K] : P
};
// type AppendToObject<T, U extends string, V> = {
//     [K in U]: V
//   } & T;    
  
  type TestAppendToObject = { id: '1' }
  
  type ResultAppendToObject = AppendToObject<TestAppendToObject, 'id', 2>;
  type bb = ResultAppendToObject['id']

type res = AppendToObject<test2, 'id', 1>


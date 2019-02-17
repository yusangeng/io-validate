declare module 'oi-validate' {
  export type Ctor<T = {}> = (...args: any[]) => T
  export type FuncVoid<R> = () => R
  export type Func1<P, R> = (value: P) => R
  export type FuncAll<P, R> = (...args: P[]) => R

  export interface HasValidators<T> {
    not: T
    owner: T
    _: T
  
    among: FuncALl<any, T>
    and: FuncALl<any, T>
    equal: Func1<any, T>
    eq: Func1<any, T>
    equalOrGreaterThan: Func1<number, T>
    egt: Func1<number, T>
    equalOrLessThan: Func1<number, T>
    elt: Func1<number, T>
    greaterThan: Func1<number, T>
    gt: Func1<number, T>
    lessThan: Func1<number, T>
    lt: Func1<number, T>
    has: Func1<string | number | symbol, T>
    got: Func1<string | number | symbol, T>
    instanceOf: FuncAll<Ctor, T>
    is: FuncAll<string, T>
    isArguments: FuncVoid<T>
    isArray: FuncVoid<T>
    isArrayBuffer: FuncVoid<T>
    isArrayLike: FuncVoid<T>
    isArrayLikeObject: FuncVoid<T>
    isBoolean: FuncVoid<T>
    isBuffer: FuncVoid<T>
    isDate: FuncVoid<T>
    isElement: FuncVoid<T>
    isEmpty: FuncVoid<T>
    isError: FuncVoid<T>
    isFunction: FuncVoid<T>
    isLength: FuncVoid<T>
    isMap: FuncVoid<T>
    isNative: FuncVoid<T>
    isNil: FuncVoid<T>
    isNull: FuncVoid<T>
    isNumber: FuncVoid<T>
    isObject: FuncVoid<T>
    isObjectLike: FuncVoid<T>
    isPlainObject: FuncVoid<T>
    isRegExp: FuncVoid<T>
    isSet: FuncVoid<T>
    isString: FuncVoid<T>
    isSymbol: FuncVoid<T>
    isTypedArray: FuncVoid<T>
    isUndefined: FuncVoid<T>
    isWeakMap: FuncVoid<T>
    isWeakSet: FuncVoid<T>
    isExist: FuncVoid<T>
    isArrayOf: Func1<any, T>
    length: FuncVoid<T>
    map: Func1<any, T>
    match: Func1<RegExp, T>
    and: FuncAll<any, T>
    or: FuncAll<any, T>
    meet: Func1<any, T>
  }

  export interface Plan extends HasValidators<Plan> {
    [x: string]: (...args: any[]) => Plan
  }

  interface Validator extends HasValidators<Plan> {
    static plan: Plan
    [x: string]: (...args: any[]) => Validator
  }

  export default function validate (target: any, name?: string) : Validator
}

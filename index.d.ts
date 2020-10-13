declare module 'io-validate' {
  export type Ctor<T> = new (...args: any[]) => T;
  export type Validator0<R> = () => R;
  export type Validator1<P, R> = (value: P) => R;
  export type ValidatorN<P, R> = (...args: P[]) => R;

  export interface HasValidators<T> {
    not: T;
    owner: T;
    _: T;

    among: ValidatorN<any, T>;
    equal: Validator1<any, T>;
    eq: Validator1<any, T>;
    equalOrGreaterThan: Validator1<number, T>;
    egt: Validator1<number, T>;
    equalOrLessThan: Validator1<number, T>;
    elt: Validator1<number, T>;
    greaterThan: Validator1<number, T>;
    gt: Validator1<number, T>;
    lessThan: Validator1<number, T>;
    lt: Validator1<number, T>;
    has: Validator1<string | number | symbol, T>;
    got: Validator1<string | number | symbol, T>;
    instanceOf: ValidatorN<Ctor<any>, T>;
    is: ValidatorN<string, T>;
    isArguments: Validator0<T>;
    isArray: Validator0<T>;
    isArrayBuffer: Validator0<T>;
    isArrayLike: Validator0<T>;
    isArrayLikeObject: Validator0<T>;
    isBoolean: Validator0<T>;
    isBuffer: Validator0<T>;
    isDate: Validator0<T>;
    isElement: Validator0<T>;
    isEmpty: Validator0<T>;
    isError: Validator0<T>;
    isFunction: Validator0<T>;
    isLength: Validator0<T>;
    isMap: Validator0<T>;
    isNative: Validator0<T>;
    isNil: Validator0<T>;
    isNull: Validator0<T>;
    isNumber: Validator0<T>;
    isObject: Validator0<T>;
    isObjectLike: Validator0<T>;
    isPlainObject: Validator0<T>;
    isRegExp: Validator0<T>;
    isSet: Validator0<T>;
    isString: Validator0<T>;
    isSymbol: Validator0<T>;
    isTypedArray: Validator0<T>;
    isUndefined: Validator0<T>;
    isWeakMap: Validator0<T>;
    isWeakSet: Validator0<T>;
    isExist: Validator0<T>;
    isInteger: Validator0<T>;
    isSafeInteger: Validator0<T>;
    isArrayOf: Validator1<any, T>;
    length: Validator0<T>;
    map: Validator1<any, T>;
    match: Validator1<RegExp, T>;
    matchEmail: Validator0<T>;
    matchURL: Validator0<T>;
    matchIP: Validator0<T>;
    and: ValidatorN<any, T>;
    or: ValidatorN<any, T>;
    meet: Validator1<any, T>;
  }

  export interface Plan extends HasValidators<Plan> {}

  export interface Validator extends HasValidators<Validator> {}

  export type FValidate = {
    (target: any, name?: string): Validator;
    plan: Plan;
  };

  export const validate: FValidate;

  export default validate;
}

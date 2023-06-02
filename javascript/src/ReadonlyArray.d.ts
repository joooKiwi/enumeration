//This file is a temporary fix on the findLast & findLastIndex → https://github.com/microsoft/TypeScript/issues/48829
export {}

declare global {

    interface ReadonlyArray<T> {


        findLast<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined

        findLast(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined


        findLastIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number

    }
}

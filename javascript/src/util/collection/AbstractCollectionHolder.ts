import type {CollectionHolder} from "collection/CollectionHolder"

export abstract class AbstractCollectionHolder<T = any, >
    implements CollectionHolder<T> {

    //#region -------------------- Fields --------------------

    #size?: number
    readonly #iterable
    #array?: readonly T[]
    #set?: ReadonlySet<T>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(iterable: Iterable<T>,) {
        this.#iterable = iterable
        if (iterable instanceof Array)
            this.#size = iterable.length
        else if (iterable instanceof Set)
            this.#size = iterable.size
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    //#region -------------------- Size methods --------------------

    public get size(): number {
        if (this.#size == null) {
            const iterable = this._iterable
            let size = 0
            for (let _ of iterable)
                size++
            this.#size = size
        }
        return this.#size
    }

    public get length(): this["size"] {
        return this.size
    }

    //#endregion -------------------- Size methods --------------------

    protected get _iterable(): Iterable<T> {
        return this.#iterable
    }

    protected get _array(): readonly T[] {
        return this.#array ??= this.toArray()
    }

    protected get _set(): ReadonlySet<T> {
        return this.#set ??= this.toSet()
    }

    //#endregion -------------------- Getter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Loop methods --------------------

    //#region -------------------- Has / includes methods --------------------

    public hasOne(...values: readonly any[]): boolean {
        const array = this._array
        for (let value of values)
            if (array.includes(value))
                return true
        return false
    }

    public includesOne = this.hasOne


    public hasAll(...values: readonly any[]): boolean {
        const array = this._array
        for (let value of values)
            if (!array.includes(value))
                return false
        return true
    }

    public includesAll = this.hasAll

    //#endregion -------------------- Has / includes methods --------------------

    public abstract map<U, >(callback: (value: T, index: number,) => U,): CollectionHolder<U>

    public abstract mapIndex<U, >(callback: (index: number,) => U,): CollectionHolder<U>

    public forEach(callback: (value: T, index: number,) => void,): this {
        this._array.forEach(callback,)
        return this
    }

    public forEachIndex(callback: (index: number,) => void,): this {
        this._array.forEach((_, index,) => callback(index,),)
        return this
    }

    //#endregion -------------------- Loop methods --------------------

    public [Symbol.iterator](): Iterator<T> {
        return this._iterable[Symbol.iterator]()
    }

    //#region -------------------- Conversion methods --------------------

    public toArray(): readonly T[] {
        return Object.freeze([...this,])
    }

    public toMutableArray(): T[] {
        return [...this,]
    }

    public toSet(): ReadonlySet<T> {
        return Object.freeze(new Set(this,),)
    }

    public toMutableSet(): Set<T> {
        return new Set(this,)
    }


    public toString(): string {
        return this._array.toString()
    }

    public toLocaleString(): string {
        return this._array.toLocaleString()
    }

    //#endregion -------------------- Conversion methods --------------------

    //#endregion -------------------- Methods --------------------

}

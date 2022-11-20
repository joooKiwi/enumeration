import type {BasicFilterCallback, CollectionHolder, ForEachCallback, ForEachIndexCallback, MapCallback, MapIndexCallback, RestrainedFilterCallback} from "collection/CollectionHolder"

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

    public get count(): this["size"] {
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
    //#region -------------------- Join methods --------------------

    public join(separator?: string,): string {
        return this._array.join(separator,)
    }

    //#endregion -------------------- Join methods --------------------
    //#region -------------------- Filter methods --------------------

    public abstract filter<S extends T, >(callback: RestrainedFilterCallback<T, S>,): CollectionHolder<S>
    public abstract filter(callback: BasicFilterCallback<T>,): CollectionHolder<T>

    public filterNonNull(): CollectionHolder<NonNullable<T>>
    public filterNonNull() {
        return this.hasOne(null,)
            ? this.filter((value,): value is NonNullable<T> => value != null,)
            : this
    }

    //#endregion -------------------- Filter methods --------------------

    public abstract map<U, >(callback: MapCallback<T, U>,): CollectionHolder<U>

    public abstract mapIndex<U, >(callback: MapIndexCallback<U>,): CollectionHolder<U>

    public forEach(callback: ForEachCallback<T>,): this {
        this._array.forEach(callback,)
        return this
    }

    public forEachIndex(callback: ForEachIndexCallback,): this {
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

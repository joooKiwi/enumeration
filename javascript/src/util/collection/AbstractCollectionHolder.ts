import type {CollectionHolder}                                                                                                                                            from "collection/CollectionHolder"
import type {BooleanCallback, BooleanIndexCallback, ForEachCallback, ForEachIndexCallback, IsEmpty, IsNotEmpty, MapCallback, MapIndexCallback, RestrainedBooleanCallback} from "collection/CollectionHolder.types"

export abstract class AbstractCollectionHolder<T = unknown, >
    implements CollectionHolder<T> {

    //#region -------------------- Fields --------------------

    #size?: number
    #isEmpty?: IsEmpty<this>

    readonly #iterable
    #array?: readonly T[]
    #set?: ReadonlySet<T>

    #first?: NullOr<T>
    #last?: NullOr<T>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(iterable: Iterable<T>,) {
        this.#iterable = iterable
        if (iterable instanceof Array)
            this.#isEmpty = ((this.#size = (this.#array = Object.freeze(iterable)).length) === 0) as IsEmpty<this>
        else if (iterable instanceof Set)
            this.#isEmpty = ((this.#size = (this.#set = Object.freeze(iterable)).size) === 0) as IsEmpty<this>
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


    public get isEmpty(): IsEmpty<this> {
        return this.#isEmpty ??= (this.size === 0) as IsEmpty<this>
    }

    public get isNotEmpty(): IsNotEmpty<this> {
        return !this.isEmpty as IsNotEmpty<this>
    }

    //#endregion -------------------- Size methods --------------------

    /** The iterable received in the constructor */
    protected get _iterable(): Iterable<T> {
        return this.#iterable
    }

    /** The iterable (if it was an {@link Array}) or the values converted to an {@link Array} */
    protected get _array(): readonly T[] {
        return this.#array ??= this.toArray()
    }

    /** The iterable (if it was a {@link Set}) or the values converted to a {@link Set} */
    protected get _set(): ReadonlySet<T> {
        return this.#set ??= this.toSet()
    }

    //#endregion -------------------- Getter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Value methods --------------------

    public first(): NonNullable<T>
    public first<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>
    public first(callback: BooleanCallback<T>,): NonNullable<T>
    public first<S extends T, >(callback?: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            throw new ReferenceError("No element at the index 0 could be found since it it empty.")
        if (callback == null) {
            const element = this.firstOrNull()
            if (element == null)
                throw new ReferenceError("There is no element at the index 0 in the current EnumArray.")
            return element
        }
        const element = this.firstOrNull(callback)
        if (element == null)
            throw new ReferenceError("There is no element at the index 0 (from a filter) in the current EnumArray.")
        return element
    }

    public firstOrNull(): NullOr<T>
    public firstOrNull<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S
    public firstOrNull(callback: BooleanCallback<T>,): NullOr<T>
    public firstOrNull<S extends T, >(callback?: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            return null
        if (callback == null)
            return this.#first === undefined
                ? this.#first = this._array[0] ?? null
                : this.#first
        return this.find(callback)
    }

    public last(): NonNullable<T>
    public last<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>
    public last(callback: BooleanCallback<T>,): NonNullable<T>
    public last<S extends T, >(callback?: BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            throw new ReferenceError("No element at the index 0 could be found since it it empty.")
        if (callback == null) {
            const element = this.lastOrNull()
            if (element == null)
                throw new ReferenceError("There is no element at the last index in the current EnumArray.")
            return element
        }
        const element = this.lastOrNull(callback)
        if (element == null)
            throw new ReferenceError("There is no element at the last index (from a filter) in the current EnumArray.")
        return element
    }

    public lastOrNull(): NullOr<T>
    public lastOrNull<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S
    public lastOrNull(callback: BooleanCallback<T>,): NullOr<T>
    public lastOrNull<S extends T, >(callback?: BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            return null
        if (callback == null)
            return this.#last === undefined
                ? this.#last = this._array[this.size - 1] ?? null
                : this.#last
        return this.findLast(callback)
    }

    //#endregion -------------------- Value methods --------------------
    //#region -------------------- Loop methods --------------------

    /**
     * Create a new instance of an {@link CollectionHolder} from an {@link Iterable} value
     *
     * @param iterable The iterable to send to the new instance
     */
    protected abstract _new<U, >(iterable: Iterable<U>,): CollectionHolder<U>

    //#region -------------------- Has / includes / contains methods --------------------

    public hasOne(...values: readonly unknown[]): boolean {
        const array = this._array
        for (let value of values)
            if (array.includes(value as never))
                return true
        return false
    }

    public includesOne = this.hasOne

    public containsOne = this.hasOne


    public hasAll(...values: readonly unknown[]): boolean {
        const array = this._array
        for (let value of values)
            if (!array.includes(value as never))
                return false
        return true
    }

    public includesAll = this.hasAll

    public containsAll = this.hasAll

    //#endregion -------------------- Has / includes / contains methods --------------------
    //#region -------------------- Join methods --------------------

    public join(separator?: string,): string {
        return this._array.join(separator,)
    }

    //#endregion -------------------- Join methods --------------------
    //#region -------------------- Filter methods --------------------

    public filter<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public filter(callback: BooleanCallback<T>,): CollectionHolder<T>
    public filter<S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return this._new(this._array.filter(callback,),)
    }

    public filterByIndex(callback: BooleanIndexCallback,): CollectionHolder<T> {
        return this.filter((_, index,) => callback(index,))
    }


    public filterNot<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public filterNot(callback: BooleanCallback<T>,): CollectionHolder<T>
    public filterNot<S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return this._new(this._array.filter((value, index) => !callback(value, index,),),)
    }

    public filterNotByIndex(callback: BooleanIndexCallback,): CollectionHolder<T> {
        return this.filterNot((_, index,) => callback(index,),)
    }


    public filterNonNull(): CollectionHolder<NonNullable<T>>
    public filterNonNull() {
        return this.hasOne(null, undefined,)
            ? this.filter((value,): value is NonNullable<T> => value != null,)
            : this
    }

    //#endregion -------------------- Filter methods --------------------
    //#region -------------------- Find methods --------------------

    public find<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>
    public find(callback: BooleanCallback<T>,): NullOr<T>
    public find<S extends T, >(callback: | RestrainedBooleanCallback<T, S> | BooleanCallback<T>,) {
        return this._array.find((value, index,) => callback(value, index,),) ?? null
    }

    public findByIndex(callback: BooleanIndexCallback,): NullOr<T> {
        return this.find((_, index,) => callback(index,),)
    }


    public findIndex(callback: BooleanCallback<T>,): NullOr<number> {
        const indexFound = this._array.findIndex((value, index,) => callback(value, index,),)
        return indexFound == -1 ? null : indexFound
    }

    public findIndexByIndex(callback: BooleanIndexCallback,): NullOr<number> {
        return this.findIndex((_, index,) => callback(index,),)
    }


    public findLast<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>
    public findLast(callback: BooleanCallback<T>,): NullOr<T>
    public findLast<S extends T, >(callback: | RestrainedBooleanCallback<T, S> | BooleanCallback<T>,) {
        return this._array.findLast((value, index,) => callback(value, index,),) ?? null
    }

    public findLastByIndex(callback: BooleanIndexCallback,): NullOr<T> {
        return this.findLast((_, index,) => callback(index),)
    }

    public findLastIndex(callback: BooleanCallback<T>,): NullOr<number> {
        const indexFound = this._array.findLastIndex((value, index,) => callback(value, index,),)
        return indexFound == -1 ? null : indexFound
    }

    public findLastIndexByIndex(callback: BooleanIndexCallback,): NullOr<number> {
        return this.findLastIndex((_, index,) => callback(index,),)
    }

    //#endregion -------------------- Find methods --------------------

    public map<U, >(callback: MapCallback<T, U>,): CollectionHolder<U> {
        return this._new(this._array.map((value, index,) => callback(value, index,),),)
    }

    public mapIndex<U, >(callback: MapIndexCallback<U>,): CollectionHolder<U> {
        return this._new(this._array.map((_, index,) => callback(index,),),)
    }

    public forEach(callback: ForEachCallback<T>,): this {
        this._array.forEach((value, index,) => callback(value, index,),)
        return this
    }

    public forEachIndex(callback: ForEachIndexCallback,): this {
        this._array.forEach((_, index,) => callback(index,),)
        return this
    }

    //#endregion -------------------- Loop methods --------------------
    //#region -------------------- Iterator methods --------------------

    public* [Symbol.iterator](): IterableIterator<T> {
        yield* this._iterable
    }

    //#endregion -------------------- Iterator methods --------------------
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

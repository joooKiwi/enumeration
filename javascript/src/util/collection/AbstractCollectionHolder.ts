/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, NullOr, UndefinedOr}                                                                                                                                                                                                                                                                                                                    from "../../general type"
import type {CollectionHolder}                                                                                                                                                                                                                                                                                                                                 from "./CollectionHolder"
import type {BooleanCallback, BooleanIndexCallback, CollectionHolderName, FilterNonNull, IndexValueCallback, IndexValueWithReturnCallback, IndexWithReturnCallback, IsEmpty, IsNotEmpty, ValueWithStringReturnCallback, RestrainedBooleanCallback, ReverseBooleanCallback, ReverseRestrainedBooleanCallback, ValueIndexCallback, ValueIndexWithReturnCallback} from "./CollectionHolder.types"

export abstract class AbstractCollectionHolder<const T = unknown, >
    implements CollectionHolder<T> {

    //#region -------------------- Fields --------------------

    [index: number]: UndefinedOr<T>

    readonly #size: number
    readonly #isEmpty: IsEmpty<this>

    readonly #reference: Iterable<T>
    readonly #array: readonly T[]
    #set?: ReadonlySet<T>
    #weakSet?: Readonly<WeakSet<&T & object>>

    #hasNull?: boolean

    readonly #first: NullOr<T>
    readonly #last: NullOr<T>

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(iterable: Iterable<T>,) {
        //TODO implement the proxy pattern to have the index retrieved only when needed
        this.#reference = iterable

        if (iterable instanceof Array) {
            const size = this.#size = iterable.length
            if (size == 0) {
                this.#isEmpty = true as IsEmpty<this>
                this.#hasNull = false
                this.#first = this.#last = null
                this.#array = Object.freeze([],)
                return
            }

            this.#isEmpty = false as IsEmpty<this>
            if (size == 1) {
                const value = this.#first = this.#last = this[0] = iterable[0]
                this.#array = Object.freeze([value,],)
                return
            }

            const array = new Array(size,)
            this.#first = this[0] = array[0] = iterable[0]
            this.#last = this[size - 1] = array[size - 1] = iterable[size - 1]
            let index = size - 1
            while (index-- > 1)
                this[index] = array[index] = iterable[index]
            this.#array = Object.freeze(array,)
            return
        }

        if (iterable instanceof Set) {
            const size: number = this.#size = iterable.size
            if (size == 0) {
                this.#isEmpty = true as IsEmpty<this>
                this.#hasNull = false
                this.#first = this.#last = null
                this.#array = Object.freeze([],)
                return
            }

            this.#isEmpty = false as IsEmpty<this>
            if (size == 1) {
                const value = this.#first = this.#last = this[0] = iterable[Symbol.iterator]().next().value
                this.#array = Object.freeze([value,],)
                return
            }

            const array = new Array(size,)
            const iterator = iterable[Symbol.iterator]() as IterableIterator<T>
            this.#first = this[0] = array[0] = iterator.next().value
            let index = size,
                last = null as NullOr<T>
            while (index-- > 0)
                this[index] = array[index] = last = iterator.next().value
            this.#last = last
            this.#array = Object.freeze(array,)
            return
        }

        const iterator = iterable[Symbol.iterator]() as IterableIterator<T>
        let value = iterator.next()
        if (value.done) {
            this.#size = 0
            this.#isEmpty = true as IsEmpty<this>
            this.#hasNull = false
            this.#first = this.#last = null
            this.#array = Object.freeze([],)
            return
        }

        const array = []
        this.#isEmpty = false as IsEmpty<this>
        const first = this.#first = this[0] = array[0] = value.value
        value = iterator.next()
        let size = 1,
            last = first as NullOr<T>
        while (!value.done) {
            this[size] = array[size] = last = value.value
            value = iterator.next()
            size++
        }
        this.#size = size
        this.#last = last
        this.#array = Object.freeze(array,)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    //#region -------------------- Size methods --------------------

    public get size(): number {
        return this.#size
    }

    public get length(): this["size"] {
        return this.size
    }

    public get count(): this["size"] {
        return this.size
    }


    public get isEmpty(): IsEmpty<this> {
        return this.#isEmpty
    }

    public get isNotEmpty(): IsNotEmpty<this> {
        return !this.isEmpty as IsNotEmpty<this>
    }

    //#endregion -------------------- Size methods --------------------
    //#region -------------------- Has X methods --------------------

    public get hasNull(): boolean {
        if (this.#hasNull == null) {
            const size = this.size
            let index = -1
            while (++index < size)
                if (this[index] == null)
                    return this.#hasNull = true
            return this.#hasNull = false
        }
        return this.#hasNull
    }

    public get includesNull(): this['hasNull'] {
        return this.hasNull
    }

    public get containsNull(): this['hasNull'] {
        return this.hasNull
    }

    //#endregion -------------------- Has X methods --------------------

    /** The iterable received in the constructor */
    protected get _reference(): Iterable<T> {
        return this.#reference
    }

    /** The {@link Array} stored (from the construction) for the current {@link AbstractCollectionHolder collection} */
    protected get _array(): readonly T[] {
        return this.#array
    }

    //#endregion -------------------- Getter methods --------------------
    //#region -------------------- Methods --------------------

    /**
     * Create a new instance of an {@link CollectionHolder} from an {@link Iterable} value
     *
     * @param iterable The iterable to send to the new instance
     */
    protected abstract _new<const U, >(iterable: Iterable<U>,): CollectionHolder<U>

    //#region -------------------- Value methods --------------------

    //#region -------------------- Get / at methods --------------------

    public get(index: number,): T {
        if (this.isEmpty)
            throw new ReferenceError("No element at any index could be found since it it empty.",)
        const size = this.size,
            indexToRetrieve = index < 0 ? size + index : index
        if (indexToRetrieve < 0)
            throw new ReferenceError(`The index ${index}${index === indexToRetrieve ? "" : ` (${indexToRetrieve} after calculation)`} is under 0.`,)
        if (indexToRetrieve > size)
            throw new ReferenceError(`The index ${index}${index === indexToRetrieve ? "" : ` (${indexToRetrieve} after calculation)`} is over the size of the collection (${size}).`,)
        return this[indexToRetrieve]!
    }

    public at(index: number,): T {
        return this.get(index,)
    }


    public getOrElse<U, >(index: number, defaultValue: IndexWithReturnCallback<U>,): | T | U
    public getOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,): T
    public getOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,) {
        if (this.isEmpty)
            return defaultValue(index < 0 ? this.size + index : index)
        const size = this.size,
            indexToRetrieve = index < 0 ? size + index : index
        return indexToRetrieve > size || indexToRetrieve < 0 ? defaultValue(indexToRetrieve,) : this[indexToRetrieve]
    }

    public atOrElse<U, >(index: number, defaultValue: IndexWithReturnCallback<U>,): | T | U
    public atOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,): T
    public atOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,) {
        return this.getOrElse(index, defaultValue,)
    }


    public getOrNull(index: number,): NullOr<T> {
        if (this.isEmpty)
            return null
        const size = this.size,
            indexToRetrieve = index < 0 ? size + index : index
        return indexToRetrieve > size || indexToRetrieve < 0 ? null : this[indexToRetrieve]!
    }

    public atOrNull(index: number,): NullOr<T> {
        return this.getOrNull(index,)
    }

    //#endregion -------------------- Get / at methods --------------------

    public first(): NonNullable<T>
    public first<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>
    public first(callback: BooleanCallback<T>,): NonNullable<T>
    public first<const S extends T, >(callback?: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            throw new ReferenceError("No element at the index 0 could be found since it it empty.",)
        if (callback == null) {
            const element = this.firstOrNull()
            if (element == null)
                throw new ReferenceError("The first element is null in the collection.",)
            return element
        }
        const element = this.firstOrNull(callback,)
        if (element == null)
            throw new ReferenceError("The first element (with filter) is null in the collection.",)
        return element
    }

    public firstOrNull(): NullOr<T>
    public firstOrNull<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S
    public firstOrNull(callback: BooleanCallback<T>,): NullOr<T>
    public firstOrNull<const S extends T, >(callback?: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            return null
        if (callback != null)
            return this.find(callback,)

        return this.#first
    }


    public last(): NonNullable<T>
    public last<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>
    public last(callback: BooleanCallback<T>,): NonNullable<T>
    public last<const S extends T, >(callback?: BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            throw new ReferenceError("No element at the index 0 could be found since it it empty.",)
        if (callback == null) {
            const element = this.lastOrNull()
            if (element == null)
                throw new ReferenceError("The last element is null in the collection.",)
            return element
        }
        const element = this.lastOrNull(callback,)
        if (element == null)
            throw new ReferenceError("The last element (with filter) is null in the collection.",)
        return element
    }

    public lastOrNull(): NullOr<T>
    public lastOrNull<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S
    public lastOrNull(callback: BooleanCallback<T>,): NullOr<T>
    public lastOrNull<const S extends T, >(callback?: BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        if (this.isEmpty)
            return null
        if (callback != null)
            return this.findLast(callback,)

        return this.#last
    }

    //#endregion -------------------- Value methods --------------------
    //#region -------------------- Loop methods --------------------

    //#region -------------------- Has / includes / contains methods --------------------

    public hasOne(...values: readonly unknown[]): boolean {
        const size = this.size
        if (size === 0)
            return false

        const valueSize = values.length
        if (valueSize === 0)
            return true

        const array = this._array
        if(valueSize === 1)
            return array.includes(values[0] as never,)

        let valueIndex = -1
        while (++valueIndex < valueSize)
            if(array.includes(values[valueIndex] as never,))
                return true
        return false
    }

    public includesOne(...values: readonly unknown[]): boolean {
        return this.hasOne(...values,)
    }

    public containsOne(...values: readonly unknown[]): boolean {
        return this.hasOne(...values,)
    }


    public hasAll(...values: readonly unknown[]): boolean {
        const size = this.size
        if (size === 0)
            return false

        const valueSize = values.length
        if (valueSize === 0)
            return true

        const array = this._array
        if(valueSize === 1)
            return array.includes(values[0] as never,)

        let valueIndex = -1
        while (++valueIndex < valueSize)
            if(!array.includes(values[valueIndex] as never,))
                return false
        return true
    }

    public includesAll(...values: readonly unknown[]): boolean {
        return this.hasAll(...values,)
    }

    public containsAll(...values: readonly unknown[]): boolean {
        return this.hasAll(...values,)
    }

    //#endregion -------------------- Has / includes / contains methods --------------------
    //#region -------------------- Join methods --------------------

    public join(separator: Nullable<string> = null, prefix: Nullable<string> = null, postfix: Nullable<string> = null, limit: Nullable<number> = null, truncated: Nullable<string> = null, transform: Nullable<ValueWithStringReturnCallback<T>> = null,): string {
        const size = this.size
        separator ??= ", "
        transform ??= it => `${it}`

        let string = ''
        const hasALimit = limit != null
        const sizeMinus1 = (limit == null ? size : limit < 0 ? size + limit : limit) - 1
        let index = -1
        while (++index < sizeMinus1)
            string += `${transform(this[index]!)}${separator}`
        return `${prefix ?? '['}${string}${transform(this[index]!)}${hasALimit ? `${separator}${truncated ?? '…'}` : ''}${postfix ?? ']'}`
    }

    //#endregion -------------------- Join methods --------------------
    //#region -------------------- Filter methods --------------------

    public filter<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public filter(callback: BooleanCallback<T>,): CollectionHolder<T>
    public filter<const S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return this._new(this._array.filter((value, index,) => callback(value, index,),),)
    }

    public filterByIndex<const S extends T, >(callback: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public filterByIndex(callback: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public filterByIndex<const S extends T, >(callback: | ReverseRestrainedBooleanCallback<T, S> | ReverseBooleanCallback<T>,) {
        return this._new(this._array.filter((value, index,) => callback(index, value,),),)
    }


    public filterNot<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public filterNot(callback: BooleanCallback<T>,): CollectionHolder<T>
    public filterNot<const S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return this._new(this._array.filter((value, index,) => !callback(value, index,),),)
    }

    public filterNotByIndex<const S extends T, >(callback: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public filterNotByIndex(callback: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public filterNotByIndex<const S extends T, >(callback: | ReverseRestrainedBooleanCallback<T, S> | ReverseBooleanCallback<T>,) {
        return this._new(this._array.filter((value, index,) => !callback(index, value,),),)
    }


    public filterNonNull(): FilterNonNull<T, this>
    public filterNonNull() {
        return this.hasNull ? this._new(this._array.filter(it => it != null)) : this
    }

    //#endregion -------------------- Filter methods --------------------
    //#region -------------------- Find methods --------------------

    public find<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>
    public find(callback: BooleanCallback<T>,): NullOr<T>
    public find<const S extends T, >(callback: | RestrainedBooleanCallback<T, S> | BooleanCallback<T>,) {
        return this._array.find((value, index,) => callback(value, index,),) ?? null
    }

    public findByIndex<const S extends T, >(callback: ReverseRestrainedBooleanCallback<T, S>,): NullOr<S>
    public findByIndex(callback: ReverseBooleanCallback<T>,): NullOr<T>
    public findByIndex<const S extends T, >(callback: | ReverseRestrainedBooleanCallback<T, S> | ReverseBooleanCallback<T>,) {
        return this._array.find((value, index,) => callback(index, value,),) ?? null
    }


    public findIndex(callback: BooleanCallback<T>,): NullOr<number> {
        const indexFound = this._array.findIndex((value, index,) => callback(value, index,),)
        return indexFound == -1 ? null : indexFound
    }

    public findIndexByIndex(callback: BooleanIndexCallback,): NullOr<number> {
        const indexFound = this._array.findIndex((_, index,) => callback(index,),)
        return indexFound == -1 ? null : indexFound
    }


    public findLast<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>
    public findLast(callback: BooleanCallback<T>,): NullOr<T>
    public findLast<const S extends T, >(callback: | RestrainedBooleanCallback<T, S> | BooleanCallback<T>,) {
        let index = this.size
        while (--index > 0) {
            const value = this[index]!
            if (callback(value, index,))
                return value
        }
        return null
    }

    public findLastByIndex(callback: BooleanIndexCallback,): NullOr<T> {
        let index = this.size
        while (--index > 0)
            if (callback(index,))
                return this[index]!
        return null
    }

    public findLastIndex(callback: BooleanCallback<T>,): NullOr<number> {
        let index = this.size
        while (--index > 0)
            if (callback(this[index]!, index,))
                return index
        return null
    }

    public findLastIndexByIndex(callback: BooleanIndexCallback,): NullOr<number> {
        let index = this.size
        while (--index > 0)
            if (callback(index,))
                return index
        return null
    }

    //#endregion -------------------- Find methods --------------------

    public map<const U, >(callback: ValueIndexWithReturnCallback<T, U>,): CollectionHolder<U> {
        return this._new(this._array.map((value, index,) => callback(value, index,),),)
    }

    public mapIndex<const U, >(callback: IndexValueWithReturnCallback<T, U>,): CollectionHolder<U> {
        return this._new(this._array.map((value, index,) => callback(index, value,),),)
    }

    public forEach(callback: ValueIndexCallback<T>,): this {
        const size = this.size
        let index = -1
        while (++index < size)
            callback(this[index]!, index,)
        return this
    }

    public forEachIndex(callback: IndexValueCallback<T>,): this {
        const size = this.size
        let index = -1
        while (++index < size)
            callback(index, this[index]!,)
        return this
    }


    public reverse(fromIndex: Nullable<number> = null, toIndex: Nullable<number> = null,): CollectionHolder<T> {
        const size = this.size
        let startingIndex = fromIndex ?? 0,
            endingIndex = toIndex ?? size

        if (fromIndex != null) {
            if (startingIndex < 0)
                startingIndex = size + startingIndex
            if (startingIndex < 0)
                throw new RangeError(`The starting index "${fromIndex}" is under 0 after calculation from "${size} - ${Math.abs(fromIndex)}".`,)
            if (startingIndex > size)
                throw new RangeError(`The starting index "${fromIndex}" is over the collection size "${size}".`,)
        }
        if (toIndex != null) {
            if (endingIndex < 0)
                endingIndex = size + endingIndex
            if (endingIndex < 0)
                throw new RangeError(`The ending index "${toIndex}" is under 0 after calculation from "${size} - ${Math.abs(toIndex)}".`,)
            if (endingIndex > size)
                throw new RangeError(`The ending index "${toIndex}" is over the collection size "${size}".`,)
        }
        if (endingIndex < startingIndex)
            throw new RangeError(`The ending index "${toIndex}"${(toIndex == startingIndex ? '' : ` ("${startingIndex}" after calculation)`)} is over the starting index "${fromIndex}"${fromIndex == endingIndex ? '' : `("${endingIndex}" after calculation)`}.`,)

        const $this = this
        return this._new({
            * [Symbol.iterator]() {
                let index = endingIndex
                while (--index >= startingIndex)
                    yield $this[index]!
            },
        },)
    }

    //#endregion -------------------- Loop methods --------------------
    //#region -------------------- Javascript methods --------------------

    public* [Symbol.iterator](): IterableIterator<T> {
        const size = this.size
        let index = -1
        while (++index < size)
            yield this[index]!
    }

    public get [Symbol.toStringTag](): CollectionHolderName {
        return "CollectionHolder"
    }

    //#endregion -------------------- Javascript methods --------------------
    //#region -------------------- Conversion methods --------------------

    public toArray(): readonly T[] {
        return this._array
    }

    public toMutableArray(): T[] {
        const size = this.size
        const array = new Array<T>(size,)
        let index = size
        while (index-- > 0)
            array[index] = this[index]!
        return array
    }

    public toSet(): ReadonlySet<T> {
        return this.#set ??= Object.freeze(new Set(this,),)
    }

    public toMutableSet(): Set<T> {
        return new Set(this,)
    }

    public toWeakSet(): Readonly<WeakSet<& T & object>> {
        return this.#weakSet ??= Object.freeze(this.toMutableWeakSet())
    }

    public toMutableWeakSet(): WeakSet<& T & object> {
        const size = this.size,
            $this = this
        return new WeakSet({
            * [Symbol.iterator](): IterableIterator<& T & object> {
                let index = -1
                while (++index < size)
                    yield Object($this[index]!)
            }
        },)
    }


    public toString(): string {
        return this.join()
    }

    public toLocaleString(): string {
        return this.join(null, null, null, null, null, it => it?.toLocaleString() ?? `${it}`,)
    }

    //#endregion -------------------- Conversion methods --------------------

    //#endregion -------------------- Methods --------------------

}

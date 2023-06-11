import type {Nullable, NullOr, UndefinedOr}                                                                                                                                                            from "../../general type"
import type {CollectionHolder}                                                                                                                                                                         from "./CollectionHolder"
import type {BooleanCallback, BooleanIndexCallback, FilterNonNull, ForEachCallback, ForEachIndexCallback, IsEmpty, IsNotEmpty, JoinCallback, MapCallback, MapIndexCallback, RestrainedBooleanCallback} from "./CollectionHolder.types"

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
                const value = this.#first = this.#last = iterable[0]
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
                const value = this.#first = this.#last = iterable[Symbol.iterator]().next().value
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
        this.#first = this[0] = array[0] = value.value
        value = iterator.next()
        let size = 1,
            last = null as NullOr<T>
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

    public get includesNull() {
        return this.hasNull
    }

    public get containsNull() {
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

    public first(): NonNullable<T>
    public first<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>
    public first(callback: BooleanCallback<T>,): NonNullable<T>
    public first<const S extends T, >(callback?: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
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
        if(size === 1)
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
        if(size === 1)
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

    public join(separator: Nullable<string> = null, prefix: Nullable<string> = null, postfix: Nullable<string> = null, limit: Nullable<number> = null, truncated: Nullable<string> = null, transform: Nullable<JoinCallback<T>> = null,): string {
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

    public filterByIndex(callback: BooleanIndexCallback,): CollectionHolder<T> {
        return this._new(this._array.filter((_, index,) => callback(index,),),)
    }


    public filterNot<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public filterNot(callback: BooleanCallback<T>,): CollectionHolder<T>
    public filterNot<const S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return this._new(this._array.filter((value, index,) => !callback(value, index,),),)
    }

    public filterNotByIndex(callback: BooleanIndexCallback,): CollectionHolder<T> {
        return this._new(this._array.filter((_, index,) => !callback(index,),),)
    }


    public filterNonNull(): CollectionHolder<NonNullable<T>>
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

    public findByIndex(callback: BooleanIndexCallback,): NullOr<T> {
        return this._array.find((_, index,) => callback(index,),) ?? null
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

    public map<const U, >(callback: MapCallback<T, U>,): CollectionHolder<U> {
        return this._new(this._array.map((value, index,) => callback(value, index,),),)
    }

    public mapIndex<const U, >(callback: MapIndexCallback<U>,): CollectionHolder<U> {
        return this._new(this._array.map((_, index,) => callback(index,),),)
    }

    public forEach(callback: ForEachCallback<T>,): this {
        const size = this.size
        let index = -1
        while (++index < size)
            callback(this[index]!, index,)
        return this
    }

    public forEachIndex(callback: ForEachIndexCallback,): this {
        const size = this.size
        let index = -1
        while (++index < size)
            callback(index,)
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
        return this.join(null, '[', ']',)
    }

    public toLocaleString(): string {
        return this.join(null, '[', ']', null, null, it => it?.toLocaleString() ?? `${it}`,)
    }

    //#endregion -------------------- Conversion methods --------------------

    //#endregion -------------------- Methods --------------------

}

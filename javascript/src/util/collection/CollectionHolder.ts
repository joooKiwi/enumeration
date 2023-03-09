import type {NullOr} from "../../type"

/**
 * A collection to hold another collection and do some generic stuff if applicable.
 *
 * It is used for holding the {@link Enum} collection of instances by names, ordinals or instance.
 *
 * It also has some methods that are applicable for both {@link Array} & {@link Set} to give options.
 */
export interface CollectionHolder<T = any, > {

    //#region -------------------- Size methods --------------------

    /** Get the size (length or count) of the current {@link CollectionHolder collection} */
    get size(): number

    /** Get the length (size or count) of the current {@link CollectionHolder collection} */
    get length(): this["size"]

    /** Get the count (length or count) of the current {@link CollectionHolder collection} */
    get count(): this["size"]

    //#endregion -------------------- Size methods --------------------
    //#region -------------------- Loop methods --------------------

    //#region -------------------- Has / includes / contains methods --------------------

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see includesOne
     */
    hasOne(...values: readonly unknown[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasOne
     */
    includesOne(...values: readonly unknown[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasOne
     */
    containsOne(...values: readonly unknown[]): boolean


    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see includesAll
     */
    hasAll(...values: readonly unknown[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasAll
     */
    includesAll(...values: readonly unknown[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasAll
     */
    containsAll(...values: readonly unknown[]): boolean

    //#endregion -------------------- Has / includes / contains methods --------------------
    //#region -------------------- Join methods --------------------

    /**
     * Get a new {@link String} separated by a separator (or a comma by default)
     *
     * @param separator The separator for the result (or a comma by default)
     */
    join(separator?: string,): string

    //#endregion -------------------- Join methods --------------------
    //#region -------------------- Filter methods --------------------

    /**
     * Get a new collection from the {@link CollectionHolder condition} returned by the callback
     *
     * @param callback The restrained filter callback
     */
    filter<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>

    /**
     * Get a new collection from the {@link CollectionHolder condition} returned by the callback.
     *
     * @param callback The filter callback
     */
    filter(callback: BooleanCallback<T>,): CollectionHolder<T>

    /**
     * Get a new collection from the {@link CollectionHolder condition} returned by the index callback.
     *
     * @param callback The filter index callback
     */
    filterByIndex(callback: BooleanIndexCallback,): CollectionHolder<T>

    /** Remove any items that is <b>null</b> or <b>undefined</b> & return a new collection */
    filterNonNull(): CollectionHolder<NonNullable<T>>

    //#endregion -------------------- Filter methods --------------------
    //#region -------------------- Find methods --------------------

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The restrained find callback
     */
    find<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     */
    find(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     */
    findByIndex(callback: BooleanIndexCallback,): NullOr<T>


    /**
     * Get the first index found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     */
    findIndex(callback: BooleanCallback<T>,): NullOr<number>

    /**
     * Get the first index found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     */
    findIndexByIndex(callback: BooleanIndexCallback,): NullOr<number>

    //#endregion -------------------- Find methods --------------------

    /**
     * Loop over the {@link CollectionHolder collection}
     * while creating a new {@link CollectionHolder collection} after-end
     *
     * @param callback The callback to retrieve the result
     */
    map<U, >(callback: MapCallback<T, U>,): CollectionHolder<U>

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * while creating a new {@link CollectionHolder collection} after-end
     *
     * @param callback The callback to retrieve the result
     */
    mapIndex<U>(callback: MapIndexCallback<U>,): CollectionHolder<U>


    /**
     * Loop over the {@link CollectionHolder collection}
     * and return the same instance after the loop
     *
     * @param callback The callback for each element
     */
    forEach(callback: ForEachCallback<T>,): this

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * and return the same instance after the loop
     *
     * @param callback The callback for each element
     */
    forEachIndex(callback: ForEachIndexCallback,): this

    //#endregion -------------------- Loop methods --------------------
    //#region -------------------- Iterator methods --------------------

    /** A Javascript way to implements a "for‥of" over the {@link CollectionHolder collection} */
    [Symbol.iterator](): IterableIterator<T>

    //#endregion -------------------- Iterator methods --------------------
    //#region -------------------- Conversion methods --------------------

    /** Convert the {@link CollectionHolder current collection} to a new {@link ReadonlyArray array} */
    toArray(): readonly T[]

    /** Convert the {@link CollectionHolder current collection} to a new {@link Array mutable array} */
    toMutableArray(): T[]

    /** Convert the {@link CollectionHolder current collection} to a new {@link ReadonlySet set} */
    toSet(): ReadonlySet<T>

    /** Convert the {@link CollectionHolder current collection} to a new {@link Set mutable set} */
    toMutableSet(): Set<T>


    /**
     * Convert the {@link CollectionHolder current collection} to string using the {@link Array.toString} method
     *
     * @see Array.toString
     */
    toString(): string

    /**
     * Convert the {@link CollectionHolder current collection} to string using the {@link Array.toLocaleString} method
     *
     * @see Array.toLocaleString
     */
    toLocaleString(): string

    //#endregion -------------------- Conversion methods --------------------

}

//#region -------------------- Types --------------------

export type BooleanCallback<T, > = (value: T, index: number,) => boolean
export type BooleanIndexCallback = (index: number,) => boolean
export type RestrainedBooleanCallback<T, S extends T, > = (value: T, index: number,) => value is S

export type MapCallback<T, U> = (value: T, index: number,) => U
export type MapIndexCallback<U> = (index: number,) => U

export type ForEachCallback<T> = (value: T, index: number,) => void
export type ForEachIndexCallback = (index: number,) => void

//#endregion -------------------- Types --------------------

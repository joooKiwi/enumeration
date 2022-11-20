/**
 * A collection to hold another collection and do some generic stuff if applicable.
 *
 * It is used for holding the {@link Enum} collection of instances by names, ordinals or instance.
 */
export interface CollectionHolder<T = any, >
    extends Iterable<T> {

    //#region -------------------- Size methods --------------------

    /** Get the size (length or count) of the current {@link CollectionHolder collection} */
    get size(): number

    /** Get the length (size or count) of the current {@link CollectionHolder collection} */
    get length(): this["size"]

    /** Get the count (length or count) of the current {@link CollectionHolder collection} */
    get count(): this["size"]

    //#endregion -------------------- Size methods --------------------
    //#region -------------------- Loop methods --------------------

    //#region -------------------- Has / includes methods --------------------

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder collection}
     *
     * @param values The values to compare
     */
    hasOne(...values: readonly any[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder collection}
     *
     * @param values The values to compare
     */
    includesOne(...values: readonly any[]): boolean


    /**
     * Tell that every value received in the current {@link CollectionHolder collection}
     *
     * @param values The values to compare
     */
    hasAll(...values: readonly any[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder collection}
     *
     * @param values The values to compare
     */
    includesAll(...values: readonly any[]): boolean

    //#endregion -------------------- Has / includes methods --------------------
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
    filter<S extends T, >(callback: RestrainedFilterCallback<T, S>,): CollectionHolder<S>


    /**
     * Get a new collection from the {@link CollectionHolder condition} returned by the callback.
     *
     * @param callback The basic filter callback
     */
    filter(callback: BasicFilterCallback<T>,): CollectionHolder<T>

    /**
     * Remove any items that is <b>null</b> or <b>undefined</b> & return a new collection
     *
     * @see whereNonNull
     */
    filterNonNull(): CollectionHolder<NonNullable<T>>

    //#endregion -------------------- Filter methods --------------------

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

export type BasicFilterCallback<T, > = (value: T, index: number,) => boolean
export type RestrainedFilterCallback<T, S extends T, > = (value: T, index: number,) => value is S

export type MapCallback<T, U> = (value: T, index: number,) => U
export type MapIndexCallback<U> = (index: number,) => U

export type ForEachCallback<T> = (value: T, index: number,) => void
export type ForEachIndexCallback = (index: number,) => void

//#endregion -------------------- Types --------------------

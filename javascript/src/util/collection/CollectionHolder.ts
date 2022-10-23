/**
 * A collection to hold another collection and do some generic stuff if applicable.
 *
 * It is used for holding the {@link Enum} collection of instances by names, ordinals or instance.
 */
export interface CollectionHolder<T = any, >
    extends Iterable<T> {

    //#region -------------------- Size methods --------------------

    /** Get the size (or length) of the current {@link CollectionHolder collection} */
    get size(): number

    /** Get the length (or size) of the current {@link CollectionHolder collection} */
    get length(): this["size"]

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

    /**
     * Loop over the {@link CollectionHolder collection}
     * while creating a new {@link CollectionHolder collection} after-end
     */
    map<U, >(callback: (value: T, index: number,) => U,): CollectionHolder<U>

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * while creating a new {@link CollectionHolder collection} after-end
     */
    mapIndex<U>(callback: (index: number,) => U,): CollectionHolder<U>


    /**
     * Loop over the {@link CollectionHolder collection}
     * and return the same instance after the loop
     */
    forEach(callback: (value: T, index: number,) => void,): this

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * and return the same instance after the loop
     */
    forEachIndex(callback: (index: number,) => void): this

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

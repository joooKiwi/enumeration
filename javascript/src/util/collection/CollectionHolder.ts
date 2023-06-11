import type {Nullable, NullOr, UndefinedOr}                                                                                                                                                            from "../../general type"
import type {BooleanCallback, BooleanIndexCallback, FilterNonNull, ForEachCallback, ForEachIndexCallback, IsEmpty, IsNotEmpty, JoinCallback, MapCallback, MapIndexCallback, RestrainedBooleanCallback} from "./CollectionHolder.types"

/**
 * A collection to hold another collection and do some generic stuff if applicable.
 *
 * It is used for holding a collection of {@link Enumerable.name names}, {@link Enumerable.ordinal ordinals} or {@link Enumerable Enumerable instances}.
 *
 * It also has some methods that are applicable for both {@link Array} & {@link Set} to give options.
 * Some methods are inspired by other languages to give more cross-language functionality.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array Javascript Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set Javascript Set
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/ Kotlin Collection
 * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable C# Enumerable
 */
export interface CollectionHolder<T = unknown, > {

    [index: number]: UndefinedOr<T>

    //#region -------------------- Size methods --------------------

    /** Get the size ({@link CollectionHolder.length length} or {@link CollectionHolder.count count}) of the current {@link CollectionHolder collection} */
    get size(): number

    /** Get the length ({@link CollectionHolder.size size} or {@link CollectionHolder.count count}) of the current {@link CollectionHolder collection} */
    get length(): this["size"]

    /** Get the count ({@link CollectionHolder.length length} or {@link CollectionHolder.count count}) of the current {@link CollectionHolder collection} */
    get count(): this["size"]

    /**
     * The {@link CollectionHolder collection} has no values
     *
     * @see isNotEmpty
     */
    get isEmpty(): IsEmpty<this>

    /**
     * The {@link CollectionHolder collection} has at least one value
     *
     * @see isEmpty
     */
    get isNotEmpty(): IsNotEmpty<this>

    //#endregion -------------------- Size methods --------------------
    //#region -------------------- Has null methods --------------------

    /**
     * The {@link CollectionHolder} has at least one <b>null</b> or <b>undefined</b>
     *
     * @see includesNull
     * @see containsNull
     */
    get hasNull(): boolean

    /**
     * The {@link CollectionHolder} has at least one <b>null</b> or <b>undefined</b>
     *
     * @alias {@link hasNull}
     */
    get includesNull(): this["hasNull"]

    /**
     * The {@link CollectionHolder} has at least one <b>null</b> or <b>undefined</b>
     *
     * @alias {@link hasNull}
     */
    get containsNull(): this["hasNull"]

    //#endregion -------------------- Has null methods --------------------
    //#region -------------------- Value methods --------------------

    /**
     * Get the first element
     *
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @throws {ReferenceError} The element was <b>null</b> or <b>undefined</b>
     */
    first(): NonNullable<T>

    /**
     * Get the first element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     */
    first(callback: BooleanCallback<T>,): NonNullable<T>

    /**
     * Get the first element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     */
    first<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>


    /** Get the first element or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty} */
    firstOrNull(): NullOr<T>

    /**
     * Get the first element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     */
    firstOrNull(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the first element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     */
    firstOrNull<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S


    /**
     * Get the last element
     *
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @throws {ReferenceError} The element was <b>null</b> or <b>undefined</b>
     */
    last(): NonNullable<T>

    /**
     * Get the last element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     */
    last(callback: BooleanCallback<T>,): NonNullable<T>

    /**
     * Get the last element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     */
    last<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>


    /** Get the last element or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty} */
    lastOrNull(): NullOr<T>

    /**
     * Get the last element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     */
    lastOrNull(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the last element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     */
    lastOrNull<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S

    //#endregion -------------------- Value methods --------------------
    //#region -------------------- Loop methods --------------------

    //#region -------------------- Has / includes / contains methods --------------------

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see includesOne
     * @see containsOne
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     */
    hasOne(...values: readonly unknown[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasOne
     * @see containsOne
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     */
    includesOne(...values: readonly unknown[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasOne
     * @see includesOne
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     */
    containsOne(...values: readonly unknown[]): boolean


    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see includesAll
     * @see containsAll
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     */
    hasAll(...values: readonly unknown[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasAll
     * @see containsAll
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     */
    includesAll(...values: readonly unknown[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see hasAll
     * @see includesAll
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     */
    containsAll(...values: readonly unknown[]): boolean

    //#endregion -------------------- Has / includes / contains methods --------------------
    //#region -------------------- Join methods --------------------

    /**
     * Get a new {@link String} separated by a separator
     *
     * @param separator The separator for the result (<b>", "</b> by default)
     * @param prefix The character before the join (<b>''</b> by default)
     * @param postfix The character after the join (<b>''</b> by default)
     * @param limit The maximum amount of values in the join (<b>null</b> by default)
     * @param truncated The truncated string if there is a limit (<b>'…'</b> by default)
     * @param transform A callback to transform into a {@link String}
     *
     * @canReceiveNegativeValue
     * @see ReadonlyArray.join
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/join-to-string.html Kotlin joinToString()
     */
    join(separator?: Nullable<string>, prefix?: Nullable<string>, postfix?: Nullable<string>, limit?: Nullable<number>, truncated?: Nullable<string>, transform?: Nullable<JoinCallback<T>>,): string

    //#endregion -------------------- Join methods --------------------
    //#region -------------------- Filter methods --------------------

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the callback
     *
     * @param callback The restrained filter callback
     * @see ReadonlyArray.filter
     * @see filterNot
     */
    filter<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the callback.
     *
     * @param callback The filter callback
     * @see ReadonlyArray.filter
     * @see filterNot
     */
    filter(callback: BooleanCallback<T>,): CollectionHolder<T>

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the index callback.
     *
     * @param callback The filter index callback
     * @see ReadonlyArray.filter
     * @see filterNotByIndex
     */
    filterByIndex(callback: BooleanIndexCallback,): CollectionHolder<T>


    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the callback
     *
     * @param callback The restrained filter callback
     * @see ReadonlyArray.filter
     * @see filter
     */
    filterNot<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>

    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the callback.
     *
     * @param callback The filter callback
     * @see ReadonlyArray.filter
     * @see filter
     */
    filterNot(callback: BooleanCallback<T>,): CollectionHolder<T>

    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the index callback.
     *
     * @param callback The filter index callback
     * @see ReadonlyArray.filter
     * @see filterByIndex
     */
    filterNotByIndex(callback: BooleanIndexCallback,): CollectionHolder<T>


    /**
     * Remove any items that is <b>null</b> or <b>undefined</b> & return a new {@link CollectionHolder collection}.
     *
     * If no <b>null</b> or <b>undefined</b> are found, the current instance will be returned.
     * @see ReadonlyArray.filter
     */
    filterNonNull(): FilterNonNull<T, this>

    //#endregion -------------------- Filter methods --------------------
    //#region -------------------- Find methods --------------------

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The restrained find callback
     * @see ReadonlyArray.find
     */
    find<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     * @see ReadonlyArray.find
     */
    find(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     * @see ReadonlyArray.find
     */
    findByIndex(callback: BooleanIndexCallback,): NullOr<T>

    /**
     * Get the first index found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     * @see ReadonlyArray.findIndex
     */
    findIndex(callback: BooleanCallback<T>,): NullOr<number>

    /**
     * Get the first index found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     * @see ReadonlyArray.findIndex
     */
    findIndexByIndex(callback: BooleanIndexCallback,): NullOr<number>


    /**
     * Get the last item found or <b>null</b> if nothing was found
     *
     * @param callback The restrained find callback
     * @see ReadonlyArray.findLast
     */
    findLast<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>

    /**
     * Get the last item found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     * @see ReadonlyArray.findLast
     */
    findLast(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the last item found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     * @see ReadonlyArray.findLast
     */
    findLastByIndex(callback: BooleanIndexCallback,): NullOr<T>


    /**
     * Get the last index found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     * @see ReadonlyArray.findLastIndex
     */
    findLastIndex(callback: BooleanCallback<T>,): NullOr<number>

    /**
     * Get the last index found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     * @see ReadonlyArray.findLastIndex
     */
    findLastIndexByIndex(callback: BooleanIndexCallback,): NullOr<number>

    //#endregion -------------------- Find methods --------------------

    /**
     * Loop over the {@link CollectionHolder}
     * while creating a new {@link CollectionHolder} after-end
     *
     * @param callback The callback to retrieve the result
     * @see ReadonlyArray.map
     */
    map<const U, >(callback: MapCallback<T, U>,): CollectionHolder<U>

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * while creating a new {@link CollectionHolder collection} after-end
     *
     * @param callback The callback to retrieve the result
     * @see ReadonlyArray.map
     */
    mapIndex<const U, >(callback: MapIndexCallback<U>,): CollectionHolder<U>


    /**
     * Loop over the {@link CollectionHolder collection}
     * and return the same instance after the loop
     *
     * @param callback The callback for each element
     * @see ReadonlyArray.forEach
     * @see ReadonlySet.forEach
     */
    forEach(callback: ForEachCallback<T>,): this

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * and return the same instance after the loop
     *
     * @param callback The callback for each element
     * @see ReadonlyArray.forEach
     * @see ReadonlySet.forEach
     */
    forEachIndex(callback: ForEachIndexCallback,): this


    /**
     * Reverse the current collection from a range (if provided)
     *
     * @param fromIndex The inclusive starting index
     * @param toIndex The exclusive ending index
     *
     * @canReceiveNegativeValue
     * @throws {RangeError} The indexes "from" and "to" are not within a valid range
     * @see Array.reverse
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/reverse.html Kotlin reverse
     */
    reverse(fromIndex?: Nullable<number>, toIndex?: Nullable<number>,): CollectionHolder<T>

    //#endregion -------------------- Loop methods --------------------
    //#region -------------------- Iterator methods --------------------

    /** A Javascript way to implements a "for‥of" over the {@link CollectionHolder collection} */
    [Symbol.iterator](): IterableIterator<T>

    //#endregion -------------------- Iterator methods --------------------
    //#region -------------------- Conversion methods --------------------

    /** Convert the current {@link CollectionHolder collection} to a new {@link ReadonlyArray array} */
    toArray(): readonly T[]

    /** Convert the current {@link CollectionHolder collection} to a new {@link Array mutable array} */
    toMutableArray(): T[]


    /** Convert the current {@link CollectionHolder collection} to a new {@link ReadonlySet set} */
    toSet(): ReadonlySet<T>

    /** Convert the current {@link CollectionHolder collection} to a new {@link Set mutable set} */
    toMutableSet(): Set<T>


    /** Convert the current {@link CollectionHolder collection} to a new {@link WeakSet weak set} */
    toWeakSet(): Readonly<WeakSet<& T & object>>

    /** Convert the current {@link CollectionHolder collection} to a new {@link WeakSet mutable weak set} */
    toMutableWeakSet(): WeakSet<& T & object>


    /**
     * Convert the current {@link CollectionHolder collection} to string using the {@link Array.toString} method
     *
     * @see Array.toString
     */
    toString(): string

    /**
     * Convert the current {@link CollectionHolder collection} to string using the {@link Array.toLocaleString} method
     *
     * @see Array.toLocaleString
     */
    toLocaleString(): string

    //#endregion -------------------- Conversion methods --------------------

}

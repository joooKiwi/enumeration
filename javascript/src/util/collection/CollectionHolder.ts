/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Nullable, NullOr, UndefinedOr}                                                                                                                                                                                                                                                                                          from "../../general type"
import type {BooleanCallback, BooleanIndexCallback, CollectionHolderName, IndexValueCallback, IndexValueWithReturnCallback, IndexWithReturnCallback, ObjectOf, RestrainedBooleanCallback, ReverseBooleanCallback, ReverseRestrainedBooleanCallback, ValueIndexCallback, ValueIndexWithReturnCallback, ValueWithStringReturnCallback} from "./CollectionHolder.types"

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

    /**
     * Get the size ({@link CollectionHolder.length length} or {@link CollectionHolder.count count}) of the current {@link CollectionHolder collection}
     *
     * @see ReadonlyArray.length
     * @see ReadonlySet.size
     * @see ReadonlyMap.size
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/size.html Kotlin size()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.count C# Count()
     * @see length
     * @see count
     */
    get size(): number

    /**
     * Get the length ({@link CollectionHolder.size size} or {@link CollectionHolder.count count}) of the current {@link CollectionHolder collection}
     *
     * @alias {@link size}
     */
    get length(): this["size"]

    /**
     * Get the count ({@link CollectionHolder.length length} or {@link CollectionHolder.count count}) of the current {@link CollectionHolder collection}
     *
     * @alias {@link size}
     */
    get count(): this["size"]

    /**
     * The {@link CollectionHolder collection} has no values
     *
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/is-empty.html Kotlin isEmpty()
     * @see isNotEmpty
     */
    get isEmpty(): boolean

    /**
     * The {@link CollectionHolder collection} has at least one value
     *
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/is-not-empty.html Kotlin isNotEmpty()
     * @see isEmpty
     */
    get isNotEmpty(): boolean

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

    //#region -------------------- Get / at methods --------------------

    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     *
     * @param index The index to retrieve a value
     *
     * @canReceiveNegativeValue
     * @throws {ReferenceError} The index calculated is over the {@link size}
     * @see ReadonlyArray.at
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/get.html Kotlin get(index)
     * @see getOrElse
     * @see getOrNull
     */
    get(index: number,): T

    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     *
     * @param index The index to retrieve a value
     *
     * @alias {@link get}
     */
    at(index: number,): T


    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     * or the return value of the {@link defaultValue callback}
     *
     * @param index The index to retrieve a value
     * @param defaultValue The callback to retrieve the default value if it is over the {@link size}
     *
     * @canReceiveNegativeValue
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/get-or-else.html Kotlin getOrElse(key, defaultValue)
     * @see get
     * @see getOrNull
     */
    getOrElse<U, >(index: number, defaultValue: IndexWithReturnCallback<U>,): | T | U

    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     * or the return value of the {@link defaultValue callback}
     *
     * @param index The index to retrieve a value
     * @param defaultValue The callback to retrieve the default value if it is over the {@link size} (after calculation)
     *
     * @alias {@link getOrElse}
     */
    atOrElse<U, >(index: number, defaultValue: IndexWithReturnCallback<U>,): | T | U

    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     * or the return value of the {@link defaultValue callback}
     *
     * @param index The index to retrieve a value
     * @param defaultValue The callback to retrieve the default value if it is over the {@link size} (after calculation)
     *
     * @canReceiveNegativeValue
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/get-or-else.html Kotlin getOrElse(key, defaultValue)
     * @see get
     * @see getOrNull
     */
    getOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,): T

    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     * or the return value of the {@link defaultValue callback}
     *
     * @param index The index to retrieve a value
     * @param defaultValue The callback to retrieve the default value if it is over the {@link size} (after calculation)
     *
     * @alias {@link getOrElse}
     */
    atOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,): T


    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     * or <b>null</b> if it is over the {@link size}
     *
     * @param index The index to retrieve a value
     *
     * @canReceiveNegativeValue
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/get-or-null.html Kotlin getOrNull(key)
     * @see get
     * @see getOrElse
     */
    getOrNull(index: number,): NullOr<T>

    /**
     * Get the element at the specified index in the {@link CollectionHolder collection}
     * or <b>null</b> if it is over the {@link size}
     *
     * @param index The index to retrieve a value
     *
     * @alias {@link getOrNull}
     */
    atOrNull(index: number,): NullOr<T>

    //#endregion -------------------- Get / at methods --------------------
    //#region -------------------- Index of methods --------------------

    /**
     * Get the <b>first</b> occurrence equivalent to the value received
     * or <b>null</b> if it was not in the current {@link CollectionHolder collection}
     * from a range (if provided)
     *
     * @param element The element to find
     * @param fromIndex The inclusive starting index
     * @param toIndex The exclusive ending index
     *
     * @canReceiveNegativeValue
     * @see ReadonlyArray.indexOf
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index-of.html Kotlin indexOf(element)
     * @see https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1.indexof C# IndexOf(item)
     */
    indexOf(element: unknown, fromIndex?: Nullable<number>, toIndex?:Nullable<number>,): NullOr<number>

    /**
     * Get the <b>last</b> occurrence equivalent to the value received
     * or <b>null</b> if it was not in the current {@link CollectionHolder collection}
     * from a range (if provided)
     *
     * @param element The element to find
     * @param fromIndex The inclusive starting index
     * @param toIndex The exclusive ending index
     *
     * @canReceiveNegativeValue
     * @see ReadonlyArray.lastIndexOf
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/last-index-of.html Kotlin lastIndexOf(element)
     * @see https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1.lastindexof C# LastIndexOf(item)
     */
    lastIndexOf(element: unknown, fromIndex?:Nullable<number>, toIndex?:Nullable<number>,): NullOr<number>

    //#endregion -------------------- Index of methods --------------------
    //#region -------------------- First methods --------------------

    /**
     * Get the first element
     *
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @throws {ReferenceError} The element was <b>null</b> or <b>undefined</b>
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/first.html Kotlin first()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.first C# First()
     */
    first(): NonNullable<T>

    /**
     * Get the first element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/first.html Kotlin first(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.first C# First(predicate)
     */
    first(callback: BooleanCallback<T>,): NonNullable<T>

    /**
     * Get the first element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/first.html Kotlin first(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.first C# First(predicate)
     */
    first<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>


    /**
     * Get the first element or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     *
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/first-or-null.html Kotlin firstOrNull()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.firstordefault C# FirstOrDefault()
     */
    firstOrNull(): NullOr<T>

    /**
     * Get the first element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/first-or-null.html Kotlin firstOrNull(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.firstordefault C# FirstOrDefault(predicate)
     */
    firstOrNull(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the first element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/first-or-null.html Kotlin firstOrNull(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.firstordefault C# FirstOrDefault(predicate)
     */
    firstOrNull<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S

    //#endregion -------------------- First methods --------------------
    //#region -------------------- Last methods --------------------

    /**
     * Get the last element
     *
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @throws {ReferenceError} The element was <b>null</b> or <b>undefined</b>
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/last.html Kotlin last()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.last C# Last()
     */
    last(): NonNullable<T>

    /**
     * Get the last element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/last.html Kotlin last(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.last C# Last(predicate)
     */
    last(callback: BooleanCallback<T>,): NonNullable<T>

    /**
     * Get the last element matching the given callback
     *
     * @param callback The matching callback
     * @throws {ReferenceError} The {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/last.html Kotlin last(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.last C# Last(predicate)
     */
    last<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NonNullable<S>


    /**
     * Get the last element or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     *
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/last-or-null.html Kotlin lastOrNull()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.lastordefault C# LastOrDefault()
     */
    lastOrNull(): NullOr<T>

    /**
     * Get the last element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/last-or-null.html Kotlin lastOrNull(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.lastordefault C# LastOrDefault(predicate)
     */
    lastOrNull(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the last element matching the given or <b>null</b> is the {@link CollectionHolder collection} {@link CollectionHolder.isEmpty is empty}
     * or no element was found
     *
     * @param callback The matching callback
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/last-or-null.html Kotlin lastOrNull(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.lastordefault C# LastOrDefault(predicate)
     */
    lastOrNull<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): S

    //#endregion -------------------- Last methods --------------------

    //#endregion -------------------- Value methods --------------------
    //#region -------------------- Loop methods --------------------

    //#region -------------------- All / any / none methods --------------------

    /**
     * Check if <b>every</b> element in the {@link CollectionHolder collection} match the given {@link callback}
     *
     * @param callback The condition to check on each value
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/all.html Kotlin all()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.all C# All()
     */
    all(callback: BooleanCallback<T>,): boolean


    /**
     * Tell if the {@link CollectionHolder collection} {@link isNotEmpty is not empty}
     *
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/any.html Kotlin any()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.any C# Any()
     */
    any(): this["isNotEmpty"]

    /**
     * Check if <b>one</b> of the elements in the {@link CollectionHolder collection} match the given {@link callback}
     *
     * @param callback The condition to check on each value
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/any.html Kotlin any(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.any C# Any(predicate)
     */
    any(callback: BooleanCallback<T>,): boolean


    /**
     * Tell if the {@link CollectionHolder collection} {@link isEmpty is empty}
     *
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/none.html Kotlin none()
     */
    none(): this["isEmpty"]

    /**
     * Check if <b>no</b> element in the {@link CollectionHolder collection} match the given {@link callback}
     *
     * @param callback The condition to check on each value
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/none.html Kotlin none(predicate)
     */
    none(callback: BooleanCallback<T>,): boolean

    //#endregion -------------------- All / any / none methods --------------------
    //#region -------------------- Has / includes / contains methods --------------------

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     * @see includesOne
     * @see containsOne
     * @see ReadonlyArray.includes
     * @see ReadonlySet.has
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/contains.html Kotlin contains(element)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.contains C# contains(value)
     */
    hasOne(...values: readonly unknown[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     *
     * @alias {@link hasOne}
     */
    includesOne(...values: readonly unknown[]): boolean

    /**
     * Tell whenever at least one value exist in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     *
     * @alias {@link hasOne}
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
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/contains-all.html Kotlin containsAll(elements)
     */
    hasAll(...values: readonly unknown[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     *
     * @alias {@link hasAll}
     */
    includesAll(...values: readonly unknown[]): boolean

    /**
     * Tell that every value received in the current {@link CollectionHolder}
     *
     * @param values The values to compare
     *
     * @alias {@link hasAll}
     */
    containsAll(...values: readonly unknown[]): boolean

    //#endregion -------------------- Has / includes / contains methods --------------------
    //#region -------------------- Join methods --------------------

    /**
     * Get a new {@link String} separated by a separator
     *
     * @param separator The separator for the result ({@link CollectionConstants.DEFAULT_JOIN_SEPARATOR ", "} by default)
     * @param prefix The character before the join ({@link CollectionConstants.DEFAULT_JOIN_PREFIX "["} by default)
     * @param postfix The character after the join ({@link CollectionConstants.DEFAULT_JOIN_POSTFIX  "]"} by default)
     * @param limit The maximum amount of values in the join (null by default)
     * @param truncated The truncated string if there is a limit ({@link CollectionConstants.DEFAULT_JOIN_TRUNCATED "…"} by default)
     * @param transform A callback to transform into a {@link String}
     *
     * @canReceiveNegativeValue
     * @see ReadonlyArray.join
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/join-to-string.html Kotlin joinToString()
     * @see https://learn.microsoft.com/dotnet/api/system.string.join C# string.Join()
     */
    join(separator?: Nullable<string>, prefix?: Nullable<string>, postfix?: Nullable<string>, limit?: Nullable<number>, truncated?: Nullable<string>, transform?: Nullable<ValueWithStringReturnCallback<T>>,): string

    //#endregion -------------------- Join methods --------------------
    //#region -------------------- Filter methods --------------------

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the callback
     *
     * @param callback The restrained filter callback
     *
     * @typescriptDefinition
     * @see ReadonlyArray.filter
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter.html Kotlin filter(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.where C# Where(predicate)
     * @see filterNot
     */
    filter<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the callback.
     *
     * @param callback The filter callback
     * @see ReadonlyArray.filter
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter.html Kotlin filter(predicate)
     * @see filterNot
     */
    filter(callback: BooleanCallback<T>,): CollectionHolder<T>

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the index callback.
     *
     * @param callback The filter index callback
     *
     * @typescriptDefinition
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter-indexed.html Kotlin filterIndexed(predicate)
     * @see filterIndexedNot
     */
    filterIndexed<const S extends T, >(callback: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<T>

    /**
     * Get a new {@link CollectionHolder collection} from the condition returned by the index callback.
     *
     * @param callback The filter index callback
     * @see ReadonlyArray.filter
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter-indexed.html Kotlin filterIndexed(predicate)
     * @see filterIndexedNot
     */
    filterIndexed(callback: ReverseBooleanCallback<T>,): CollectionHolder<T>


    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the callback
     *
     * @param callback The restrained filter callback
     *
     * @typescriptDefinition
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter-not.html Kotlin filterNot(predicate)
     * @see filter
     */
    filterNot<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>

    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the callback.
     *
     * @param callback The filter callback
     * @see ReadonlyArray.filter
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter-not.html Kotlin filterNot(predicate)
     * @see filter
     */
    filterNot(callback: BooleanCallback<T>,): CollectionHolder<T>

    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the index callback.
     *
     * @param callback The filter index callback
     *
     * @typescriptDefinition
     * @see ReadonlyArray.filter
     * @see filterIndexed
     */
    filterIndexedNot<const S extends T, >(callback: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<T>

    /**
     * Get a new {@link CollectionHolder collection} from the reversed condition returned by the index callback.
     *
     * @param callback The filter index callback
     * @see ReadonlyArray.filter
     * @see filterIndexed
     */
    filterIndexedNot(callback: ReverseBooleanCallback<T>,): CollectionHolder<T>


    /**
     * Remove any items that is <b>null</b> or <b>undefined</b> & return a new {@link CollectionHolder collection}.
     *
     * If no <b>null</b> or <b>undefined</b> are found, the current instance will be returned.
     * @see ReadonlyArray.filter
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter-not-null.html Kotlin filterNotNull()
     * @see requireNoNulls
     */
    filterNotNull(): CollectionHolder<NonNullable<T>>

    /**
     * Require that no items are <b>null</b> or <b>undefined</b> in the current {@link CollectionHolder collection}
     * @throws {TypeError} There is <b>null</b> or <b>undefined</b> value in the current collection
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/require-no-nulls.html Kotlin requireNoNulls()
     * @see filterNotNull
     */
    requireNoNulls(): CollectionHolder<NonNullable<T>>

    //#endregion -------------------- Filter methods --------------------
    //#region -------------------- Find methods --------------------

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The restrained find callback
     *
     * @typescriptDefinition
     * @see ReadonlyArray.find
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/find.html Kotlin find(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.firstordefault C# FirstOrDefault(predicate)
     */
    find<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     * @see ReadonlyArray.find
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/find.html Kotlin find(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.firstordefault C# FirstOrDefault(predicate)
     */
    find(callback: BooleanCallback<T>,): NullOr<T>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     *
     * @typescriptDefinition
     * @see ReadonlyArray.find
     */
    findByIndex<const S extends T, >(callback: ReverseRestrainedBooleanCallback<T, S>,): NullOr<S>

    /**
     * Get the first item found or <b>null</b> if nothing was found
     *
     * @param callback The find index callback
     * @see ReadonlyArray.find
     */
    findByIndex(callback: ReverseBooleanCallback<T>,): NullOr<T>

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
     *
     * @typescriptDefinition
     * @see ReadonlyArray.findLast
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/find-last.html Kotlin findLast(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.lastordefault C# LastOrDefault(predicate)
     */
    findLast<const S extends T, >(callback: RestrainedBooleanCallback<T, S>,): NullOr<S>

    /**
     * Get the last item found or <b>null</b> if nothing was found
     *
     * @param callback The find callback
     * @see ReadonlyArray.findLast
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/find-last.html Kotlin findLast(predicate)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.lastordefault C# LastOrDefault(predicate)
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
    //#region -------------------- Map methods --------------------

    /**
     * Loop over the {@link CollectionHolder}
     * while creating a new {@link CollectionHolder} after-end
     *
     * @param callback The callback to retrieve the result
     * @see ReadonlyArray.map
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/map.html Kotlin map(transform)
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.select C# Select(selector)
     */
    map<const U, >(callback: ValueIndexWithReturnCallback<T, U>,): CollectionHolder<U>

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * while creating a new {@link CollectionHolder collection} after-end
     *
     * @param callback The callback to retrieve the result
     * @see ReadonlyArray.map
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/map-indexed.html Kotlin mapIndexed(transform)
     */
    mapIndexed<const U, >(callback: IndexValueWithReturnCallback<T, U>,): CollectionHolder<U>

    //#endregion -------------------- Map methods --------------------
    //#region -------------------- ForEach methods --------------------

    /**
     * Loop over the {@link CollectionHolder collection}
     * and return the same instance after the loop
     *
     * @param callback The callback for each element
     * @see ReadonlyArray.forEach
     * @see ReadonlySet.forEach
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/on-each.html Kotlin onEach
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/for-each.html Kotlin forEach
     */
    forEach(callback: ValueIndexCallback<T>,): this

    /**
     * Loop over the {@link CollectionHolder collection} using only the index
     * and return the same instance after the loop
     *
     * @param callback The callback for each element
     * @see ReadonlyArray.forEach
     * @see ReadonlySet.forEach
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/on-each-indexed.html Kotlin onEachIndexed
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/for-each-indexed.html Kotlin forEachIndexed
     */
    forEachIndexed(callback: IndexValueCallback<T>,): this

    //#endregion -------------------- ForEach methods --------------------

    /**
     * Reverse the current collection from a range (if provided)
     *
     * @param fromIndex The inclusive starting index
     * @param toIndex The exclusive ending index
     *
     * @canReceiveNegativeValue
     * @throws {RangeError} The indexes "from" and "to" are not within a valid range
     * @see Array.reverse
     * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/reverse.html Kotlin reverse()
     * @see https://learn.microsoft.com/dotnet/api/system.linq.enumerable.reverse C# Reverse()
     */
    reverse(fromIndex?: Nullable<number>, toIndex?: Nullable<number>,): CollectionHolder<T>

    //#endregion -------------------- Loop methods --------------------
    //#region -------------------- Javascript methods --------------------

    /**
     * A Javascript way to implement a "for‥of" over the {@link CollectionHolder collection
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
     */
    [Symbol.iterator](): IterableIterator<T>

    /**
     * Give an output for the call from {@link ObjectConstructor.toString.call} [object CollectionHolder] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: CollectionHolderName

    //#endregion -------------------- Javascript methods --------------------
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
    toWeakSet(): Readonly<WeakSet<ObjectOf<T>>>

    /** Convert the current {@link CollectionHolder collection} to a new {@link WeakSet mutable weak set} */
    toMutableWeakSet(): WeakSet<ObjectOf<T>>


    /** Convert the current {@link CollectionHolder collection} to a new {@link ReadonlyMap map} */
    toMap(): ReadonlyMap<number, T>

    /** Convert the current {@link CollectionHolder collection} to a new {@link Map mutable map} */
    toMutableMap(): Map<number, T>


    /**
     * Convert the current {@link CollectionHolder collection} to {@link String} using the {@link join} method
     *
     * @see Array.toString
     */
    toString(): string

    /**
     * Convert the current {@link CollectionHolder collection} to {@link String} using the {@link join} method and calling {@link Object.toLocaleString}
     *
     * @see Array.toLocaleString
     */
    toLocaleString(): string

    //#endregion -------------------- Conversion methods --------------------

}

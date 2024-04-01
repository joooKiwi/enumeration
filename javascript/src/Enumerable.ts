/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Nullable, PossiblePrimitiveHint, StringOrObject} from "@joookiwi/type"

import type {EnumerableName, EnumerableToPrimitive} from "./Enumerable.types"

export interface Enumerable<out ORDINAL extends number = number, out NAME extends string = string, > {

    /**
     * Get the name on the current enum instance (not to be confused with the class name)
     *
     * @failWhenCalledDuringTheConstruction
     * @throws {NullReferenceException} The instance has been called during the construction or was not found in the {@link CompanionEnumDeclaration.values companion values}
     */
    get name(): NAME

    /** Get the ordinal on the current instance. */
    get ordinal(): ORDINAL

    /**
     * Convert the {@link Enumerable} to a {@link String} or {@link Number}.
     *
     * If it receives a <b>null</b>, then a {@link TypeError} will be thrown.
     *
     * @param value The value (either "string", "number" or "default")
     * @throws {NullHintException} The hint received was <b>null</b>
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
     */
    [Symbol.toPrimitive]<const HINT extends string, >(value: Nullable<HINT>,): EnumerableToPrimitive<HINT, this>

    /**
     * Convert the {@link Enumerable} to a {@link String} or {@link Number}.
     *
     * If it receives a <b>null</b> or a value that is not {@link PossiblePrimitiveHint a hint},
     * then a {@link TypeError} will be thrown.
     *
     * @param value The value (either "string", "number" or "default") as an object or a primitive
     * @throws {NullHintException} The hint received was <b>null</b>
     * @throws {InvalidHintException} The hint was not a {@link PossiblePrimitiveHint} (in any casing)
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
     */
    [Symbol.toPrimitive](value: Nullable<StringOrObject>,): EnumerableToPrimitive<PossiblePrimitiveHint, this>

    /**
     * Gives an output for the call from {@link Object.prototype.toString.call} [object Enum] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: EnumerableName

}

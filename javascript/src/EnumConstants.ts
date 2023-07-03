/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder}               from "@joookiwi/collection"

import type {Enumerable}                     from "./Enumerable"
import type {EnumerableConstructor}          from "./EnumerableConstructor"
import type {EnumerableWithGrandParent}      from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent} from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}           from "./EnumerableWithParent"
import type {NullOr}                         from "./general type"
import type {BasicCompanionEnumDeclaration}  from "./companion/BasicCompanionEnum.declaration"

/** A simple class containing every field used by an {@link Enumerable} helper, instance or companion */
export namespace EnumConstants {

    /**
     * A map of every {@link BasicCompanionEnumDeclaration.default default} stored from a {@link BasicCompanionEnumDeclaration}
     *
     * @see BasicCompanionEnumDeclaration.default
     */
    export const DEFAULT_MAP = new Map<BasicCompanionEnumDeclaration<any, any>, NullOr<Enumerable>>()
    /**
     * A map of every {@link Enumerable} {@link BasicCompanionEnumDeclaration.values values} stored from a {@link BasicCompanionEnumDeclaration}
     *
     * @see BasicCompanionEnumDeclaration.values
     */
    export const VALUES_MAP = new Map<BasicCompanionEnumDeclaration<any, any>, CollectionHolder<Enumerable>>()
    /**
     * A map of an individual {@link Enumerable.name name} associated to a {@link Enumerable}
     *
     * @see Enumerable.name
     */
    export const NAME_MAP = new Map<Enumerable, string>()
    /**
     * A map of every {@link Enumerable} {@link BasicCompanionEnumDeclaration.names names} stored from a {@link BasicCompanionEnumDeclaration}
     *
     * @see BasicCompanionEnumDeclaration.names
     */
    export const NAMES_MAP = new Map<BasicCompanionEnumDeclaration<any, any>, CollectionHolder<string>>()
    /**
     * A map of the last ordinal of {@link Enum} instance
     *
     * @see Enum.constructor
     */
    export const LAST_ORDINAL_MAP = new Map<EnumerableConstructor<any, any>, number>()
    /**
     * A map of an individual {@link Enumerable.ordinal ordinal} associated to a {@link Enumerable}
     *
     * @see Enumerable.ordinal
     */
    export const ORDINAL_MAP = new Map<Enumerable, number>()
    /**
     * A map of every {@link Enumerable} {@link BasicCompanionEnumDeclaration.ordinals ordinals} stored from a {@link BasicCompanionEnumDeclaration}
     *
     * @see BasicCompanionEnumDeclaration.ordinals
     */
    export const ORDINALS_MAP = new Map<BasicCompanionEnumDeclaration<any, any>, CollectionHolder<number>>()

    /** A {@link RegExp regex} to include any numeric value (negative and/or decimal) */
    export const NUMBER_ONLY_REGEX = /^-?\d+(\.\d+)?$/
    /** A {@link RegExp regex} to include any non-decimal value (negative included) */
    export const INTEGER_ONLY_REGEX = /^-?\d+$/
    /**
     * The insensitive hint used on the {@link Enumerable}{@link Symbol.toPrimitive [Symbol.toPrimitive]}()
     *
     * @uniqueJavascriptVariable
     */
    export const TO_PRIMITIVE_VALUES = /string|number|default/i
    /**
     * The simple <i>prototype</i> name of a class
     *
     * @uniqueJavascriptVariable
     */
    export const PROTOTYPE_NAME = "prototype"
    // export const RESERVED_JAVASCRIPT_FUNCTION_NAMES = ["prototype", "name", "length", "apply", "call", "bind", "caller",] as const
    // export const RESERVED_JAVASCRIPT_OBJECT_NAMES = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf",] as const
    /** Every edge case of a {@link Number} */
    export const EDGE_CASE_NUMERIC_NAME = ["NaN", "-Infinity", "Infinity",] as const
    /** Every inherited member of any {@link Enumerable enumerable} instances ({@link Enumerable}, {@link EnumerableWithParent}, {@link EnumerableWithGrandParent}, {@link EnumerableWithGreatGrandParent}) */
    export const INHERITED_ENUMERABLE_MEMBERS = ["name", "ordinal", "parent", "grandParent", "greatGrandParent",] as const satisfies readonly (| keyof Enumerable | keyof EnumerableWithParent | keyof EnumerableWithGrandParent | keyof EnumerableWithGreatGrandParent)[]

    /**
     * The simple {@link Symbol.toStringTag} of an {@link Enum}
     *
     * @uniqueJavascriptVariable
     */
    export const ENUM_TO_STRING_TAG = "Enum"
    /**
     * The simple {@link Symbol.toStringTag} of a companion enum
     * ({@link BasicCompanionEnumDeclaration}, {@link CompanionEnumWithParentDeclaration}, {@link CompanionEnumWithGrandParentDeclaration}, {@link CompanionEnumWithGreatGrandParentDeclaration})
     *
     * @uniqueJavascriptVariable
     */
    export const COMPANION_ENUM_TO_STRING_TAG = "CompanionEnum"

}

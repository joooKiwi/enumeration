/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder} from "@joookiwi/collection"

import type {Enumerable}                                   from "./Enumerable"
import type {EnumerableConstructor}                        from "./EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}            from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}       from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                 from "./EnumerableWithNullableParent"
import type {NullOr}                                       from "./general type"
import type {CompanionEnumDeclaration}                     from "./companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}      from "./companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}           from "./companion/CompanionEnumWithParent.declaration"

/** A simple class containing every field used by an {@link Enumerable} helper, instance or companion */
export class EnumConstants {
    constructor() {
        throw new EvalError("The class EnumConstants cannot be created",)
    }
}

export namespace EnumConstants {

    //#region -------------------- Maps --------------------

    /**
     * A map of every {@link CompanionEnumDeclaration.default default} stored from a {@link CompanionEnumDeclaration}
     *
     * @see CompanionEnumDeclaration.default
     */
    export const DEFAULT_MAP = new Map<CompanionEnumDeclaration<any, any>, NullOr<Enumerable>>()
    /**
     * A map of every {@link Enumerable} {@link CompanionEnumDeclaration.values values} stored from a {@link CompanionEnumDeclaration}
     *
     * @see CompanionEnumDeclaration.values
     */
    export const VALUES_MAP = new Map<CompanionEnumDeclaration<any, any>, CollectionHolder<Enumerable>>()
    /**
     * A map of an individual {@link Enumerable.name name} associated to a {@link Enumerable}
     *
     * @see Enumerable.name
     */
    export const NAME_MAP = new Map<Enumerable, string>()
    /**
     * A map of every {@link Enumerable} {@link CompanionEnumDeclaration.names names} stored from a {@link CompanionEnumDeclaration}
     *
     * @see CompanionEnumDeclaration.names
     */
    export const NAMES_MAP = new Map<CompanionEnumDeclaration<any, any>, CollectionHolder<string>>()
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
     * A map of every {@link Enumerable} {@link CompanionEnumDeclaration.ordinals ordinals} stored from a {@link CompanionEnumDeclaration}
     *
     * @see CompanionEnumDeclaration.ordinals
     */
    export const ORDINALS_MAP = new Map<CompanionEnumDeclaration<any, any>, CollectionHolder<number>>()

    //#endregion -------------------- Maps --------------------
    //#region -------------------- Initialization validation fields --------------------

    /** A {@link RegExp regex} to include any numeric value (negative and/or decimal) */
    export const NUMBER_ONLY_REGEX = /^-?\d+(\.\d+)?$/
    /** A {@link RegExp regex} to include any non-decimal value (negative included) */
    export const INTEGER_ONLY_REGEX = /^-?\d+$/
    /**
     * The insensitive hint used on the {@link Enumerable}{@link Symbol.toPrimitive [Symbol.toPrimitive]}()
     *
     * @uniqueToJavascript
     */
    export const TO_PRIMITIVE_VALUES = /string|number|default/i
    /**
     * The simple <i>prototype</i> name of a class
     *
     * @uniqueToJavascript
     */
    export const PROTOTYPE_NAME = "prototype"
    // export const RESERVED_JAVASCRIPT_FUNCTION_NAMES = ["prototype", "name", "length", "apply", "call", "bind", "caller",] as const
    // export const RESERVED_JAVASCRIPT_OBJECT_NAMES = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf",] as const
    /** Every edge case of a {@link Number} */
    export const EDGE_CASE_NUMERIC_NAME = ["NaN", "-Infinity", "Infinity",] as const
    /**
     * Every inherited member of any {@link Enumerable enumerable} instances
     * ({@link Enumerable}, with {@link EnumerableWithNullableParent parent},
     * {@link EnumerableWithNullableGrandParent grandparent} and {@link EnumerableWithNullableGreatGrandParent great-grandparent})
     */
    export const INHERITED_ENUMERABLE_MEMBERS = ["name", "ordinal", "parent", "grandParent", "greatGrandParent",] as const satisfies readonly (| keyof Enumerable | keyof EnumerableWithNullableParent | keyof EnumerableWithNullableGrandParent | keyof EnumerableWithNullableGreatGrandParent)[]

    //#endregion -------------------- Initialization validation fields --------------------
    //#region -------------------- Enumerable members --------------------

    /** Every member of an {@link Enumerable} */
    export const ENUMERABLE_MEMBERS = ["name", "ordinal", Symbol.toPrimitive, Symbol.toStringTag,] as const satisfies readonly (keyof Enumerable)[]
    /** Every member of an {@link EnumerableWithNullableParent} or {@link EnumerableWithParent} */
    export const ENUMERABLE_WITH_PARENT_MEMBERS = ["name", "ordinal", "parent", Symbol.toPrimitive, Symbol.toStringTag,] as const satisfies readonly (keyof EnumerableWithNullableParent)[]
    /** Every member of an {@link EnumerableWithNullableGrandParent} or {@link EnumerableWithGrandParent} */
    export const ENUMERABLE_WITH_GRAND_PARENT_MEMBERS = ["name", "ordinal", "parent", "grandParent", Symbol.toPrimitive, Symbol.toStringTag,] as const satisfies readonly (keyof EnumerableWithNullableGrandParent)[]
    /** Every member of an {@link EnumerableWithNullableGreatGrandParent} or {@link EnumerableWithGreatGrandParent} */
    export const ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS = ["name", "ordinal", "parent", "grandParent", "greatGrandParent", Symbol.toPrimitive, Symbol.toStringTag,] as const satisfies readonly (keyof EnumerableWithNullableGreatGrandParent)[]

    /** Every member of an {@link CompanionEnumDeclaration} */
    export const COMPANION_ENUM_MEMBERS = ["instance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,] as const satisfies readonly (keyof CompanionEnumDeclaration<never, never>)[]
    /** Every member of an {@link CompanionEnumWithParentDeclaration} */
    export const COMPANION_ENUM_WITH_PARENT_MEMBERS = ["instance", "parentInstance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,] as const satisfies readonly (keyof CompanionEnumWithParentDeclaration<never, never, never, never>)[]
    /** Every member of an {@link CompanionEnumWithGrandParentDeclaration} */
    export const COMPANION_ENUM_WITH_GRAND_PARENT_MEMBERS = ["instance", "parentInstance", "grandParentInstance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,] as const satisfies readonly (keyof CompanionEnumWithGrandParentDeclaration<never, never, never, never, never, never>)[]
    /** Every member of an {@link CompanionEnumWithGreatGrandParentDeclaration} */
    export const COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS = ["instance", "parentInstance", "grandParentInstance", "greatGrandParentInstance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,] as const satisfies readonly (keyof CompanionEnumWithGreatGrandParentDeclaration<never, never, never, never, never, never, never, never>)[]

    //#endregion -------------------- Enumerable members --------------------
    //#region -------------------- Symbols --------------------

    /**
     * Tell that the {@link Enumerable} reference will be similar to another {@link Enumerable.name}
     *
     * @uniqueToJavascript
     */
    export const ENUM_REFERENCE_BY_ITS_NAME_SYMBOL = Symbol("Enum reference by its name",)

    /**
     * Tell that the {@link Enumerable} reference will be <b>null</b>
     *
     * @uniqueToJavascript
     */
    export const NULL_ENUM_REFERENCE_SYMBOL = Symbol("Null enum reference",)

    //#endregion -------------------- Symbols --------------------
    //#region -------------------- Symbol.toString tags --------------------

    /**
     * The simple {@link Symbol.toStringTag} of an {@link Enum}
     *
     * @uniqueToJavascript
     */
    export const ENUM_TO_STRING_TAG = "Enum"
    /**
     * The simple {@link Symbol.toStringTag} of a companion enum
     * ({@link CompanionEnumDeclaration}, {@link CompanionEnumWithParentDeclaration}, {@link CompanionEnumWithGrandParentDeclaration}, {@link CompanionEnumWithGreatGrandParentDeclaration})
     *
     * @uniqueToJavascript
     */
    export const COMPANION_ENUM_TO_STRING_TAG = "CompanionEnum"

    //#endregion -------------------- Symbol.toString tags --------------------

}

export interface EnumConstants {
    new(...args: readonly unknown[]): never
}

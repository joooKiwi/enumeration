/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CollectionHolder}   from "@joookiwi/collection"
import {GenericCollectionHolder} from "@joookiwi/collection"

import type {Enumerable}                                   from "./Enumerable"
import type {PossibleEnumerableMembers}                    from "./Enumerable.types"
import type {EnumerableConstructor}                        from "./EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}            from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}       from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                 from "./EnumerableWithNullableParent"
import type {EnumerableWithGrandParent}                    from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}               from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                         from "./EnumerableWithParent"
import type {NullOr, PossibleEdgeCaseNumericName}          from "./general type"
import type {CompanionEnumDeclaration}                     from "./companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}      from "./companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}           from "./companion/CompanionEnumWithParent.declaration"
import type {PossibleCompanionEnumMembers}                 from "./companion/types"

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

    /**
     * The simple <i>prototype</i> name of a class
     *
     * @uniqueToJavascript
     */
    export const PROTOTYPE_NAME = "prototype"
    // export const RESERVED_JAVASCRIPT_FUNCTION_NAMES = ["prototype", "name", "length", "apply", "call", "bind", "caller",] as const
    // export const RESERVED_JAVASCRIPT_OBJECT_NAMES = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf",] as const
    /** Every edge case of a {@link Number} */
    export const EDGE_CASE_NUMERIC_NAMES: CollectionHolder<PossibleEdgeCaseNumericName> = new GenericCollectionHolder(["NaN", "-Infinity", "Infinity",],)

    //#endregion -------------------- Initialization validation fields --------------------
    //#region -------------------- Regex fields --------------------

    /**
     * The insensitive hint used on the {@link Enumerable}{@link Symbol.toPrimitive [Symbol.toPrimitive]}()
     *
     * @uniqueToJavascript
     */
    export const TO_PRIMITIVE_VALUES = /string|number|default/i


    /**
     * A {@link RegExp regex} to include any {@link Number numeric}
     * in the decimal form (<i>±0.1 or ±10 or ±100_000</i>)
     */
    export const DECIMAL_REGEX = /^-?\d+(\.\d+)?$/
    /**
     * A {@link RegExp regex} to include any {@link Number integer}
     * in the decimal form (<i>±10 or ±100_000</i>)
     */
    export const INTEGER_REGEX = /^-?\d+$/

    /**
     * A {@link RegExp regex} to include any {@link Number numeric}
     * in the exponential form (<i>±1e10</i> or <i>±1e-10</i>).
     *
     * This will be an eventual valid regex in the {@link CompanionEnum companion enum}.
     */
    export const EXPONENTIAL_REGEX = /^-?\d+e-?\d+$/i
    /**
     * A {@link RegExp regex} to include any {@link Number numeric}
     * in the exponential form (<i>±1¹⁰</i> or <i>±1⁻¹⁰</i>).
     *
     * This will be an eventual valid regex in the {@link CompanionEnum companion enum}.
     */
    export const UNICODE_EXPONENTIAL_REGEX = /^-?\d+⁻?[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/

    /**
     * A {@link RegExp regex} to include any {@link Number numeric}
     * in the hexadecimal form (<i>±0x1a</i>).
     *
     * This will be an eventual valid regex in the {@link CompanionEnum companion enum}.
     */
    export const HEXADECIMAL_REGEX = /^-?0x[\da-f]+$/i
    /**
     * A {@link RegExp regex} to include any {@link Number numeric}
     * in the binary form (<i>±0x1001</i>).
     *
     * This will be an eventual valid regex in the {@link CompanionEnum companion enum}.
     */
    export const BINARY_REGEX = /^-?0b[01]+$/i

    //#endregion -------------------- Regex fields --------------------
    //#region -------------------- Enumerable members --------------------

    /** Every member of an {@link Enumerable} */
    export const ENUMERABLE_MEMBERS: CollectionHolder<keyof Enumerable>
        = new GenericCollectionHolder(["name", "ordinal", Symbol.toPrimitive, Symbol.toStringTag,],)
    /** Every member of an {@link EnumerableWithNullableParent} or {@link EnumerableWithParent} */
    export const ENUMERABLE_WITH_PARENT_MEMBERS: CollectionHolder<keyof (| EnumerableWithNullableParent | EnumerableWithParent)>
        = new GenericCollectionHolder(["name", "ordinal", "parent", Symbol.toPrimitive, Symbol.toStringTag,],)
    /** Every member of an {@link EnumerableWithNullableGrandParent} or {@link EnumerableWithGrandParent} */
    export const ENUMERABLE_WITH_GRAND_PARENT_MEMBERS: CollectionHolder<keyof (| EnumerableWithNullableGrandParent | EnumerableWithGrandParent)>
        = new GenericCollectionHolder(["name", "ordinal", "parent", "grandParent", Symbol.toPrimitive, Symbol.toStringTag,],)
    /** Every member of an {@link EnumerableWithNullableGreatGrandParent} or {@link EnumerableWithGreatGrandParent} */
    export const ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS: CollectionHolder<keyof (| EnumerableWithNullableGreatGrandParent | EnumerableWithGreatGrandParent)>
        = new GenericCollectionHolder(["name", "ordinal", "parent", "grandParent", "greatGrandParent", Symbol.toPrimitive, Symbol.toStringTag,],)


    /** Every member of an {@link CompanionEnumDeclaration} */
    export const COMPANION_ENUM_MEMBERS: CollectionHolder<keyof CompanionEnumDeclaration<never, never>>
        = new GenericCollectionHolder(["instance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)
    /** Every member of an {@link CompanionEnumWithParentDeclaration} */
    export const COMPANION_ENUM_WITH_PARENT_MEMBERS: CollectionHolder<keyof CompanionEnumWithParentDeclaration<never, never, never, never>>
        = new GenericCollectionHolder(["instance", "parentInstance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)
    /** Every member of an {@link CompanionEnumWithGrandParentDeclaration} */
    export const COMPANION_ENUM_WITH_GRAND_PARENT_MEMBERS: CollectionHolder<keyof CompanionEnumWithGrandParentDeclaration<never, never, never, never, never, never>>
        = new GenericCollectionHolder(["instance", "parentInstance", "grandParentInstance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)
    /** Every member of an {@link CompanionEnumWithGreatGrandParentDeclaration} */
    export const COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS: CollectionHolder<keyof CompanionEnumWithGreatGrandParentDeclaration<never, never, never, never, never, never, never, never>>
        = new GenericCollectionHolder(["instance", "parentInstance", "grandParentInstance", "greatGrandParentInstance", "default", "setDefault", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)


    /**
     * Every member of
     *  - {@link Enumerable},
     *  - {@link EnumerableWithNullableParent},
     *  - {@link EnumerableWithParent},
     *  - {@link EnumerableWithNullableGrandParent},
     *  - {@link EnumerableWithGrandParent},
     *  - {@link EnumerableWithNullableGreatGrandParent}
     *  - {@link EnumerableWithGreatGrandParent}
     */
    export const EVERY_ENUMERABLE_MEMBER = ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS satisfies CollectionHolder<PossibleEnumerableMembers>

    /**
     * Every member of
     *  - {@link CompanionEnumDeclaration},
     *  - {@link CompanionEnumWithParentDeclaration},
     *  - {@link CompanionEnumWithGrandParentDeclaration},
     *  - {@link CompanionEnumWithGreatGrandParentDeclaration}
     */
    export const EVERY_COMPANION_ENUM_MEMBER = COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS satisfies CollectionHolder<PossibleCompanionEnumMembers>

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
    /**
     * @param args Any possible arguments sent
     * @throws EvalError The class cannot be constructed
     */
    new(...args: readonly unknown[]): never
}

/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CollectionHolder}                    from "@joookiwi/collection"
import type {NullOr, PossibleEdgeCaseNumericName} from "@joookiwi/type"
import {GenericCollectionHolder}                  from "@joookiwi/collection"

import type {Enumerable}                                   from "./Enumerable"
import type {PossibleEnumerableMembers}                    from "./Enumerable.types"
import type {EnumerableConstructor}                        from "./EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}            from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}       from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                 from "./EnumerableWithNullableParent"
import type {EnumerableWithGrandParent}                    from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}               from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                         from "./EnumerableWithParent"
import type {CompanionEnumDeclaration}                     from "./companion/CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}      from "./companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration} from "./companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}           from "./companion/CompanionEnumWithParent.declaration"
import type {PossibleCompanionEnumMembers}                 from "./companion/types"

/** A class containing every field used by an {@link Enumerable} helper, instance or companion */
export class EnumConstants {
    constructor() {
        throw new EvalError("The class EnumConstants cannot be created.",)
    }
}

export namespace EnumConstants {

    //#region -------------------- Maps --------------------

    /**
     * A map of every {@link CompanionEnumDeclaration.default default} stored from a {@link CompanionEnumDeclaration}
     *
     * @see CompanionEnumDeclaration.defaultValue
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
     * The <i>prototype</i> name of a class
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
    //#region -------------------- Max value fields --------------------

    /** The maximum value (2³¹ - 1) represented as a {@link Number} */
    export const MAX_VALUE_AS_NUMBER = 0b111_1111_1111_1111_1111_1111_1111_1111
    /** The maximum value (2³¹ - 1) represented as a {@link BigInt} */
    export const MAX_VALUE_AS_BIG_INT = 0b111_1111_1111_1111_1111_1111_1111_1111n

    /**
     * The max value (2³¹ - 1) size (amount of numbers).
     *
     * This is the equivalent of:
     *
     * ({@link Math}.{@link Math.log log}({@link Math}.{@link Math.abs abs}({@link MAX_VALUE_AS_NUMBER 2_147_483_647}) + 1) *
     * {@link Math}.{@link Math.LOG10E LOG10E} | 0) + 1
     */
    export const MAX_VALUE_SIZE = 10

    //#endregion -------------------- Max value fields --------------------
    //#region -------------------- Enumerable members --------------------

    /** Every member of an {@link Enumerable} */
    export const ENUMERABLE_MEMBERS: CollectionHolder<keyof Enumerable>
        = new GenericCollectionHolder(["name", "ordinal", Symbol.toPrimitive, Symbol.toStringTag,],)
    /** Every member of an {@link EnumerableWithNullableParent} or {@link EnumerableWithParent} */
    export const ENUMERABLE_WITH_PARENT_MEMBERS: CollectionHolder<keyof (| EnumerableWithNullableParent<never> | EnumerableWithParent<never>)>
        = new GenericCollectionHolder(["name", "ordinal", "parent", Symbol.toPrimitive, Symbol.toStringTag,],)
    /** Every member of an {@link EnumerableWithNullableGrandParent} or {@link EnumerableWithGrandParent} */
    export const ENUMERABLE_WITH_GRAND_PARENT_MEMBERS: CollectionHolder<keyof (| EnumerableWithNullableGrandParent<never, never> | EnumerableWithGrandParent<never, never>)>
        = new GenericCollectionHolder(["name", "ordinal", "parent", "grandParent", Symbol.toPrimitive, Symbol.toStringTag,],)
    /** Every member of an {@link EnumerableWithNullableGreatGrandParent} or {@link EnumerableWithGreatGrandParent} */
    export const ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS: CollectionHolder<keyof (| EnumerableWithNullableGreatGrandParent<never, never, never> | EnumerableWithGreatGrandParent<never, never, never>)>
        = new GenericCollectionHolder(["name", "ordinal", "parent", "grandParent", "greatGrandParent", Symbol.toPrimitive, Symbol.toStringTag,],)


    /** Every member of an {@link CompanionEnumDeclaration} */
    export const COMPANION_ENUM_MEMBERS: CollectionHolder<keyof CompanionEnumDeclaration<never, never>>
        = new GenericCollectionHolder(["instance", "defaultValue", "setDefaultValue", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)
    /** Every member of an {@link CompanionEnumWithParentDeclaration} */
    export const COMPANION_ENUM_WITH_PARENT_MEMBERS: CollectionHolder<keyof CompanionEnumWithParentDeclaration<never, never, never, never>>
        = new GenericCollectionHolder(["instance", "parentInstance", "defaultValue", "setDefaultValue", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)
    /** Every member of an {@link CompanionEnumWithGrandParentDeclaration} */
    export const COMPANION_ENUM_WITH_GRAND_PARENT_MEMBERS: CollectionHolder<keyof CompanionEnumWithGrandParentDeclaration<never, never, never, never, never, never>>
        = new GenericCollectionHolder(["instance", "parentInstance", "grandParentInstance", "defaultValue", "setDefaultValue", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)
    /** Every member of an {@link CompanionEnumWithGreatGrandParentDeclaration} */
    export const COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS: CollectionHolder<keyof CompanionEnumWithGreatGrandParentDeclaration<never, never, never, never, never, never, never, never>>
        = new GenericCollectionHolder(["instance", "parentInstance", "grandParentInstance", "greatGrandParentInstance", "defaultValue", "setDefaultValue", "values", "names", "ordinals", "iterator", "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,],)


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
    export const EVERY_ENUMERABLE_MEMBERS = ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS satisfies CollectionHolder<PossibleEnumerableMembers>
    /**
     * A representation of the {@link EVERY_ENUMERABLE_MEMBERS} joined together as a single string
     * for the Javascript implementation
     */
    export const EVERY_ENUMERABLE_MEMBERS_JOINED = "(\"name\", \"ordinal\", \"parent\", \"grandParent\", \"greatGrandParent\", \"[Symbol.toPrimitive]\", \"[Symbol.toStringTag]\")"

    /**
     * Every member of
     *  - {@link CompanionEnumDeclaration},
     *  - {@link CompanionEnumWithParentDeclaration},
     *  - {@link CompanionEnumWithGrandParentDeclaration},
     *  - {@link CompanionEnumWithGreatGrandParentDeclaration}
     */
    export const EVERY_COMPANION_ENUM_MEMBERS = COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS satisfies CollectionHolder<PossibleCompanionEnumMembers>
    /**
     * A representation of the {@link EVERY_COMPANION_ENUM_MEMBERS} joined together as a single string
     * for the Javascript implementation
     */
    export const EVERY_COMPANION_ENUM_MEMBERS_JOINED = "(\"instance\", \"parentInstance\", \"grandParentInstance\", \"greatGrandParentInstance\", \"defaultValue\", \"setDefaultValue\", \"values\", \"names\", \"ordinals\", \"iterator\", \"getValue\", \"getName\", \"getOrdinal\", \"[Symbol.iterator]\", \"[Symbol.toStringTag]\")"

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
     * The {@link Symbol.toStringTag} of an {@link Enum}
     *
     * @uniqueToJavascript
     */
    export const ENUM_TO_STRING_TAG = "Enum"
    /**
     * The {@link Symbol.toStringTag} of a companion enum
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

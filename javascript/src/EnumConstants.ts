//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {CollectionHolder}                    from "@joookiwi/collection"
import type {NullOr, PossibleEdgeCaseNumericName} from "@joookiwi/type"
import {ArrayAsCollectionHolder}                  from "@joookiwi/collection"

import type {Enumerable}                                                                                                                                                                                                                                   from "./Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                        from "./EnumerableConstructor"
import type {CompanionEnumerable}                                                                                                                                                                                                                          from "./companion/CompanionEnumerable"
import type {CompanionEnumerableType}                                                                                                                                                                                                                      from "./type/companion"
import type {KeyOfCompanionEnum, KeyOfCompanionEnumWithGrandParent, KeyOfCompanionEnumWithGreatGrandParent, KeyOfCompanionEnumWithParent, KeyOfEnumerable, KeyOfEnumerableWithGrandParent, KeyOfEnumerableWithGreatGrandParent, KeyOfEnumerableWithParent} from "./type/keyOf"

/** A class containing every field used by an {@link Enumerable} helper, instance or companion */
export class EnumConstants {
    private constructor() {
        throw new EvalError("The class EnumConstants cannot be created.",)
    }
}

export namespace EnumConstants {

    //#region -------------------- Maps --------------------

    /**
     * A map of every {@link CompanionEnumerable.default default} stored from a {@link CompanionEnumerable}
     *
     * @see CompanionEnumerable.defaultValue
     */
    export const DEFAULT_MAP = new Map<CompanionEnumerableType<Enumerable>, NullOr<Enumerable>>()
    /**
     * A map of every {@link Enumerable} {@link CompanionEnumerable.values values} stored from a {@link CompanionEnumerable}
     *
     * @see CompanionEnumerable.values
     */
    export const VALUES_MAP = new Map<CompanionEnumerableType<Enumerable>, CollectionHolder<Enumerable>>()
    /**
     * A map of an individual {@link Enumerable.name name} associated to a {@link Enumerable}
     *
     * @see Enumerable.name
     */
    export const NAME_MAP = new Map<Enumerable, string>()
    /**
     * A map of every {@link Enumerable} {@link CompanionEnumerable.names names} stored from a {@link CompanionEnumerable}
     *
     * @see CompanionEnumerable.names
     */
    export const NAMES_MAP = new Map<CompanionEnumerableType<Enumerable>, CollectionHolder<string>>()
    /**
     * A map of the last ordinal of {@link Enum} instance
     *
     * @see Enum.constructor
     */
    export const LAST_ORDINAL_MAP = new Map<EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>>, number>()
    /**
     * A map of an individual {@link Enumerable.ordinal ordinal} associated to a {@link Enumerable}
     *
     * @see Enumerable.ordinal
     */
    export const ORDINAL_MAP = new Map<Enumerable, number>()
    /**
     * A map of every {@link Enumerable} {@link CompanionEnumerable.ordinals ordinals} stored from a {@link CompanionEnumerable}
     *
     * @see CompanionEnumerable.ordinals
     */
    export const ORDINALS_MAP = new Map<CompanionEnumerableType<Enumerable>, CollectionHolder<number>>()

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
    export const EDGE_CASE_NUMERIC_NAMES: CollectionHolder<PossibleEdgeCaseNumericName> = new ArrayAsCollectionHolder<PossibleEdgeCaseNumericName>(["NaN", "-Infinity", "Infinity",],)

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
     * in the exponential form (<i>±1e10</i>, <i>±1e±10</i>, <i>±1.1e10</i> or <i>±1.1e±10</i>).
     *
     * This will be an eventual valid regex in the {@link CompanionEnum companion enum}.
     */
    export const EXPONENTIAL_REGEX = /^-?\d+(\.\d+)?e[-+]?\d+$/i
    /**
     * A {@link RegExp regex} to include any {@link Number numeric}
     * in the exponential form (<i>±1¹⁰</i>, <i>±1⁻¹⁰</i> or <i>±1⁺¹⁰</i>).
     *
     * This will be an eventual valid regex in the {@link CompanionEnum companion enum}.
     */
    export const UNICODE_EXPONENTIAL_REGEX = /^-?\d+(\.\d+)?[⁻⁺]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/

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
    export const ENUMERABLE_MEMBERS: CollectionHolder<KeyOfEnumerable>
        = new ArrayAsCollectionHolder<KeyOfEnumerable>(["name", "ordinal", Symbol.toPrimitive, Symbol.toStringTag,] as const,)
    /** Every member of an {@link EnumerableWithNullableParent} or {@link EnumerableWithParent} */
    export const ENUMERABLE_WITH_PARENT_MEMBERS: CollectionHolder<KeyOfEnumerableWithParent>
        = new ArrayAsCollectionHolder<KeyOfEnumerableWithParent>(["name", "ordinal", "parent", Symbol.toPrimitive, Symbol.toStringTag,] as const,)
    /** Every member of an {@link EnumerableWithNullableGrandParent} or {@link EnumerableWithGrandParent} */
    export const ENUMERABLE_WITH_GRAND_PARENT_MEMBERS: CollectionHolder<KeyOfEnumerableWithGrandParent>
        = new ArrayAsCollectionHolder<KeyOfEnumerableWithGrandParent>(["name", "ordinal", "parent", "grandParent", Symbol.toPrimitive, Symbol.toStringTag,] as const,)
    /** Every member of an {@link EnumerableWithNullableGreatGrandParent} or {@link EnumerableWithGreatGrandParent} */
    export const ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS: CollectionHolder<KeyOfEnumerableWithGreatGrandParent>
        = new ArrayAsCollectionHolder<KeyOfEnumerableWithGreatGrandParent>(["name", "ordinal", "parent", "grandParent", "greatGrandParent", Symbol.toPrimitive, Symbol.toStringTag,] as const,)


    /** Every member of an {@link CompanionEnumerable} */
    export const COMPANION_ENUM_MEMBERS: CollectionHolder<KeyOfCompanionEnum>
        = new ArrayAsCollectionHolder<KeyOfCompanionEnum>([
            "instance", "defaultValue", "setDefaultValue",
            "values", "names", "ordinals", "iterator",
            "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,
        ] as const,)

    /** Every member of an {@link CompanionEnumerableWithParent} */
    export const COMPANION_ENUM_WITH_PARENT_MEMBERS: CollectionHolder<KeyOfCompanionEnumWithParent>
        = new ArrayAsCollectionHolder<KeyOfCompanionEnumWithParent>([
            "instance", "parentInstance", "defaultValue", "setDefaultValue",
            "values", "names", "ordinals", "iterator",
            "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,
        ] as const,)

    /** Every member of an {@link CompanionEnumerableWithGrandParent} */
    export const COMPANION_ENUM_WITH_GRAND_PARENT_MEMBERS: CollectionHolder<KeyOfCompanionEnumWithGrandParent>
        = new ArrayAsCollectionHolder<KeyOfCompanionEnumWithGrandParent>([
            "instance", "parentInstance", "grandParentInstance", "defaultValue", "setDefaultValue",
            "values", "names", "ordinals", "iterator",
            "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,
        ] as const,)

    /** Every member of an {@link CompanionEnumerableWithGreatGrandParent} */
    export const COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS: CollectionHolder<KeyOfCompanionEnumWithGreatGrandParent>
        = new ArrayAsCollectionHolder<KeyOfCompanionEnumWithGreatGrandParent>([
            "instance", "parentInstance", "grandParentInstance", "greatGrandParentInstance", "defaultValue", "setDefaultValue",
            "values", "names", "ordinals", "iterator",
            "getValue", "getName", "getOrdinal", Symbol.iterator, Symbol.toStringTag,
        ] as const,)


    /**
     * Every member of
     *  - {@link Enumerable},
     *  - {@link EnumerableWithNullableParent},
     *  - {@link EnumerableWithParent},
     *  - {@link EnumerableWithNullableGrandParent},
     *  - {@link EnumerableWithGrandParent},
     *  - {@link EnumerableWithNullableGreatGrandParent}
     *  - {@link EnumerableWithGreatGrandParent}
     *
     * @deprecated Replace with {@link EnumConstants.ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS} instead. This will be removed in version 3.14.
     */
    export const EVERY_ENUMERABLE_MEMBERS = ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS satisfies CollectionHolder<KeyOfEnumerableWithGreatGrandParent>
    /**
     * A representation of the {@link EVERY_ENUMERABLE_MEMBERS} joined together as a single string
     * for the Javascript implementation
     *
     * @deprecated This will be removed in version 3.14 since it does not have a great use within the framework.
     */
    export const EVERY_ENUMERABLE_MEMBERS_JOINED = "(“name”, “ordinal”, “parent”, “grandParent”, “greatGrandParent”, “[Symbol.toPrimitive]”, “[Symbol.toStringTag]”)"

    /**
     * Every member of
     *  - {@link CompanionEnumerable},
     *  - {@link CompanionEnumerableWithParent},
     *  - {@link CompanionEnumerableWithGrandParent},
     *  - {@link CompanionEnumerableWithGreatGrandParent}
     *
     * @deprecated Replace with {@link EnumConstants.COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS} instead. This will be removed in version 3.14.
     */
    export const EVERY_COMPANION_ENUM_MEMBERS = COMPANION_ENUM_WITH_GREAT_GRAND_PARENT_MEMBERS satisfies CollectionHolder<KeyOfCompanionEnumWithGreatGrandParent>
    /**
     * A representation of the {@link EVERY_COMPANION_ENUM_MEMBERS} joined together as a single string
     * for the Javascript implementation
     *
     * @deprecated This will be removed in version 3.14 since it does not have a great use within the framework.
     */
    export const EVERY_COMPANION_ENUM_MEMBERS_JOINED = "(“instance”, “parentInstance”, “grandParentInstance”, “greatGrandParentInstance”, “defaultValue”, “setDefaultValue”, “values”, “names”, “ordinals”, “iterator”, “getValue”, “getName”, “getOrdinal”, “[Symbol.iterator]”, “[Symbol.toStringTag]”)"

    //#endregion -------------------- Enumerable members --------------------
    //#region -------------------- Symbols --------------------

    /**
     * Tell that the {@link Enumerable} reference will be similar to another {@link Enumerable.name}
     *
     * @uniqueToJavascript
     */
    export const ENUM_REFERENCE_BY_ITS_NAME_SYMBOL = Symbol("Enum reference by its name",)

    /**
     * Tell that the {@link Enumerable} reference will be `null`
     *
     * @uniqueToJavascript
     * @see EnumerableWithNullableParent
     * @see EnumerableWithNullableGrandParent
     * @see EnumerableWithNullableGreatGrandParent
     * @see EnumWithNullableParent
     * @see EnumWithNullableGrandParent
     * @see EnumWithNullableGreatGrandParent
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
     * ({@link CompanionEnumerable}, {@link CompanionEnumerableWithParent}, {@link CompanionEnumerableWithGrandParent}, {@link CompanionEnumerableWithGreatGrandParent})
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

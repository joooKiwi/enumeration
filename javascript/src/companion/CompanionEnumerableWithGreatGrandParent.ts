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

import type {Nullable, NullOrUndefined, StringOrNumericOrObject, StringOrObject, TemplateOrBigIntOrObject, TemplateOrNumber, TemplateOrNumberOrObject, TemplateOrNumericOrObject} from "@joookiwi/type"

import type {Enumerable}                                                                             from "../Enumerable"
import type {EnumerableConstructor}                                                                  from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}                                                      from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}                                                 from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                                                           from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}                                                                    from "./CompanionEnumerable"
import type {CompanionEnumerableWithParent}                                                          from "./CompanionEnumerableWithParent"
import type {CompanionEnumerableWithGrandParent}                                                     from "./CompanionEnumerableWithGrandParent"
import type {ImpossibleNames}                                                                        from "../type/name"
import type {NameOf, SpecificNameOf}                                                                 from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                                           from "../type/ordinalOf"
import type {NameByOrdinal, OrdinalByName, ValueByName, ValueBySpecificName, ValueBySpecificOrdinal} from "../type/valueBy"

export interface CompanionEnumerableWithGreatGrandParent<out ENUM extends EnumerableWithNullableGreatGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends EnumerableWithNullableGrandParent<GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM>,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerableWithGrandParent<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GRAND_PARENT_ENUM extends EnumerableWithNullableParent<GREAT_GRAND_PARENT_ENUM>,
    GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumerableWithParent<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    out GREAT_GRAND_PARENT_ENUM extends Enumerable,
    GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUM, CompanionEnumerable<GREAT_GRAND_PARENT_ENUM, GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumerableWithGrandParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR> {

    /** The {@link EnumerableWithNullableGreatGrandParent} constructor */
    readonly greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM_CONSTRUCTOR


    //#region -------------------- Default getter & setter methods --------------------

    get defaultValue(): ENUM

    /**
     * Set the default value by a `GREAT_GRAND_PARENT_ENUM`, `GRAND_PARENT_ENUM`, `PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param value The value to find (`GREAT_GRAND_PARENT_ENUM`, `GRAND_PARENT_ENUM`, `PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @see setDefaultValue
     */
    set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,)


    /**
     * Remove the default value
     *
     * @param value A `null` value
     * @typescriptDefinition
     */
    setDefaultValue(value: NullOrUndefined,): this

    /**
     * Set nothing because of an {@link EnumConstants.EDGE_CASE_NUMERIC_NAMES edge-case name}
     * or an {@link EnumConstants.ENUMERABLE_WITH_GREAT_GRAND_PARENT_MEMBERS enumerable member name}
     *
     * @param value The edge-case value
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @typescriptDefinition
     */
    setDefaultValue(value: ImpossibleNames,): never

    /**
     * Set the default value to `ENUM`.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param instance The current `ENUM`
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    setDefaultValue(instance: Nullable<ENUM>,): this

    /**
     * Set the default value to an `ENUM` associated to the `PARENT_ENUM`.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param parentInstance The current `PARENT_ENUM`
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.parentInstance parentInstance}
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    setDefaultValue(parentInstance: Nullable<PARENT_ENUM>,): this

    /**
     * Set the default value to an `ENUM` associated to the `GRAND_PARENT_ENUM`.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param grandParentInstance The current `GRAND_PARENT_ENUM`
     * @throws InvalidEnumerableException The {@link grandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.grandParentInstance grandParentInstance}
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    setDefaultValue(grandParentInstance: Nullable<GRAND_PARENT_ENUM>,): this

    /**
     * Set the default value to an `ENUM` associated to the `GREAT_GRAND_PARENT_ENUM`.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param greatGrandParentInstance The current `GREAT_GRAND_PARENT_ENUM`
     * @throws InvalidEnumerableException The {@link grandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.grandParentInstance grandParentInstance}
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    setDefaultValue(greatGrandParentInstance: GREAT_GRAND_PARENT_ENUM,): this

    /**
     * Set the default value by a {@link Number} {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrNumberOrObject>,): this

    /**
     * Set the default value by a {@link BigInt} {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrBigIntOrObject>,): this

    /**
     * Set the default value by a {@link Number} or {@link BigInt} {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrNumericOrObject>,): this

    /**
     * Set the default value by a {@link String} {@link EnumerableWithNullableGreatGrandParent.name name} or {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableGreatGrandParent.name name} or {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     */
    setDefaultValue(nameOrOrdinal: Nullable<StringOrObject>,): this

    /**
     * Set the default value by a `GREAT_GRAND_PARENT_ENUM`, `GRAND_PARENT_ENUM`, `PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param value The value to find (`GREAT_GRAND_PARENT_ENUM`, `GRAND_PARENT_ENUM`, `PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM | GREAT_GRAND_PARENT_ENUM>,): this

    //#endregion -------------------- Default getter & setter methods --------------------

    //#region -------------------- "Get value" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws ForbiddenNameException    The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException The {@link value} was either ±∞ or {@link NaN}
     * @throws NullEnumerableException   The {@link value} was `null`|`undefined`
     * @typescriptDefinition
     */
    getValue(value: Nullable<ImpossibleNames>,): never

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrNumberOrObject>,): ENUM

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrBigIntOrObject>,): ENUM

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrNumericOrObject>,): ENUM

    /**
     * Get an `ENUM` by a {@link EnumerableWithNullableGreatGrandParent.name name}
     *
     * @param name The {@link EnumerableWithNullableGreatGrandParent.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link name}
     * @typescriptDefinition
     */
    getValue<const NAME extends string, >(name: Nullable<NAME>,): ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>

    /**
     * Get an `ENUM` by a {@link EnumerableWithNullableGreatGrandParent.name name} or an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableGreatGrandParent.name name} or {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link nameOrOrdinal} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link nameOrOrdinal}
     */
    getValue(nameOrOrdinal: Nullable<StringOrObject>,): ENUM

    /**
     * Get the instance `ENUM` directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getValue<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): INSTANCE

    /**
     * Get the instance `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.parent parent}
     *
     * @param parentInstance The parent instance to find
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.parentInstance parentInstance}
     * @throws NullEnumerableException    The {@link parentInstance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getValue<const PARENT_INSTANCE extends PARENT_ENUM, >(parentInstance: Nullable<PARENT_INSTANCE>,): ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>

    /**
     * Get the instance `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent}
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws InvalidEnumerableException The {@link grandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.grandParentInstance grandParentInstance}
     * @throws NullEnumerableException    The {@link grandParentInstance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,): ValueByName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE>

    /**
     * Get the instance `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent}
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws InvalidEnumerableException The {@link greatGrandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.greatGrandParentInstance greatGrandParentInstance}
     * @throws NullEnumerableException    The {@link greatGrandParentInstance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getValue<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,): ValueByName<ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>

    /**
     * Get an `ENUM` by any valid value
     * (`PARENT_ENUM`, `ENUM`, {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} or {@link EnumerableWithNullableGreatGrandParent.name name})
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGrandGreatParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE> | ValueByName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE> | ValueByName<ENUM_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE> | ENUM

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws ForbiddenNameException    The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException The {@link value} was either ±∞ or {@link NaN}
     * @throws NullEnumerableException   The {@link value} was `null`|`undefined`
     * @typescriptDefinition
     */
    getName(value: Nullable<ImpossibleNames>,): never

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    getName(ordinal: Nullable<TemplateOrNumberOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    getName(ordinal: Nullable<TemplateOrBigIntOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link ordinal}
     */
    getName(ordinal: Nullable<TemplateOrNumericOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` by a {@link EnumerableWithNullableGreatGrandParent.name name}
     *
     * @param name The {@link EnumerableWithNullableGreatGrandParent.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link name}
     * @typescriptDefinition
     */
    getName<const NAME extends string, >(name: Nullable<NAME>,): SpecificNameOf<NAME, ENUM>

    /**
     * Get an `ENUM` by a {@link EnumerableWithNullableGreatGrandParent.name name} or an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableGreatGrandParent.name name} or {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link nameOrOrdinal} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link nameOrOrdinal}
     */
    getName(nameOrOrdinal: Nullable<StringOrObject>,): NameOf<ENUM>

    /**
     * Get the name of the `ENUM` directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getName<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>

    /**
     * Get the name of the `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.parent parent}
     *
     * @param parentInstance The parent instance to find
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.parentInstance parentInstance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getName<const PARENT_INSTANCE extends PARENT_ENUM, >(parentInstance: Nullable<PARENT_INSTANCE>,): NameOf<PARENT_INSTANCE>

    /**
     * Get the name of the `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent}
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws InvalidEnumerableException The {@link grandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.grandParentInstance grandParentInstance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,): NameOf<GRAND_PARENT_INSTANCE>

    /**
     * Get the name of the `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent}
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws InvalidEnumerableException The {@link greatGrandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.greatGrandParentInstance greatGrandParentInstance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getName<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,): NameOf<GREAT_GRAND_PARENT_INSTANCE>

    /**
     * Get an `ENUM` by any valid value
     * (`PARENT_ENUM`, `ENUM`, {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} or {@link EnumerableWithNullableGreatGrandParent.name name})
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE> | NameOf<GREAT_GRAND_PARENT_INSTANCE> | NameOf<ENUM>

    //#endregion -------------------- "Get name" methods --------------------
    //#region -------------------- "Get ordinal" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws ForbiddenNameException    The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException The {@link value} was either ±∞ or {@link NaN}
     * @throws NullEnumerableException   The {@link value} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal(value: Nullable<ImpossibleNames>,): never

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): SpecificOrdinalOf<ORDINAL, ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal}
     *
     * @param ordinal The ordinal to find (as a {@link String} template form)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): SpecificOrdinalOf<ORDINAL, ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<TemplateOrNumberOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<TemplateOrBigIntOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by an {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<TemplateOrNumericOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by a {@link EnumerableWithNullableGreatGrandParent.name name}
     *
     * @param name The {@link EnumerableWithNullableGreatGrandParent.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link name} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link name}
     */
    getOrdinal<const NAME extends string, >(name: Nullable<NAME>,): OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} by a {@link EnumerableWithNullableGreatGrandParent.name name}
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableGreatGrandParent.name name} or {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link nameOrOrdinal}
     */
    getOrdinal(nameOrOrdinal: Nullable<StringOrObject>,): OrdinalOf<ENUM>

    /**
     * Get the ordinal of the `ENUM` directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getOrdinal<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>

    /**
     * Get the ordinal of the `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.parent parent}
     *
     * @param parentInstance The parent instance to find
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.parentInstance parentInstance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >(parentInstance: Nullable<PARENT_INSTANCE>,): OrdinalOf<PARENT_INSTANCE>

    /**
     * Get the ordinal of the `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent}
     *
     * @param grandParentInstance The grandparent instance to find
     * @throws InvalidEnumerableException The {@link grandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.grandParentInstance grandParentInstance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,): OrdinalOf<GRAND_PARENT_INSTANCE>

    /**
     * Get the ordinal of the `ENUM` by finding an associated {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent}
     *
     * @param greatGrandParentInstance The great-grandparent instance to find
     * @throws InvalidEnumerableException The {@link greatGrandParentInstance} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.greatGrandParentInstance greatGrandParentInstance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     */
    getOrdinal<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,): OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} from any valid value
     * (`PARENT_ENUM`, `ENUM`, {@link EnumerableWithNullableGreatGrandParent.ordinal ordinal} or {@link EnumerableWithNullableGreatGrandParent.name name})
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithGreatGrandParent.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithGreatGrandParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.parent parent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.grandParent grandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableGreatGrandParent.greatGrandParent greatGrandParent} (`===`) was in {@link CompanionEnumerableWithGreatGrandParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUM, >(value: Nullable<| TemplateOrNumericOrObject<ORDINAL> | StringOrObject<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE> | OrdinalOf<GREAT_GRAND_PARENT_INSTANCE> | OrdinalOf<ENUM>

    //#endregion -------------------- "Get ordinal" methods --------------------

}

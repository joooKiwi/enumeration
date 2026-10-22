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
import type {EnumerableWithNullableParent}                                                           from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}                                                                    from "./CompanionEnumerable"
import type {ImpossibleNames}                                                                        from "../type/name"
import type {NameOf, SpecificNameOf}                                                                 from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                                           from "../type/ordinalOf"
import type {NameByOrdinal, OrdinalByName, ValueByName, ValueBySpecificName, ValueBySpecificOrdinal} from "../type/valueBy"

export interface CompanionEnumerableWithParent<out ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends Enumerable,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerable<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR> {

    /** The {@link EnumerableWithNullableParent} constructor */
    readonly parentInstance: PARENT_ENUM_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    get defaultValue(): ENUM

    /**
     * Set the default value by a `PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}|{@link CompanionEnumerableWithParent.parentInstance parentInstance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}|{@link CompanionEnumerableWithParent.parentInstance parentIinstance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance}|{@link CompanionEnumerableWithParent.parentInstance parentInstance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @see setDefaultValue
     */
    set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,)


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
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    setDefaultValue(instance: Nullable<ENUM>,): this

    /**
     * Set the default value to an `ENUM` associated to the `PARENT_ENUM`.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param parentInstance The current `PARENT_ENUM`
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithParent.parentInstance parentInstance}
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    setDefaultValue(parentInstance: Nullable<PARENT_ENUM>,): this

    /**
     * Set the default value by a {@link Number} {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrNumberOrObject>,): this

    /**
     * Set the default value by a {@link BigInt} {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrBigIntOrObject>,): this

    /**
     * Set the default value by a {@link Number} or {@link BigInt} {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrNumericOrObject>,): this

    /**
     * Set the default value by a {@link String} {@link EnumerableWithNullableParent.name name} or {@link EnumerableWithNullableParent.ordinal ordinal}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableParent.name name} or {@link EnumerableWithNullableParent.ordinal ordinal} to find
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
     * Set the default value by a `PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM | PARENT_ENUM>,): this

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
     * Get an `ENUM` by an {@link EnumerableWithNullableParent.ordinal ordinal}
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrNumberOrObject>,): ENUM

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrBigIntOrObject>,): ENUM

    /**
     * Get an `ENUM` by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrNumericOrObject>,): ENUM

    /**
     * Get an `ENUM` by a {@link EnumerableWithNullableParent.name name}
     *
     * @param name The {@link EnumerableWithNullableParent.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link name}
     * @typescriptDefinition
     */
    getValue<const NAME extends string, >(name: Nullable<NAME>,): ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>

    /**
     * Get an `ENUM` by a {@link EnumerableWithNullableParent.name name} or an {@link EnumerableWithNullableParent.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableParent.name name} or {@link EnumerableWithNullableParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link nameOrOrdinal} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link nameOrOrdinal}
     */
    getValue(nameOrOrdinal: Nullable<StringOrObject>,): ENUM

    /**
     * Get an `ENUM` instance directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    getValue<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): INSTANCE

    /**
     * Get an `ENUM` instance by finding an associated {@link EnumerableWithNullableParent.parent parent}
     *
     * @param parentInstance The parent instance to find
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithParent.parentInstance parentInstance}
     * @throws NullEnumerableException    The {@link parentInstance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    getValue<const PARENT_INSTANCE extends PARENT_ENUM, >(parentInstance: Nullable<PARENT_INSTANCE>,): ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>

    /**
     * Get an `ENUM` by any valid value
     * (`PARENT_ENUM`, `ENUM`, {@link EnumerableWithNullableParent.ordinal ordinal} or {@link EnumerableWithNullableParent.name name})
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | StringOrNumericOrObject | INSTANCE | PARENT_INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByName<ENUM_CONSTRUCTOR, PARENT_INSTANCE> | ENUM

    //#endregion -------------------- "Get value" methods --------------------
    //#region -------------------- "Get name" methods --------------------

    /**
     * Get nothing because of an impossible value
     *
     * @param value An impossible value
     * @throws ForbiddenNameException    The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException The {@link value} was either ±∞ or {@link NaN}
     * @throws NullEnumerableException   The {@link value} was `null`|`undefined`
     * @typescriptdefinition
     */
    getName(value: Nullable<ImpossibleNames>,): never

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by an {@link EnumerableWithNullableParent.ordinal ordinal}
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
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
    getName<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getName(ordinal: Nullable<TemplateOrNumberOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getName(ordinal: Nullable<TemplateOrBigIntOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getName(ordinal: Nullable<TemplateOrNumericOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by a {@link EnumerableWithNullableParent.name name}
     *
     * @param name The {@link EnumerableWithNullableParent.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link name} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link name}
     */
    getName<const NAME extends string, >(name: Nullable<NAME>,): SpecificNameOf<NAME, ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} by a {@link EnumerableWithNullableParent.name name}
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableParent.name name} or {@link EnumerableWithNullableParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link nameOrOrdinal}
     */
    getName(nameOrOrdinal: Nullable<StringOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` instance {@link EnumerableWithNullableParent.name name} directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    getName<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>

    /**
     * Get an `ENUM` instance {@link EnumerableWithNullableParent.name name} by finding an associated {@link EnumerableWithNullableParent.parent parent}
     *
     * @param parentInstance The parent instance to find
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithParent.parentInstance parentInstance}
     * @throws NullEnumerableException    The {@link parentInstance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    getName<const PARENT_INSTANCE extends PARENT_ENUM, >(parentInstance: Nullable<PARENT_INSTANCE>,): NameOf<PARENT_INSTANCE>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.name name} from any valid value
     * (`PARENT_ENUM`, `ENUM`, {@link EnumerableWithNullableParent.ordinal ordinal} or {@link EnumerableWithNullableParent.name name})
     *
     * @param value The value to find (`PARENT_ENUM`, an `ENUM` {@link EnumerableWithNullableParent.name name}, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | StringOrNumericOrObject | INSTANCE | PARENT_INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<ENUM>

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
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by an {@link EnumerableWithNullableParent.ordinal ordinal}
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number})
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
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by an {@link EnumerableWithNullableParent.ordinal ordinal}
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
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
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
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<TemplateOrBigIntOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by an {@link EnumerableWithNullableParent.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link EnumerableWithNullableParent.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
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
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by a {@link EnumerableWithNullableParent.name name}
     *
     * @param name The {@link EnumerableWithNullableParent.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link name} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link name}
     */
    getOrdinal<const NAME extends string, >(name: Nullable<NAME>,): OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} by a {@link EnumerableWithNullableParent.name name}
     *
     * @param nameOrOrdinal The {@link EnumerableWithNullableParent.name name} or {@link EnumerableWithNullableParent.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link nameOrOrdinal}
     */
    getOrdinal(nameOrOrdinal: Nullable<StringOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` instance {@link EnumerableWithNullableParent.ordinal ordinal} directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    getOrdinal<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>

    /**
     * Get an `ENUM` instance {@link EnumerableWithNullableParent.ordinal ordinal} by finding an associated {@link EnumerableWithNullableParent.parent parent}
     *
     * @param parentInstance The parent instance to find
     * @throws InvalidEnumerableException The {@link parentInstance} was not an `instanceof` {@link CompanionEnumerableWithParent.parentInstance parentInstance}
     * @throws NullEnumerableException    The {@link parentInstance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     */
    getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >(parentInstance: Nullable<PARENT_INSTANCE>,): OrdinalOf<PARENT_INSTANCE>

    /**
     * Get an `ENUM` {@link EnumerableWithNullableParent.ordinal ordinal} from any valid value
     * (`PARENT_ENUM`, `ENUM`, {@link EnumerableWithNullableParent.ordinal ordinal} or {@link EnumerableWithNullableParent.name name})
     *
     * @param value The value to find (`PARENT_ENUM`, `ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerableWithParent.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerableWithParent.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws NullReferenceException                      No equivalent value via the {@link EnumerableWithNullableParent.parent parent} (`===`) was in {@link CompanionEnumerableWithParent.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | StringOrNumericOrObject | INSTANCE | PARENT_INSTANCE>,): | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<ENUM>

    //#endregion -------------------- "Get ordinal" methods --------------------

}

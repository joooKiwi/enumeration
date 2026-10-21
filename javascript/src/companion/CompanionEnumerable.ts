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

import type {CollectionHolder, CollectionIterator}                                                                                                                                from "@joookiwi/collection"
import type {Nullable, NullOrUndefined, StringOrNumericOrObject, StringOrObject, TemplateOrBigIntOrObject, TemplateOrNumber, TemplateOrNumberOrObject, TemplateOrNumericOrObject} from "@joookiwi/type"

import type {Enumerable}                                                                from "../Enumerable"
import type {EnumerableConstructor}                                                     from "../EnumerableConstructor"
import type {ImpossibleNames}                                                           from "../type/name"
import type {NameOf, SpecificNameOf}                                                    from "../type/nameOf"
import type {OrdinalOf, SpecificOrdinalOf}                                              from "../type/ordinalOf"
import type {CompanionEnumName}                                                         from "../type/toStringTag"
import type {NameByOrdinal, OrdinalByName, ValueBySpecificName, ValueBySpecificOrdinal} from "../type/valueBy"

export interface CompanionEnumerable<out ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerable<ENUM, ENUM_CONSTRUCTOR>>, > {

    /** The {@link Enumerable} constructor */
    readonly instance: ENUM_CONSTRUCTOR

    //#region -------------------- Default getter & setter methods --------------------

    /**
     * Get the default value
     *
     * @throws NullEnumerableException An exception occurred while retrieving and validating the `default value`|`default name`|`default ordinal`
     * @throws NullEnumerableException The default value could not be initialized
     * @throws UnhandledValueException The `default value`|`default name`|`default ordinal` was an improper type
     */
    get defaultValue(): ENUM

    /**
     * Set the default value by an `ENUM`, {@link Number}, {@link BigInt} or {@link String}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param value The value to find (`ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @see setDefaultValue
     */
    set defaultValue(value: Nullable<| StringOrNumericOrObject | ENUM>,)

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
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     */
    setDefaultValue(instance: Nullable<ENUM>,): this

    /**
     * Set the default value by a {@link Number} {@link Enumerable.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrNumberOrObject>,): this

    /**
     * Set the default value by a {@link BigInt} {@link Enumerable.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrBigIntOrObject>,): this

    /**
     * Set the default value by an {@link Number} or {@link BigInt} {@link Enumerable.ordinal ordinal} (in a template or directly).
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find ({@link Number}/{@link BigInt})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     */
    setDefaultValue(ordinal: Nullable<TemplateOrNumericOrObject>,): this

    /**
     * Set the default value by a {@link String} {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
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
     * Set the default value by an `ENUM`, {@link Number}, {@link BigInt} or {@link String}.
     *
     * If it did receive a `null`|`undefined`, it removes the default value.
     *
     * @param value The value to find (`ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    setDefaultValue(value: Nullable<| StringOrNumericOrObject | ENUM>,): this

    //#endregion -------------------- Default getter & setter methods --------------------
    //#region -------------------- Values getter methods --------------------

    /** Every {@link Enumerable instance} for the {@link instance} */
    readonly values: CollectionHolder<ENUM>

    /** Every {@link Enumerable.name name} for the {@link instance} */
    readonly names: CollectionHolder<NameOf<ENUM>>

    /** Every {@link Enumerable.ordinal ordinal} for the {@link instance} */
    readonly ordinals: CollectionHolder<OrdinalOf<ENUM>>

    /** An {@link IterableIterator iterator} for the {@link instance} */
    readonly iterator: CollectionIterator<ENUM>

    //#endregion -------------------- Values getter methods --------------------

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
     * Get an `ENUM` by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number})
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<ORDINAL>,): ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrNumberOrObject>,): ENUM

    /**
     * Get an `ENUM` by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrBigIntOrObject>,): ENUM

    /**
     * Get an `ENUM` by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The value found reflectively was `null`
     * @throws NullReferenceException     No value exist in the {@link CompanionEnumerable.instance instance} with the {@link ordinal}
     */
    getValue(ordinal: Nullable<TemplateOrNumericOrObject>,): ENUM

    /**
     * Get an `ENUM` by a {@link Enumerable.name name}
     *
     * @param name The {@link Enumerable.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link name}
     * @typescriptDefinition
     */
    getValue<const NAME extends string, >(name: Nullable<NAME>,): ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME>

    /**
     * Get an `ENUM` by a {@link Enumerable.name name} or an {@link Enumerable.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link nameOrOrdinal} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link nameOrOrdinal}
     */
    getValue(nameOrOrdinal: Nullable<StringOrObject>,): ENUM

    /**
     * Get an instance `ENUM` directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     */
    getValue<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): INSTANCE

    /**
     * Get an `ENUM` by any valid value
     * (`ENUM`, {@link Enumerable.ordinal ordinal} or {@link Enumerable.name name})
     *
     * @param value The value to find (`ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | StringOrNumericOrObject | INSTANCE>,): | ValueBySpecificOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueBySpecificName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE

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
     * Get an `ENUM` {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number})
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
     * Get an `ENUM` {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnumerable.values values}
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, >(ordinal: Nullable<TemplateOrNumber<ORDINAL>>,): NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>

    /**
     * Get an `ENUM` {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnumerable.values values}
     */
    getName(ordinal: Nullable<TemplateOrNumberOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnumerable.values values}
     */
    getName(ordinal: Nullable<TemplateOrBigIntOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.name name} by an {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
     * @throws ForbiddenNumericException  The {@link ordinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException The {@link ordinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @throws NullReferenceException     The {@link ordinal} did not have any association in {@link CompanionEnumerable.values values}
     */
    getName(ordinal: Nullable<TemplateOrNumericOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.name name} by a {@link Enumerable.name name}
     *
     * @param name The {@link Enumerable.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link name}
     * @typescriptDefinition
     */
    getName<const NAME extends string, >(name: Nullable<NAME>,): SpecificNameOf<NAME, ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.name name} by a {@link Enumerable.name name} or an {@link Enumerable.ordinal ordinal}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link nameOrOrdinal}
     */
    getName(nameOrOrdinal: Nullable<StringOrObject>,): NameOf<ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.name name} directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     */
    getName<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): NameOf<INSTANCE>

    /**
     * Get an `ENUM` {@link Enumerable.name name} from any valid value
     * (`ENUM`, {@link Enumerable.ordinal ordinal} or {@link Enumerable.name name})
     *
     * @param value The value to find (`ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      The {@link value} did not have any association in {@link CompanionEnumerable.values values}
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM = ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | StringOrNumericOrObject | INSTANCE>,): | NameByOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE>

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
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by an {@link Enumerable.ordinal ordinal}
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number})
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
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by an {@link Enumerable.ordinal ordinal} (in a template or directly)
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
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number} or {@link String} template)
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
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link BigInt} or {@link String} template)
     * @throws ImpossibleOrdinalException The {@link ordinal} is positive
     * @throws ImpossibleOrdinalException The {@link ordinal} is over the {@link EnumConstants.MAX_VALUE_AS_BIG_INT}
     * @throws ImpossibleOrdinalException The {@link ordinal} was not one of the {@link #ordinals}
     * @throws NullEnumerableException    The {@link ordinal} was `null`|`undefined`
     * @typescriptDefinition
     */
    getOrdinal(ordinal: Nullable<TemplateOrBigIntOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by a {@link Enumerable.ordinal ordinal} (in a template or directly)
     *
     * @param ordinal The {@link Enumerable.ordinal ordinal} to find (as a {@link Number}, {@link BigInt} or {@link String} template)
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
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by a {@link Enumerable.name name}
     *
     * @param name The {@link Enumerable.name name} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link name} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link name} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link name} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link name} is positive
     * @throws ImpossibleOrdinalException                  The {@link name} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link name} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link name} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link name} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link name} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link name}
     */
    getOrdinal<const NAME extends string, >(name: Nullable<NAME>,): OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME>

    /**
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} by a {@link Enumerable.name name}
     *
     * @param nameOrOrdinal The {@link Enumerable.name name} or {@link Enumerable.ordinal ordinal} to find
     * @throws ForbiddenInheritedEnumerableMemberException The {@link nameOrOrdinal} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link nameOrOrdinal} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link nameOrOrdinal} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is positive
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is over the {@link EnumConstants.MAX_VALUE_AS_NUMBER}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link nameOrOrdinal} was not one of the {@link #ordinals}
     * @throws InvalidInstanceException                    The {@link nameOrOrdinal} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link nameOrOrdinal} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link nameOrOrdinal}
     */
    getOrdinal(nameOrOrdinal: Nullable<StringOrObject>,): OrdinalOf<ENUM>

    /**
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} directly
     *
     * @param instance The instance to find
     * @throws InvalidEnumerableException The {@link instance} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException    The {@link instance} was `null`|`undefined`
     * @throws NullReferenceException     No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     */
    getOrdinal<const INSTANCE extends ENUM, >(instance: Nullable<INSTANCE>,): OrdinalOf<INSTANCE>

    /**
     * Get an `ENUM` {@link Enumerable.ordinal ordinal} from any valid value
     * (`ENUM`, {@link Enumerable.ordinal ordinal} or {@link Enumerable.name name})
     *
     * @param value The value to find (`ENUM`, {@link Number}, {@link BigInt} or {@link String})
     * @throws ForbiddenInheritedEnumerableMemberException The {@link value} was either `name`, `ordinal`, `parent`, `grandParent` or `greatGrandParent`
     * @throws ForbiddenNameException                      The {@link value} was one of the `excluded name`
     * @throws ForbiddenNumericException                   The {@link value} was either ±∞ or {@link NaN}
     * @throws ImpossibleOrdinalException                  The {@link value} is positive
     * @throws ImpossibleOrdinalException                  The {@link value} is over the MAX_VALUE ({@link EnumConstants.MAX_VALUE_AS_NUMBER number} or {@link EnumConstants.MAX_VALUE_AS_BIG_INT bigint})
     * @throws ImpossibleOrdinalException                  The {@link value} is a floating {@link Number}
     * @throws ImpossibleOrdinalException                  The {@link value} was not one of the {@link #ordinals}
     * @throws InvalidEnumerableException                  The {@link value} was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws InvalidInstanceException                    The {@link value} found reflectively was not an `instanceof` {@link CompanionEnumerable.instance instance}
     * @throws NullEnumerableException                     The {@link value} was `null`|`undefined`
     * @throws NullReferenceException                      The value found reflectively was `null`
     * @throws NullReferenceException                      No value exist in the {@link CompanionEnumerable.instance instance} with the {@link value}
     * @throws NullReferenceException                      No equivalent value (`===`) was in {@link CompanionEnumerable.values values}
     * @throws UnhandledValueException                     The {@link value} was an improper type
     * @typescriptDefinition
     */
    getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM = ENUM, >(value: Nullable<| TemplateOrNumber<ORDINAL> | NAME | StringOrNumericOrObject | INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUM> | OrdinalByName<ENUM_CONSTRUCTOR, ENUM, NAME> | OrdinalOf<INSTANCE>

    //#endregion -------------------- "Get ordinal" methods --------------------

    /** A Javascript way to implements a "for‥of" for a {@link Enumerable instance} instance */
    [Symbol.iterator](): CollectionIterator<ENUM>

    /**
     * An output for the call from {@link Object.prototype.toString.call} [object CompanionEnumerable] instead of [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: CompanionEnumName

}

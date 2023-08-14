/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                   from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                        from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableName, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {EnumerableWithNullableGrandParent}                                                                                                                                                                                                                                                                                                                            from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}                                                                                                                                                                                                                                                                                                                                 from "../EnumerableWithNullableParent"
import type {Nullable, NullOrUndefined, PossibleBigIntOrTemplate, PossibleNumberOrTemplate, PossibleNumeric, PossibleNumericOrTemplate, PossibleString, PossibleStringOrNumeric}                                                                                                                                                                                           from "../general type"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                     from "./CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                                                                                                                                                                                                                                                                      from "./CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                           from "./CompanionEnumWithParent.declaration"
import type {ImpossibleNames}                                                                                                                                                                                                                                                                                                                                              from "./types"

import {CompanionEnumWithParent}    from "./CompanionEnumWithParent"
import {InvalidEnumerableException} from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../exception/InvalidInstanceException"
import {NullInstanceException}      from "../exception/NullInstanceException"
import {NonExistantKeyException}    from "../exception/NonExistantKeyException"
import {NullReferenceException}     from "../exception/NullReferenceException"

export class CompanionEnumWithGrandParent<const out ENUM extends EnumerableWithNullableGrandParent<PARENT_ENUM, GRAND_PARENT_ENUM>,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumWithGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    const out PARENT_ENUM extends EnumerableWithNullableParent<GRAND_PARENT_ENUM>,
    const PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumWithParentDeclaration<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>,
    const out GRAND_PARENT_ENUM extends Enumerable,
    const GRAND_PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUM, CompanionEnumDeclaration<GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>
    implements CompanionEnumWithGrandParentDeclaration<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR, GRAND_PARENT_ENUM, GRAND_PARENT_ENUM_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #grandParentInstance

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUM_CONSTRUCTOR, parentInstance: PARENT_ENUM_CONSTRUCTOR, grandParentInstance: GRAND_PARENT_ENUM_CONSTRUCTOR,) {
        super(instance, parentInstance,)
        if (!("grandParent" in instance.prototype))
            throw new NonExistantKeyException(`No attribute "grandParent" exist in the "${instance.name}" instance. Either use a getter method or add it in the class.`, "grandParent", instance.prototype,)
        if (!("parent" in parentInstance.prototype))
            throw new NonExistantKeyException(`No attribute "parent" exist in the "${parentInstance.name}" instance. Either use a getter method or add it in the class.`, "parent", parentInstance.prototype,)
        if (grandParentInstance == null)
            throw new NullInstanceException()
        if (!(grandParentInstance instanceof Function))
            throw new InvalidInstanceException(`The grandparent instance received in "${this.constructor.name}" is not a function type.`, grandParentInstance,)
        this.#grandParentInstance = grandParentInstance
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get grandParentInstance(): GRAND_PARENT_ENUM_CONSTRUCTOR {
        return this.#grandParentInstance
    }


    public override get defaultValue(): ENUM {
        return super.defaultValue
    }

    public override set defaultValue(value: Nullable<| PossibleStringOrNumeric | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>) {
        super.defaultValue = value == null ? null : this._getValue(value)
    }

    public override setDefaultValue(value: NullOrUndefined,): this
    public override setDefaultValue(value: ImpossibleNames,): never
    public override setDefaultValue(ordinal: Nullable<PossibleNumeric>,): this
    public override setDefaultValue(name: Nullable<PossibleString>,): this
    public override setDefaultValue(enumerable: Nullable<ENUM>,): this
    public override setDefaultValue(parentEnumerable: Nullable<PARENT_ENUM>,): this
    public override setDefaultValue(grandParentEnumerable: Nullable<GRAND_PARENT_ENUM>,): this
    public override setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>,): this
    public override setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>): this {
        this.defaultValue = value
        return this
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Validation methods --------------------

    //#region -------------------- Get value (validated) methods --------------------

    /**
     * Get a valid value that is a valid {@link EnumerableWithNullableGrandParent}
     * for the current {@link instance}, {@link parentInstance} or {@link grandParentInstance}
     *
     * @param enumerable The instance to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected override _getValidValueByEnumerable(enumerable: Enumerable,): ENUM {
        const instance = this.instance
        if (enumerable instanceof instance)
            return this._getValueFromValues(enumerable,)

        const parentInstance = this.parentInstance
        if (enumerable instanceof parentInstance)
            return this._getValueFromValuesByParent(enumerable,)

        const grandParentInstance = this.grandParentInstance
        if (enumerable instanceof grandParentInstance)
            return this._getValueFromValuesByGrandParent(enumerable,)

        throw new InvalidEnumerableException(`The enumerable "${instance.name}.${enumerable.name}" is not an instance of "${instance.name}", "${parentInstance.name}" or "${grandParentInstance.name}".`, enumerable, [instance, parentInstance, grandParentInstance,],)
    }

    //#endregion -------------------- Get value (validated) methods --------------------
    //#region -------------------- Get value from … methods --------------------

    /**
     * Get an {@link Enumerable}
     * by the {@link EnumerableWithNullableGrandParent.grandParent grandparent}
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link Enumerable} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromValuesByGrandParent(value: Enumerable,): ENUM {
        const valueFound = this.values.find(it => it.grandParent === value)
        if (valueFound == null)
            throw new NullReferenceException(`No grandparent "${value}" could be found on the "${this.instance.name}".`, value,)
        return valueFound
    }

    //#endregion -------------------- Get value from … methods --------------------

    //#endregion -------------------- Validation methods --------------------

    public override getValue                                                                                                                                                                                          (value: Nullable<ImpossibleNames>,):                                                                                                  never
    public override getValue<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<ORDINAL>,):                                                                                                        ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,):                                                                              ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getValue                                                                                                                                                                                          (ordinal: Nullable<PossibleNumberOrTemplate>,):                                                                                       ENUM
    public override getValue                                                                                                                                                                                          (ordinal: Nullable<PossibleBigIntOrTemplate>,):                                                                                       ENUM
    public override getValue<const NAME extends string, >                                                                                                                                                             (name: Nullable<PossibleString<NAME>>,):                                                                                              ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public override getValue                                                                                                                                                                                          (nameOrOrdinal: Nullable<PossibleString>,):                                                                                           ENUM
    public override getValue<const INSTANCE extends ENUM, >                                                                                                                                                           (instance: Nullable<INSTANCE>,):                                                                                                      INSTANCE
    public override getValue<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                             (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                         ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                 (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                              ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    public override getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR, | PARENT_INSTANCE | GRAND_PARENT_INSTANCE> | ENUM
    public override getValue(value: Nullable<| PossibleStringOrNumeric | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>,): ENUM {
        return this._getValue(value,)
    }

    public override getName                                                                                                                                                                                          (value: Nullable<ImpossibleNames>,):                                                                                                  never
    public override getName<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<ORDINAL>,):                                                                                                        EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,):                                                                              EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL>
    public override getName                                                                                                                                                                                          (ordinal: Nullable<PossibleNumberOrTemplate>,):                                                                                       NameOf<ENUM>
    public override getName                                                                                                                                                                                          (ordinal: Nullable<PossibleBigIntOrTemplate>,):                                                                                       NameOf<ENUM>
    public override getName<const NAME extends string, >                                                                                                                                                             (name: Nullable<PossibleString<NAME>>,):                                                                                              SpecificNameOf<NAME, ENUM>
    public override getName                                                                                                                                                                                          (nameOrOrdinal: Nullable<PossibleString>,):                                                                                           NameOf<ENUM>
    public override getName<const INSTANCE extends ENUM, >                                                                                                                                                           (instance: Nullable<INSTANCE>,):                                                                                                      NameOf<INSTANCE>
    public override getName<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                             (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                         NameOf<PARENT_INSTANCE>
    public override getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                 (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                              NameOf<GRAND_PARENT_INSTANCE>
    public override getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR, ENUM, ORDINAL> | SpecificNameOf<NAME, ENUM> | NameOf<INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | ENUM>
    public override getName(value: Nullable<| PossibleStringOrNumeric | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>,): NameOf<ENUM> {
        return this._getName(value,)
    }

    public override getOrdinal                                                                                                                                                                                          (value: Nullable<ImpossibleNames>,):                                                                                                  never
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<ORDINAL>,):                                                                                                        SpecificOrdinalOf<ORDINAL, ENUM>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                          (ordinal: Nullable<PossibleNumberOrTemplate<ORDINAL>>,):                                                                              SpecificOrdinalOf<ORDINAL, ENUM>
    public override getOrdinal                                                                                                                                                                                          (ordinal: Nullable<PossibleNumberOrTemplate>,):                                                                                       OrdinalOf<ENUM>
    public override getOrdinal                                                                                                                                                                                          (ordinal: Nullable<PossibleBigIntOrTemplate>,):                                                                                       OrdinalOf<ENUM>
    public override getOrdinal<const NAME extends string, >                                                                                                                                                             (name: Nullable<PossibleString<NAME>>,):                                                                                              EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME>
    public override getOrdinal                                                                                                                                                                                          (nameOrOrdinal: Nullable<PossibleString>,):                                                                                           OrdinalOf<ENUM>
    public override getOrdinal<const INSTANCE extends ENUM, >                                                                                                                                                           (instance: Nullable<INSTANCE>,):                                                                                                      OrdinalOf<INSTANCE>
    public override getOrdinal<const PARENT_INSTANCE extends PARENT_ENUM, >                                                                                                                                             (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                         OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >                                                                                                                                 (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                              OrdinalOf<GRAND_PARENT_INSTANCE>
    public override getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUM, const PARENT_INSTANCE extends PARENT_ENUM, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUM, >(value: Nullable<| PossibleNumericOrTemplate<ORDINAL> | PossibleString<NAME> | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUM> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR, ENUM, NAME> | OrdinalOf<INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | ENUM>
    public override getOrdinal(value: Nullable<| PossibleStringOrNumeric | ENUM | PARENT_ENUM | GRAND_PARENT_ENUM>,): OrdinalOf<ENUM> {
        return this._getOrdinal(value,)
    }

    //#endregion -------------------- Methods --------------------

}
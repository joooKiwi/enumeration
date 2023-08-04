/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                                                         from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                                                              from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleNameOf, PossibleOrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinal, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {EnumerableWithNullableGrandParent}                                                                                                                                                                                                                                                                                                                                                                  from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}                                                                                                                                                                                                                                                                                                                                                                       from "../EnumerableWithNullableParent"
import type {Nullable, NullOrUndefined, PossibleBigInt, PossibleNumeric, PossibleString, PossibleStringOrNumeric}                                                                                                                                                                                                                                                                                                from "../general type"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                                                           from "./CompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                                                                                                                                                                                                                                                                                                            from "./CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                                                                 from "./CompanionEnumWithParent.declaration"
import type {ImpossibleNames}                                                                                                                                                                                                                                                                                                                                                                                    from "./types"

import {CompanionEnumWithParent}    from "./CompanionEnumWithParent"
import {InvalidEnumerableException} from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../exception/InvalidInstanceException"
import {NullInstanceException}      from "../exception/NullInstanceException"
import {NonExistantKeyException}    from "../exception/NonExistantKeyException"
import {NullReferenceException}     from "../exception/NullReferenceException"

export class CompanionEnumWithGrandParent<const ENUMERABLE extends EnumerableWithNullableGrandParent<PossibleOrdinalOf<number, PARENT_ENUMERABLE>, PossibleNameOf<string, PARENT_ENUMERABLE>, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE>,
    const ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    const PARENT_ENUMERABLE extends EnumerableWithNullableParent<PossibleOrdinalOf<number, GRAND_PARENT_ENUMERABLE>, PossibleNameOf<string, GRAND_PARENT_ENUMERABLE>, GRAND_PARENT_ENUMERABLE>,
    const PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    const GRAND_PARENT_ENUMERABLE extends Enumerable,
    const GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, CompanionEnumDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends CompanionEnumWithParent<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>
    implements CompanionEnumWithGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #grandParentInstance

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUMERABLE_CONSTRUCTOR, parentInstance: PARENT_ENUMERABLE_CONSTRUCTOR, grandParentInstance: GRAND_PARENT_ENUMERABLE_CONSTRUCTOR,) {
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

    public get grandParentInstance(): GRAND_PARENT_ENUMERABLE_CONSTRUCTOR {
        return this.#grandParentInstance
    }


    public override get defaultValue(): ENUMERABLE {
        return super.defaultValue
    }

    public override set defaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>) {
        super.defaultValue = value == null ? null : this._getValue(value)
    }

    public override setDefaultValue(value: NullOrUndefined,): this
    public override setDefaultValue(value: ImpossibleNames,): never
    public override setDefaultValue(ordinal: Nullable<PossibleNumeric>,): this
    public override setDefaultValue(name: Nullable<PossibleString>,): this
    public override setDefaultValue(enumerable: Nullable<ENUMERABLE>,): this
    public override setDefaultValue(parentEnumerable: Nullable<PARENT_ENUMERABLE>,): this
    public override setDefaultValue(grandParentEnumerable: Nullable<GRAND_PARENT_ENUMERABLE>,): this
    public override setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,): this
    public override setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>): this {
        this.defaultValue = value
        return this
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    public override getValue                                                                                                                                                                                                            (value: Nullable<ImpossibleNames>,):                                                                                                         never
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<ORDINAL>,):                                                                                                               ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                          ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                              ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const NAME extends string, >                                                                                                                                                                               (name: Nullable<NAME>,):                                                                                                                     ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public override getValue<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                       (instance: Nullable<INSTANCE>,):                                                                                                             INSTANCE
    public override getValue<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                         (parentInstance: Nullable<PARENT_ENUMERABLE>,):                                                                                              ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                             (grandParentInstance: Nullable<GRAND_PARENT_ENUMERABLE>,):                                                                                   ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    public override getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    public override getValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,): ENUMERABLE {
        return this._getValue(value,)
    }

    /**
     * Get a {@link EnumerableWithNullableGrandParent enumerable} by validating it is the {@link instance}, {@link parentInstance parent instance} or {@link grandParentInstance grandparent instance} (enumerable constructor)
     *
     * @param value The value to compare its class type to the type ({@link instance}, {@link parentInstance} or {@link grandParentInstance})
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected override _getValueByEnumerable(value: Enumerable,): ENUMERABLE {
        const instance = this.instance,
            parentInstance = this.parentInstance,
            grandParentInstance = this.grandParentInstance

        if (value instanceof instance)
            return this._getValueFromValues(value,)
        if (value instanceof parentInstance)
            return this._getValueFromParentInValues(value,)
        if (value instanceof grandParentInstance)
            return this._getValueFromGrandParentInValues(value,)

        throw new InvalidEnumerableException(`The enumerable "${instance.name}.${value.name}" is not an instance of "${instance.name}", "${parentInstance.name}" or "${grandParentInstance.name}".`, value, [instance, parentInstance, grandParentInstance,] as const,)
    }

    /**
     * Get an {@link EnumerableWithNullableGrandParent enumerable} from the {@link values} by the {@link EnumerableWithNullableGrandParent.grandParent grandparent} instance
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link EnumerableWithNullableGrandParent enumerable} {@link EnumerableWithNullableGrandParent.grandParent grandparent} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromGrandParentInValues(value: Enumerable,): ENUMERABLE {
        const valueFound = this.values.find(it => it.grandParent === value)
        if (valueFound == null)
            throw new NullReferenceException(`No grandparent "${value}" could be found on the "${this.instance.name}".`, value,)
        return valueFound
    }


    public override getName                                                                                                                                                                                                            (value: Nullable<ImpossibleNames>,):                                                                                                       never
    public override getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<ORDINAL>,):                                                                                                             EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                        EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                                                                                            (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                            EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const NAME extends string, >                                                                                                                                                                               (name: Nullable<NAME>,):                                                                                                                   SpecificNameOf<NAME, ENUMERABLE>
    public override getName<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                       (instance: Nullable<INSTANCE>,):                                                                                                           NameOf<INSTANCE>
    public override getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                         (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                              NameOf<PARENT_INSTANCE>
    public override getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                             (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                   NameOf<GRAND_PARENT_INSTANCE>
    public override getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE>
    public override getName(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,): NameOf<ENUMERABLE> {
        return this._getName(value,)
    }


    public override getOrdinal                                                                                                                                                                                                           (value: Nullable<ImpossibleNames>,):                                                                                                        never
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<ORDINAL>,):                                                                                                              SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                         SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                           (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                             SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const NAME extends string, >                                                                                                                                                                              (name: Nullable<NAME>,):                                                                                                                    EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public override getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                      (instance: Nullable<INSTANCE>,):                                                                                                            OrdinalOf<INSTANCE>
    public override getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                        (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                               OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                            (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                    OrdinalOf<GRAND_PARENT_INSTANCE>
    public override getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE>
    public override getOrdinal(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE>,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinal(value,)
    }

    //#endregion -------------------- Methods --------------------

}
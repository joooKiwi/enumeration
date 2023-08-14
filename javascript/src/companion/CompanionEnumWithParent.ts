/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                                                         from "../Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                                                              from "../EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, PossibleNameOf, PossibleOrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinal, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "../Enumerable.types"
import type {EnumerableWithNullableParent}                                                                                                                                                                                                                                                                                                                                                                       from "../EnumerableWithNullableParent"
import type {Nullable, NullOrUndefined, PossibleBigInt, PossibleNumeric, PossibleString, PossibleStringOrNumeric}                                                                                                                                                                                                                                                                                                from "../general type"
import type {CompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                                                           from "./CompanionEnum.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                                                                 from "./CompanionEnumWithParent.declaration"
import type {ImpossibleNames}                                                                                                                                                                                                                                                                                                                                                                                    from "./types"

import {CompanionEnum}              from "./CompanionEnum"
import {InvalidEnumerableException} from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../exception/InvalidInstanceException"
import {NonExistantKeyException}    from "../exception/NonExistantKeyException"
import {NullInstanceException}      from "../exception/NullInstanceException"
import {NullReferenceException}     from "../exception/NullReferenceException"

export class CompanionEnumWithParent<const ENUMERABLE extends EnumerableWithNullableParent<PossibleOrdinalOf<number, PARENT_ENUMERABLE>, PossibleNameOf<string, PARENT_ENUMERABLE>, PARENT_ENUMERABLE>,
    const ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>,
    const PARENT_ENUMERABLE extends Enumerable,
    const PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUMERABLE, ENUMERABLE_CONSTRUCTOR>
    implements CompanionEnumWithParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #parentInstance

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUMERABLE_CONSTRUCTOR, parentInstance: PARENT_ENUMERABLE_CONSTRUCTOR,) {
        super(instance,)
        if (!("parent" in instance.prototype))
            throw new NonExistantKeyException(`No attribute "parent" exist in the "${instance.name}" instance. Either use a getter method or add it in the class.`, "parent", instance.prototype,)
        if (parentInstance == null)
            throw new NullInstanceException()
        if (!(parentInstance instanceof Function))
            throw new InvalidInstanceException(`The parent instance received in "${this.constructor.name}" is not a function type.`, parentInstance,)
        this.#parentInstance = parentInstance
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get parentInstance(): PARENT_ENUMERABLE_CONSTRUCTOR {
        return this.#parentInstance
    }


    public override get defaultValue(): ENUMERABLE {
        return super.defaultValue
    }

    public override set defaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE>) {
        super.defaultValue = value == null ? null : this._getValue(value)
    }

    public override setDefaultValue(value: NullOrUndefined,): this
    public override setDefaultValue(value: ImpossibleNames,): never
    public override setDefaultValue(ordinal: Nullable<PossibleNumeric>,): this
    public override setDefaultValue(name: Nullable<PossibleString>,): this
    public override setDefaultValue(enumerable: Nullable<ENUMERABLE>,): this
    public override setDefaultValue(parentEnumerable: Nullable<PARENT_ENUMERABLE>,): this
    public override setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE>,): this
    public override setDefaultValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE>): this {
        this.defaultValue = value
        return this
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    //#region -------------------- Validation methods --------------------

    //#region -------------------- Get value (validated) methods --------------------

    /**
     * Get a valid value that is a valid {@link EnumerableWithNullableParent}
     * for the current {@link instance} or {@link parentInstance}
     *
     * @param enumerable The instance to validate
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected override _getValidValueByEnumerable(enumerable: Enumerable,): ENUM {
        const instance = this.instance
        if (enumerable instanceof instance)
            return this._getValueFromValues(enumerable)

        const parentInstance = this.parentInstance
        if (enumerable instanceof parentInstance)
            return this._getValueFromValuesByParent(enumerable,)

        throw new InvalidEnumerableException(`The enumerable "${instance.name}.${enumerable.name}" is not an instance of "${instance.name}" or "${parentInstance.name}".`, enumerable, [instance, parentInstance,],)
    }

    //#endregion -------------------- Get value (validated) methods --------------------
    //#region -------------------- Get value from … methods --------------------

    /**
     * Get an {@link Enumerable} from the {@link values}
     * by the {@link EnumerableWithNullableParent.parent parent}
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link Enumerable} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromValuesByParent(value: Enumerable,): ENUM {
        const valueFound = this.values.find(it => it.parent === value)
        if (valueFound == null)
            throw new NullReferenceException(`No parent "${value}" could be found on the "${this.instance.name}".`, value,)
        return valueFound
    }

    //#endregion -------------------- Get value from … methods --------------------

    //#endregion -------------------- Validation methods --------------------


    public override getValue                                                                                                                                               (value: Nullable<ImpossibleNames>,):                                                                                 never
    public override getValue<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<ORDINAL>,):                                                                                       ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<`${ORDINAL}`>,):                                                                                  ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                      ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const NAME extends string, >                                                                                                                  (name: Nullable<NAME>,):                                                                                             ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public override getValue<const INSTANCE extends ENUMERABLE, >                                                                                                          (instance: Nullable<INSTANCE>,):                                                                                     INSTANCE
    public override getValue<const PARENT_INSTANCE extends ENUMERABLE, >                                                                                                   (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                        ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | NAME | String | Number | PossibleBigInt | INSTANCE | PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE>,): ENUMERABLE {
        return this._getValue(value,)
    }


    public override getName                                                                                                                                               (value: Nullable<ImpossibleNames>,):                                                                               never
    public override getName<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<ORDINAL>,):                                                                                     EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<`${ORDINAL}`>,):                                                                                EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                    EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const NAME extends string, >                                                                                                                  (name: Nullable<NAME>,):                                                                                           SpecificNameOf<NAME, ENUMERABLE>
    public override getName<const INSTANCE extends ENUMERABLE, >                                                                                                          (instance: Nullable<INSTANCE>,):                                                                                   NameOf<INSTANCE>
    public override getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                            (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                      NameOf<PARENT_INSTANCE>
    public override getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | NAME | Number | String | PossibleBigInt | INSTANCE | PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE>
    public override getName(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE>,): NameOf<ENUMERABLE> {
        return this._getName(value,)
    }


    public override getOrdinal                                                                                                                                               (value: Nullable<ImpossibleNames>,):                                                                               never
    public override getOrdinal<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<ORDINAL>,):                                                                                     SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<`${ORDINAL}`>,):                                                                                SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                               (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                    SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const NAME extends string, >                                                                                                                  (name: Nullable<NAME>,):                                                                                           EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public override getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                          (instance: Nullable<INSTANCE>,):                                                                                   OrdinalOf<INSTANCE>
    public override getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                            (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                      OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | NAME | Number | String | PossibleBigInt | INSTANCE | PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE>,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinal(value,)
    }

    //#endregion -------------------- Methods --------------------

}

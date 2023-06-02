import type {Enumerable}                                                                                                                                                                                                                                                                                                                                                      from "enumerable/Enumerable"
import type {EnumerableConstructor}                                                                                                                                                                                                                                                                                                                                           from "enumerable/EnumerableConstructor"
import type {EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal, EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName, NameOf, OrdinalOf, SpecificNameOf, SpecificOrdinalOf, ValueByEnumerableConstructorAndEnumerableNameAndName, ValueByEnumerableConstructorAndEnumerableOrdinal, ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal} from "enumerable/Enumerable.types"
import type {EnumerableWithGrandParent}                                                                                                                                                                                                                                                                                                                                       from "enumerable/EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}                                                                                                                                                                                                                                                                                                                                  from "enumerable/EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                                                                                                                                                                                                                                                                                                                                            from "enumerable/EnumerableWithParent"
import type {BasicCompanionEnumDeclaration}                                                                                                                                                                                                                                                                                                                                   from "enumerable/companion/BasicCompanionEnum.declaration"
import type {CompanionEnumWithGrandParentDeclaration}                                                                                                                                                                                                                                                                                                                         from "enumerable/companion/CompanionEnumWithGrandParent.declaration"
import type {CompanionEnumWithGreatGrandParentDeclaration}                                                                                                                                                                                                                                                                                                                    from "enumerable/companion/CompanionEnumWithGreatGrandParent.declaration"
import type {CompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                                                                                                              from "enumerable/companion/CompanionEnumWithParent.declaration"

import {CompanionEnumWithGrandParent} from "./CompanionEnumWithGrandParent"
import {InvalidEnumerableException}   from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}     from "../exception/InvalidInstanceException"
import {NullInstanceException}        from "../exception/NullInstanceException"
import {NonExistantKeyException}      from "../exception/NonExistantKeyException"
import {NullReferenceException}       from "../exception/NullReferenceException"

export class CompanionEnumWithGreatGrandParent<ENUMERABLE extends EnumerableWithGreatGrandParent<number, string, PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE>,
    ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<ENUMERABLE, CompanionEnumWithGreatGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    PARENT_ENUMERABLE extends EnumerableWithGrandParent<number, string, GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE>,
    PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUMERABLE, CompanionEnumWithGrandParentDeclaration<PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GRAND_PARENT_ENUMERABLE extends EnumerableWithParent<number, string, GREAT_GRAND_PARENT_ENUMERABLE>,
    GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GRAND_PARENT_ENUMERABLE, CompanionEnumWithParentDeclaration<GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>,
    GREAT_GRAND_PARENT_ENUMERABLE extends Enumerable,
    GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<GREAT_GRAND_PARENT_ENUMERABLE, BasicCompanionEnumDeclaration<GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>>, >
    extends CompanionEnumWithGrandParent<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR>
    implements CompanionEnumWithGreatGrandParentDeclaration<ENUMERABLE, ENUMERABLE_CONSTRUCTOR, PARENT_ENUMERABLE, PARENT_ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_ENUMERABLE, GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_ENUMERABLE, GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR> {

    //#region -------------------- Fields --------------------

    readonly #greatGrandParentInstance

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    protected constructor(instance: ENUMERABLE_CONSTRUCTOR, parentInstance: PARENT_ENUMERABLE_CONSTRUCTOR, grandParentInstance: GRAND_PARENT_ENUMERABLE_CONSTRUCTOR, greatGrandParentInstance: GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR,) {
        super(instance, parentInstance, grandParentInstance,)
        if(!("greatGrandParent" in instance.prototype))
            throw new NonExistantKeyException(`No attribute "greatGrandParent" exist in the "${instance.name}" instance. Either use a getter method or add it in the class.`, "greatGrandParent", instance.prototype,)
        if(!("grandParent" in parentInstance.prototype))
            throw new NonExistantKeyException(`No attribute "grandParent" exist in the "${parentInstance.name}" instance. Either use a getter method or add it in the class.`, "grandParent", parentInstance.prototype,)
        if(!("parent" in grandParentInstance.prototype))
            throw new NonExistantKeyException(`No attribute "parent" exist in the "${grandParentInstance.name}" instance. Either use a getter method or add it in the class.`, "parent", grandParentInstance.prototype,)
        if (greatGrandParentInstance == null)
            throw new NullInstanceException()
        if (!(greatGrandParentInstance instanceof Function))
            throw new InvalidInstanceException(`The great-grandparent instance received in "${this.constructor.name}" is not a function type.`, greatGrandParentInstance,)
        this.#greatGrandParentInstance = greatGrandParentInstance
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter & setter methods --------------------

    public get greatGrandParentInstance(): GREAT_GRAND_PARENT_ENUMERABLE_CONSTRUCTOR {
        return this.#greatGrandParentInstance
    }


    public override get default(): ENUMERABLE {
        return super.default
    }

    public override set default(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>) {
        super.default = value == null ? null : this._getValue(value)
    }

    public override setDefault(value: NullOrUndefined,): this
    public override setDefault(ordinal: Nullable<PossibleNumeric>,): this
    public override setDefault(name: Nullable<PossibleString>,): this
    public override setDefault(enumerable: Nullable<ENUMERABLE>,): this
    public override setDefault(parentEnumerable: Nullable<PARENT_ENUMERABLE>,): this
    public override setDefault(grandParentEnumerable: Nullable<GRAND_PARENT_ENUMERABLE>,): this
    public override setDefault(greatGrandParentEnumerable: Nullable<GREAT_GRAND_PARENT_ENUMERABLE>,): this
    public override setDefault(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>,): this
    public override setDefault(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>): this {
        this.default = value
        return this
    }

    //#endregion -------------------- Getter & setter methods --------------------
    //#region -------------------- Methods --------------------

    public override getValue                                                                                                                                                                                                                                                                                     (value: NullOrUndefined,):                                                                                                                                                 never
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<ORDINAL>,):                                                                                                                                             ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                                                        ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                                                            ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getValue<const NAME extends string, >                                                                                                                                                                                                                                                        (name: Nullable<NAME>,):                                                                                                                                                   ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public override getValue<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                                                                                                (instance: Nullable<INSTANCE>,):                                                                                                                                           INSTANCE
    public override getValue<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                                                                                                  (parentInstance: Nullable<PARENT_ENUMERABLE>,):                                                                                                                            ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE>
    public override getValue<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                                      (grandParentInstance: Nullable<GRAND_PARENT_ENUMERABLE>,):                                                                                                                 ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE>
    public override getValue<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                          (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                        ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>
    public override getValue<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >(value: Nullable<| ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | INSTANCE | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GRAND_PARENT_INSTANCE> | ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR, GREAT_GRAND_PARENT_INSTANCE>
    public override getValue(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>,): ENUMERABLE {
        return this._getValue(value,)
    }

    /**
     * Get a {@link EnumerableWithGrandParent enumerable} by validating it is the {@link instance}, {@link parentInstance parent instance},
     * {@link grandParentInstance grandparent instance} or {@link greatGrandParentInstance great-grandparent instance} (enumerable constructor)
     *
     * @param value The value to compare its class type to the type ({@link instance}, {@link parentInstance}, {@link grandParentInstance} or {@link greatGrandParentInstance})
     * @throws {InvalidEnumerableException}
     * @throws {NullReferenceException}
     */
    protected override _getValueByEnumerable(value: Enumerable): ENUMERABLE {
        const instance = this.instance,
            parentInstance = this.parentInstance,
            grandParentInstance = this.grandParentInstance,
            greatGrandParentInstance = this.greatGrandParentInstance

        if (value instanceof instance)
            return this._getValueFromValues(value,)
        if (value instanceof parentInstance)
            return this._getValueFromParentInValues(value,)
        if (value instanceof grandParentInstance)
            return this._getValueFromGrandParentInValues(value,)
        if (value instanceof greatGrandParentInstance)
            return this._getValueFromGreatGrandParentInValues(value,)

        throw new InvalidEnumerableException(`The enumerable "${instance.name}.${value.name}" is not an instance of "${instance.name}", "${parentInstance.name}", "${grandParentInstance.name}" or "${greatGrandParentInstance}".`, value, [instance, parentInstance, grandParentInstance, greatGrandParentInstance,],)
    }

    /**
     * Get an {@link EnumerableWithGreatGrandParent enumerable} from the {@link values} by the {@link EnumerableWithGreatGrandParent.greatGrandParent great-grandparent} instance
     * or throw a {@link NullReferenceException} if never found
     *
     * @param value The {@link EnumerableWithGreatGrandParent enumerable} {@link EnumerableWithGreatGrandParent.greatGrandParent great-grandparent} to find
     * @throws {NullReferenceException}
     */
    protected _getValueFromGreatGrandParentInValues(value: Enumerable,): ENUMERABLE {
        const valueFound = this.values.find(it => it.greatGrandParent === value)
        if (valueFound == null)
            throw new NullReferenceException(`No great-grandparent "${value}" could be found on the "${this.instance.name}".`, value,)
        return valueFound
    }


    public override getName                                                                                                                                                                                                                                                                                     (value: NullOrUndefined,):                                                                                                                                               never
    public override getName<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<ORDINAL>,):                                                                                                                                           EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                                                      EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                                                          EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL>
    public override getName<const NAME extends string, >                                                                                                                                                                                                                                                        (name: Nullable<NAME>,):                                                                                                                                                 SpecificNameOf<NAME, ENUMERABLE>
    public override getName<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                                                                                                (instance: Nullable<INSTANCE>,):                                                                                                                                         NameOf<INSTANCE>
    public override getName<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                                                                                                  (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                            NameOf<PARENT_INSTANCE>
    public override getName<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                                      (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                 NameOf<GRAND_PARENT_INSTANCE>
    public override getName<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                          (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                      NameOf<GREAT_GRAND_PARENT_INSTANCE>
    public override getName<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, ORDINAL> | SpecificNameOf<NAME, ENUMERABLE> | NameOf<INSTANCE> | NameOf<PARENT_INSTANCE> | NameOf<GRAND_PARENT_INSTANCE> | NameOf<GREAT_GRAND_PARENT_INSTANCE>
    public override getName(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>,): NameOf<ENUMERABLE> {
        return this._getName(value,)
    }


    public override getOrdinal                                                                                                                                                                                                                                                                                     (value: NullOrUndefined,):                                                                                                                                               never
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<ORDINAL>,):                                                                                                                                           SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<`${ORDINAL}`>,):                                                                                                                                      SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const ORDINAL extends number, >                                                                                                                                                                                                                                                     (ordinal: Nullable<| ORDINAL | `${ORDINAL}`>,):                                                                                                                          SpecificOrdinalOf<ORDINAL, ENUMERABLE>
    public override getOrdinal<const NAME extends string, >                                                                                                                                                                                                                                                        (name: Nullable<NAME>,):                                                                                                                                                 EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME>
    public override getOrdinal<const INSTANCE extends ENUMERABLE, >                                                                                                                                                                                                                                                (instance: Nullable<INSTANCE>,):                                                                                                                                         OrdinalOf<INSTANCE>
    public override getOrdinal<const PARENT_INSTANCE extends PARENT_ENUMERABLE, >                                                                                                                                                                                                                                  (parentInstance: Nullable<PARENT_INSTANCE>,):                                                                                                                            OrdinalOf<PARENT_INSTANCE>
    public override getOrdinal<const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                                      (grandParentInstance: Nullable<GRAND_PARENT_INSTANCE>,):                                                                                                                 OrdinalOf<GRAND_PARENT_INSTANCE>
    public override getOrdinal<const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >                                                                                                                                                                                                          (greatGrandParentInstance: Nullable<GREAT_GRAND_PARENT_INSTANCE>,):                                                                                                      OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>
    public override getOrdinal<const ORDINAL extends number, const NAME extends string, const INSTANCE extends ENUMERABLE, const PARENT_INSTANCE extends PARENT_ENUMERABLE, const GRAND_PARENT_INSTANCE extends GRAND_PARENT_ENUMERABLE, const GREAT_GRAND_PARENT_INSTANCE extends GREAT_GRAND_PARENT_ENUMERABLE, >(value: Nullable<ORDINAL | `${ORDINAL}` | Number | PossibleBigInt | NAME | String | INSTANCE | PARENT_INSTANCE | GRAND_PARENT_INSTANCE | GREAT_GRAND_PARENT_INSTANCE>,): | SpecificOrdinalOf<ORDINAL, ENUMERABLE> | EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR, ENUMERABLE, NAME> | OrdinalOf<INSTANCE> | OrdinalOf<PARENT_INSTANCE> | OrdinalOf<GRAND_PARENT_INSTANCE> | OrdinalOf<GREAT_GRAND_PARENT_INSTANCE>
    public override getOrdinal(value: Nullable<| PossibleStringOrNumeric | ENUMERABLE | PARENT_ENUMERABLE | GRAND_PARENT_ENUMERABLE | GREAT_GRAND_PARENT_ENUMERABLE>,): OrdinalOf<ENUMERABLE> {
        return this._getOrdinal(value,)
    }

    //#endregion -------------------- Methods --------------------

}
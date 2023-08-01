/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CompanionEnumDeclaration}                                                                                      from "../companion"
import type {Enumerable}                                                                                                    from "../Enumerable"
import type {EnumerableConstructor}                                                                                         from "../EnumerableConstructor"
import type {Singleton}                                                                                                     from "../Singleton"
import type {CompanionEnum_CompanionTypesDeclaration, CompanionTypesName, CompanionTypesOrdinal, PossibleCompanionTypeName} from "./CompanionTypes.types"

import {Enum}                                           from "../Enum"
import {CompanionEnum}                                  from "../companion/CompanionEnum"
import {InvalidEnumerableException}                     from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}                       from "../exception/InvalidInstanceException"
import {NonExistantKeyException}                        from "../exception/NonExistantKeyException"
import {NullReferenceException}                         from "../exception/NullReferenceException"
import {getCompanion}                                   from "./getCompanion"
import {getLastPrototype}                               from "./getLastPrototype"
import {isCompanionEnumWithGrandParentByStructure}      from "./isCompanionEnumWithGrandParentByStructure"
import {isCompanionEnumWithGrandParent}                 from "./isCompanionEnumWithGrandParent"
import {isCompanionEnumWithGreatGrandParent}            from "./isCompanionEnumWithGreatGrandParent"
import {isCompanionEnumWithGreatGrandParentByStructure} from "./isCompanionEnumWithGreatGrandParentByStructure"
import {isCompanionEnumWithParent}                      from "./isCompanionEnumWithParent"
import {isCompanionEnumWithParentByStructure}           from "./isCompanionEnumWithParentByStructure"

/**
 * Every possible sub {@link CompanionEnum} in the project.
 * Meaning that it has the {@link CompanionEnumWithParent parent},
 * {@link CompanionEnumWithGrandParent grandparent} and
 * {@link CompanionEnumWithGreatGrandParent great-grandparent} instance.
 *
 * @internal
 */
export abstract class CompanionTypes<const TYPE extends PossibleCompanionTypeName = PossibleCompanionTypeName, >
    extends Enum<CompanionTypesOrdinal, CompanionTypesName> {
    public static readonly PARENT: CompanionTypes<"parent"> = new class CompanionTypes_Parent extends CompanionTypes<"parent"> {

        protected override _getInstance(companionEnum: CompanionEnumDeclaration<Enumerable, any>,): CompanionEnumDeclaration<Enumerable, any> {
            if (isCompanionEnumWithParent(companionEnum,))
                return companionEnum.parentInstance.CompanionEnum.get
            if (isCompanionEnumWithParentByStructure(companionEnum,))
                //TODO validate the typing of the parent instance
                return (companionEnum.parentInstance as EnumerableConstructor<Enumerable, any>).CompanionEnum.get
            throw new InvalidInstanceException("The companion enum received is not an instance of CompanionEnumWithParent or doesn't have its structure.", companionEnum,)
        }

    }("parent",)
    public static readonly GRAND_PARENT: CompanionTypes<"grandparent"> = new class CompanionTypes_Parent extends CompanionTypes<"grandparent"> {

        protected override _getInstance(companionEnum: CompanionEnumDeclaration<Enumerable, any>,): CompanionEnumDeclaration<Enumerable, any> {
            if (isCompanionEnumWithGrandParent(companionEnum,))
                return companionEnum.grandParentInstance.CompanionEnum.get
            if (isCompanionEnumWithGrandParentByStructure(companionEnum,))
                //TODO validate the typing of the parent instance
                return (companionEnum.grandParentInstance as EnumerableConstructor<Enumerable, any>).CompanionEnum.get
            throw new InvalidInstanceException("The companion enum received is not an instance of CompanionEnumWithGrandParent or doesn't have its structure.", companionEnum,)
        }

    }("grandparent",)
    public static readonly GREAT_GRAND_PARENT: CompanionTypes<"great-grandparent"> = new class CompanionTypes_Parent extends CompanionTypes<"great-grandparent"> {

        protected override _getInstance(companionEnum: CompanionEnumDeclaration<Enumerable, any>,): CompanionEnumDeclaration<Enumerable, any> {
            if (isCompanionEnumWithGreatGrandParent(companionEnum,))
                return companionEnum.greatGrandParentInstance.CompanionEnum.get
            if (isCompanionEnumWithGreatGrandParentByStructure(companionEnum,))
                //TODO validate the typing of the parent instance
                return (companionEnum.greatGrandParentInstance as EnumerableConstructor<Enumerable, any>).CompanionEnum.get
            throw new InvalidInstanceException("The companion enum received is not an instance of CompanionEnumWithParent or doesn't have its structure.", companionEnum,)
        }

    }("great-grandparent",)
    public static readonly 0: typeof CompanionTypes.PARENT
    public static readonly 1: typeof CompanionTypes.GRAND_PARENT
    public static readonly 2: typeof CompanionTypes.GREAT_GRAND_PARENT

    public static readonly CompanionEnum: Singleton<CompanionEnum_CompanionTypesDeclaration> = class CompanionEnum_CompanionTypes
        extends CompanionEnum<CompanionTypes, typeof CompanionTypes>
        implements CompanionEnum_CompanionTypesDeclaration {

        static #instance?: CompanionEnum_CompanionTypes
        private constructor() {
            super(CompanionTypes,)
        }
        public static get get(): CompanionEnum_CompanionTypes {
            return CompanionEnum_CompanionTypes.#instance ??= new CompanionEnum_CompanionTypes()
        }

        public getValueByType(value: string,): CompanionTypes {
            const valueFound = this.values.find(it => it.type === value,)
            if (valueFound == null)
                throw new NonExistantKeyException(`No type "${value}" exist on the CompanionTypes.`, value, this.instance,)
            return valueFound
        }

    }

    readonly #type

    private constructor(type: TYPE,) {
        super()
        this.#type = type
    }

    public get type(): TYPE {
        return this.#type
    }

    /**
     * Get the {@link CompanionEnum} instance proper to the current {@link CompanionTypes} associated
     *
     * @param companionEnum The base {@link CompanionEnum}
     */
    protected abstract _getInstance(companionEnum: CompanionEnumDeclaration<Enumerable, any>,): CompanionEnumDeclaration<Enumerable, any>

    /**
     * Get the {@link CompanionEnum} from the instance received.
     * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
     *
     * @param instance The instance to retrieve its {@link CompanionEnum}
     * @throws {NullReferenceException}
     */
    public getInstance(instance: Enumerable,): CompanionEnumDeclaration<Enumerable, any> {
        try {
            return this._getInstance(getCompanion(getLastPrototype(instance,),),)
        } catch (exception) {
            if (exception instanceof InvalidEnumerableException
                || exception instanceof InvalidInstanceException
                || exception instanceof NullReferenceException)
                throw new NullReferenceException("There were an error while retrieving the companion enum", instance, exception,)
            throw exception
        }
    }

}
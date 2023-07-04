/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                                                                        from "./Enumerable"
import type {EnumerableConstructor}                                                             from "./EnumerableConstructor"
import type {CompanionOf}                                                                       from "./Enumerable.types"
import type {CompanionEnumDeclaration}                                                          from "./companion/CompanionEnum.declaration"
import type {CompanionEnumFromEnumerableConstructorOrCompanionEnum, PossibleEnumerableInstance} from "./companion/types"
import type {Nullable, NullOrUndefined}                                                         from "./general type"

import {Enum}                     from "./Enum"
import {CompanionEnum}            from "./companion/CompanionEnum"
import {InvalidInstanceException} from "./exception/InvalidInstanceException"
import {NullInstanceException}    from "./exception/NullInstanceException"
import {NullReferenceException}   from "./exception/NullReferenceException"
import {NonExistantKeyException}  from "./exception/NonExistantKeyException"

/**
 * Every method made to help on {@link Enumerable} queries
 * or {@link CompanionEnumDeclaration companion enum} creation
 */
export namespace EnumHelper {

    //#region -------------------- Is … --------------------

    /**
     * Tell if the value received is an instance of {@link Enum}
     *
     * @param value The value to compare
     */
    export function isEnum(value: unknown,): value is Enum<number, string> {
        return value != null && value instanceof Enum
    }

    /**
     * Tell if the value received is an instance of {@link CompanionEnum}
     *
     * @param value The value to compare
     */
    export function isBasicCompanionEnum(value: unknown,): value is CompanionEnum<Enumerable, EnumerableConstructor<Enumerable, any>> {
        return value != null && value instanceof CompanionEnum
    }


    /**
     * Tell if the value received has the structure of a {@link Enumerable}
     * without verifying its typing on the fields directly
     *
     * @param value The value to compare
     */
    export function isEnumerableByStructure(value: unknown,): value is (& object & Record<keyof Enumerable, unknown>) {
        return value != null && typeof value == "object"
            && "name" in value && "ordinal" in value
            && Symbol.toPrimitive in value && Symbol.toStringTag in value
    }

    /**
     * Tell if the value received has the structure of a {@link CompanionEnumDeclaration}
     * without verifying its typing on the field directly
     *
     * @param value The value to compare
     */
    export function isCompanionEnumByStructure(value: unknown,): value is (& object & Record<keyof CompanionEnumDeclaration<never, never>, unknown>) {
        return value != null && typeof value == "object"
            && "instance" in value
            && "default" in value
            && "values" in value && "names" in value && "ordinals" in value && "iterator" in value
            && "getValue" in value && "getName" in value && "getOrdinal" in value && Symbol.iterator in value
    }

    //#endregion -------------------- Is … --------------------
    //#region -------------------- Get companion --------------------

    /**
     * Get nothing because of a <b>null</b> instance
     *
     * @param instance The <b>null</b> instance
     * @throws {NullInstanceException}
     */
    export function getCompanion(instance: NullOrUndefined,): never
    /**
     * Get the {@link CompanionEnumDeclaration companion} instance directly
     *
     * @param companion The {@link CompanionEnumDeclaration companion} instance
     * @throws {NullInstanceException}
     */
    export function getCompanion<const ENUMERABLE extends Enumerable, const COMPANION_ENUM extends CompanionEnumDeclaration<any, any> = CompanionEnumDeclaration<ENUMERABLE, any>, >(companion: Nullable<COMPANION_ENUM>,): COMPANION_ENUM
    /**
     * Get a {@link CompanionEnumDeclaration companion} instance from an {@link Enumerable} class.
     * And if in the {@link CompanionEnumDeclaration companion} values or class type, there is no valid value, then exception can be thrown.
     *
     * @param constructorClass The {@link Enumerable} class to retrieve the {@link CompanionEnumDeclaration companion}
     * @throws {NullInstanceException}
     * @throws {InvalidInstanceException}
     * @throws {NonExistantKeyException}
     * @throws {NullReferenceException}
     */
    export function getCompanion<const ENUMERABLE extends Enumerable, const ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any> = EnumerableConstructor<ENUMERABLE, any>, >(constructorClass: Nullable<ENUMERABLE_CONSTRUCTOR>,): CompanionOf<ENUMERABLE_CONSTRUCTOR>
    /**
     * Get the {@link CompanionEnumDeclaration companion} from any values ({@link EnumerableConstructor} or {@link CompanionEnumDeclaration companion})
     *
     * @param instance The {@link EnumerableConstructor} or {@link CompanionEnumDeclaration} instance
     *
     * @generalTypescriptDefinition
     * @throws {NullInstanceException}
     * @throws {InvalidInstanceException}
     * @throws {NonExistantKeyException}
     * @throws {NullReferenceException}
     */
    export function getCompanion<const ENUMERABLE extends Enumerable, const INSTANCE extends PossibleEnumerableInstance<any> = PossibleEnumerableInstance<ENUMERABLE>, >(instance: Nullable<INSTANCE>,): CompanionEnumFromEnumerableConstructorOrCompanionEnum<INSTANCE>
    export function getCompanion(instance: Nullable<PossibleEnumerableInstance>,): CompanionEnumDeclaration<any, any> {
        if (instance == null)
            throw new NullInstanceException()

        if (isBasicCompanionEnum(instance) || isCompanionEnumByStructure(instance))
            return instance

        if (!(instance instanceof Function))
            throw new InvalidInstanceException(`The instance "${(instance as NonNullable<unknown>).toString()}" is not a function type.`, instance,)
        if (!("CompanionEnum" in instance))
            throw new NonExistantKeyException(`No "CompanionEnum" exist in the instance "${(instance as Function)?.name ?? `${(instance as NonNullable<unknown>).toString()}`}"!`, "CompanionEnum", instance,)
        const companionConstructor = instance.CompanionEnum
        if (companionConstructor == null)
            throw new NullReferenceException(`The reference "${instance.name}.CompanionEnum" cannot be null when retrieving its companion value!`, instance,)
        if (!(companionConstructor instanceof Function))
            throw new InvalidInstanceException(`The reference "${instance.name}.CompanionEnum" is not a function type.`, instance,)
        if (!("get" in companionConstructor))
            throw new NonExistantKeyException(`No reference "get" exist in "${instance.name}.CompanionEnum"!`, "get", instance,)

        const companionInstance = companionConstructor.get
        if (companionInstance == null)
            throw new NullReferenceException(`The reference "${instance.name}.CompanionEnum.get" cannot be null when retrieving its companion value!`, instance,)
        if (!isBasicCompanionEnum(companionInstance) || !isCompanionEnumByStructure(companionInstance))
            throw new InvalidInstanceException(`The reference "${instance.name}.CompanionEnum.get" is not a CompanionEnum instance or has its structure.`, instance,)

        return companionInstance as CompanionEnumDeclaration<any, any>
    }

    //#endregion -------------------- Get companion --------------------
    //#region -------------------- Get last prototype --------------------

    /**
     * Get the last {@link ObjectConstructor.prototype prototype} until it is the {@link Enum}.{@link Enum.constructor constructor}
     *
     * @param instance The instance (by default as the current instance)
     * @throws {NullReferenceException}
     * @see https://stackoverflow.com/a/68323749
     * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (<i>instance.constructor</i>)
     */
    export function getLastPrototype<const T extends Enumerable, >(instance: object,): EnumerableConstructor<T, any> {
        const prototype = Reflect.getPrototypeOf(instance)
        if (prototype == null)
            throw new NullReferenceException(`No prototype as Enum.constructor was found in the prototype chain of "${instance == null ? instance : instance.constructor.name}".`, instance as unknown,)
        return prototype.constructor === Enum
            ? instance.constructor as EnumerableConstructor<T, any>
            : getLastPrototype(prototype)
    }

    //#endregion -------------------- Get last prototype --------------------

}

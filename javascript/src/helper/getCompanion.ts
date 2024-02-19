/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                                                                                                      from "../Enumerable"
import type {EnumerableConstructor}                                                                                           from "../EnumerableConstructor"
import type {CompanionOf}                                                                                                     from "../Enumerable.types"
import type {CompanionEnumDeclaration}                                                                                        from "../companion/CompanionEnum.declaration"
import type {CompanionEnumDeclarationType, CompanionEnumFromEnumerableConstructorOrCompanionEnum, PossibleEnumerableInstance} from "../companion/types"
import type {Nullable, NullOrUndefined}                                                                                       from "../general type"

import {InvalidInstanceException}   from "../exception/InvalidInstanceException"
import {NullInstanceException}      from "../exception/NullInstanceException"
import {NullReferenceException}     from "../exception/NullReferenceException"
import {NonExistantKeyException}    from "../exception/NonExistantKeyException"
import {isCompanionEnum}            from "./isCompanionEnum"
import {isCompanionEnumByStructure} from "./isCompanionEnumByStructure"

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
export function getCompanion<const ENUM extends Enumerable, const COMPANION_ENUM extends CompanionEnumDeclaration<any, any> = CompanionEnumDeclarationType<ENUM>, >(companion: Nullable<COMPANION_ENUM>,): COMPANION_ENUM
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
export function getCompanion<const ENUM extends Enumerable, const ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any> = EnumerableConstructor<ENUM, CompanionEnumDeclarationType<ENUM>>, >(constructorClass: Nullable<ENUM_CONSTRUCTOR>,): CompanionOf<ENUM_CONSTRUCTOR>
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
export function getCompanion<const ENUM extends Enumerable, const INSTANCE extends PossibleEnumerableInstance<any> = PossibleEnumerableInstance<ENUM>, >(instance: Nullable<INSTANCE>,): CompanionEnumFromEnumerableConstructorOrCompanionEnum<INSTANCE>
export function getCompanion(instance: Nullable<PossibleEnumerableInstance>,): CompanionEnumDeclaration<any, any> {
    if (instance == null)
        throw new NullInstanceException()

    if (isCompanionEnum(instance))
        return instance
    if (isCompanionEnumByStructure(instance,))
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

    if (isCompanionEnum(companionInstance,))
        return companionInstance
    if (isCompanionEnumByStructure(companionInstance,))
        return companionInstance as CompanionEnumDeclaration<any, any>
    throw new InvalidInstanceException(`The reference "${instance.name}.CompanionEnum.get" is not a CompanionEnum instance or has its structure.`, instance,)
}

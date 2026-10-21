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

import type {Nullable, NullOrUndefined} from "@joookiwi/type"

import type {Enumerable}                                            from "../Enumerable"
import type {EnumerableConstructor}                                 from "../EnumerableConstructor"
import type {CompanionEnumerable}                                   from "../companion/CompanionEnumerable"
import type {CompanionEnumerableType}                               from "../type/companion"
import type {CompanionEnumFromEnumerableConstructorOrCompanionEnum} from "../type/companionFrom"
import type {CompanionOf}                                           from "../type/companionOf"
import type {PossibleEnumerableInstance}                            from "../type/possibleInstance"

import {InvalidInstanceException}   from "../exception/InvalidInstanceException"
import {NullInstanceException}      from "../exception/NullInstanceException"
import {NullReferenceException}     from "../exception/NullReferenceException"
import {NonExistantKeyException}    from "../exception/NonExistantKeyException"
import {isCompanionEnum}            from "./isCompanionEnum"
import {isCompanionEnumByStructure} from "./isCompanionEnumByStructure"

/**
 * Get nothing because of a `null` instance
 *
 * @param instance The `null` instance
 * @throws NullInstanceException The {@link instance} is `null` or `undefined`
 */
export function getCompanion(instance: NullOrUndefined,): never
/**
 * Get the {@link CompanionEnumerable} instance directly
 *
 * @param companion The {@link CompanionEnumerable} instance
 * @throws NullInstanceException The {@link instance} is `null` or `undefined`
 */
export function getCompanion<const ENUM extends Enumerable, const COMPANION_ENUM extends CompanionEnumerableType<Enumerable> = CompanionEnumerableType<ENUM>, >(companion: Nullable<COMPANION_ENUM>,): COMPANION_ENUM
/**
 * Get a {@link CompanionEnumerable} instance from an {@link Enumerable} class.
 * And if in the {@link CompanionEnumerable} values or class type, there is no valid value, then exception can be thrown.
 *
 * @param constructorClass The {@link EnumerableConstructor} class to retrieve the {@link CompanionEnumerable} via `constructorClass.CompanionEnum.get`
 * @throws NullInstanceException    The {@link instance} is `null` or `undefined`
 * @throws InvalidInstanceException The {@link instance} or the `instance.CompanionEnum` if not a {@link Function} type
 * @throws NonExistantKeyException  The {@link instance} has not the `CompanionEnum` key or the `instance.CompanionEnum` does not have the `get` key
 * @throws NullReferenceException   The {@link instance}`.CompanionEnum` or {@link instance}.`CompanionEnum.get` has `null`|`undefined` being retrieved
 */
export function getCompanion<const ENUM extends Enumerable, const ENUM_CONSTRUCTOR extends EnumerableConstructor<Enumerable, CompanionEnumerableType<Enumerable>> = EnumerableConstructor<ENUM, CompanionEnumerableType<ENUM>>, >(constructorClass: Nullable<ENUM_CONSTRUCTOR>,): CompanionOf<ENUM_CONSTRUCTOR>
/**
 * Get the {@link CompanionEnumerable} from any values ({@link EnumerableConstructor} or {@link CompanionEnumerable})
 *
 * @param instance The {@link EnumerableConstructor} to retrieve via `instance.CompanionEnum.get` or {@link CompanionEnumerable} directly
 * @throws NullInstanceException    The {@link instance} is `null` or `undefined`
 * @throws InvalidInstanceException The {@link instance} or the `instance.CompanionEnum` if not a {@link Function} type
 * @throws NonExistantKeyException  The {@link instance} has not the `CompanionEnum` key or the `instance.CompanionEnum` does not have the `get` key
 * @throws NullReferenceException   The {@link instance}`.CompanionEnum` or {@link instance}.`CompanionEnum.get` has `null`|`undefined` being retrieved
 * @typescriptDefinition
 */
export function getCompanion<const ENUM extends Enumerable, const INSTANCE extends PossibleEnumerableInstance = PossibleEnumerableInstance<ENUM>, >(instance: Nullable<INSTANCE>,): CompanionEnumFromEnumerableConstructorOrCompanionEnum<INSTANCE>
export function getCompanion(instance: Nullable<PossibleEnumerableInstance>,) {
    if (instance == null)
        throw new NullInstanceException()

    if (isCompanionEnum(instance,))
        return instance
    if (isCompanionEnumByStructure(instance,))
        return instance

    if (!(instance instanceof Function))
        throw new InvalidInstanceException(`The instance “${(instance as NonNullable<unknown>).toString()}” is not a function type.`, instance,)
    if (!("CompanionEnum" in instance))
        throw new NonExistantKeyException(`No “CompanionEnum” exist in the instance “${(instance as Function)?.name ?? `${(instance as NonNullable<unknown>).toString()}`}”.`, "CompanionEnum", instance,)
    const companionConstructor = instance.CompanionEnum
    if (companionConstructor == null)
        throw new NullReferenceException(`The reference “${instance.name}.CompanionEnum” cannot be null when retrieving its companion value.`, instance,)
    if (!(companionConstructor instanceof Function))
        throw new InvalidInstanceException(`The reference “${instance.name}.CompanionEnum” is not a function type.`, instance,)
    if (!("get" in companionConstructor))
        throw new NonExistantKeyException(`No reference “get” exist in “${instance.name}.CompanionEnum”.`, "get", instance,)

    const companionInstance = companionConstructor.get
    if (companionInstance == null)
        throw new NullReferenceException(`The reference “${instance.name}.CompanionEnum.get” cannot be null when retrieving its companion value.`, instance,)

    if (isCompanionEnum(companionInstance,))
        return companionInstance
    if (isCompanionEnumByStructure(companionInstance,))
        return companionInstance
    throw new InvalidInstanceException(`The reference “${instance.name}.CompanionEnum.get” is not a CompanionEnum instance or has its structure.`, instance,)
}

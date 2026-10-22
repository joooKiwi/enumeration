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

import type {MutableArray, Nullable, NullOr, NullOrUndefined} from "@joookiwi/type"
import {joinToStringByArray}                                  from "@joookiwi/collection"

import type {Enumerable}                                                                                                                                      from "../Enumerable"
import type {EnumerableWithNullableGrandParent}                                                                                                               from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}                                                                                                          from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                                                                                                                    from "../EnumerableWithNullableParent"
import type {EnumerableConstructor}                                                                                                                           from "../EnumerableConstructor"
import type {CompanionEnumerableType, CompanionEnumerableWithGrandParentType, CompanionEnumerableWithGreatGrandParentType, CompanionEnumerableWithParentType} from "../type/companion"
import type {EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableGreatGrandParentGeneralType, EnumerableWithNullableParentGeneralType}        from "../type/general"

import {InvalidInstanceException}      from "../exception/InvalidInstanceException"
import {NullReferenceException}        from "../exception/NullReferenceException"
import {KnownEnumConstructors}         from "../KnownEnumConstructors"
import {_getSimplifiedPrototypeChains} from "./_getSimplifiedPrototypeChains"
import {isEnumByStructure}             from "./isEnumByStructure"
import {isEnum}                        from "./isEnum"

/**
 * Get nothing because of a `null` instance
 *
 * @param instance The `null` instance
 * @throws NullReferenceException The instance was `null` or `undefined`
 */
export function getLastPrototype(instance: NullOrUndefined,): never
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGreatGrandParentGeneralType,                                                                                                                                                                                                                                                                       >(instance: Nullable<EnumerableWithNullableGreatGrandParentGeneralType>,): EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParentType<ENUM, EnumerableWithNullableGrandParentGeneralType, EnumerableWithNullableParentGeneralType, Enumerable>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGreatGrandParent<PARENT, EnumerableWithNullableParentGeneralType, Enumerable>, const PARENT extends EnumerableWithNullableGrandParentGeneralType,                                                                                                                                                  >(instance: Nullable<EnumerableWithNullableGreatGrandParentGeneralType>,): EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParentType<ENUM, PARENT, EnumerableWithNullableParentGeneralType, Enumerable>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGreatGrandParent<PARENT, GRAND_PARENT, Enumerable>,                            const PARENT extends EnumerableWithNullableGrandParent<GRAND_PARENT, Enumerable>,         const GRAND_PARENT extends EnumerableWithNullableParentGeneralType,                                                       >(instance: Nullable<EnumerableWithNullableGreatGrandParentGeneralType>,): EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParentType<ENUM, PARENT, GRAND_PARENT, Enumerable>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGreatGrandParent<PARENT, GRAND_PARENT, GREAT_GRAND_PARENT>,                    const PARENT extends EnumerableWithNullableGrandParent<GRAND_PARENT, GREAT_GRAND_PARENT>, const GRAND_PARENT extends EnumerableWithNullableParent<GREAT_GRAND_PARENT>, const GREAT_GRAND_PARENT extends Enumerable, >(instance: Nullable<EnumerableWithNullableGreatGrandParentGeneralType>,): EnumerableConstructor<ENUM, CompanionEnumerableWithGreatGrandParentType<ENUM, PARENT, GRAND_PARENT, GREAT_GRAND_PARENT>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGrandParentGeneralType,                                                                                                                                                                                                                                                                            >(instance: Nullable<EnumerableWithNullableGrandParentGeneralType>,):      EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParentType<ENUM, EnumerableWithNullableParentGeneralType, Enumerable>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGrandParent<PARENT, Enumerable>,                                   const PARENT extends EnumerableWithNullableParentGeneralType,                                                                                                                                                                   >(instance: Nullable<EnumerableWithNullableGrandParentGeneralType>,):      EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParentType<ENUM, PARENT, Enumerable>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableGrandParent<PARENT, GRAND_PARENT>,                                 const PARENT extends EnumerableWithNullableParent<GRAND_PARENT>, GRAND_PARENT extends Enumerable,                                                                                                                               >(instance: Nullable<EnumerableWithNullableGrandParentGeneralType>,):      EnumerableConstructor<ENUM, CompanionEnumerableWithGrandParentType<ENUM, PARENT, GRAND_PARENT>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableParentGeneralType,                                                                                                                                                                                                                                                                                 >(instance: Nullable<EnumerableWithNullableParentGeneralType>,):           EnumerableConstructor<ENUM, CompanionEnumerableWithParentType<ENUM, Enumerable>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends EnumerableWithNullableParent<PARENT>,    const PARENT extends Enumerable,                                                                                                                                                                                                                                                >(instance: Nullable<EnumerableWithNullableParentGeneralType>,):           EnumerableConstructor<ENUM, CompanionEnumerableWithParentType<ENUM, PARENT>>
/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws NullReferenceException   The instance was `null` or `undefined`
 * @throws NullReferenceException   No {@link Enum} constructor from the instance could be found (if it was a {@link Enum})
 * @throws NullReferenceException   No {@link Enumerable} constructor from the instance could be found (if it was a {@link Enumerable})
 * @throws InvalidInstanceException No prototype could be found since it did not have the {@link Enumerable} structure
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (`instance.constructor`)
 */
export function getLastPrototype<const ENUM extends Enumerable, >(instance: Nullable<Enumerable>,): EnumerableConstructor<ENUM, CompanionEnumerableType<ENUM>>
export function getLastPrototype(instance: Nullable<Enumerable>,) {
    if (instance == null)
        throw new NullReferenceException(`No prototype on a EnumerableConstructor could be found by a null value.`, instance,)

    if (isEnum(instance,)) {
        // We verify the instance if any KnownEnumConstructors are present and give the closest relative when found
        const knownEnumConstructors = KnownEnumConstructors.values
        const prototypeConstructorChain: MutableArray<Function> = []
        let prototype: NullOr<object> = instance
        while (prototype != null) {
            const prototypeConstructor = prototype.constructor
            if (knownEnumConstructors.has(prototypeConstructor,))
                return prototypeConstructorChain[prototypeConstructorChain.length - 1] // We have the prototype that we wanted since it was registered
            prototypeConstructorChain.push(prototypeConstructor,)
            prototype = Reflect.getPrototypeOf(prototype,)
        }

        throw new NullReferenceException(`No known constructor ${KnownEnumConstructors.values.joinToString(", ", '(', ')', null, null, it => it.name,)} was found in the prototype chain ${_getSimplifiedPrototypeChains(prototypeConstructorChain,)}.`, instance,)
    }

    if (isEnumByStructure(instance,)) {
        // We verify that the instance has at least 1 close relative that is Enumerable (by its structure) to return
        const prototypeConstructorChain: MutableArray<Function> = []
        let prototype: NullOr<object> = instance
        while (prototype != null) {
            prototypeConstructorChain.push(prototype.constructor,)
            prototype = Reflect.getPrototypeOf(prototype,)
        }

        let index = prototypeConstructorChain.length - 1
        if (prototypeConstructorChain[index] === Object.prototype)
            if (prototypeConstructorChain[index - 1] === Function.prototype)
                index-- // We ignore the last items since most of the time a class has Object then Function at their last inheritors
        while (index-- > 0) {
            const constructorChain = prototypeConstructorChain[index] as Function
            const chainPrototype = constructorChain.prototype as Function
            if ("name" in chainPrototype)
            if ("ordinal" in chainPrototype)
            if (Symbol.toPrimitive in chainPrototype)
            if (Symbol.toStringTag in chainPrototype)
                return constructorChain // We have the prototype that we wanted since it had the structure of an Enumerable
        }

        throw new NullReferenceException(`No Enumerable-like could be found from the prototype chain ${joinToStringByArray(prototypeConstructorChain, ", ", '“', '”', null, null, it => it.name,)}.`, instance,)
    }

    throw new InvalidInstanceException(`No prototype on a EnumerableConstructor could be found by a non-Enumerable value.`, instance,)
}

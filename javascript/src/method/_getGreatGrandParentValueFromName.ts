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

import type {Enumerable}                                        from "../Enumerable"
import type {EnumerableConstructor}                             from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}                 from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}            from "../EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                      from "../EnumerableWithNullableParent"
import type {CompanionEnumerableWithGreatGrandParent}           from "../companion/CompanionEnumerableWithGreatGrandParent"
import type {CompanionEnumerableWithGreatGrandParentType}       from "../type/companion"
import type {EnumerableWithNullableGreatGrandParentGeneralType} from "../type/general"

import {InvalidInstanceException}                       from "../exception/InvalidInstanceException"
import {NonExistantKeyException}                        from "../exception/NonExistantKeyException"
import {NullReferenceException}                         from "../exception/NullReferenceException"
import {getLastPrototype}                               from "../method/getLastPrototype"
import {getCompanion}                                   from "../method/getCompanion"
import {isCompanionEnumWithGreatGrandParent}            from "../method/isCompanionEnumWithGreatGrandParent"
import {isCompanionEnumWithGreatGrandParentByStructure} from "../method/isCompanionEnumWithGreatGrandParentByStructure"

/**
 * Get the value via {@link CompanionEnumerableWithGreatGrandParent.getValue} from a {@link name} received.
 * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithGreatGrandParent} instance
 * @param name The name to retrieve
 * @throws {NullReferenceException}
 *
 * @internal
 * @todo: update the documentation to better-fit the method
 */
export function _getGreatGrandParentValueFromName<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, EnumerableWithNullableParent<INSTANCE>, INSTANCE>, name: string,): INSTANCE {
    const companionEnum = __getInstance(instance,)
    try {
        return companionEnum.getValue(name,)
    } catch (exception) {
        if (exception instanceof InvalidInstanceException)
            throw new NullReferenceException(`There was an error while retrieving the grandparent value on the “${companionEnum.constructor.name}” companion enum.`, instance, exception,)
        if (exception instanceof NullReferenceException)
            throw new NullReferenceException(`There was an error while retrieving the grandparent value on the “${companionEnum.constructor.name}” companion enum.`, instance, exception,)
        throw exception
    }
}

/**
 * Get the {@link CompanionEnumerableWithGreatGrandParent} from the instance received.
 * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithGreatGrandParent}
 * @throws {NullReferenceException}
 */
function __getInstance<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableGreatGrandParentGeneralType,): CompanionEnumerableWithGreatGrandParentType<EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, EnumerableWithNullableParent<INSTANCE>, INSTANCE>, EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, EnumerableWithNullableParent<INSTANCE>, INSTANCE> {
    let companionEnum: CompanionEnumerableWithGreatGrandParent<EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, any>, any, any>, any, any, any, any, any, any, any>
    try {
        companionEnum = getCompanion(getLastPrototype<EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, EnumerableWithNullableParent<INSTANCE>, INSTANCE>>(instance,),)
    } catch (exception) {
        if (exception instanceof NonExistantKeyException)
            throw new NullReferenceException("There was an error while retrieving the companion enum.", instance, exception,)
        if (exception instanceof InvalidInstanceException)
            throw new NullReferenceException("There was an error while retrieving the companion enum.", instance, exception,)
        if (exception instanceof NullReferenceException)
            throw new NullReferenceException("There was an error while retrieving the companion enum.", instance, exception,)
        throw exception
    }
    if (isCompanionEnumWithGreatGrandParent(companionEnum,))
        return companionEnum.greatGrandParentInstance.CompanionEnum.get
    if (isCompanionEnumWithGreatGrandParentByStructure(companionEnum,))
        //TODO validate the typing of the parent instance
        return (companionEnum.greatGrandParentInstance as EnumerableConstructor<any, CompanionEnumerableWithGreatGrandParent<EnumerableWithNullableGreatGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, any>, any, any>, any, any, any, any, any, any, any>>).CompanionEnum.get
    throw new InvalidInstanceException("The companion enum received is not an instance of CompanionEnumWithGreatGrandParent or doesn't have its structure.", companionEnum,)
}

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

import type {Enumerable}                             from "../Enumerable"
import type {EnumerableConstructor}                  from "../EnumerableConstructor"
import type {EnumerableWithNullableGrandParent}      from "../EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}           from "../EnumerableWithNullableParent"
import type {CompanionEnumerableWithGrandParent}     from "../companion/CompanionEnumerableWithGrandParent"
import type {CompanionEnumerableWithGrandParentType} from "../type/companion"

import {InvalidInstanceException}                  from "../exception/InvalidInstanceException"
import {NonExistantKeyException}                   from "../exception/NonExistantKeyException"
import {NullReferenceException}                    from "../exception/NullReferenceException"
import {getLastPrototype}                          from "../helper/getLastPrototype"
import {getCompanion}                              from "../helper/getCompanion"
import {isCompanionEnumWithGrandParent}            from "../helper/isCompanionEnumWithGrandParent"
import {isCompanionEnumWithGrandParentByStructure} from "../helper/isCompanionEnumWithGrandParentByStructure"

/**
 * Get the value via {@link CompanionEnumerableWithGrandParent.getValue} from a {@link name} received.
 * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithGrandParent} instance
 * @param name The name to retrieve
 * @throws {NullReferenceException}
 *
 * @internal
 * @todo: update the documentation to better-fit the method
 */
export function _getGrandParentValueFromName<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, name: string,): INSTANCE {
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
 * Get the {@link CompanionEnumerableWithGrandParent} from the instance received.
 * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithGrandParent}
 * @throws {NullReferenceException}
 */
function __getInstance<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>,): CompanionEnumerableWithGrandParentType<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, INSTANCE>, EnumerableWithNullableParent<INSTANCE>, INSTANCE> {
    let companionEnum: CompanionEnumerableWithGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, any>, any, any, any, any, any>
    try {
        companionEnum = getCompanion(getLastPrototype(instance,),)
    } catch (exception) {
        if (exception instanceof NonExistantKeyException)
            throw new NullReferenceException("There was an error while retrieving the companion enum.", instance, exception,)
        if (exception instanceof InvalidInstanceException)
            throw new NullReferenceException("There was an error while retrieving the companion enum.", instance, exception,)
        if (exception instanceof NullReferenceException)
            throw new NullReferenceException("There was an error while retrieving the companion enum.", instance, exception,)
        throw exception
    }
    if (isCompanionEnumWithGrandParent(companionEnum,))
        return companionEnum.grandParentInstance.CompanionEnum.get
    if (isCompanionEnumWithGrandParentByStructure(companionEnum,))
        //TODO validate the typing of the parent instance
        return (companionEnum.grandParentInstance as EnumerableConstructor<any, CompanionEnumerableWithGrandParent<EnumerableWithNullableGrandParent<EnumerableWithNullableParent<INSTANCE>, any>, any, any, any, any, any>>).CompanionEnum.get
    throw new InvalidInstanceException("The companion enum received is not an instance of CompanionEnumWithGrandParent or doesn't have its structure.", companionEnum,)
}

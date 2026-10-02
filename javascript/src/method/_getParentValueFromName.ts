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

import type {Enumerable}                        from "../Enumerable"
import type {EnumerableConstructor}             from "../EnumerableConstructor"
import type {EnumerableWithNullableParent}      from "../EnumerableWithNullableParent"
import type {CompanionEnumerableWithParent}     from "../companion/CompanionEnumerableWithParent"
import type {CompanionEnumerableWithParentType} from "../type/companion"

import {InvalidInstanceException}             from "../exception/InvalidInstanceException"
import {NonExistantKeyException}              from "../exception/NonExistantKeyException"
import {NullReferenceException}               from "../exception/NullReferenceException"
import {getLastPrototype}                     from "../helper/getLastPrototype"
import {getCompanion}                         from "../helper/getCompanion"
import {isCompanionEnumWithParent}            from "../helper/isCompanionEnumWithParent"
import {isCompanionEnumWithParentByStructure} from "../helper/isCompanionEnumWithParentByStructure"

/**
 * Get the value via {@link CompanionEnumerableWithParent.getValue} from a {@link name} received.
 * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithParent} instance
 * @param name The name to retrieve
 * @throws {NullReferenceException}
 *
 * @internal
 * @todo: update the documentation to better-fit the method
 */
export function _getParentValueFromName<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableParent<INSTANCE>, name: string,): INSTANCE {
    const companionEnum = __getInstance(instance,)
    try {
        return companionEnum.getValue(name,)
    } catch (exception) {
        if (exception instanceof InvalidInstanceException)
            throw new NullReferenceException(`There was an error while retrieving the parent value on the “${companionEnum.constructor.name}” companion enum.`, instance, exception,)
        if (exception instanceof NullReferenceException)
            throw new NullReferenceException(`There was an error while retrieving the parent value on the “${companionEnum.constructor.name}” companion enum.`, instance, exception,)
        throw exception
    }
}

/**
 * Get the {@link CompanionEnumerableWithParent} from the instance received.
 * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
 *
 * @param instance The instance to retrieve its {@link CompanionEnumerableWithParent}
 * @throws {NullReferenceException}
 */
function __getInstance<const INSTANCE extends Enumerable, >(instance: EnumerableWithNullableParent<INSTANCE>,): CompanionEnumerableWithParentType<EnumerableWithNullableParent<INSTANCE>, INSTANCE> {
    let companionEnum: CompanionEnumerableWithParent<EnumerableWithNullableParent<INSTANCE>, any, any, any>
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
    if (isCompanionEnumWithParent(companionEnum,))
        return companionEnum.parentInstance.CompanionEnum.get
    if (isCompanionEnumWithParentByStructure(companionEnum,))
        //TODO validate the typing of the parent instance
        return (companionEnum.parentInstance as EnumerableConstructor<any, CompanionEnumerableWithParent<EnumerableWithNullableParent<INSTANCE>, any, any, any>>).CompanionEnum.get
    throw new InvalidInstanceException("The companion enum received is not an instance of CompanionEnumWithParent or doesn't have its structure.", companionEnum,)
}

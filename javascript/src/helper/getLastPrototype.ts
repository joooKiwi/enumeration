/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CollectionHolder}   from "@joookiwi/collection"
import {GenericCollectionHolder} from "@joookiwi/collection"

import type {Enumerable}            from "../Enumerable"
import type {EnumerableConstructor} from "../EnumerableConstructor"
import type {NullOr}                 from "../general type"

import {NullReferenceException} from "../exception"
import {KnownEnumConstructors}  from "./KnownEnumConstructors"
import {isEnumByStructure}      from "./isEnumByStructure"
import {isEnum}                 from "./isEnum"

/**
 * Get the last {@link ObjectConstructor.prototype prototype}
 * until it is the constructor types in {@link KnownEnumConstructors} in the case of an {@link Enum}
 * and the last proper {@link Enumerable}-like on a {@link Enumerable} instance
 *
 * @param instance The instance (by default as the current instance)
 * @throws {NullReferenceException}
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (<i>instance.constructor</i>)
 */
export function getLastPrototype<const T extends Enumerable, >(instance: object,): EnumerableConstructor<T, any> {
    if (instance == null)
        throw new NullReferenceException(`No prototype on a EnumerableConstructor could be found by a null value.`, instance,)

    if (isEnum(instance,)) {
        const prototypeConstructorChain = getPrototypeConstructorChain(instance,)
        const knownEnumConstructors = KnownEnumConstructors.get.values
        const indexFound = prototypeConstructorChain.indexOfFirst(prototypeConstructor => knownEnumConstructors.any(it => it == prototypeConstructor,),)
        if (indexFound == null)
            throw new NullReferenceException(`No known constructor ${knownEnumConstructors.join(", ", "(", ")", null, null, it => it.name,)} was found in the prototype chain ${prototypeConstructorChain.join(" → ", '"', '"',)}.`, instance,)
        return prototypeConstructorChain.get(indexFound - 1,) as EnumerableConstructor<T, any>
    }

    if (isEnumByStructure(instance,)) {
        const prototypeConstructorChain = getPrototypeConstructorChain(instance,)
        const prototypeFound = prototypeConstructorChain.findLast(it => isEnumByStructure(it.prototype,),)
        if (prototypeFound == null)
            throw new NullReferenceException(`No Enumerable-like could be found from the prototype chain ${prototypeConstructorChain.join(", ", '"', '"',)}.`, instance,)
        return prototypeFound as EnumerableConstructor<T, any>
    }

    throw new NullReferenceException(`No prototype on a EnumerableConstructor could be found by a non-Enumerable value.`, instance,)
}

function getPrototypeConstructorChain(instance: object,): CollectionHolder<Function> {
    const prototypeChain = [] as Function[]
    let prototype: NullOr<object> = instance
    while (prototype != null) {
        prototypeChain.push(prototype.constructor,)
        prototype = Reflect.getPrototypeOf(prototype,)
    }
    return new GenericCollectionHolder(prototypeChain,)
}

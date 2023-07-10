/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}            from "../Enumerable"
import type {EnumerableConstructor} from "../EnumerableConstructor"

import {Enum}                   from "../Enum"
import {NullReferenceException} from "../exception"

/**
 * Get the last {@link ObjectConstructor.prototype prototype} until it is the {@link Enum}.{@link Enum.constructor constructor}
 *
 * @param instance The instance (by default as the current instance)
 * @throws {NullReferenceException}
 * @see https://stackoverflow.com/a/68323749
 * @note No proper type inference can be made since it is possible to have a different prototype than the closest one (<i>instance.constructor</i>)
 */
export function getLastPrototype<const T extends Enumerable, >(instance: object,): EnumerableConstructor<T, any> {
    const prototype = Reflect.getPrototypeOf(instance,)
    if (prototype == null)
        throw new NullReferenceException(`No prototype as Enum.constructor was found in the prototype chain of "${instance == null ? instance : instance.constructor.name}".`, instance as unknown,)
    return prototype.constructor === Enum
        ? instance.constructor as EnumerableConstructor<T, any>
        : getLastPrototype(prototype)
}

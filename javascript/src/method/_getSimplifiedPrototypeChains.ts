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

import type {Array} from "@joookiwi/type"

/**
 * Get the list of prototype chains in a simplified format to not have its content shown. Only the name of the instance directly.
 *
 * It is the equivalent to `prototypeChain.joinToString(" → ", '“', '”', null, null, predicate)`
 * where the predicate is a callback to display the name.
 *
 * @param prototypeChain The prototype chain to be formatted in a simplified format
 * @internal
 */
export function _getSimplifiedPrototypeChains(prototypeChain: Array<object>,): string {
    const size = prototypeChain.length
    if (size == 0)
        return "“”"

    let string = ""
    const sizeMinus1 = size - 1
    let index = -1
    while (++index < sizeMinus1) {
        const value = prototypeChain[index] as object
        if (!("name" in value)) {
            string += `${value.constructor.name} → `
            continue
        }
        const name = value.name
        if (name == null) {
            string += `${value.constructor.name} → `
            continue
        }
        if (typeof name == "string")
            if (name.length === 0) {
                string += `${value.constructor.name} → `
                continue
            } else {
                string += `${name} → `
                continue
            }
        string += `${value.constructor.name} → `
    }

    const lastValue = prototypeChain[index] as object
    if (!("name" in lastValue))
        return `“${string} → ${lastValue.constructor.name}”`
    const name = lastValue.name
    if (name == null)
        return `“${string} → ${lastValue.constructor.name}”`
    if (typeof name == "string")
        if (name.length === 0)
            return `“${string} → ${lastValue.constructor.name}”`
        else
            return `“${string} → ${name}”`
    return `“${string} → ${lastValue.constructor.name}”`
}

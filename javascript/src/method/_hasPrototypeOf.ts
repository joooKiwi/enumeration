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

import type {NullOr} from "@joookiwi/type"

/**
 * Validate that the {@link value} has the {@link prototype} being received in its inheritance chain
 *
 * @param value     The value to find the {@link prototype}
 * @param prototype The prototype to find in the inheritance chain
 * @internal
 */
export function _hasPrototypeOf<const PROTOTYPE extends Function, >(value: Function, prototype: PROTOTYPE,): value is PROTOTYPE {
    let prototypeChain: NullOr<object> = value
    while (prototypeChain != null) {
        if (prototypeChain === prototype)
            return true
        prototypeChain = Reflect.getPrototypeOf(prototypeChain,)
    }
    return false
}

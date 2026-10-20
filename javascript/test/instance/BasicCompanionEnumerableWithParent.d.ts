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


import type {CompanionEnumerableWithParent} from "../../src/companion/CompanionEnumerableWithParent"
import type {BasicEnumWithParent}           from "./BasicEnumWithParent"
import type {BasicEnum}                     from "./BasicEnum"

export class BasicCompanionEnumerableWithParent {
    public constructor()
}

/**
 * A declaration class of a {@link CompanionEnumerableWithParent} that has the purpose to give
 * the {@link BasicEnumWithParent} for its {@link EnumerableWithParent} type and
 * the {@link BasicEnum} for its {@link Enumerable} type
 */
export interface BasicCompanionEnumerableWithParent
    extends CompanionEnumerableWithParent<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {}

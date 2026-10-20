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


import type {CompanionEnumerable}                                                       from "../../src/companion/CompanionEnumerable"
import type {BasicEnum}                                                                 from "./BasicEnum"

export class BasicCompanionEnumerable {
    public constructor()
}

/**
 * A declaration class of a {@link CompanionEnumerable} that has the purpose to give
 * the {@link BasicEnum} for its {@link Enumerable} type
 */
export interface BasicCompanionEnumerable
    extends CompanionEnumerable<BasicEnum, typeof BasicEnum> {}

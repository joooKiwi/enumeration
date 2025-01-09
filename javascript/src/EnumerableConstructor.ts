//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Enumerable}               from "./Enumerable"
import type {Singleton}                from "./Singleton"
import type {CompanionEnumDeclaration} from "./companion/CompanionEnum.declaration"

/** The <i>static</i> {@link Enumerable} definition containing the {@link CompanionEnumDeclaration companion enum} {@link Singleton singleton} field */
export interface EnumerableConstructor<out ENUMERABLE extends Enumerable,
    out COMPANION_ENUM extends CompanionEnumDeclaration<ENUMERABLE, EnumerableConstructor<ENUMERABLE, COMPANION_ENUM>>, >
    extends Function {

    /**
     * The {@link CompanionEnumDeclaration companion enum} {@link Singleton}
     * containing the utility methods for the {@link Enumerable}
     */
    readonly CompanionEnum: Singleton<COMPANION_ENUM>

}

// Function
// & { readonly CompanionEnum: Singleton<COMPANION_ENUM> }
// & Record<NameOf<ENUMERABLE>, ENUMERABLE>

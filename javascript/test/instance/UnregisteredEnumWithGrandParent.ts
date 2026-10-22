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

import {expect} from "vitest"

import type {Enumerable}                from "../../src/Enumerable"
import type {EnumerableWithParent}      from "../../src/EnumerableWithParent"
import type {EnumerableWithGrandParent} from "../../src/EnumerableWithGrandParent"

import {Enum} from "../../src/Enum"

/**
 * An {@link EnumerableWithGrandParent} that does not register itself to the {@link KnownEnumConstructors},
 * but is an inheritor of {@link Enum}
 */
export abstract class UnregisteredEnumWithGrandParent<const PARENT extends EnumerableWithParent<GRAND_PARENT>,
    const GRAND_PARENT extends Enumerable, >
    extends Enum<never, never>
    implements EnumerableWithGrandParent<PARENT, GRAND_PARENT, never, never> {

    public get parent(): never { return expect.fail("The getter method “parent” was not expected to be called.",) }
    public get grandParent(): never { return expect.fail("The getter method “grandParent” was not expected to be called.",) }

}

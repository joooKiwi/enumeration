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

import type {EnumerableWithNullableParent}     from "../../src/EnumerableWithNullableParent"
import type {CompanionEnumWithParentSingleton} from "../../src/type/singleton"

import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {EmptyEnumerable}         from "./EmptyEnumerable"

/**
 * An {@link EnumerableWithNullableParent} that has the purpose to be empty with nothing to specify.
 *
 * Note that any method (`name`|`ordinal`|`parent`|{@link Symbol.toStringTag}|{@link Symbol.toPrimitive}) will fail the tests.
 */
export class EmptyEnumerableWithParent
    implements EnumerableWithNullableParent<EmptyEnumerable, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EmptyEnumerableWithParent, typeof EmptyEnumerableWithParent, EmptyEnumerable, typeof EmptyEnumerable> = class CompanionEnum_EmptyEnumerableWithParent
        extends CompanionEnumWithParent<EmptyEnumerableWithParent, typeof EmptyEnumerableWithParent, EmptyEnumerable, typeof EmptyEnumerable> {

        static #instance?: CompanionEnum_EmptyEnumerableWithParent

        private constructor() {
            super(EmptyEnumerableWithParent, EmptyEnumerable,)
        }

        static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumerableWithParent()
        }

    }

    public constructor() {}

    get name(): never { return expect.fail("The getter method “name” was not expected to be called.",) }
    get ordinal(): never { return expect.fail("The getter method “ordinal” was not expected to be called.",) }
    get parent(): never { return expect.fail("The getter method “parent” was not expected to be called.",) }
    get [Symbol.toStringTag]() { return expect.fail("The getter method “Symbol.toStringTag” was not expected to be called.",) }
    [Symbol.toPrimitive](): never { return expect.fail("The method “Symbol.toPrimitive” was not expected to be called.",) }

    public methodFromEmptyEnumerableWithParent() {}

}

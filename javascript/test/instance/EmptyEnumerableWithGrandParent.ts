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
import {expect}     from "vitest"

import type {EnumerableWithNullableGrandParent}     from "../../src/EnumerableWithNullableGrandParent"
import type {CompanionEnumWithGrandParentSingleton} from "../../src/type/singleton"

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {EmptyEnumerable}              from "./EmptyEnumerable"
import {EmptyEnumerableWithParent}    from "./EmptyEnumerableWithParent"

/**
 * An {@link EnumerableWithNullableGrandParent} that has the purpose to be empty with nothing to specify.
 *
 * Note that any method (`name`|`ordinal`|`parent`|`grandParent`|{@link Symbol.toStringTag}|{@link Symbol.toPrimitive}) will fail the tests.
 */
export class EmptyEnumerableWithGrandParent
    implements EnumerableWithNullableGrandParent<EmptyEnumerableWithParent, EmptyEnumerable, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<EmptyEnumerableWithGrandParent, typeof EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, typeof EmptyEnumerableWithParent, EmptyEnumerable, typeof EmptyEnumerable> = class CompanionEnum_EmptyEnumerableWithGrandParent
        extends CompanionEnumWithGrandParent<EmptyEnumerableWithGrandParent, typeof EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, typeof EmptyEnumerableWithParent, EmptyEnumerable, typeof EmptyEnumerable> {

        static #instance?: CompanionEnum_EmptyEnumerableWithGrandParent

        private constructor() {
            super(EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, EmptyEnumerable,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumerableWithGrandParent()
        }

    }

    public constructor() {}

    public get name(): never { return expect.fail("The getter method “name” was not expected to be called.",) }
    public get ordinal(): never { return expect.fail("The getter method “ordinal” was not expected to be called.",) }
    public get parent(): never { return expect.fail("The getter method “parent” was not expected to be called.",) }
    public get grandParent(): never { return expect.fail("The getter method “grandParent” was not expected to be called.",) }
    public get [Symbol.toStringTag](): never { return expect.fail("The getter method “Symbol.toStringTag” was not expected to be called.",) }
    public [Symbol.toPrimitive](..._: Array<unknown>): never
    public [Symbol.toPrimitive]() { expect.fail("The method “Symbol.toPrimitive” was not expected to be called.",) }

    public methodFromEmptyEnumerableWithGrandParent() {}

}

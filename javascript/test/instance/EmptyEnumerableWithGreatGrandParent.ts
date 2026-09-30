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

import type {EnumerableWithNullableGreatGrandParent}     from "../../src/EnumerableWithNullableGreatGrandParent"
import type {CompanionEnumWithGreatGrandParentSingleton} from "../../src/type/singleton"

import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {EmptyEnumerable}                   from "./EmptyEnumerable"
import {EmptyEnumerableWithGrandParent}    from "./EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithParent}         from "./EmptyEnumerableWithParent"

/**
 * An {@link EnumerableWithNullableGreatGrandParent} that has the purpose to be empty with nothing to specify.
 *
 * Note that any method (`name`|`ordinal`|`parent`|`grandParent`|`greatGrandParent`|{@link Symbol.toStringTag}|{@link Symbol.toPrimitive}) will fail the tests.
 */
export class EmptyEnumerableWithGreatGrandParent
    implements EnumerableWithNullableGreatGrandParent<EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, EmptyEnumerable, never, never> {

    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<EmptyEnumerableWithGreatGrandParent, typeof EmptyEnumerableWithGreatGrandParent, EmptyEnumerableWithGrandParent, typeof EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, typeof EmptyEnumerableWithParent, EmptyEnumerable, typeof EmptyEnumerable> = class CompanionEnum_EmptyEnumerableWithParent
        extends CompanionEnumWithGreatGrandParent<EmptyEnumerableWithGreatGrandParent, typeof EmptyEnumerableWithGreatGrandParent, EmptyEnumerableWithGrandParent, typeof EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, typeof EmptyEnumerableWithParent, EmptyEnumerable, typeof EmptyEnumerable> {

        static #instance?: CompanionEnum_EmptyEnumerableWithParent

        private constructor() {
            super(EmptyEnumerableWithGreatGrandParent, EmptyEnumerableWithGrandParent, EmptyEnumerableWithParent, EmptyEnumerable,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumerableWithParent()
        }

    }

    public constructor() {}

    public get name(): never { return expect.fail("The getter method “name” was not expected to be called.",) }
    public get ordinal(): never { return expect.fail("The getter method “ordinal” was not expected to be called.",) }
    public get parent(): never { return expect.fail("The getter method “parent” was not expected to be called.",) }
    public get grandParent(): never { return expect.fail("The getter method “grandParent” was not expected to be called.",) }
    public get greatGrandParent(): never { return expect.fail("The getter method “greatGrandParent” was not expected to be called.",) }
    public get [Symbol.toStringTag](): never { return expect.fail("The getter method “Symbol.toStringTag” was not expected to be called.",) }
    public [Symbol.toPrimitive](..._: Array<unknown>): never
    public [Symbol.toPrimitive]() { expect.fail("The method “Symbol.toPrimitive” was not expected to be called.",) }

    public methodFromEmptyEnumerableWithGreatGrandParent() {}

}

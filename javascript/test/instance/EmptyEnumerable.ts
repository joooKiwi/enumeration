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

import type {Enumerable}             from "../../src/Enumerable"
import type {CompanionEnumSingleton} from "../../src/type/singleton"

import {CompanionEnum} from "../../src/companion/CompanionEnum"

/**
 * An {@link Enumerable} that has the purpose to be empty with nothing to specify.
 *
 * Note that any method (`name`|`ordinal`|{@link Symbol.toStringTag}|{@link Symbol.toPrimitive}) will fail the tests.
 */
export class EmptyEnumerable
    implements Enumerable<never, never> {

    public static readonly CompanionEnum: CompanionEnumSingleton<EmptyEnumerable, typeof EmptyEnumerable> = class CompanionEnum_EmptyEnumerable
        extends CompanionEnum<EmptyEnumerable, typeof EmptyEnumerable> {

        static #instance?: CompanionEnum_EmptyEnumerable

        private constructor() {
            super(EmptyEnumerable,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumerable()
        }

    }

    public constructor() {}

    public get name(): never { return expect.fail("The getter method “name” was not expected to be called.",) }
    public get ordinal(): never { return expect.fail("The getter method “ordinal” was not expected to be called.",) }
    public get [Symbol.toStringTag]() { return expect.fail("The getter method “Symbol.toStringTag” was not expected to be called.",) }
    public [Symbol.toPrimitive](): never { return expect.fail("The method “Symbol.toPrimitive” was not expected to be called.",) }

    public methodFromEmptyEnumerable() {}

}

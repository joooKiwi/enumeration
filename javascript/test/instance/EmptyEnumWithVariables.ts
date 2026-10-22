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

import type {CompanionEnumSingleton} from "../../src/type/singleton"

import {Enum} from "../../src/Enum"
import {CompanionEnum} from "../../src/companion/CompanionEnum"

/**
 * An {@link Enum} that has the purpose to be empty with nothing to specify.
 *
 * Plus, it contains variable for the tests
 */
export class EmptyEnumWithVariables
    extends Enum<never, never> {

    public static readonly STRING = "ab"
    public static readonly NUMBER = 12
    public static readonly BIGINT = 12n

    public static readonly CompanionEnum: CompanionEnumSingleton<EmptyEnumWithVariables, typeof EmptyEnumWithVariables> = class CompanionEnum_EmptyEnumWithVariable
        extends CompanionEnum<EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

        static #instance?: CompanionEnum_EmptyEnumWithVariable

        private constructor() {
            super(EmptyEnumWithVariables,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithVariable()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithVariable() {}

}

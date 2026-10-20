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

import type {CompanionEnumWithParentSingleton} from "../../src/type/singleton"

import {EnumWithParent}          from "../../src/EnumWithParent"
import {CompanionEnumWithParent} from "../../src/companion/CompanionEnumWithParent"
import {EmptyEnumWithVariables}  from "./EmptyEnumWithVariables"

/**
 * An {@link EnumWithParent} that has the purpose to be empty with nothing to specify.
 *
 * Plus, it contains variable for the tests
 */
export class EmptyEnumWithParentWithVariables
    extends EnumWithParent<EmptyEnumWithVariables, never, never> {

    public static readonly STRING = "cd"
    public static readonly NUMBER = 34
    public static readonly BIGINT = 34n

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> = class CompanionEnum_EmptyEnumWithParentWithVariable
        extends CompanionEnumWithParent<EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

        static #instance?: CompanionEnum_EmptyEnumWithParentWithVariable

        private constructor() {
            super(EmptyEnumWithParentWithVariables, EmptyEnumWithVariables,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithParentWithVariable()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithParentWithVariable() {}

}

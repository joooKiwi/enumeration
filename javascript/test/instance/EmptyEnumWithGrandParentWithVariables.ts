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

import type {CompanionEnumWithGrandParentSingleton} from "../../src/type/singleton"

import {EnumWithGrandParent}              from "../../src/EnumWithGrandParent"
import {CompanionEnumWithGrandParent}     from "../../src/companion/CompanionEnumWithGrandParent"
import {EmptyEnumWithParentWithVariables} from "./EmptyEnumWithParentWithVariables"
import {EmptyEnumWithVariables}           from "./EmptyEnumWithVariables"

/**
 * An {@link EnumWithGrandParent} that has the purpose to be empty with nothing to specify.
 *
 * Plus, it contains variable for the tests
 */
export class EmptyEnumWithGrandParentWithVariables
    extends EnumWithGrandParent<EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, never, never> {

    public static readonly STRING = "ef"
    public static readonly NUMBER = 56
    public static readonly BIGINT = 56n

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<EmptyEnumWithGrandParentWithVariables, typeof EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> = class CompanionEnum_EmptyEnumWithGrandParentWithVariable
        extends CompanionEnumWithGrandParent<EmptyEnumWithGrandParentWithVariables, typeof EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

        static #instance?: CompanionEnum_EmptyEnumWithGrandParentWithVariable

        private constructor() {
            super(EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, EmptyEnumWithVariables,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithGrandParentWithVariable()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithGrandParentWithVariable() {}

}

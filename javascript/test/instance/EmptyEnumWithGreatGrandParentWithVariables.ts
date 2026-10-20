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

import type {CompanionEnumWithGreatGrandParentSingleton} from "../../src/type/singleton"

import {EnumWithGreatGrandParent}              from "../../src/EnumWithGreatGrandParent"
import {CompanionEnumWithGreatGrandParent}     from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {EmptyEnumWithGrandParentWithVariables} from "./EmptyEnumWithGrandParentWithVariables"
import {EmptyEnumWithParentWithVariables}      from "./EmptyEnumWithParentWithVariables"
import {EmptyEnumWithVariables}                from "./EmptyEnumWithVariables"

/**
 * An {@link EnumWithGreatGrandParent} that has the purpose to be empty with nothing to specify.
 *
 * Plus, it contains variable for the tests
 */
export class EmptyEnumWithGreatGrandParentWithVariables
    extends EnumWithGreatGrandParent<EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, never, never> {

    public static readonly STRING = "gh"
    public static readonly NUMBER = 78
    public static readonly BIGINT = 78n

    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<EmptyEnumWithGreatGrandParentWithVariables, typeof EmptyEnumWithGreatGrandParentWithVariables, EmptyEnumWithGrandParentWithVariables, typeof EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> = class CompanionEnum_EmptyEnumWithGreatGrandParentWithVariable
        extends CompanionEnumWithGreatGrandParent<EmptyEnumWithGreatGrandParentWithVariables, typeof EmptyEnumWithGreatGrandParentWithVariables, EmptyEnumWithGrandParentWithVariables, typeof EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, typeof EmptyEnumWithParentWithVariables, EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

        static #instance?: CompanionEnum_EmptyEnumWithGreatGrandParentWithVariable

        private constructor() {
            super(EmptyEnumWithGreatGrandParentWithVariables, EmptyEnumWithGrandParentWithVariables, EmptyEnumWithParentWithVariables, EmptyEnumWithVariables,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EmptyEnumWithGreatGrandParentWithVariable()
        }

    }

    public constructor() { super() }

    public methodFromEmptyEnumWithGreatGrandParentWithVariable() {}

}

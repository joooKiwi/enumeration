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
import {AlternativeEnum}         from "./AlternativeEnum"

/**
 * An {@link EnumWithParent} having
 * the {@link AlternativeEnum} as its parent
 */
export class AlternativeEnumWithParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithParent<AlternativeEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly 0: typeof AlternativeEnumWithParent.A
    public static readonly 1: typeof AlternativeEnumWithParent.B
    public static readonly 2: typeof AlternativeEnumWithParent.C
    public static readonly 3: typeof AlternativeEnumWithParent.D

    public static readonly A = new AlternativeEnumWithParent<0, 'A'>(AlternativeEnum.A,)
    public static readonly B = new AlternativeEnumWithParent<1, 'B'>()
    public static readonly C = new AlternativeEnumWithParent<2, 'C'>()
    public static readonly D = new AlternativeEnumWithParent<3, 'D'>()

    private constructor(parent?: AlternativeEnum<ORDINAL, NAME>,) {
        if (arguments.length === 0)
            super()
        else
            super(parent,)
    }

    public static CompanionEnum: CompanionEnumWithParentSingleton<AlternativeEnumWithParent, typeof AlternativeEnumWithParent, AlternativeEnum, typeof AlternativeEnum> = class CompanionEnum_AlternativeEnumWithParent
        extends CompanionEnumWithParent<AlternativeEnumWithParent, typeof AlternativeEnumWithParent, AlternativeEnum, typeof AlternativeEnum> {

        static #instance?: CompanionEnum_AlternativeEnumWithParent
        private constructor() { super(AlternativeEnumWithParent, AlternativeEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_AlternativeEnumWithParent() }

    }

    public methodFromAlternativeEnumWithParent() {}

}

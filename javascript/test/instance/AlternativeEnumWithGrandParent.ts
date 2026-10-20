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

import {EnumWithGrandParent}          from "../../src/EnumWithGrandParent"
import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {AlternativeEnum}              from "./AlternativeEnum"
import {AlternativeEnumWithParent}    from "./AlternativeEnumWithParent"

/**
 * An {@link EnumWithGrandParent} having
 * the {@link AlternativeEnumWithParent} as its parent and
 * the {@link AlternativeEnum} as its grandparent
 */
export class AlternativeEnumWithGrandParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithGrandParent<AlternativeEnumWithParent<ORDINAL, NAME>, AlternativeEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly 0: typeof AlternativeEnumWithGrandParent.A
    public static readonly 1: typeof AlternativeEnumWithGrandParent.B
    public static readonly 2: typeof AlternativeEnumWithGrandParent.C
    public static readonly 3: typeof AlternativeEnumWithGrandParent.D

    public static readonly A = new AlternativeEnumWithGrandParent<0, 'A'>(AlternativeEnumWithParent.A, AlternativeEnum.A,)
    public static readonly B = new AlternativeEnumWithGrandParent<1, 'B'>(AlternativeEnumWithParent.B,)
    public static readonly C = new AlternativeEnumWithGrandParent<2, 'C'>()
    public static readonly D = new AlternativeEnumWithGrandParent<3, 'D'>()

    private constructor(parent?: AlternativeEnumWithParent<ORDINAL, NAME>, grandParent?: AlternativeEnum<ORDINAL, NAME>,) {
        const argumentsSize = arguments.length
        if (argumentsSize === 0)
            super()
        else if (argumentsSize === 1)
            super(parent,)
        else
            super(parent, grandParent,)
    }

    public static CompanionEnum: CompanionEnumWithGrandParentSingleton<AlternativeEnumWithGrandParent, typeof AlternativeEnumWithGrandParent, AlternativeEnumWithParent, typeof AlternativeEnumWithParent, AlternativeEnum, typeof AlternativeEnum> = class CompanionEnum_AlternativeEnumWithGrandParent
        extends CompanionEnumWithGrandParent<AlternativeEnumWithGrandParent, typeof AlternativeEnumWithGrandParent, AlternativeEnumWithParent, typeof AlternativeEnumWithParent, AlternativeEnum, typeof AlternativeEnum> {

        static #instance?: CompanionEnum_AlternativeEnumWithGrandParent
        private constructor() { super(AlternativeEnumWithGrandParent, AlternativeEnumWithParent, AlternativeEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_AlternativeEnumWithGrandParent() }

    }

    public methodFromAlternativeEnumWithGrandParent() {}

}

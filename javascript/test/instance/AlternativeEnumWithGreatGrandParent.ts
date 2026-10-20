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

import {EnumWithGreatGrandParent}          from "../../src/EnumWithGreatGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {AlternativeEnum}                   from "./AlternativeEnum"
import {AlternativeEnumWithGrandParent}    from "./AlternativeEnumWithGrandParent"
import {AlternativeEnumWithParent}         from "./AlternativeEnumWithParent"

/**
 * An {@link EnumWithGreatGrandParent} having
 * the {@link AlternativeEnumWithGrandParent} as its parent,
 * the {@link AlternativeEnumWithParent} as its grandparent and
 * the {@link AlternativeEnum} as its great-grandparent
 */
export class AlternativeEnumWithGreatGrandParent<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends EnumWithGreatGrandParent<AlternativeEnumWithGrandParent<ORDINAL, NAME>, AlternativeEnumWithParent<ORDINAL, NAME>, AlternativeEnum<ORDINAL, NAME>, ORDINAL, NAME> {

    public static readonly 0: typeof AlternativeEnumWithGreatGrandParent.A
    public static readonly 1: typeof AlternativeEnumWithGreatGrandParent.B
    public static readonly 2: typeof AlternativeEnumWithGreatGrandParent.C
    public static readonly 3: typeof AlternativeEnumWithGreatGrandParent.D

    public static readonly A = new AlternativeEnumWithGreatGrandParent<0, 'A'>(AlternativeEnumWithGrandParent.A, AlternativeEnumWithParent.A, AlternativeEnum.A,)
    public static readonly B = new AlternativeEnumWithGreatGrandParent<1, 'B'>(AlternativeEnumWithGrandParent.B, AlternativeEnumWithParent.B,)
    public static readonly C = new AlternativeEnumWithGreatGrandParent<2, 'C'>(AlternativeEnumWithGrandParent.C,)
    public static readonly D = new AlternativeEnumWithGreatGrandParent<3, 'D'>()

    private constructor(parent?: AlternativeEnumWithGrandParent<ORDINAL, NAME>, grandParent?: AlternativeEnumWithParent<ORDINAL, NAME>, greatGrandParent?: AlternativeEnum<ORDINAL, NAME>,) {
        const argumentsSize = arguments.length
        if (argumentsSize === 0)
            super()
        else if (argumentsSize === 1)
            super(parent,)
        else if (argumentsSize === 2)
            super(parent, grandParent,)
        else
            super(parent, grandParent, greatGrandParent,)
    }

    public static CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<AlternativeEnumWithGreatGrandParent, typeof AlternativeEnumWithGreatGrandParent, AlternativeEnumWithGrandParent, typeof AlternativeEnumWithGrandParent, AlternativeEnumWithParent, typeof AlternativeEnumWithParent, AlternativeEnum, typeof AlternativeEnum> = class CompanionEnum_AlternativeEnumWithGreatGrandParent
        extends CompanionEnumWithGreatGrandParent<AlternativeEnumWithGreatGrandParent, typeof AlternativeEnumWithGreatGrandParent, AlternativeEnumWithGrandParent, typeof AlternativeEnumWithGrandParent, AlternativeEnumWithParent, typeof AlternativeEnumWithParent, AlternativeEnum, typeof AlternativeEnum> {

        static #instance?: CompanionEnum_AlternativeEnumWithGreatGrandParent
        private constructor() { super(AlternativeEnumWithGreatGrandParent, AlternativeEnumWithGrandParent, AlternativeEnumWithParent, AlternativeEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_AlternativeEnumWithGreatGrandParent() }

    }

    public methodFromAlternativeEnumWithGreatGrandParent() {}

}

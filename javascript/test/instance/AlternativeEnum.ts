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

import {Enum}          from "../../src/Enum"
import {CompanionEnum} from "../../src/companion/CompanionEnum"

export class AlternativeEnum<const ORDINAL extends | 0 | 1 | 2 | 3 = | 0 | 1 | 2 | 3,
    const NAME extends | 'A' | 'B' | 'C' | 'D' = | 'A' | 'B' | 'C' | 'D'>
    extends Enum<ORDINAL, NAME> {

    public static readonly 0: typeof AlternativeEnum.A
    public static readonly 1: typeof AlternativeEnum.B
    public static readonly 2: typeof AlternativeEnum.C
    public static readonly 3: typeof AlternativeEnum.D

    public static readonly A = new AlternativeEnum<0, 'A'>()
    public static readonly B = new AlternativeEnum<1, 'B'>()
    public static readonly C = new AlternativeEnum<2, 'C'>()
    public static readonly D = new AlternativeEnum<3, 'D'>()

    private constructor() { super() }

    public static CompanionEnum: CompanionEnumSingleton<AlternativeEnum, typeof AlternativeEnum> = class CompanionEnum_AlternativeEnum
        extends CompanionEnum<AlternativeEnum, typeof AlternativeEnum> {

        static #instance?: CompanionEnum_AlternativeEnum
        private constructor() { super(AlternativeEnum,) }
        public static get get() { return this.#instance ??= new CompanionEnum_AlternativeEnum() }

    }

    public methodFromAlternativeEnum() {}

}

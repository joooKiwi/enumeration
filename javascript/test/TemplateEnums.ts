/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {NullOr}                                                                                                                                      from "../src/general type"
import type {EnumerableWithGrandParent}                                                                                                                   from "../src/EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}                                                                                                              from "../src/EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                                                                                                                        from "../src/EnumerableWithParent"
import type {CompanionEnumSingleton, CompanionEnumWithGrandParentSingleton, CompanionEnumWithGreatGrandParentSingleton, CompanionEnumWithParentSingleton} from "../src/Singleton.types"

import {Enum}                              from "../src/Enum"
import {CompanionEnum}                     from "../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}      from "../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../src/companion/CompanionEnumWithParent"

type EnumType = {
    A: 0
    B: 1
}
type Ordinals = EnumType[Names]
type Names = keyof EnumType

type EnumType2 = {
    A: 0
    B: 1
    C: 2
}
type Ordinals2 = EnumType2[Names2]
type Names2 = keyof EnumType2

type EnumType3 = {
    A: 0
    B: 1
    C: 2
    D: 3
}
type Ordinals3 = EnumType3[Names3]
type Names3 = keyof EnumType3

type EnumType4 = {
    A: 0
    B: 1
    C: 2
    D: 3
    E: 4
    F: 5
}
type Ordinals4 = EnumType4[Names4] & number
type Names4 = keyof EnumType4

export class EmptyEnum
    extends Enum<never, never> {

    public static readonly CompanionEnum: CompanionEnumSingleton<EmptyEnum, typeof EmptyEnum> = class CompanionEnum_EmptyEnum
        extends CompanionEnum<EmptyEnum, typeof EmptyEnum> {

        static #instance?: CompanionEnum_EmptyEnum

        private constructor() {
            super(EmptyEnum,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public methodFromEmptyEnum() {
    }

}

export class Enum1
    extends Enum<Ordinals, Names> {

    public static readonly A = new Enum1()
    public static readonly B = new Enum1()

    public static readonly 0: typeof Enum1.A
    public static readonly 1: typeof Enum1.B

    public static readonly CompanionEnum: CompanionEnumSingleton<Enum1, typeof Enum1> = class CompanionEnum_Enum1
        extends CompanionEnum<Enum1, typeof Enum1> {

        static #instance?: CompanionEnum_Enum1

        private constructor() {
            super(Enum1,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public methodFromEnum1() {
    }

}

export class Enum2
    extends Enum<Ordinals, Names> {

    public static readonly A = new Enum2()
    public static readonly B = new Enum2()

    public static readonly 0: typeof Enum2.A
    public static readonly 1: typeof Enum2.B

    public static readonly CompanionEnum: CompanionEnumSingleton<Enum2, typeof Enum2> = class CompanionEnum_Enum2
        extends CompanionEnum<Enum2, typeof Enum2> {

        static #instance?: CompanionEnum_Enum2

        private constructor() {
            super(Enum2,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public methodFromEnum2() {
    }

}


export class EmptyEnumWithVariables
    extends Enum<never, never> {

    public static readonly CompanionEnum: CompanionEnumSingleton<EmptyEnumWithVariables, typeof EmptyEnumWithVariables> = class CompanionEnum_EnumWithVariables
        extends CompanionEnum<EmptyEnumWithVariables, typeof EmptyEnumWithVariables> {

        static #instance?: CompanionEnum_EnumWithVariables

        private constructor() {
            super(EmptyEnumWithVariables,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public static readonly VARIABLE_STRING = ""
    public static readonly VARIABLE_NUMBER = 0
    public static readonly VARIABLE_BIGINT = BigInt(0,)

    public methodFromEmptyEnumWithVariable() {
    }

}

export class EnumWithDifferentComportment<const ORDINAL extends Ordinals2 = Ordinals2, const NAME extends Names2 = Names2,>
    extends Enum<ORDINAL, NAME> {

    public static readonly A = new class EnumWithDifferentComportment_A extends EnumWithDifferentComportment<0, 'A'> {

        public override comportment() {
            return "abc-def" as const
        }

    }()
    public static readonly B = new class EnumWithDifferentComportment_B extends EnumWithDifferentComportment<1, 'B'> {

        public override comportment() {
            return "def-abc" as const
        }

    }()
    public static readonly C = new class EnumWithDifferentComportment_C extends EnumWithDifferentComportment<2, 'C'> {
    }()

    public static readonly 0: typeof EnumWithDifferentComportment.A
    public static readonly 1: typeof EnumWithDifferentComportment.B
    public static readonly 2: typeof EnumWithDifferentComportment.C

    public static readonly CompanionEnum: CompanionEnumSingleton<EnumWithDifferentComportment, typeof EnumWithDifferentComportment> = class CompanionEnum_EnumWithDifferentComportment
        extends CompanionEnum<EnumWithDifferentComportment, typeof EnumWithDifferentComportment> {

        static #instance?: CompanionEnum_EnumWithDifferentComportment

        private constructor() {
            super(EnumWithDifferentComportment,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public comportment(): | "abc" | "abc-def" | "def-abc" {
        return "abc"
    }

    public methodFromEnumWithDifferentComportment() {
    }

}

export class EnumWithInheritance
    extends Enum<Ordinals4, Names4> {

    private static readonly Inherited1 = class EnumWithInheritance_Inherited1 extends EnumWithInheritance {

        public override inheritedComportment() {
            return 1 as const
        }

    }
    private static readonly Inherited2 = class EnumWithInheritance_Inherited2 extends EnumWithInheritance {

        public override inheritedComportment() {
            return 2 as const
        }

    }

    public static readonly A = new class EnumWithInheritance_A extends EnumWithInheritance {

        public override comportment() {
            return "klm-hij" as const
        }

    }()
    public static readonly B = new class EnumWithInheritance_B extends EnumWithInheritance.Inherited1 {

        public override comportment() {
            return "hij-klm" as const
        }

    }()
    public static readonly C = new class EnumWithInheritance_C extends EnumWithInheritance.Inherited2 {
    }()
    public static readonly D = new EnumWithInheritance()
    public static readonly E = new EnumWithInheritance.Inherited1()
    public static readonly F = new EnumWithInheritance.Inherited2()

    public static readonly 0: typeof EnumWithInheritance.A
    public static readonly 1: typeof EnumWithInheritance.B
    public static readonly 2: typeof EnumWithInheritance.C
    public static readonly 3: typeof EnumWithInheritance.D
    public static readonly 4: typeof EnumWithInheritance.E
    public static readonly 5: typeof EnumWithInheritance.F

    public static readonly CompanionEnum: CompanionEnumSingleton<EnumWithInheritance, typeof EnumWithInheritance> = class CompanionEnum_EnumWithInheritance
        extends CompanionEnum<EnumWithInheritance, typeof EnumWithInheritance> {

        static #instance?: CompanionEnum_EnumWithInheritance

        private constructor() {
            super(EnumWithInheritance,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public comportment(): | "hij" | "hij-klm" | "klm-hij" {
        return "hij"
    }

    public inheritedComportment(): | 1 | 2 | "default" {
        return "default"
    }

    public methodFromEnumWithInheritance() {
    }

}

export class EnumWithExcludedFields
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithExcludedFields()
    public static readonly B = new EnumWithExcludedFields()

    public static readonly 0: typeof EnumWithExcludedFields.A
    public static readonly 1: typeof EnumWithExcludedFields.B

    public static readonly CompanionEnum: CompanionEnumSingleton<EnumWithExcludedFields, typeof EnumWithExcludedFields> = class CompanionEnum_EnumWithExcludedFields
        extends CompanionEnum<EnumWithExcludedFields, typeof EnumWithExcludedFields> {

        static #instance?: CompanionEnum_EnumWithExcludedFields
        protected override readonly _EXCLUDED_NAMES = ['C',] as const

        private constructor() {
            super(EnumWithExcludedFields,)
        }

        static get get() {
            return this.#instance ??= new this()
        }

    }

    public static readonly C = this.A

    public methodFromEnumWithExcludedFields() {
    }

}


export class EnumWithDefault
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithDefault()
    public static readonly B = new EnumWithDefault()

    public static readonly 0: typeof EnumWithDefault.A
    public static readonly 1: typeof EnumWithDefault.B

    public static readonly CompanionEnum: CompanionEnumSingleton<EnumWithDefault, typeof EnumWithDefault> = class CompanionEnum_EnumWithDefault
        extends CompanionEnum<EnumWithDefault, typeof EnumWithDefault> {

        static #instance?: CompanionEnum_EnumWithDefault
        protected override readonly _DEFAULT = EnumWithDefault.A

        private constructor() {
            super(EnumWithDefault,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    public methodFromEnumWithDefault() {
    }

}

export class EnumWithLateDefault
    extends Enum<Ordinals, Names> {

    public static readonly A = new EnumWithLateDefault()
    public static readonly B = new EnumWithLateDefault()

    public static readonly 0: typeof EnumWithLateDefault.A
    public static readonly 1: typeof EnumWithLateDefault.B

    public static readonly CompanionEnum: CompanionEnumSingleton<EnumWithLateDefault, typeof EnumWithLateDefault> = class CompanionEnum_EnumWithLateDefault
        extends CompanionEnum<EnumWithLateDefault, typeof EnumWithLateDefault> {

        static #instance?: CompanionEnum_EnumWithLateDefault

        private constructor() {
            super(EnumWithLateDefault,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    public methodFromEnumWithLateDefault() {
    }

}


export class ParentEnum
    extends Enum<Ordinals, Names> {

    public static readonly A = new ParentEnum()
    public static readonly B = new ParentEnum()

    public static readonly 0: typeof ParentEnum.A
    public static readonly 1: typeof ParentEnum.B

    public static readonly CompanionEnum: CompanionEnumSingleton<ParentEnum, typeof ParentEnum> = class CompanionEnum_ParentEnum
        extends CompanionEnum<ParentEnum, typeof ParentEnum> {

        static #instance?: CompanionEnum_ParentEnum

        protected constructor() {
            super(ParentEnum,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    protected constructor() {
        super()
    }

    public methodFromParentEnum() {
    }

}

export class Child1Enum
    extends Enum<Ordinals2, Names2>
    implements EnumerableWithParent<Ordinals2, Names2, ParentEnum> {

    public static readonly A = new Child1Enum(ParentEnum.A,)
    public static readonly B = new Child1Enum(ParentEnum.B,)
    public static readonly C = new Child1Enum()

    public static readonly 0: typeof Child1Enum.A
    public static readonly 1: typeof Child1Enum.B
    public static readonly 2: typeof Child1Enum.C

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<Child1Enum, typeof Child1Enum, ParentEnum, typeof ParentEnum> = class CompanionEnum_Child1Enum
        extends CompanionEnumWithParent<Child1Enum, typeof Child1Enum,
            ParentEnum, typeof ParentEnum> {

        static #instance?: CompanionEnum_Child1Enum

        private constructor() {
            super(Child1Enum, ParentEnum,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    readonly #parent

    protected constructor(parent: NullOr<ParentEnum> = null,) {
        super()
        this.#parent = parent
    }

    public get parent(): NullOr<ParentEnum> {
        return this.#parent
    }

    public methodFromChildEnum1() {
    }

}

export class Child2Enum
    extends Enum<Ordinals3, Names3>
    implements EnumerableWithGrandParent<Ordinals3, Names3, Child1Enum, ParentEnum> {

    public static readonly A = new Child2Enum(Child1Enum.A, ParentEnum.A,)
    public static readonly B = new Child2Enum(Child1Enum.B, ParentEnum.B,)
    public static readonly C = new Child2Enum(Child1Enum.C,)
    public static readonly D = new Child2Enum()

    public static readonly 0: typeof Child2Enum.A
    public static readonly 1: typeof Child2Enum.B
    public static readonly 2: typeof Child2Enum.C
    public static readonly 3: typeof Child2Enum.D

    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<Child2Enum, typeof Child2Enum, Child1Enum, typeof Child1Enum, ParentEnum, typeof ParentEnum> = class CompanionEnum_Child2Enum
        extends CompanionEnumWithGrandParent<Child2Enum, typeof Child2Enum,
            Child1Enum, typeof Child1Enum,
            ParentEnum, typeof ParentEnum> {

        static #instance?: CompanionEnum_Child2Enum

        private constructor() {
            super(Child2Enum, Child1Enum, ParentEnum,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    readonly #parent
    readonly #grandParent

    protected constructor(parent: NullOr<Child1Enum> = null, grandParent: NullOr<ParentEnum> = null,) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
    }

    public get parent(): NullOr<Child1Enum> {
        return this.#parent
    }

    public get grandParent(): NullOr<ParentEnum> {
        return this.#grandParent
    }

    public methodFromChildEnum2() {
    }

}

export class Child3Enum
    extends Enum<Ordinals4, Names4>
    implements EnumerableWithGreatGrandParent<Ordinals4, Names4, Child2Enum, Child1Enum, ParentEnum> {

    public static readonly A = new Child3Enum(Child2Enum.A, Child1Enum.A, ParentEnum.A,)
    public static readonly B = new Child3Enum(Child2Enum.B, Child1Enum.B, ParentEnum.B,)
    public static readonly C = new Child3Enum(Child2Enum.C, Child1Enum.C,)
    public static readonly D = new Child3Enum(Child2Enum.D,)
    public static readonly E = new Child3Enum()
    public static readonly F = new Child3Enum()

    public static readonly 0: typeof Child3Enum.A
    public static readonly 1: typeof Child3Enum.B
    public static readonly 2: typeof Child3Enum.C
    public static readonly 3: typeof Child3Enum.D
    public static readonly 4: typeof Child3Enum.E
    public static readonly 5: typeof Child3Enum.F

    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<Child3Enum, typeof Child3Enum, Child2Enum, typeof Child2Enum, Child1Enum, typeof Child1Enum, ParentEnum, typeof ParentEnum> = class CompanionEnum_Child3Enum
        extends CompanionEnumWithGreatGrandParent<Child3Enum, typeof Child3Enum,
            Child2Enum, typeof Child2Enum,
            Child1Enum, typeof Child1Enum,
            ParentEnum, typeof ParentEnum> {

        static #instance?: CompanionEnum_Child3Enum

        private constructor() {
            super(Child3Enum, Child2Enum, Child1Enum, ParentEnum,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    readonly #parent
    readonly #grandParent
    readonly #greatGrandParent

    private constructor(parent: NullOr<Child2Enum> = null, grandParent: NullOr<Child1Enum> = null, greatGrandParent: NullOr<ParentEnum> = null,) {
        super()
        this.#parent = parent
        this.#grandParent = grandParent
        this.#greatGrandParent = greatGrandParent
    }

    public get parent(): NullOr<Child2Enum> {
        return this.#parent
    }

    public get grandParent(): NullOr<Child1Enum> {
        return this.#grandParent
    }

    public get greatGrandParent(): NullOr<ParentEnum> {
        return this.#greatGrandParent
    }

    public methodFromChildEnum3() {
    }

}

export class AnotherChildEnum
    extends Enum<Ordinals2, Names2>
    implements EnumerableWithParent<Ordinals2, Names2, ParentEnum> {

    public static readonly A = new AnotherChildEnum(ParentEnum.A,)
    public static readonly B = new AnotherChildEnum(ParentEnum.B,)
    public static readonly C = new AnotherChildEnum()

    public static readonly 0: typeof AnotherChildEnum.A
    public static readonly 1: typeof AnotherChildEnum.B
    public static readonly 2: typeof AnotherChildEnum.C

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<AnotherChildEnum, typeof AnotherChildEnum, ParentEnum, typeof ParentEnum> = class CompanionEnum_AnotherChildEnum
        extends CompanionEnumWithParent<AnotherChildEnum, typeof AnotherChildEnum,
            ParentEnum, typeof ParentEnum> {

        static #instance?: CompanionEnum_AnotherChildEnum

        private constructor() {
            super(AnotherChildEnum, ParentEnum,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

    }

    readonly #parent

    protected constructor(parent: NullOr<ParentEnum> = null,) {
        super()
        this.#parent = parent
    }

    public get parent(): NullOr<ParentEnum> {
        return this.#parent
    }

    public methodFromAnotherChildEnum() {
    }

}

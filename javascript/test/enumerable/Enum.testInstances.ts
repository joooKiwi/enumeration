/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {CompanionEnumSingleton, CompanionEnumWithGrandParentSingleton, CompanionEnumWithGreatGrandParentSingleton, CompanionEnumWithParentSingleton} from "../../src/Singleton.types"
import type {PossibleEnumerableValueOrNameByValueOrCallback, PossibleEnumSymbol}                                                                          from "../../src/Enumerable.types"

import {Enum}                              from "../../src/Enum"
import {EnumConstants}                     from "../../src/EnumConstants"
import {EnumWithGrandParent}               from "../../src/EnumWithGrandParent"
import {EnumWithGreatGrandParent}          from "../../src/EnumWithGreatGrandParent"
import {EnumWithNullableGrandParent}       from "../../src/EnumWithNullableGrandParent"
import {EnumWithNullableGreatGrandParent}  from "../../src/EnumWithNullableGreatGrandParent"
import {EnumWithNullableParent}            from "../../src/EnumWithNullableParent"
import {EnumWithParent}                    from "../../src/EnumWithParent"
import {CompanionEnum}                     from "../../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}      from "../../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../../src/companion/CompanionEnumWithParent"

//#region -------------------- Enum instance variables / types / classes --------------------

/** The possible name for the instance {@link BasicEnum} */
type Name = | 'A' | 'B' | 'C'
/** The possible {@link Names} with 'D' not in {@link BasicEnum} */
type NameWithD = | Name | 'D'
/** The possible {@link Names} with additional values not in {@link BasicEnum} */
type NameWithAdditional = | NameWithD | `BY_${| "STRING" | "OBJECT_STRING"}${| '' | "_IN_A_CALLBACK"}`

export const nameValues = ['A', 'B', 'C',] as const satisfies readonly Name[]
/** The {@link EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL} reference */
const nameSymbol = EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL as PossibleEnumSymbol,
    /** The {@link EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL} encapsulated in a callback */
    nameSymbolCallback = () => EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL as PossibleEnumSymbol,
    /** A simple callback made to throw an error in any case that it is being called */
    failCallback = () => fail("Unexpected callback to be called",)

export class BasicEnum extends Enum<number, Name> {
    public static readonly A = new BasicEnum()
    public static readonly B = new BasicEnum()
    public static readonly C = new BasicEnum()
    public static readonly CompanionEnum: CompanionEnumSingleton<BasicEnum, typeof BasicEnum> = class CompanionEnum_BasicEnum extends CompanionEnum<BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnum
        private constructor() { super(BasicEnum,) }
        public static get get(): CompanionEnum_BasicEnum { return CompanionEnum_BasicEnum.#instance ??= new CompanionEnum_BasicEnum() }
    }
}
export class BasicEnumWithParent extends EnumWithParent<BasicEnum, number, Name> {
    public static readonly A = new BasicEnumWithParent()
    public static readonly B = new BasicEnumWithParent()
    public static readonly C = new BasicEnumWithParent()
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_BasicEnumWithParent extends CompanionEnumWithParent<BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithParent
        private constructor() { super(BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_BasicEnumWithParent { return CompanionEnum_BasicEnumWithParent.#instance ??= new CompanionEnum_BasicEnumWithParent() }
    }
}
export class BasicEnumWithGrandParent extends EnumWithGrandParent<BasicEnumWithParent, BasicEnum, number, Name> {
    public static readonly A = new BasicEnumWithGrandParent()
    public static readonly B = new BasicEnumWithGrandParent()
    public static readonly C = new BasicEnumWithGrandParent()
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_BasicEnumWithGrandParent extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_BasicEnumWithGrandParent
        private constructor() { super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_BasicEnumWithGrandParent { return CompanionEnum_BasicEnumWithGrandParent.#instance ??= new CompanionEnum_BasicEnumWithGrandParent() }
    }
}


//#endregion -------------------- Enum instance variables / types / classes --------------------

//#region -------------------- EnumWithParent test instances --------------------

export class Parent_TestInstance_Direct extends EnumWithParent<BasicEnum, number, NameWithAdditional> {
    public static readonly A = new Parent_TestInstance_Direct()
    public static readonly B = new Parent_TestInstance_Direct()
    public static readonly C = new Parent_TestInstance_Direct()
    public static readonly D = new Parent_TestInstance_Direct()
    public static readonly BY_STRING = new Parent_TestInstance_Direct('D',)
    public static readonly BY_OBJECT_STRING = new Parent_TestInstance_Direct(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new Parent_TestInstance_Direct(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new Parent_TestInstance_Direct(() => new String('D',),)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(...args,) }
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<Parent_TestInstance_Direct, typeof Parent_TestInstance_Direct, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_ParentTestInstanceDirect1 extends CompanionEnumWithParent<Parent_TestInstance_Direct, typeof Parent_TestInstance_Direct, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_ParentTestInstanceDirect1
        private constructor() { super(Parent_TestInstance_Direct, BasicEnum,) }
        public static get get(): CompanionEnum_ParentTestInstanceDirect1 { return CompanionEnum_ParentTestInstanceDirect1.#instance ??= new CompanionEnum_ParentTestInstanceDirect1() }
    }
}
export class Parent_TestInstance_BySymbol extends EnumWithParent<BasicEnum, number, NameWithD> {
    public static readonly A = new Parent_TestInstance_BySymbol()
    public static readonly B = new Parent_TestInstance_BySymbol()
    public static readonly C = new Parent_TestInstance_BySymbol()
    public static readonly D = new Parent_TestInstance_BySymbol()
    private constructor() { super(EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL,) }
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<Parent_TestInstance_BySymbol, typeof Parent_TestInstance_BySymbol, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_ParentTestInstanceBySymbol1 extends CompanionEnumWithParent<Parent_TestInstance_BySymbol, typeof Parent_TestInstance_BySymbol, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_ParentTestInstanceBySymbol1
        private constructor() { super(Parent_TestInstance_BySymbol, BasicEnum,) }
        public static get get(): CompanionEnum_ParentTestInstanceBySymbol1 { return CompanionEnum_ParentTestInstanceBySymbol1.#instance ??= new CompanionEnum_ParentTestInstanceBySymbol1() }
    }
}
export class Parent_TestInstance_ByCallbackSymbol extends EnumWithParent<BasicEnum, number, NameWithD> {
    public static readonly A = new Parent_TestInstance_ByCallbackSymbol()
    public static readonly B = new Parent_TestInstance_ByCallbackSymbol()
    public static readonly C = new Parent_TestInstance_ByCallbackSymbol()
    public static readonly D = new Parent_TestInstance_ByCallbackSymbol()
    private constructor() { super(() => EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL as PossibleEnumSymbol,) }
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<Parent_TestInstance_ByCallbackSymbol, typeof Parent_TestInstance_ByCallbackSymbol, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_ParentTestInstanceByCallbackSymbol1 extends CompanionEnumWithParent<Parent_TestInstance_ByCallbackSymbol, typeof Parent_TestInstance_ByCallbackSymbol, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_ParentTestInstanceByCallbackSymbol1
        private constructor() { super(Parent_TestInstance_ByCallbackSymbol, BasicEnum,) }
        public static get get(): CompanionEnum_ParentTestInstanceByCallbackSymbol1 { return CompanionEnum_ParentTestInstanceByCallbackSymbol1.#instance ??= new CompanionEnum_ParentTestInstanceByCallbackSymbol1() }
    }
}

//#endregion -------------------- EnumWithParent test instances --------------------
//#region -------------------- EnumWithNullableParent test instances --------------------

export class NullableParent_TestInstance_Direct extends EnumWithNullableParent<BasicEnum, number, NameWithAdditional> {
    public static readonly A = new NullableParent_TestInstance_Direct()
    public static readonly B = new NullableParent_TestInstance_Direct()
    public static readonly C = new NullableParent_TestInstance_Direct()
    public static readonly D = new NullableParent_TestInstance_Direct()
    public static readonly BY_STRING = new NullableParent_TestInstance_Direct('D',)
    public static readonly BY_OBJECT_STRING = new NullableParent_TestInstance_Direct(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new NullableParent_TestInstance_Direct(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new NullableParent_TestInstance_Direct(() => new String('D',),)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(...args,) }
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<NullableParent_TestInstance_Direct, typeof NullableParent_TestInstance_Direct, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableParentTestInstance extends CompanionEnumWithParent<NullableParent_TestInstance_Direct, typeof NullableParent_TestInstance_Direct, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableParentTestInstance
        private constructor() { super(NullableParent_TestInstance_Direct, BasicEnum,) }
        public static get get(): CompanionEnum_NullableParentTestInstance { return CompanionEnum_NullableParentTestInstance.#instance ??= new CompanionEnum_NullableParentTestInstance() }
    }
}
export class NullableParent_TestInstance_BySymbol extends EnumWithNullableParent<BasicEnum, number, NameWithD> {
    public static readonly A = new NullableParent_TestInstance_BySymbol()
    public static readonly B = new NullableParent_TestInstance_BySymbol()
    public static readonly C = new NullableParent_TestInstance_BySymbol()
    public static readonly D = new NullableParent_TestInstance_BySymbol()
    private constructor() { super(EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL,) }
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<NullableParent_TestInstance_BySymbol, typeof NullableParent_TestInstance_BySymbol, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableParentTestInstanceBySymbol extends CompanionEnumWithParent<NullableParent_TestInstance_BySymbol, typeof NullableParent_TestInstance_BySymbol, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableParentTestInstanceBySymbol
        private constructor() { super(NullableParent_TestInstance_BySymbol, BasicEnum,) }
        public static get get(): CompanionEnum_NullableParentTestInstanceBySymbol { return CompanionEnum_NullableParentTestInstanceBySymbol.#instance ??= new CompanionEnum_NullableParentTestInstanceBySymbol() }
    }
}
export class NullableParent_TestInstance_ByCallbackSymbol extends EnumWithNullableParent<BasicEnum, number, NameWithD> {
    public static readonly A = new NullableParent_TestInstance_ByCallbackSymbol()
    public static readonly B = new NullableParent_TestInstance_ByCallbackSymbol()
    public static readonly C = new NullableParent_TestInstance_ByCallbackSymbol()
    public static readonly D = new NullableParent_TestInstance_ByCallbackSymbol()
    private constructor() { super(() => EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL as PossibleEnumSymbol,) }
    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<NullableParent_TestInstance_ByCallbackSymbol, typeof NullableParent_TestInstance_ByCallbackSymbol, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableParentTestInstanceBySymbol extends CompanionEnumWithParent<NullableParent_TestInstance_ByCallbackSymbol, typeof NullableParent_TestInstance_ByCallbackSymbol, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableParentTestInstanceBySymbol
        private constructor() { super(NullableParent_TestInstance_ByCallbackSymbol, BasicEnum,) }
        public static get get(): CompanionEnum_NullableParentTestInstanceBySymbol { return CompanionEnum_NullableParentTestInstanceBySymbol.#instance ??= new CompanionEnum_NullableParentTestInstanceBySymbol() }
    }
}

//#endregion -------------------- EnumWithNullableParent test instances --------------------
//#region -------------------- EnumWithGrandParent test instances --------------------

export class GrandParent_TestInstance_Direct1 extends EnumWithGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new GrandParent_TestInstance_Direct1()
    public static readonly B = new GrandParent_TestInstance_Direct1()
    public static readonly C = new GrandParent_TestInstance_Direct1()
    public static readonly D = new GrandParent_TestInstance_Direct1()
    public static readonly BY_STRING = new GrandParent_TestInstance_Direct1('D',)
    public static readonly BY_OBJECT_STRING = new GrandParent_TestInstance_Direct1(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new GrandParent_TestInstance_Direct1(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new GrandParent_TestInstance_Direct1(() => new String('D',),)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>?,]) { super(...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<GrandParent_TestInstance_Direct1, typeof GrandParent_TestInstance_Direct1, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GrandParentTestInstanceDirect1 extends CompanionEnumWithGrandParent<GrandParent_TestInstance_Direct1, typeof GrandParent_TestInstance_Direct1,  BasicEnumWithParent, typeof BasicEnumWithParent,BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GrandParentTestInstanceDirect1
        private constructor() { super(GrandParent_TestInstance_Direct1, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GrandParentTestInstanceDirect1 { return CompanionEnum_GrandParentTestInstanceDirect1.#instance ??= new CompanionEnum_GrandParentTestInstanceDirect1() }
    }
}
export class GrandParent_TestInstance_Direct2 extends EnumWithGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new GrandParent_TestInstance_Direct2()
    public static readonly B = new GrandParent_TestInstance_Direct2()
    public static readonly C = new GrandParent_TestInstance_Direct2()
    public static readonly D = new GrandParent_TestInstance_Direct2()
    public static readonly BY_STRING = new GrandParent_TestInstance_Direct2('D',)
    public static readonly BY_OBJECT_STRING = new GrandParent_TestInstance_Direct2(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new GrandParent_TestInstance_Direct2(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new GrandParent_TestInstance_Direct2(() => new String('D',),)
    public constructor(grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(failCallback, ...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<GrandParent_TestInstance_Direct2, typeof GrandParent_TestInstance_Direct2, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GrandParentTestInstanceDirect2 extends CompanionEnumWithGrandParent<GrandParent_TestInstance_Direct2, typeof GrandParent_TestInstance_Direct2, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GrandParentTestInstanceDirect2
        private constructor() { super(GrandParent_TestInstance_Direct2, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GrandParentTestInstanceDirect2 { return CompanionEnum_GrandParentTestInstanceDirect2.#instance ??= new CompanionEnum_GrandParentTestInstanceDirect2() }
    }
}
export class GrandParent_TestInstance_BySymbol extends EnumWithGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new GrandParent_TestInstance_BySymbol()
    public static readonly B = new GrandParent_TestInstance_BySymbol()
    public static readonly C = new GrandParent_TestInstance_BySymbol()
    public static readonly D = new GrandParent_TestInstance_BySymbol()
    private constructor() { super(nameSymbol, nameSymbol,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<GrandParent_TestInstance_BySymbol, typeof GrandParent_TestInstance_BySymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GrandParentTestInstanceBySymbol extends CompanionEnumWithGrandParent<GrandParent_TestInstance_BySymbol, typeof GrandParent_TestInstance_BySymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GrandParentTestInstanceBySymbol
        private constructor() { super(GrandParent_TestInstance_BySymbol, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GrandParentTestInstanceBySymbol { return CompanionEnum_GrandParentTestInstanceBySymbol.#instance ??= new CompanionEnum_GrandParentTestInstanceBySymbol() }
    }
}
export class GrandParent_TestInstance_ByCallbackSymbol extends EnumWithGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new GrandParent_TestInstance_ByCallbackSymbol()
    public static readonly B = new GrandParent_TestInstance_ByCallbackSymbol()
    public static readonly C = new GrandParent_TestInstance_ByCallbackSymbol()
    public static readonly D = new GrandParent_TestInstance_ByCallbackSymbol()
    private constructor() { super(nameSymbolCallback, nameSymbolCallback,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<GrandParent_TestInstance_ByCallbackSymbol, typeof GrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GrandParentTestInstanceByCallbackSymbol extends CompanionEnumWithGrandParent<GrandParent_TestInstance_ByCallbackSymbol, typeof GrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>{
        static #instance?: CompanionEnum_GrandParentTestInstanceByCallbackSymbol
        private constructor() { super(GrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GrandParentTestInstanceByCallbackSymbol { return CompanionEnum_GrandParentTestInstanceByCallbackSymbol.#instance ??= new CompanionEnum_GrandParentTestInstanceByCallbackSymbol() }
    }
}

//#endregion -------------------- EnumWithGrandParent test instances --------------------
//#region -------------------- EnumWithNullableGrandParent test instances --------------------

export class NullableGrandParent_TestInstance_Direct1 extends EnumWithNullableGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new NullableGrandParent_TestInstance_Direct1()
    public static readonly B = new NullableGrandParent_TestInstance_Direct1()
    public static readonly C = new NullableGrandParent_TestInstance_Direct1()
    public static readonly D = new NullableGrandParent_TestInstance_Direct1()
    public static readonly BY_STRING = new NullableGrandParent_TestInstance_Direct1('D',)
    public static readonly BY_OBJECT_STRING = new NullableGrandParent_TestInstance_Direct1(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new NullableGrandParent_TestInstance_Direct1(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new NullableGrandParent_TestInstance_Direct1(() => new String('D',),)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>?, PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<NullableGrandParent_TestInstance_Direct1, typeof NullableGrandParent_TestInstance_Direct1, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGrandParentTestInstanceDirect1 extends CompanionEnumWithGrandParent<NullableGrandParent_TestInstance_Direct1, typeof NullableGrandParent_TestInstance_Direct1, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableGrandParentTestInstanceDirect1
        private constructor() { super(NullableGrandParent_TestInstance_Direct1, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGrandParentTestInstanceDirect1 { return CompanionEnum_NullableGrandParentTestInstanceDirect1.#instance ??= new CompanionEnum_NullableGrandParentTestInstanceDirect1() }
    }
}
export class NullableGrandParent_TestInstance_Direct2 extends EnumWithNullableGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new NullableGrandParent_TestInstance_Direct2()
    public static readonly B = new NullableGrandParent_TestInstance_Direct2()
    public static readonly C = new NullableGrandParent_TestInstance_Direct2()
    public static readonly D = new NullableGrandParent_TestInstance_Direct2()
    public static readonly BY_STRING = new NullableGrandParent_TestInstance_Direct2('D',)
    public static readonly BY_OBJECT_STRING = new NullableGrandParent_TestInstance_Direct2(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new NullableGrandParent_TestInstance_Direct2(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new NullableGrandParent_TestInstance_Direct2(() => new String('D',),)
    public constructor(grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(failCallback, ...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<NullableGrandParent_TestInstance_Direct2, typeof NullableGrandParent_TestInstance_Direct2, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGrandParentTestInstanceDirect2 extends CompanionEnumWithGrandParent<NullableGrandParent_TestInstance_Direct2, typeof NullableGrandParent_TestInstance_Direct2, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableGrandParentTestInstanceDirect2
        private constructor() { super(NullableGrandParent_TestInstance_Direct2, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGrandParentTestInstanceDirect2 { return CompanionEnum_NullableGrandParentTestInstanceDirect2.#instance ??= new CompanionEnum_NullableGrandParentTestInstanceDirect2() }
    }
}
export class NullableGrandParent_TestInstance_BySymbol extends EnumWithNullableGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new NullableGrandParent_TestInstance_BySymbol()
    public static readonly B = new NullableGrandParent_TestInstance_BySymbol()
    public static readonly C = new NullableGrandParent_TestInstance_BySymbol()
    public static readonly D = new NullableGrandParent_TestInstance_BySymbol()
    private constructor() { super(nameSymbol, nameSymbol,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<NullableGrandParent_TestInstance_BySymbol, typeof NullableGrandParent_TestInstance_BySymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGrandParentTestInstanceBySymbol extends CompanionEnumWithGrandParent<NullableGrandParent_TestInstance_BySymbol, typeof NullableGrandParent_TestInstance_BySymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>{
        static #instance?: CompanionEnum_NullableGrandParentTestInstanceBySymbol
        private constructor() { super(NullableGrandParent_TestInstance_BySymbol, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGrandParentTestInstanceBySymbol { return CompanionEnum_NullableGrandParentTestInstanceBySymbol.#instance ??= new CompanionEnum_NullableGrandParentTestInstanceBySymbol() }
    }
}
export class NullableGrandParent_TestInstance_ByCallbackSymbol extends EnumWithNullableGrandParent<BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new NullableGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly B = new NullableGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly C = new NullableGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly D = new NullableGrandParent_TestInstance_ByCallbackSymbol()
    private constructor() { super(nameSymbolCallback, nameSymbolCallback,) }
    public static readonly CompanionEnum: CompanionEnumWithGrandParentSingleton<NullableGrandParent_TestInstance_ByCallbackSymbol, typeof NullableGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGrandParentTestInstanceBySymbol extends CompanionEnumWithGrandParent<NullableGrandParent_TestInstance_ByCallbackSymbol, typeof NullableGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>{
        static #instance?: CompanionEnum_NullableGrandParentTestInstanceBySymbol
        private constructor() { super(NullableGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGrandParentTestInstanceBySymbol { return CompanionEnum_NullableGrandParentTestInstanceBySymbol.#instance ??= new CompanionEnum_NullableGrandParentTestInstanceBySymbol() }
    }
}

//#endregion -------------------- EnumWithNullableGrandParent test instances --------------------
//#region -------------------- EnumWithGreatGrandParent test instances --------------------

export class GreatGrandParent_TestInstance_Direct1 extends EnumWithGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new GreatGrandParent_TestInstance_Direct1()
    public static readonly B = new GreatGrandParent_TestInstance_Direct1()
    public static readonly C = new GreatGrandParent_TestInstance_Direct1()
    public static readonly D = new GreatGrandParent_TestInstance_Direct1()
    public static readonly BY_STRING = new GreatGrandParent_TestInstance_Direct1('D',)
    public static readonly BY_OBJECT_STRING = new GreatGrandParent_TestInstance_Direct1(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new GreatGrandParent_TestInstance_Direct1(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new GreatGrandParent_TestInstance_Direct1(() => new String('D',),)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>?,]) { super(...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<GreatGrandParent_TestInstance_Direct1, typeof GreatGrandParent_TestInstance_Direct1, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GreatGrandParentTestInstanceDirect1 extends CompanionEnumWithGreatGrandParent<GreatGrandParent_TestInstance_Direct1, typeof GreatGrandParent_TestInstance_Direct1, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent,BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GreatGrandParentTestInstanceDirect1
        private constructor() { super(GreatGrandParent_TestInstance_Direct1, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GreatGrandParentTestInstanceDirect1 { return CompanionEnum_GreatGrandParentTestInstanceDirect1.#instance ??= new CompanionEnum_GreatGrandParentTestInstanceDirect1() }
    }
}
export class GreatGrandParent_TestInstance_Direct2 extends EnumWithGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new GreatGrandParent_TestInstance_Direct2()
    public static readonly B = new GreatGrandParent_TestInstance_Direct2()
    public static readonly C = new GreatGrandParent_TestInstance_Direct2()
    public static readonly D = new GreatGrandParent_TestInstance_Direct2()
    public static readonly BY_STRING = new GreatGrandParent_TestInstance_Direct2('D',)
    public static readonly BY_OBJECT_STRING = new GreatGrandParent_TestInstance_Direct2(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new GreatGrandParent_TestInstance_Direct2(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new GreatGrandParent_TestInstance_Direct2(() => new String('D',),)
    public constructor(grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>?,]) { super(failCallback, ...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<GreatGrandParent_TestInstance_Direct2, typeof GreatGrandParent_TestInstance_Direct2, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GreatGrandParentTestInstanceDirect2 extends CompanionEnumWithGreatGrandParent<GreatGrandParent_TestInstance_Direct2, typeof GreatGrandParent_TestInstance_Direct2, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GreatGrandParentTestInstanceDirect2
        private constructor() { super(GreatGrandParent_TestInstance_Direct2, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GreatGrandParentTestInstanceDirect2 { return CompanionEnum_GreatGrandParentTestInstanceDirect2.#instance ??= new CompanionEnum_GreatGrandParentTestInstanceDirect2() }
    }
}
export class GreatGrandParent_TestInstance_Direct3 extends EnumWithGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new GreatGrandParent_TestInstance_Direct3()
    public static readonly B = new GreatGrandParent_TestInstance_Direct3()
    public static readonly C = new GreatGrandParent_TestInstance_Direct3()
    public static readonly D = new GreatGrandParent_TestInstance_Direct3()
    public static readonly BY_STRING = new GreatGrandParent_TestInstance_Direct3('D',)
    public static readonly BY_OBJECT_STRING = new GreatGrandParent_TestInstance_Direct3(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new GreatGrandParent_TestInstance_Direct3(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new GreatGrandParent_TestInstance_Direct3(() => new String('D',),)
    public constructor(greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(failCallback, failCallback, ...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<GreatGrandParent_TestInstance_Direct3, typeof GreatGrandParent_TestInstance_Direct3, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GreatGrandParentTestInstanceDirect3 extends CompanionEnumWithGreatGrandParent<GreatGrandParent_TestInstance_Direct3, typeof GreatGrandParent_TestInstance_Direct3, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GreatGrandParentTestInstanceDirect3
        private constructor() { super(GreatGrandParent_TestInstance_Direct3, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GreatGrandParentTestInstanceDirect3 { return CompanionEnum_GreatGrandParentTestInstanceDirect3.#instance ??= new CompanionEnum_GreatGrandParentTestInstanceDirect3() }
    }
}
export class GreatGrandParent_TestInstance_BySymbol extends EnumWithGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new GreatGrandParent_TestInstance_BySymbol()
    public static readonly B = new GreatGrandParent_TestInstance_BySymbol()
    public static readonly C = new GreatGrandParent_TestInstance_BySymbol()
    public static readonly D = new GreatGrandParent_TestInstance_BySymbol()
    private constructor() { super(nameSymbol, nameSymbol,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<GreatGrandParent_TestInstance_BySymbol, typeof GreatGrandParent_TestInstance_BySymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GrandParentTestInstanceBySymbol extends CompanionEnumWithGreatGrandParent<GreatGrandParent_TestInstance_BySymbol, typeof GreatGrandParent_TestInstance_BySymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_GrandParentTestInstanceBySymbol
        private constructor() { super(GreatGrandParent_TestInstance_BySymbol, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GrandParentTestInstanceBySymbol { return CompanionEnum_GrandParentTestInstanceBySymbol.#instance ??= new CompanionEnum_GrandParentTestInstanceBySymbol() }
    }
}
export class GreatGrandParent_TestInstance_ByCallbackSymbol extends EnumWithGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new GreatGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly B = new GreatGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly C = new GreatGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly D = new GreatGrandParent_TestInstance_ByCallbackSymbol()
    private constructor() { super(nameSymbolCallback, nameSymbolCallback, nameSymbolCallback,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<GreatGrandParent_TestInstance_ByCallbackSymbol, typeof GreatGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_GrandParentTestInstanceByCallbackSymbol extends CompanionEnumWithGreatGrandParent<GreatGrandParent_TestInstance_ByCallbackSymbol, typeof GreatGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>{
        static #instance?: CompanionEnum_GrandParentTestInstanceByCallbackSymbol
        private constructor() { super(GreatGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_GrandParentTestInstanceByCallbackSymbol { return CompanionEnum_GrandParentTestInstanceByCallbackSymbol.#instance ??= new CompanionEnum_GrandParentTestInstanceByCallbackSymbol() }
    }
}

//#endregion -------------------- EnumWithGreatGrandParent test instances --------------------
//#region -------------------- EnumWithNullableGreatGrandParent test instances --------------------

export class NullableGreatGrandParent_TestInstance_Direct1 extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new NullableGreatGrandParent_TestInstance_Direct1()
    public static readonly B = new NullableGreatGrandParent_TestInstance_Direct1()
    public static readonly C = new NullableGreatGrandParent_TestInstance_Direct1()
    public static readonly D = new NullableGreatGrandParent_TestInstance_Direct1()
    public static readonly BY_STRING = new NullableGreatGrandParent_TestInstance_Direct1('D',)
    public static readonly BY_OBJECT_STRING = new NullableGreatGrandParent_TestInstance_Direct1(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new NullableGreatGrandParent_TestInstance_Direct1(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new NullableGreatGrandParent_TestInstance_Direct1(() => new String('D',),)
    public constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>, greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>?, PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>?, PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<NullableGreatGrandParent_TestInstance_Direct1, typeof NullableGreatGrandParent_TestInstance_Direct1, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGreatGrandParentTestInstanceDirect1 extends CompanionEnumWithGreatGrandParent<NullableGreatGrandParent_TestInstance_Direct1, typeof NullableGreatGrandParent_TestInstance_Direct1, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableGreatGrandParentTestInstanceDirect1
        private constructor() { super(NullableGreatGrandParent_TestInstance_Direct1, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGreatGrandParentTestInstanceDirect1 { return CompanionEnum_NullableGreatGrandParentTestInstanceDirect1.#instance ??= new CompanionEnum_NullableGreatGrandParentTestInstanceDirect1() }
    }
}
export class NullableGreatGrandParent_TestInstance_Direct2 extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new NullableGreatGrandParent_TestInstance_Direct2()
    public static readonly B = new NullableGreatGrandParent_TestInstance_Direct2()
    public static readonly C = new NullableGreatGrandParent_TestInstance_Direct2()
    public static readonly D = new NullableGreatGrandParent_TestInstance_Direct2()
    public static readonly BY_STRING = new NullableGreatGrandParent_TestInstance_Direct2('D',)
    public static readonly BY_OBJECT_STRING = new NullableGreatGrandParent_TestInstance_Direct2(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new NullableGreatGrandParent_TestInstance_Direct2(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new NullableGreatGrandParent_TestInstance_Direct2(() => new String('D',),)
    public constructor(grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>, greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>?, PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(failCallback, ...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<NullableGreatGrandParent_TestInstance_Direct2, typeof NullableGreatGrandParent_TestInstance_Direct2, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGreatGrandParentTestInstanceDirect2 extends CompanionEnumWithGreatGrandParent<NullableGreatGrandParent_TestInstance_Direct2, typeof NullableGreatGrandParent_TestInstance_Direct2, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableGreatGrandParentTestInstanceDirect2
        private constructor() { super(NullableGreatGrandParent_TestInstance_Direct2, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGreatGrandParentTestInstanceDirect2 { return CompanionEnum_NullableGreatGrandParentTestInstanceDirect2.#instance ??= new CompanionEnum_NullableGreatGrandParentTestInstanceDirect2() }
    }
}
export class NullableGreatGrandParent_TestInstance_Direct3 extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithAdditional> {
    public static readonly A = new NullableGreatGrandParent_TestInstance_Direct3()
    public static readonly B = new NullableGreatGrandParent_TestInstance_Direct3()
    public static readonly C = new NullableGreatGrandParent_TestInstance_Direct3()
    public static readonly D = new NullableGreatGrandParent_TestInstance_Direct3()
    public static readonly BY_STRING = new NullableGreatGrandParent_TestInstance_Direct3('D',)
    public static readonly BY_OBJECT_STRING = new NullableGreatGrandParent_TestInstance_Direct3(new String('D',),)
    public static readonly BY_STRING_IN_A_CALLBACK = new NullableGreatGrandParent_TestInstance_Direct3(() => 'D',)
    public static readonly BY_OBJECT_STRING_IN_A_CALLBACK = new NullableGreatGrandParent_TestInstance_Direct3(() => new String('D',),)
    public constructor(greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>,)
    public constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<BasicEnum>?,]) { super(failCallback, failCallback, ...args,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<NullableGreatGrandParent_TestInstance_Direct3, typeof NullableGreatGrandParent_TestInstance_Direct3, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGreatGrandParentTestInstanceDirect3 extends CompanionEnumWithGreatGrandParent<NullableGreatGrandParent_TestInstance_Direct3, typeof NullableGreatGrandParent_TestInstance_Direct3, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {
        static #instance?: CompanionEnum_NullableGreatGrandParentTestInstanceDirect3
        private constructor() { super(NullableGreatGrandParent_TestInstance_Direct3, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGreatGrandParentTestInstanceDirect3 { return CompanionEnum_NullableGreatGrandParentTestInstanceDirect3.#instance ??= new CompanionEnum_NullableGreatGrandParentTestInstanceDirect3() }
    }
}
export class NullableGreatGrandParent_TestInstance_BySymbol extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new NullableGreatGrandParent_TestInstance_BySymbol()
    public static readonly B = new NullableGreatGrandParent_TestInstance_BySymbol()
    public static readonly C = new NullableGreatGrandParent_TestInstance_BySymbol()
    public static readonly D = new NullableGreatGrandParent_TestInstance_BySymbol()
    private constructor() { super(nameSymbol, nameSymbol, nameSymbol,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<NullableGreatGrandParent_TestInstance_BySymbol, typeof NullableGreatGrandParent_TestInstance_BySymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol extends CompanionEnumWithGreatGrandParent<NullableGreatGrandParent_TestInstance_BySymbol, typeof NullableGreatGrandParent_TestInstance_BySymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>{
        static #instance?: CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol
        private constructor() { super(NullableGreatGrandParent_TestInstance_BySymbol, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol { return CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol.#instance ??= new CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol() }
    }
}
export class NullableGreatGrandParent_TestInstance_ByCallbackSymbol extends EnumWithNullableGreatGrandParent<BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, number, NameWithD> {
    public static readonly A = new NullableGreatGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly B = new NullableGreatGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly C = new NullableGreatGrandParent_TestInstance_ByCallbackSymbol()
    public static readonly D = new NullableGreatGrandParent_TestInstance_ByCallbackSymbol()
    private constructor() { super(nameSymbolCallback, nameSymbolCallback, nameSymbolCallback,) }
    public static readonly CompanionEnum: CompanionEnumWithGreatGrandParentSingleton<NullableGreatGrandParent_TestInstance_ByCallbackSymbol, typeof NullableGreatGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>
        = class CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol extends CompanionEnumWithGreatGrandParent<NullableGreatGrandParent_TestInstance_ByCallbackSymbol, typeof NullableGreatGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum>{
        static #instance?: CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol
        private constructor() { super(NullableGreatGrandParent_TestInstance_ByCallbackSymbol, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,) }
        public static get get(): CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol { return CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol.#instance ??= new CompanionEnum_NullableGreatGrandParentTestInstanceBySymbol() }
    }
}

//#endregion -------------------- EnumWithNullableGreatGrandParent test instances --------------------

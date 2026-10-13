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

import type {PossibleEnumerableValueOrNameByValueOrCallback}                                                                                              from "../../src/type/possibleInstance"
import type {CompanionEnumSingleton, CompanionEnumWithGrandParentSingleton, CompanionEnumWithGreatGrandParentSingleton, CompanionEnumWithParentSingleton} from "../../src/type/singleton"
import type {PossibleEnumSymbol}                                                                                                                          from "../../src/type/symbol"

import {Enum}                              from "../../src/Enum"
import {EnumConstants}                     from "../../src/EnumConstants"
import {EnumWithGrandParent}               from "../../src/EnumWithGrandParent"
import {EnumWithNullableGreatGrandParent}  from "../../src/EnumWithNullableGreatGrandParent"
import {EnumWithParent}                    from "../../src/EnumWithParent"
import {CompanionEnum}                     from "../../src/companion/CompanionEnum"
import {CompanionEnumWithGrandParent}      from "../../src/companion/CompanionEnumWithGrandParent"
import {CompanionEnumWithGreatGrandParent} from "../../src/companion/CompanionEnumWithGreatGrandParent"
import {CompanionEnumWithParent}           from "../../src/companion/CompanionEnumWithParent"
import {failCallback}                      from "../value/callbacks"

//#region -------------------- Enum instance variables / types / classes --------------------

/** The possible name for the instance {@link BasicEnum} */
type Name = | 'A' | 'B' | 'C'
/** The possible {@link Names} with 'D' not in {@link BasicEnum} */
type NameWithD = | Name | 'D'
/** The possible {@link Names} with additional values not in {@link BasicEnum} */
type NameWithAdditional = | NameWithD | `BY_${| "STRING" | "OBJECT_STRING"}${| '' | "_IN_A_CALLBACK"}`

/** The {@link EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL} reference */
const nameSymbol = EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL as PossibleEnumSymbol
/** The {@link EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL} encapsulated in a callback */
const nameSymbolCallback = () => EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL as PossibleEnumSymbol


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

/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {PossibleEnumerableValueOrNameByValueOrCallback, PossibleEnumSymbol} from "../../src/Enumerable.types"

import {EnumConstants}                         from "../../src/EnumConstants"
import {ImpossibleIntegrityReferenceException} from "../../src/exception/ImpossibleIntegrityReferenceException"
import {NullReferenceException}                from "../../src/exception/NullReferenceException"

import {nullValues}                                                                                                                                                                                                                                          from "./Enum.constants"
import {nameValues}                                                                                                                                                                                                                                          from "./Enum.testInstances"
import {BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent}                                                                                                                                                                                            from "./Enum.testInstances"
import {GrandParent_TestInstance_ByCallbackSymbol, GrandParent_TestInstance_BySymbol, GrandParent_TestInstance_Direct1, GrandParent_TestInstance_Direct2}                                                                                                    from "./Enum.testInstances"
import {GreatGrandParent_TestInstance_ByCallbackSymbol, GreatGrandParent_TestInstance_BySymbol, GreatGrandParent_TestInstance_Direct1, GreatGrandParent_TestInstance_Direct2, GreatGrandParent_TestInstance_Direct3}                                         from "./Enum.testInstances"
import {NullableGrandParent_TestInstance_ByCallbackSymbol, NullableGrandParent_TestInstance_BySymbol, NullableGrandParent_TestInstance_Direct1, NullableGrandParent_TestInstance_Direct2}                                                                    from "./Enum.testInstances"
import {NullableGreatGrandParent_TestInstance_ByCallbackSymbol, NullableGreatGrandParent_TestInstance_BySymbol, NullableGreatGrandParent_TestInstance_Direct1, NullableGreatGrandParent_TestInstance_Direct2, NullableGreatGrandParent_TestInstance_Direct3} from "./Enum.testInstances"
import {NullableParent_TestInstance_ByCallbackSymbol, NullableParent_TestInstance_BySymbol, NullableParent_TestInstance_Direct}                                                                                                                              from "./Enum.testInstances"
import {Parent_TestInstance_ByCallbackSymbol, Parent_TestInstance_BySymbol, Parent_TestInstance_Direct}                                                                                                                                                      from "./Enum.testInstances"

describe("EnumInheritorTest", () => {
    //README: The tests are not made to be code efficient,
    // they are made to be debuggable and descriptive.

    /** A simple reference to the {@link EnumConstants.NULL_ENUM_REFERENCE_SYMBOL} */
    const nullReferenceSymbol = EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,
        /** A simple instance name that is valid */
        validInstanceName = 'A'

    describe("parent tests", () => {
        describe("EnumWithParent", () => {
            const ReferencedEnum = BasicEnum,
                DirectInstance = Parent_TestInstance_Direct,
                SymbolInstance = Parent_TestInstance_BySymbol,
                SymbolCallbackInstance = Parent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(() => new DirectInstance(it,).parent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).parent,).toThrow(NullReferenceException,),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(() => new DirectInstance(it,).parent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).parent,).toThrow(NullReferenceException,),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].parent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).parent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).parent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).parent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].parent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].parent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.parent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.parent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithGrandParent", () => {
            const ReferencedEnum = BasicEnumWithParent,
                DirectInstance = GrandParent_TestInstance_Direct1,
                SymbolInstance = GrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = GrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(() => new DirectInstance(it,).parent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).parent,).toThrow(NullReferenceException,),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(() => new DirectInstance(it,).parent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).parent,).toThrow(NullReferenceException,),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].parent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).parent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).parent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).parent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].parent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].parent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.parent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.parent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithGreatGrandParent", () => {
            const ReferencedEnum = BasicEnumWithGrandParent,
                DirectInstance = GreatGrandParent_TestInstance_Direct1,
                SymbolInstance = GreatGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = GreatGrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(() => new DirectInstance(it,).parent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).parent,).toThrow(NullReferenceException,),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(() => new DirectInstance(it,).parent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).parent,).toThrow(NullReferenceException,),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].parent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).parent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).parent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).parent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].parent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].parent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.parent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.parent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)

        describe("EnumWithNullableParent", () => {
            const ReferencedEnum = BasicEnum,
                DirectInstance = NullableParent_TestInstance_Direct,
                SymbolInstance = NullableParent_TestInstance_BySymbol,
                SymbolCallbackInstance = NullableParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(new DirectInstance(it,).parent,).toBeNull(),)
                test("callback", () => expect(new DirectInstance(() => it,).parent,).toBeNull(),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(new DirectInstance(it,).parent,).toBeNull(),)
                test("callback", () => expect(new DirectInstance(() => it,).parent,).toBeNull(),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].parent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).parent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).parent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).parent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].parent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].parent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.parent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.parent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithNullableGrandParent", () => {
            const ReferencedEnum = BasicEnumWithParent,
                DirectInstance = NullableGrandParent_TestInstance_Direct1,
                SymbolInstance = NullableGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = NullableGrandParent_TestInstance_ByCallbackSymbol,
                newInstanceWithNull = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, null,),
                newValidInstance = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, validInstanceName,)

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                },)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                },)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].parent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(newValidInstance(value,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => value,).parent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(newValidInstance(name,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => name,).parent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(newValidInstance(new String(name,),).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => new String(name,),).parent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].parent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].parent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.parent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.parent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithNullableGreatGrandParent", () => {
            const ReferencedEnum = BasicEnumWithGrandParent,
                DirectInstance = NullableGreatGrandParent_TestInstance_Direct1,
                SymbolInstance = NullableGreatGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = NullableGreatGrandParent_TestInstance_ByCallbackSymbol,
                newInstanceWithNull = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>,) => new DirectInstance(value, null, null,),
                newValidInstance = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>,) => new DirectInstance(value, validInstanceName, validInstanceName,)

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                },)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityReferenceException,),)
                },)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].parent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(newValidInstance(value,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => value,).parent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(newValidInstance(name,).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => name,).parent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(newValidInstance(new String(name,),).parent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => new String(name,),).parent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].parent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].parent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.parent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.parent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.parent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.parent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
    },)
    describe("grandparent tests", () => {
        describe("EnumWithGrandParent", () => {
            const ReferencedEnum = BasicEnum,
                DirectInstance = GrandParent_TestInstance_Direct2,
                SymbolInstance = GrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = GrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(() => new DirectInstance(it,).grandParent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).grandParent,).toThrow(NullReferenceException,),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(() => new DirectInstance(it,).grandParent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).grandParent,).toThrow(NullReferenceException,),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].grandParent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).grandParent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].grandParent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.grandParent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.grandParent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithGreatGrandParent", () => {
            const ReferencedEnum = BasicEnumWithParent,
                DirectInstance = GreatGrandParent_TestInstance_Direct2,
                SymbolInstance = GreatGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = GreatGrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(() => new DirectInstance(it,).grandParent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).grandParent,).toThrow(NullReferenceException,),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(() => new DirectInstance(it,).grandParent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).grandParent,).toThrow(NullReferenceException,),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].grandParent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).grandParent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].grandParent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.grandParent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.grandParent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)

        describe("EnumWithNullableGrandParent", () => {
            const ReferencedEnum = BasicEnum,
                DirectInstance = NullableGrandParent_TestInstance_Direct2,
                SymbolInstance = NullableGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = NullableGrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(new DirectInstance(it,).grandParent,).toBeNull(),)
                test("callback", () => expect(new DirectInstance(() => it,).grandParent,).toBeNull(),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(new DirectInstance(it,).grandParent,).toBeNull(),)
                test("callback", () => expect(new DirectInstance(() => it,).grandParent,).toBeNull(),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].grandParent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).grandParent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].grandParent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.grandParent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.grandParent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithNullableGreatGrandParent", () => {
            const ReferencedEnum = BasicEnumWithParent,
                DirectInstance = NullableGreatGrandParent_TestInstance_Direct2,
                SymbolInstance = NullableGreatGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = NullableGreatGrandParent_TestInstance_ByCallbackSymbol,
                newInstanceWithNull = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, null,),
                newValidInstance = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, validInstanceName,)

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(newInstanceWithNull(it,).grandParent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).grandParent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityReferenceException,),)
                    test("callback", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityReferenceException,),)
                },)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(newInstanceWithNull(it,).grandParent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).grandParent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityReferenceException,),)
                    test("callback", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityReferenceException,),)
                },)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].grandParent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(newValidInstance(value,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => value,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(newValidInstance(name,).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => name,).grandParent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(newValidInstance(new String(name,),).grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(newValidInstance(() => new String(name,),).grandParent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].grandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].grandParent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.grandParent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.grandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.grandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.grandParent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
    },)
    describe("great-grandparent tests", () => {
        describe("EnumWithGreatGrandParent", () => {
            const ReferencedEnum = BasicEnum,
                DirectInstance = GreatGrandParent_TestInstance_Direct3,
                SymbolInstance = GreatGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = GreatGrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(() => new DirectInstance(it,).greatGrandParent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).greatGrandParent,).toThrow(NullReferenceException,),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(() => new DirectInstance(it,).greatGrandParent,).toThrow(NullReferenceException,),)
                test("callback", () => expect(() => new DirectInstance(() => it,).greatGrandParent,).toThrow(NullReferenceException,),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].greatGrandParent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).greatGrandParent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).greatGrandParent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).greatGrandParent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].greatGrandParent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.greatGrandParent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.greatGrandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.greatGrandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.greatGrandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.greatGrandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.greatGrandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.greatGrandParent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
        describe("EnumWithNullableGreatGrandParent", () => {
            const ReferencedEnum = BasicEnum,
                DirectInstance = NullableGreatGrandParent_TestInstance_Direct3,
                SymbolInstance = NullableGreatGrandParent_TestInstance_BySymbol,
                SymbolCallbackInstance = NullableGreatGrandParent_TestInstance_ByCallbackSymbol

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(new DirectInstance(it,).greatGrandParent,).toBeNull(),)
                test("callback", () => expect(new DirectInstance(() => it,).greatGrandParent,).toBeNull(),)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(new DirectInstance(it,).greatGrandParent,).toBeNull(),)
                test("callback", () => expect(new DirectInstance(() => it,).greatGrandParent,).toBeNull(),)
            },)
            describe.each(nameValues,)('%s', name => {
                const value = ReferencedEnum[name]

                test("instance", () => expect(DirectInstance[name].greatGrandParent,).toStrictEqual(value,),)
                describe("by parent", () => {
                    test("value", () => expect(new DirectInstance(value,).greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => value,).greatGrandParent,).toStrictEqual(value,),)
                },)
                describe("by string", () => {
                    test("value", () => expect(new DirectInstance(name,).greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => name,).greatGrandParent,).toStrictEqual(value,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(new DirectInstance(new String(name,),).greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(new DirectInstance(() => new String(name,),).greatGrandParent,).toStrictEqual(value,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(SymbolInstance[name].greatGrandParent,).toStrictEqual(value,),)
                    test("callback", () => expect(SymbolCallbackInstance[name].greatGrandParent,).toStrictEqual(value,),)
                },)
            },)
            describe('D', () => {
                test("value", () => expect(() => DirectInstance.D.greatGrandParent,).toThrow(NullReferenceException,),)
                describe("by string", () => {
                    test("value", () => expect(() => DirectInstance.BY_STRING.greatGrandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_STRING_IN_A_CALLBACK.greatGrandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by object string", () => {
                    test("value", () => expect(() => DirectInstance.BY_OBJECT_STRING.greatGrandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => DirectInstance.BY_OBJECT_STRING_IN_A_CALLBACK.greatGrandParent,).toThrow(NullReferenceException,),)
                },)
                describe("by name symbol", () => {
                    test("value", () => expect(() => SymbolInstance.D.greatGrandParent,).toThrow(NullReferenceException,),)
                    test("callback", () => expect(() => SymbolCallbackInstance.D.greatGrandParent,).toThrow(NullReferenceException,),)
                },)
            },)
        },)
    },)
},)

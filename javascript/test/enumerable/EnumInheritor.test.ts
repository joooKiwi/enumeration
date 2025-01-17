//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {PossibleEnumerableValueOrNameByValueOrCallback, PossibleEnumSymbol} from "../../src/Enumerable.types"

import {EnumConstants}                from "../../src/EnumConstants"
import {ImpossibleIntegrityException} from "../../src/exception/ImpossibleIntegrityException"
import {NullReferenceException}       from "../../src/exception/NullReferenceException"

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

    /** A reference to the {@link EnumConstants.NULL_ENUM_REFERENCE_SYMBOL} */
    const nullReferenceSymbol = EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol
    /** An instance name that is valid */
    const validInstanceName = 'A'

    describe("parent tests", () => {
        describe("EnumWithParent", () => {
            const ReferencedEnum = BasicEnum
            const DirectInstance = Parent_TestInstance_Direct
            const SymbolInstance = Parent_TestInstance_BySymbol
            const SymbolCallbackInstance = Parent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnumWithParent
            const DirectInstance = GrandParent_TestInstance_Direct1
            const SymbolInstance = GrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = GrandParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnumWithGrandParent
            const DirectInstance = GreatGrandParent_TestInstance_Direct1
            const SymbolInstance = GreatGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = GreatGrandParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnum
            const DirectInstance = NullableParent_TestInstance_Direct
            const SymbolInstance = NullableParent_TestInstance_BySymbol
            const SymbolCallbackInstance = NullableParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnumWithParent
            const DirectInstance = NullableGrandParent_TestInstance_Direct1
            const SymbolInstance = NullableGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = NullableGrandParent_TestInstance_ByCallbackSymbol
            const newInstanceWithNull = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, null,)
            const newValidInstance = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, validInstanceName,)

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
                },)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
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
            const ReferencedEnum = BasicEnumWithGrandParent
            const DirectInstance = NullableGreatGrandParent_TestInstance_Direct1
            const SymbolInstance = NullableGreatGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = NullableGreatGrandParent_TestInstance_ByCallbackSymbol
            const newInstanceWithNull = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>,) => new DirectInstance(value, null, null,)
            const newValidInstance = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithGrandParent>,) => new DirectInstance(value, validInstanceName, validInstanceName,)

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
                },)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(newInstanceWithNull(it,).parent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).parent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
                    test("callback", () => expect(() => newValidInstance(it,).parent,).toThrow(ImpossibleIntegrityException,),)
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
            const ReferencedEnum = BasicEnum
            const DirectInstance = GrandParent_TestInstance_Direct2
            const SymbolInstance = GrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = GrandParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnumWithParent
            const DirectInstance = GreatGrandParent_TestInstance_Direct2
            const SymbolInstance = GreatGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = GreatGrandParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnum
            const DirectInstance = NullableGrandParent_TestInstance_Direct2
            const SymbolInstance = NullableGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = NullableGrandParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnumWithParent
            const DirectInstance = NullableGreatGrandParent_TestInstance_Direct2
            const SymbolInstance = NullableGreatGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = NullableGreatGrandParent_TestInstance_ByCallbackSymbol
            const newInstanceWithNull = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, null,)
            const newValidInstance = (value: PossibleEnumerableValueOrNameByValueOrCallback<BasicEnumWithParent>,) => new DirectInstance(value, validInstanceName,)

            describe.each(nullValues,)("%s", it => {
                test("value", () => expect(newInstanceWithNull(it,).grandParent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).grandParent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityException,),)
                    test("callback", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityException,),)
                },)
            },)
            describe("null symbol", () => {
                const it = nullReferenceSymbol
                test("value", () => expect(newInstanceWithNull(it,).grandParent,).toBeNull(),)
                test("callback", () => expect(newInstanceWithNull(() => it,).grandParent,).toBeNull(),)
                describe("impossible instance", () => {
                    test("value", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityException,),)
                    test("callback", () => expect(() => newValidInstance(it,).grandParent,).toThrow(ImpossibleIntegrityException,),)
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
            const ReferencedEnum = BasicEnum
            const DirectInstance = GreatGrandParent_TestInstance_Direct3
            const SymbolInstance = GreatGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = GreatGrandParent_TestInstance_ByCallbackSymbol

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
            const ReferencedEnum = BasicEnum
            const DirectInstance = NullableGreatGrandParent_TestInstance_Direct3
            const SymbolInstance = NullableGreatGrandParent_TestInstance_BySymbol
            const SymbolCallbackInstance = NullableGreatGrandParent_TestInstance_ByCallbackSymbol

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

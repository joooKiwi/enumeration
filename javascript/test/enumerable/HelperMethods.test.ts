/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {invalidInstances, nullValues}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from "./Enum.constants"
import {Enum_Enum, Enum_Enumerable, Enum_Enum_GrandParentEnumerable, Enum_GrandParentEnumerable, Enum_Enum_GreatGrandParentEnumerable, Enum_GreatGrandParentEnumerable, Enum_Enum_ParentEnumerable, Enum_ParentEnumerable, Enum_ParentEnum, Enum_NullableParentEnum, Enum_GrandParentEnum, Enum_NullableGrandParentEnum, Enum_NullableGreatGrandParentEnum, Enum_GreatGrandParentEnum, Enum_ParentEnum_GrandParentEnumerable, Enum_NullableParentEnum_GrandParentEnumerable, Enum_NullableParentEnum_GreatGrandParentEnumerable, Enum_ParentEnum_GreatGrandParentEnumerable, Enum_GrandParentEnum_GreatGrandParentEnumerable, Enum_NullableGrandParentEnum_GreatGrandParentEnumerable} from "../BasicEnums"
import {BasicCompanionEnumByBasicCompanionEnum, BasicCompanionEnumByBasicCompanionEnumDeclaration, BasicCompanionEnumByCompanionEnumWithGrandParent, BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration, BasicCompanionEnumByCompanionEnumWithGreatGrandParent, BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration, BasicCompanionEnumByCompanionEnumWithParent, BasicCompanionEnumByCompanionEnumWithParentDeclaration}                                                                                                                                                                                                                                        from "../BasicCompanionEnums"
import {EmptyEnum}                                                                                                                                                                                                                                                                                                                                                                                                                              from "../TemplateEnums"

import type {Enumerable} from "../../src/Enumerable"

import {InvalidInstanceException}              from "../../src/exception/InvalidInstanceException"
import {NonExistantKeyException}               from "../../src/exception/NonExistantKeyException"
import {NullInstanceException}                 from "../../src/exception/NullInstanceException"
import {NullReferenceException}                from "../../src/exception/NullReferenceException"
import {getCompanion}                          from "../../src/helper/getCompanion"
import {getLastPrototype}                      from "../../src/helper/getLastPrototype"
import {isCompanionEnum}                       from "../../src/helper/isCompanionEnum"
import {isCompanionEnumByStructure}            from "../../src/helper/isCompanionEnumByStructure"
import {isEnum}                                from "../../src/helper/isEnum"
import {isEnumByStructure}                     from "../../src/helper/isEnumByStructure"
import {isEnumWithNullableGrandParent}         from "../../src/helper/isEnumWithNullableGrandParent"
import {isEnumWithNullableGreatGrandParent}    from "../../src/helper/isEnumWithNullableGreatGrandParent"
import {isEnumWithNullableParent}              from "../../src/helper/isEnumWithNullableParent"
import {isEnumWithGrandParent}                 from "../../src/helper/isEnumWithGrandParent"
import {isEnumWithGrandParentByStructure}      from "../../src/helper/isEnumWithGrandParentByStructure"
import {isEnumWithGreatGrandParent}            from "../../src/helper/isEnumWithGreatGrandParent"
import {isEnumWithGreatGrandParentByStructure} from "../../src/helper/isEnumWithGreatGrandParentByStructure"
import {isEnumWithParent}                      from "../../src/helper/isEnumWithParent"
import {isEnumWithParentByStructure}           from "../../src/helper/isEnumWithParentByStructure"

describe("HelperMethodsTest", () => {

    describe("getCompanion", () => {
        describe("with invalid companion reference", () => {
            test.each(nullValues,)("%s", it => expect(() => getCompanion(it,),).toThrow(NullInstanceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => getCompanion(it,),).toThrow(InvalidInstanceException),)
        },)
        describe("companion reference", () => {
            // @ts-expect-error
            test("nothing", () => expect(() => getCompanion(class EmptyInvalidEnum {},),).toThrow(NonExistantKeyException,),)
            // @ts-expect-error
            test.each(nullValues,)("%s", it => expect(() => getCompanion(class InvalidEnumWithNullCompanionEnum { static readonly CompanionEnum = it },),).toThrow(NullReferenceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => getCompanion(class InvalidEnumWithInvalidInstanceCompanionEnum { static readonly CompanionEnum = it },),).toThrow(InvalidInstanceException,),)

        },)
        // @ts-expect-error
        test("companion enum reference with no get", () => expect(() => getCompanion(class InvalidEnumWithNonFunctionCompanionEnum { static readonly CompanionEnum = class InvalidEmptyCompanionEnum {} },),).toThrow(NonExistantKeyException,),)
        describe("companion enum reference with invalid value", () => {
            test.each(nullValues,)("%s", it => expect(() => getCompanion(class InvalidEnumWithGetNullOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithNullGet { static readonly get = it } },),).toThrow(NullReferenceException,),)
            test.each(invalidInstances,)("%s", ({value: it,}) => expect(() => getCompanion(class InvalidEnumWithGetInvalidInstanceOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithInvalidInstanceGet { static readonly get = it } },),).toThrow(InvalidInstanceException,),)
        },)
        describe("valid test", () => {
            const instance = EmptyEnum.CompanionEnum.get
            test("by EnumerableConstructor", () => expect(getCompanion(EmptyEnum,),).toBe(instance,),)
            test("by CompanionEnum", () => expect(getCompanion(instance,),).toBe(instance,),)
        },)
        describe("class3 extends ((class2 implements Enumerable) extends class1)", () => {
            class Class1 {}
            class Class2 extends Class1 implements Enumerable {
                get name(): never { throw new Error() }
                get ordinal(): never { throw new Error() }
                get [Symbol.toStringTag]() { return "Enum" as const }
                [Symbol.toPrimitive](): never { throw new Error() }
            }

            test("class1", () => expect(() => method(new Class1(),),).toThrow(NullReferenceException,),)
            test("class2", () => expect(method(new Class2(),),).toStrictEqual(Class2,),)
            test("class3", () => expect(method(new class Class3 extends Class2{}(),),).toStrictEqual(Class2,),)
        },)
    },)

    describe("isEnum", () => {
        const method = isEnum

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeTrue(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumByStructure", () => {
        const method = isEnumByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse(),)
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeTrue(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)
    describe("isEnumWithParent", () => {
        const method = isEnumWithParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableParent", () => {
        const method = isEnumWithNullableParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithParentByStructure", () => {
        const method = isEnumWithParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeTrue(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)
    describe("isEnumWithGrandParent", () => {
        const method = isEnumWithGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableGrandParent", () => {
        const method = isEnumWithNullableGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithGrandParentByStructure", () => {
        const method = isEnumWithGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeTrue(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)
    describe("isEnumWithGreatGrandParent", () => {
        const method = isEnumWithGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithNullableGreatGrandParent", () => {
        const method = isEnumWithNullableGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeFalse(),)
    },)
    describe("isEnumWithGreatGrandParentByStructure", () => {
        const method = isEnumWithGreatGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it),).toBeFalse(),)

        test("Enum", () =>                                                         expect(method(new Enum_Enum(),),).toBeFalse(),)
        test("Enumerable", () =>                                                   expect(method(new Enum_Enumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithParent", () =>                                  expect(method(new Enum_Enum_ParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent", () =>                                               expect(method(new Enum_ParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableParent", () =>                                       expect(method(new Enum_NullableParentEnum(),),).toBeFalse(),)
        test("EnumerableWithParent", () =>                                         expect(method(new Enum_ParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGrandParent", () =>                             expect(method(new Enum_Enum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithParent + EnumerableWithGrandParent", () =>                   expect(method(new Enum_ParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithNullableParent + EnumerableWithGrandParent", () =>           expect(method(new Enum_NullableParentEnum_GrandParentEnumerable(),),).toBeFalse(),)
        test("EnumWithGrandParent", () =>                                          expect(method(new Enum_GrandParentEnum(),),).toBeFalse(),)
        test("EnumWithNullableGrandParent", () =>                                  expect(method(new Enum_NullableGrandParentEnum(),),).toBeFalse(),)
        test("EnumerableWithGrandParent", () =>                                    expect(method(new Enum_GrandParentEnumerable(),),).toBeFalse(),)

        test("Enum + EnumerableWithGreatGrandParent", () =>                        expect(method(new Enum_Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithParent + EnumerableWithGreatGrandParent", () =>              expect(method(new Enum_ParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableParent + EnumerableWithGreatGrandParent", () =>      expect(method(new Enum_NullableParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGrandParent + EnumerableWithGreatGrandParent", () =>         expect(method(new Enum_GrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithNullableGrandParent + EnumerableWithGreatGrandParent", () => expect(method(new Enum_NullableGrandParentEnum_GreatGrandParentEnumerable(),),).toBeTrue(),)
        test("EnumWithGreatGrandParent", () =>                                     expect(method(new Enum_GreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumWithNullableGreatGrandParent", () =>                             expect(method(new Enum_NullableGreatGrandParentEnum(),),).toBeTrue(),)
        test("EnumerableWithGreatGrandParent", () =>                               expect(method(new Enum_GreatGrandParentEnumerable(),),).toBeTrue(),)
    },)

    describe("isCompanionEnum", () => {
        test.each(nullValues,)("%s", it => expect(isCompanionEnum(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(isCompanionEnum(it),).toBeFalse(),)

        test("BasicCompanionEnum inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeTrue(),)
        test("BasicCompanionEnumDeclaration inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration inheritance", () => expect(isCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumByStructure", () => {
        test.each(nullValues,)("%s", it => expect(isCompanionEnumByStructure(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(isCompanionEnumByStructure(it),).toBeFalse(),)

        test("BasicCompanionEnum inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeTrue(),)
        test("BasicCompanionEnumDeclaration inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithParent inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParent inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration inheritance", () => expect(isCompanionEnumByStructure(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)

},)

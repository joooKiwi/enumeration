/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {invalidInstances, nullValues}                                                                                                                                                                                                                                                                                                                                                                                                           from "./Enum.constants"
import {BasicEnumByEnum, BasicEnumByEnumerable, BasicEnumByGrandParentEnum, BasicEnumByGrandParentEnumerable, BasicEnumByGreatGrandParentEnum, BasicEnumByGreatGrandParentEnumerable, BasicEnumByParentEnum, BasicEnumByParentEnumerable}                                                                                                                                                                                                       from "../BasicEnums"
import {BasicCompanionEnumByBasicCompanionEnum, BasicCompanionEnumByBasicCompanionEnumDeclaration, BasicCompanionEnumByCompanionEnumWithGrandParent, BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration, BasicCompanionEnumByCompanionEnumWithGreatGrandParent, BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration, BasicCompanionEnumByCompanionEnumWithParent, BasicCompanionEnumByCompanionEnumWithParentDeclaration} from "../BasicCompanionEnums"
import {EmptyEnum}                                                                                                                                                                                                                                                                                                                                                                                                                              from "../TemplateEnums"

import {InvalidInstanceException}   from "../../src/exception/InvalidInstanceException"
import {NonExistantKeyException}    from "../../src/exception/NonExistantKeyException"
import {NullInstanceException}      from "../../src/exception/NullInstanceException"
import {NullReferenceException}     from "../../src/exception/NullReferenceException"
import {getCompanion}               from "../../src/helper/getCompanion"
import {isCompanionEnum}            from "../../src/helper/isCompanionEnum"
import {isCompanionEnumByStructure} from "../../src/helper/isCompanionEnumByStructure"
import {isEnum}                     from "../../src/helper/isEnum"
import {isEnumByStructure}          from "../../src/helper/isEnumByStructure"

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
    },)
    describe("isEnum", () => {
        test.each(nullValues,)("%s", it => expect(isEnum(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(isEnum(it),).toBeFalse(),)
        test("Enum inheritance", () => expect(isEnum(new BasicEnumByEnum(),),).toBeTrue())
        test("Enumerable structure", () => expect(isEnum(new BasicEnumByEnumerable(),),).toBeFalse())
        test("Enum with EnumerableByParent", () => expect(isEnum(new BasicEnumByParentEnum(),),).toBeTrue())
        test("EnumerableWithParent structure", () => expect(isEnum(new BasicEnumByParentEnumerable(),),).toBeFalse())
        test("Enum with EnumerableByGrandParent", () => expect(isEnum(new BasicEnumByGrandParentEnum(),),).toBeTrue())
        test("EnumerableWithGrandParent structure", () => expect(isEnum(new BasicEnumByGrandParentEnumerable(),),).toBeFalse())
        test("Enum with EnumerableByGreatGrandParent", () => expect(isEnum(new BasicEnumByGreatGrandParentEnum(),),).toBeTrue())
        test("EnumerableWithGreatGrandParent structure", () => expect(isEnum(new BasicEnumByGreatGrandParentEnumerable(),),).toBeFalse())
    },)
    describe("isEnumByStructure", () => {
        test.each(nullValues,)("%s", it => expect(isEnumByStructure(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(isEnumByStructure(it),).toBeFalse(),)
        test("Enum inheritance", () => expect(isEnumByStructure(new BasicEnumByEnum(),),).toBeTrue())
        test("Enumerable structure", () => expect(isEnumByStructure(new BasicEnumByEnumerable(),),).toBeTrue())
        test("Enum with EnumerableByParent", () => expect(isEnumByStructure(new BasicEnumByParentEnum(),),).toBeTrue())
        test("EnumerableWithParent structure", () => expect(isEnumByStructure(new BasicEnumByParentEnumerable(),),).toBeTrue())
        test("Enum with EnumerableByGrandParent", () => expect(isEnumByStructure(new BasicEnumByGrandParentEnum(),),).toBeTrue())
        test("EnumerableWithGrandParent structure", () => expect(isEnumByStructure(new BasicEnumByGrandParentEnumerable(),),).toBeTrue())
        test("Enum with EnumerableByGreatGrandParent", () => expect(isEnumByStructure(new BasicEnumByGreatGrandParentEnum(),),).toBeTrue())
        test("EnumerableWithGreatGrandParent structure", () => expect(isEnumByStructure(new BasicEnumByGreatGrandParentEnumerable(),),).toBeTrue())
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

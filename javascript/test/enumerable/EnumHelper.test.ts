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

import {EnumHelper}               from "../../src/EnumHelper"
import {InvalidInstanceException} from "../../src/exception/InvalidInstanceException"
import {NonExistantKeyException}  from "../../src/exception/NonExistantKeyException"
import {NullInstanceException}    from "../../src/exception/NullInstanceException"
import {NullReferenceException}   from "../../src/exception/NullReferenceException"

const {isEnum, isEnumerableByStructure, isBasicCompanionEnum, isCompanionEnumByStructure, getCompanion,} = EnumHelper

describe("EnumHelperTest", () => {

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
    describe("isEnumerableByStructure", () => {
        test.each(nullValues,)("%s", it => expect(isEnumerableByStructure(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(isEnumerableByStructure(it),).toBeFalse(),)
        test("Enum inheritance", () => expect(isEnumerableByStructure(new BasicEnumByEnum(),),).toBeTrue())
        test("Enumerable structure", () => expect(isEnumerableByStructure(new BasicEnumByEnumerable(),),).toBeTrue())
        test("Enum with EnumerableByParent", () => expect(isEnumerableByStructure(new BasicEnumByParentEnum(),),).toBeTrue())
        test("EnumerableWithParent structure", () => expect(isEnumerableByStructure(new BasicEnumByParentEnumerable(),),).toBeTrue())
        test("Enum with EnumerableByGrandParent", () => expect(isEnumerableByStructure(new BasicEnumByGrandParentEnum(),),).toBeTrue())
        test("EnumerableWithGrandParent structure", () => expect(isEnumerableByStructure(new BasicEnumByGrandParentEnumerable(),),).toBeTrue())
        test("Enum with EnumerableByGreatGrandParent", () => expect(isEnumerableByStructure(new BasicEnumByGreatGrandParentEnum(),),).toBeTrue())
        test("EnumerableWithGreatGrandParent structure", () => expect(isEnumerableByStructure(new BasicEnumByGreatGrandParentEnumerable(),),).toBeTrue())
    },)
    describe("isBasicCompanionEnum", () => {
        test.each(nullValues,)("%s", it => expect(isBasicCompanionEnum(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,}) => expect(isBasicCompanionEnum(it),).toBeFalse(),)

        test("BasicCompanionEnum inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeTrue(),)
        test("BasicCompanionEnumDeclaration inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration inheritance", () => expect(isBasicCompanionEnum(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
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

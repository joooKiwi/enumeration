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

import {describe, expect, test} from "vitest"

import {BasicCompanionEnumByBasicCompanionEnum, BasicCompanionEnumByBasicCompanionEnumDeclaration, BasicCompanionEnumByCompanionEnumWithGrandParent, BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration, BasicCompanionEnumByCompanionEnumWithGreatGrandParent, BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration, BasicCompanionEnumByCompanionEnumWithParent, BasicCompanionEnumByCompanionEnumWithParentDeclaration} from "./BasicCompanionEnums"
import {invalidInstances, nullValues}                                                                                                                                                                                                                                                                                                                                                                                                           from "./value/constants"

import {isCompanionEnum}                                from "../src/helper/isCompanionEnum"
import {isCompanionEnumByStructure}                     from "../src/helper/isCompanionEnumByStructure"
import {isCompanionEnumWithParent}                      from "../src/helper/isCompanionEnumWithParent"
import {isCompanionEnumWithParentByStructure}           from "../src/helper/isCompanionEnumWithParentByStructure"
import {isCompanionEnumWithGrandParent}                 from "../src/helper/isCompanionEnumWithGrandParent"
import {isCompanionEnumWithGrandParentByStructure}      from "../src/helper/isCompanionEnumWithGrandParentByStructure"
import {isCompanionEnumWithGreatGrandParent}            from "../src/helper/isCompanionEnumWithGreatGrandParent"
import {isCompanionEnumWithGreatGrandParentByStructure} from "../src/helper/isCompanionEnumWithGreatGrandParentByStructure"

describe("methodsTests (isCompanion)", () => {

    describe("isCompanionEnum", () => {
        const method = isCompanionEnum

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeTrue(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumByStructure", () => {
        const method = isCompanionEnumByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeTrue(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)
    describe("isCompanionEnumWithParent", () => {
        const method = isCompanionEnumWithParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumWithParentByStructure", () => {
        const method = isCompanionEnumWithParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeTrue(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)
    describe("isCompanionEnumWithGrandParent", () => {
        const method = isCompanionEnumWithGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumWithGrandParentByStructure", () => {
        const method = isCompanionEnumWithGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)
    describe("isCompanionEnumWithGreatGrandParent", () => {
        const method = isCompanionEnumWithGreatGrandParent

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeFalse(),)
    },)
    describe("isCompanionEnumWithGreatGrandParentByStructure", () => {
        const method = isCompanionEnumWithGreatGrandParentByStructure

        test.each(nullValues,)("%s", it => expect(method(it,),).toBeFalse())
        test.each(invalidInstances,)("%s", ({value: it,},) => expect(method(it,),).toBeFalse(),)

        test("CompanionEnum",                                () => expect(method(new BasicCompanionEnumByBasicCompanionEnum(),),).toBeFalse(),)
        test("CompanionEnumDeclaration",                     () => expect(method(new BasicCompanionEnumByBasicCompanionEnumDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithParent",                      () => expect(method(new BasicCompanionEnumByCompanionEnumWithParent(),),).toBeFalse(),)
        test("CompanionEnumWithParentDeclaration",           () => expect(method(new BasicCompanionEnumByCompanionEnumWithParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParent",                 () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParent(),),).toBeFalse(),)
        test("CompanionEnumWithGrandParentDeclaration",      () => expect(method(new BasicCompanionEnumByCompanionEnumWithGrandParentDeclaration(),),).toBeFalse(),)
        test("CompanionEnumWithGreatGrandParent",            () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParent(),),).toBeTrue(),)
        test("CompanionEnumWithGreatGrandParentDeclaration", () => expect(method(new BasicCompanionEnumByCompanionEnumWithGreatGrandParentDeclaration(),),).toBeTrue(),)
    },)

},)

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

import {EmptyCompanionEnum}                           from "./instance/EmptyCompanionEnum"
import {EmptyCompanionEnumWithGrandParent}            from "./instance/EmptyCompanionEnumWithGrandParent"
import {EmptyCompanionEnumWithGreatGrandParent}       from "./instance/EmptyCompanionEnumWithGreatGrandParent"
import {EmptyCompanionEnumWithParent}                 from "./instance/EmptyCompanionEnumWithParent"
import {EmptyCompanionEnumerable}                     from "./instance/EmptyCompanionEnumerable"
import {EmptyCompanionEnumerableWithParent}           from "./instance/EmptyCompanionEnumerableWithParent"
import {EmptyCompanionEnumerableWithGrandParent}      from "./instance/EmptyCompanionEnumerableWithGrandParent"
import {EmptyCompanionEnumerableWithGreatGrandParent} from "./instance/EmptyCompanionEnumerableWithGreatGrandParent"
import {EmptyEnum}                                    from "./instance/EmptyEnum"
import {EmptyEnumWithGrandParent}                     from "./instance/EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}                from "./instance/EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithNullableGrandParent}             from "./instance/EmptyEnumWithNullableGrandParent"
import {EmptyEnumWithNullableGreatGrandParent}        from "./instance/EmptyEnumWithNullableGreatGrandParent"
import {EmptyEnumWithNullableParent}                  from "./instance/EmptyEnumWithNullableParent"
import {EmptyEnumWithParent}                          from "./instance/EmptyEnumWithParent"
import {EmptyEnumerable}                              from "./instance/EmptyEnumerable"
import {EmptyEnumerableWithParent}                    from "./instance/EmptyEnumerableWithParent"
import {EmptyEnumerableWithGrandParent}               from "./instance/EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithGreatGrandParent}          from "./instance/EmptyEnumerableWithGreatGrandParent"

import {InvalidInstanceException} from "../src/exception/InvalidInstanceException"
import {NonExistantKeyException}  from "../src/exception/NonExistantKeyException"
import {NullInstanceException}    from "../src/exception/NullInstanceException"
import {NullReferenceException}   from "../src/exception/NullReferenceException"
import {getCompanion}             from "../src/method/getCompanion"

describe("methodTests (getCompanion)", () => {

    describe("invalid types", () => {
        test("null",          () => expect(() => getCompanion(null,),)             .toThrow(NullInstanceException,),)
        test("undefined",     () => expect(() => getCompanion(undefined,),)        .toThrow(NullInstanceException,),)
        //@ts-expect-error
        test("string",        () => expect(() => getCompanion("",),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("string object", () => expect(() => getCompanion(new String(),),)     .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number",        () => expect(() => getCompanion(0,),)                .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number object", () => expect(() => getCompanion(new Number(),),)     .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("bigint",        () => expect(() => getCompanion(0n,),)               .toThrow(InvalidInstanceException,),)
        test("bigint object", () => expect(() => getCompanion(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("symbol",        () => expect(() => getCompanion(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("symbol object", () => expect(() => getCompanion(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("object",        () => expect(() => getCompanion({},),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("function",      () => expect(() => getCompanion(() => {},),)         .toThrow(NonExistantKeyException,),)
        //@ts-expect-error
        test("array",         () => expect(() => getCompanion([],),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("set",           () => expect(() => getCompanion(new Set(),),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak set",      () => expect(() => getCompanion(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("map",           () => expect(() => getCompanion(new Map(),),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak map",      () => expect(() => getCompanion(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)
    },)
    describe("invalid constructor", () => {
        //@ts-expect-error
        test("nothing",                                 () => expect(() => getCompanion(class EmptyInvalidEnum {},),)                                                                             .toThrow(NonExistantKeyException,),)
        //@ts-expect-error
        test("null",                                    () => expect(() => getCompanion(class InvalidEnumWithNullCompanionEnum {         static readonly CompanionEnum = null },),)               .toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("undefined",                               () => expect(() => getCompanion(class InvalidEnumWithUndefinedCompanionEnum {    static readonly CompanionEnum = undefined },),)          .toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("string",                                  () => expect(() => getCompanion(class InvalidEnumWithStringCompanionEnum {       static readonly CompanionEnum = "" },),)                 .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("string object",                           () => expect(() => getCompanion(class InvalidEnumWithStringObjectCompanionEnum { static readonly CompanionEnum = new String() },),)       .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number",                                  () => expect(() => getCompanion(class InvalidEnumWithNumberCompanionEnum {       static readonly CompanionEnum = 0 },),)                  .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number object",                           () => expect(() => getCompanion(class InvalidEnumWithNumberObjectCompanionEnum { static readonly CompanionEnum = new Number() },),)       .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("bigint",                                  () => expect(() => getCompanion(class InvalidEnumWithBigintCompanionEnum {       static readonly CompanionEnum = 0n },),)                 .toThrow(InvalidInstanceException,),)
        test("bigint object",                           () => expect(() => getCompanion(class InvalidEnumWithBigintObjectCompanionEnum { static readonly CompanionEnum = Object(0n,) },),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("bigint",                                  () => expect(() => getCompanion(class InvalidEnumWithSymbolCompanionEnum {       static readonly CompanionEnum = Symbol() },),)           .toThrow(InvalidInstanceException,),)
        test("bigint object",                           () => expect(() => getCompanion(class InvalidEnumWithSymbolObjectCompanionEnum {   static readonly CompanionEnum = Object(Symbol(),) },),).toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("object",                                  () => expect(() => getCompanion(class InvalidEnumWithObjectCompanionEnum {       static readonly CompanionEnum = {} },),)                 .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("function",                                () => expect(() => getCompanion(class InvalidEnumWithFunctionCompanionEnum {     static readonly CompanionEnum = () => {} },),)           .toThrow(NonExistantKeyException,),)
        //@ts-expect-error
        test("array",                                   () => expect(() => getCompanion(class InvalidEnumWithArrayCompanionEnum {        static readonly CompanionEnum = [] },),)                 .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("set",                                     () => expect(() => getCompanion(class InvalidEnumWithSetCompanionEnum {          static readonly CompanionEnum = new Set() },),)          .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak set",                                () => expect(() => getCompanion(class InvalidEnumWithWeakSetCompanionEnum {      static readonly CompanionEnum = new WeakSet() },),)      .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("map",                                     () => expect(() => getCompanion(class InvalidEnumWithMapCompanionEnum {          static readonly CompanionEnum = new Map() },),)          .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak map",                                () => expect(() => getCompanion(class InvalidEnumWithWeakMapCompanionEnum {      static readonly CompanionEnum = new WeakMap() },),)      .toThrow(InvalidInstanceException,),)
    },)
    describe("companion enum reference with invalid value", () => {
        //@ts-expect-error
        test("noting",                 () => expect(() => getCompanion(class InvalidEnumWithNoGetCompanionEnum {             static readonly CompanionEnum = class InvalidEmptyCompanionEnum {} },),)                                                       .toThrow(NonExistantKeyException,),)
        //@ts-expect-error
        test("null",                   () => expect(() => getCompanion(class InvalidEnumWithGetNullOnCompanionEnum {         static readonly CompanionEnum = class InvalidCompanionEnumWithNullGet {         static readonly get = null } },),)             .toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("undefined",              () => expect(() => getCompanion(class InvalidEnumWithGetUndefinedOnCompanionEnum {    static readonly CompanionEnum = class InvalidCompanionEnumWithUndefinedGet {    static readonly get = undefined } },),)        .toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("string",                 () => expect(() => getCompanion(class InvalidEnumWithGetStringOnCompanionEnum {       static readonly CompanionEnum = class InvalidCompanionEnumWithStringGet {       static readonly get = "" } },),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("string object",          () => expect(() => getCompanion(class InvalidEnumWithGetStringObjectOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithStringObjectGet { static readonly get = new String() } },),)     .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number",                 () => expect(() => getCompanion(class InvalidEnumWithGetNumberOnCompanionEnum {       static readonly CompanionEnum = class InvalidCompanionEnumWithNumberGet {       static readonly get = 0 } },),)                .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number object",          () => expect(() => getCompanion(class InvalidEnumWithGetNumberObjectOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithNumberObjectGet { static readonly get = new Number() } },),)     .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("bigint",                 () => expect(() => getCompanion(class InvalidEnumWithGetBigintOnCompanionEnum {       static readonly CompanionEnum = class InvalidCompanionEnumWithBigintGet {       static readonly get = 0n } },),)               .toThrow(InvalidInstanceException,),)
        test("bigint object",          () => expect(() => getCompanion(class InvalidEnumWithGetBigintObjectOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithBigintObjectGet { static readonly get = Object(0n,) } },),)      .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("symbol",                 () => expect(() => getCompanion(class InvalidEnumWithGetSymbolOnCompanionEnum {       static readonly CompanionEnum = class InvalidCompanionEnumWithSymbolGet {       static readonly get = Symbol() } },),)         .toThrow(InvalidInstanceException,),)
        test("symbol object",          () => expect(() => getCompanion(class InvalidEnumWithGetSymbolObjectOnCompanionEnum { static readonly CompanionEnum = class InvalidCompanionEnumWithSymbolObjectGet { static readonly get = Object(Symbol(),) } },),).toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("object",                 () => expect(() => getCompanion(class InvalidEnumWithGetObjectOnCompanionEnum {       static readonly CompanionEnum = class InvalidCompanionEnumWithObjectGet {       static readonly get = {} } },),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("object",                 () => expect(() => getCompanion(class InvalidEnumWithGetFunctionOnCompanionEnum {     static readonly CompanionEnum = class InvalidCompanionEnumWithFunctionGet {     static readonly get = () => {} } },),)         .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("array",                  () => expect(() => getCompanion(class InvalidEnumWithGetArrayOnCompanionEnum {        static readonly CompanionEnum = class InvalidCompanionEnumWithArrayGet {        static readonly get = [] } },),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("set",                    () => expect(() => getCompanion(class InvalidEnumWithGetSetOnCompanionEnum {          static readonly CompanionEnum = class InvalidCompanionEnumWithSetGet {          static readonly get = new Set() } },),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak set",               () => expect(() => getCompanion(class InvalidEnumWithGetWeakSetOnCompanionEnum {      static readonly CompanionEnum = class InvalidCompanionEnumWithWeakSetGet {      static readonly get = new WeakSet() } },),)    .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("map",                    () => expect(() => getCompanion(class InvalidEnumWithGetMapOnCompanionEnum {          static readonly CompanionEnum = class InvalidCompanionEnumWithMapGet {          static readonly get = new Map() } },),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak map",               () => expect(() => getCompanion(class InvalidEnumWithGetWeakMapOnCompanionEnum {      static readonly CompanionEnum = class InvalidCompanionEnumWithWeakMapGet {      static readonly get = new WeakMap() } },),)    .toThrow(InvalidInstanceException,),)
    },)
    describe("valid", () => {
        test("Enum",       () => expect(getCompanion(EmptyEnum,),).toBe(EmptyEnum.CompanionEnum.get,),)
        test("EnumWithParent",       () => expect(getCompanion(EmptyEnumWithParent,),).toBe(EmptyEnumWithParent.CompanionEnum.get,),)
        test("EnumWithNullableParent",       () => expect(getCompanion(EmptyEnumWithNullableParent,),).toBe(EmptyEnumWithNullableParent.CompanionEnum.get,),)
        test("EnumWithGrandParent",       () => expect(getCompanion(EmptyEnumWithGrandParent,),).toBe(EmptyEnumWithGrandParent.CompanionEnum.get,),)
        test("EnumWithNullableGrandParent",       () => expect(getCompanion(EmptyEnumWithNullableGrandParent,),).toBe(EmptyEnumWithNullableGrandParent.CompanionEnum.get,),)
        test("EnumWithGreatGrandParent",       () => expect(getCompanion(EmptyEnumWithGreatGrandParent,),).toBe(EmptyEnumWithGreatGrandParent.CompanionEnum.get,),)
        test("EnumWithNullableGreatGrandParent",       () => expect(getCompanion(EmptyEnumWithNullableGreatGrandParent,),).toBe(EmptyEnumWithNullableGreatGrandParent.CompanionEnum.get,),)
        test("Enumerable", () => expect(getCompanion(EmptyEnumerable,),).toBe(EmptyEnumerable.CompanionEnum.get,),)
        test("EnumerableWithParent", () => expect(getCompanion(EmptyEnumerableWithParent,),).toBe(EmptyEnumerableWithParent.CompanionEnum.get,),)
        test("EnumerableWithGrandParent", () => expect(getCompanion(EmptyEnumerableWithGrandParent,),).toBe(EmptyEnumerableWithGrandParent.CompanionEnum.get,),)
        test("EnumerableWithGreatGrandParent", () => expect(getCompanion(EmptyEnumerableWithGreatGrandParent,),).toBe(EmptyEnumerableWithGreatGrandParent.CompanionEnum.get,),)

        test("CompanionEnum", () => {
            const instance = new EmptyCompanionEnum()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumWithParent", () => {
            const instance = new EmptyCompanionEnumWithParent()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumWithGrandParent", () => {
            const instance = new EmptyCompanionEnumWithGrandParent()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumWithGreatGrandParent", () => {
            const instance = new EmptyCompanionEnumWithGreatGrandParent()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumerable", () => {
            const instance = new EmptyCompanionEnumerable()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumerableWithParent", () => {
            const instance = new EmptyCompanionEnumerableWithParent()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumerableWithGrandParent", () => {
            const instance = new EmptyCompanionEnumerableWithGrandParent()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
        test("CompanionEnumerableWithGreatGrandParent", () => {
            const instance = new EmptyCompanionEnumerableWithGreatGrandParent()
            expect(getCompanion(instance,),).toBe(instance,)
        },)
    },)

},)

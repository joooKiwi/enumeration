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

import {EmptyEnum}                                 from "./instance/EmptyEnum"
import {EmptyEnumerable}                           from "./instance/EmptyEnumerable"
import {EmptyEnumerableWithGrandParent}            from "./instance/EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithGreatGrandParent}       from "./instance/EmptyEnumerableWithGreatGrandParent"
import {EmptyEnumerableWithParent}                 from "./instance/EmptyEnumerableWithParent"
import {EmptyEnumWithNullableParent}               from "./instance/EmptyEnumWithNullableParent"
import {EmptyEnumWithNullableGrandParent}          from "./instance/EmptyEnumWithNullableGrandParent"
import {EmptyEnumWithNullableGreatGrandParent}     from "./instance/EmptyEnumWithNullableGreatGrandParent"
import {EmptyEnumWithGrandParent}                  from "./instance/EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}             from "./instance/EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}                       from "./instance/EmptyEnumWithParent"
import {EmptyEnumWithUnregisteredGreatGrandParent} from "./instance/EmptyEnumWithUnregisteredGreatGrandParent"
import {EmptyEnumWithUnregisteredGrandParent}      from "./instance/EmptyEnumWithUnregisteredGrandParent"
import {EmptyEnumWithUnregisteredParent}           from "./instance/EmptyEnumWithUnregisteredParent"
import {UnregisteredEnumWithGrandParent}           from "./instance/UnregisteredEnumWithGrandParent"
import {UnregisteredEnumWithGreatGrandParent}      from "./instance/UnregisteredEnumWithGreatGrandParent"
import {UnregisteredEnumWithParent}                from "./instance/UnregisteredEnumWithParent"

import {InvalidInstanceException} from "../src/exception/InvalidInstanceException"
import {NullReferenceException}   from "../src/exception/NullReferenceException"
import {getLastPrototype}         from "../src/method/getLastPrototype"

describe("methodTests (getLastPrototype)", () => {

    describe("invalid", () => {
        test("null",          () => expect(() => getLastPrototype(null,),)             .toThrow(NullReferenceException,),)
        test("undefined",     () => expect(() => getLastPrototype(undefined,),)        .toThrow(NullReferenceException,),)
        //@ts-expect-error
        test("string",        () => expect(() => getLastPrototype("",),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("string object", () => expect(() => getLastPrototype(new String(),),)     .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number",        () => expect(() => getLastPrototype(0,),)                .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("number object", () => expect(() => getLastPrototype(new Number(),),)     .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("bigint",        () => expect(() => getLastPrototype(0n,),)               .toThrow(InvalidInstanceException,),)
        test("bigint object", () => expect(() => getLastPrototype(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("symbol",        () => expect(() => getLastPrototype(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("symbol object", () => expect(() => getLastPrototype(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("object",        () => expect(() => getLastPrototype({},),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("function",      () => expect(() => getLastPrototype(() => {},),)         .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("array",         () => expect(() => getLastPrototype([],),)               .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("set",           () => expect(() => getLastPrototype(new Set(),),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak set",      () => expect(() => getLastPrototype(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("map",           () => expect(() => getLastPrototype(new Map(),),)        .toThrow(InvalidInstanceException,),)
        //@ts-expect-error
        test("weak map",      () => expect(() => getLastPrototype(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)
    },)
    describe("known instances", () => {
        test("Enum", () =>                             expect(getLastPrototype(new EmptyEnum(),),)                            .toStrictEqual(EmptyEnum,),)
        test("EnumWithParent", () =>                   expect(getLastPrototype(new EmptyEnumWithParent(),),)                  .toStrictEqual(EmptyEnumWithParent,),)
        test("EnumWithNullableParent", () =>           expect(getLastPrototype(new EmptyEnumWithNullableParent(),),)          .toStrictEqual(EmptyEnumWithNullableParent,),)
        test("EnumWithGrandParent", () =>              expect(getLastPrototype(new EmptyEnumWithGrandParent(),),)             .toStrictEqual(EmptyEnumWithGrandParent,),)
        test("EnumWithNullableGrandParent", () =>      expect(getLastPrototype(new EmptyEnumWithNullableGrandParent(),),)     .toStrictEqual(EmptyEnumWithNullableGrandParent,),)
        test("EnumWithGreatGrandParent", () =>         expect(getLastPrototype(new EmptyEnumWithGreatGrandParent(),),)        .toStrictEqual(EmptyEnumWithGreatGrandParent,),)
        test("EnumWithNullableGreatGrandParent", () => expect(getLastPrototype(new EmptyEnumWithNullableGreatGrandParent(),),).toStrictEqual(EmptyEnumWithNullableGreatGrandParent,),)

        test("Enumerable", () =>                       expect(getLastPrototype(new EmptyEnumerable(),),)                      .toStrictEqual(EmptyEnumerable,),)
        test("EnumerableWithParent", () =>             expect(getLastPrototype(new EmptyEnumerableWithParent(),),)            .toStrictEqual(EmptyEnumerableWithParent,),)
        test("EnumerableWithGrandParent", () =>        expect(getLastPrototype(new EmptyEnumerableWithGrandParent(),),)       .toStrictEqual(EmptyEnumerableWithGrandParent,),)
        test("EnumerableWithGreatGrandParent", () =>   expect(getLastPrototype(new EmptyEnumerableWithGreatGrandParent(),),)  .toStrictEqual(EmptyEnumerableWithGreatGrandParent,),)
    },)
    describe("class extends known instances", () => {
        test("Enum", () =>                             expect(getLastPrototype(new class extends EmptyEnum{}(),),)                            .toStrictEqual(EmptyEnum,),)
        test("EnumWithParent", () =>                   expect(getLastPrototype(new class extends EmptyEnumWithParent{}(),),)                  .toStrictEqual(EmptyEnumWithParent,),)
        test("EnumWithNullableParent", () =>           expect(getLastPrototype(new class extends EmptyEnumWithNullableParent{}(),),)          .toStrictEqual(EmptyEnumWithNullableParent,),)
        test("EnumWithGrandParent", () =>              expect(getLastPrototype(new class extends EmptyEnumWithGrandParent{}(),),)             .toStrictEqual(EmptyEnumWithGrandParent,),)
        test("EnumWithNullableGrandParent", () =>      expect(getLastPrototype(new class extends EmptyEnumWithNullableGrandParent{}(),),)     .toStrictEqual(EmptyEnumWithNullableGrandParent,),)
        test("EnumWithGreatGrandParent", () =>         expect(getLastPrototype(new class extends EmptyEnumWithGreatGrandParent{}(),),)        .toStrictEqual(EmptyEnumWithGreatGrandParent,),)
        test("EnumWithNullableGreatGrandParent", () => expect(getLastPrototype(new class extends EmptyEnumWithNullableGreatGrandParent{}(),),).toStrictEqual(EmptyEnumWithNullableGreatGrandParent,),)

        test("Enumerable", () =>                       expect(getLastPrototype(new class extends EmptyEnumerable{}(),),)                      .toStrictEqual(EmptyEnumerable,),)
        test("EnumerableWithParent", () =>             expect(getLastPrototype(new class extends EmptyEnumerableWithParent{}(),),)            .toStrictEqual(EmptyEnumerableWithParent,),)
        test("EnumerableWithGrandParent", () =>        expect(getLastPrototype(new class extends EmptyEnumerableWithGrandParent{}(),),)       .toStrictEqual(EmptyEnumerableWithGrandParent,),)
        test("EnumerableWithGreatGrandParent", () =>   expect(getLastPrototype(new class extends EmptyEnumerableWithGreatGrandParent{}(),),)  .toStrictEqual(EmptyEnumerableWithGreatGrandParent,),)
    },)
    describe("unregistered instances", () => {
        test("UnregisteredEnumWithParent",           () => expect(getLastPrototype(new EmptyEnumWithUnregisteredParent(),),)          .toStrictEqual(UnregisteredEnumWithParent,),)
        test("UnregisteredEnumWithGrandParent",      () => expect(getLastPrototype(new EmptyEnumWithUnregisteredGrandParent(),),)     .toStrictEqual(UnregisteredEnumWithGrandParent,),)
        test("UnregisteredEnumWithGreatGrandParent", () => expect(getLastPrototype(new EmptyEnumWithUnregisteredGreatGrandParent(),),).toStrictEqual(UnregisteredEnumWithGreatGrandParent,),)
    },)

},)

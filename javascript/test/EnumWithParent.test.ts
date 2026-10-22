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

import type {PossibleEnumSymbol} from "../src/type/symbol"

import {BasicEnum}           from "./instance/BasicEnum"
import {BasicEnumWithParent} from "./instance/BasicEnumWithParent"

import {EnumConstants}          from "../src/EnumConstants"
import {NullReferenceException} from "../src/exception/NullReferenceException"

describe("EnumWithParent tests", () => {

    describe("parent", () => {
        test("null",                    () => expect(() => new BasicEnumWithParent(null,)                                                                .parent,).toThrow(NullReferenceException,),)
        test("undefined",               () => expect(() => new BasicEnumWithParent(undefined,)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → null",               () => expect(() => new BasicEnumWithParent(() => null,)                                                          .parent,).toThrow(NullReferenceException,),)
        test("() → undefined",          () => expect(() => new BasicEnumWithParent(() => undefined,)                                                     .parent,).toThrow(NullReferenceException,),)
        test("null symbol",             () => expect(() => new BasicEnumWithParent(EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .parent,).toThrow(NullReferenceException,),)
        test("() → null symbol",        () => expect(() => new BasicEnumWithParent(() => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).parent,).toThrow(NullReferenceException,),)
        test("A as string",             () => expect(      new BasicEnumWithParent('A',)                                                                 .parent,).toBe(BasicEnum.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithParent(new String('A',),)                                                    .parent,).toBe(BasicEnum.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithParent(() => 'A',)                                                           .parent,).toBe(BasicEnum.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithParent(() => new String('A',),)                                              .parent,).toBe(BasicEnum.A,),)
        test("B as string",             () => expect(      new BasicEnumWithParent('B',)                                                                 .parent,).toBe(BasicEnum.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithParent(new String('B',),)                                                    .parent,).toBe(BasicEnum.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithParent(() => 'B',)                                                           .parent,).toBe(BasicEnum.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithParent(() => new String('B',),)                                              .parent,).toBe(BasicEnum.B,),)
        test("C as string",             () => expect(      new BasicEnumWithParent('C',)                                                                 .parent,).toBe(BasicEnum.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithParent(new String('C',),)                                                    .parent,).toBe(BasicEnum.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithParent(() => 'C',)                                                           .parent,).toBe(BasicEnum.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithParent(() => new String('C',),)                                              .parent,).toBe(BasicEnum.C,),)
        test("D as string",             () => expect(      new BasicEnumWithParent('D',)                                                                 .parent,).toBe(BasicEnum.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithParent(new String('D',),)                                                    .parent,).toBe(BasicEnum.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithParent(() => 'D',)                                                           .parent,).toBe(BasicEnum.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithParent(() => new String('D',),)                                              .parent,).toBe(BasicEnum.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithParent('E',)                                                                 .parent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithParent(new String('E',),)                                                    .parent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithParent(() => 'E',)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithParent(() => new String('E',),)                                              .parent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithParent(BasicEnum.A,)                                                         .parent,).toBe(BasicEnum.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithParent(() => BasicEnum.A,)                                                   .parent,).toBe(BasicEnum.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithParent(BasicEnum.B,)                                                         .parent,).toBe(BasicEnum.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithParent(() => BasicEnum.B,)                                                   .parent,).toBe(BasicEnum.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithParent(BasicEnum.C,)                                                         .parent,).toBe(BasicEnum.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithParent(() => BasicEnum.C,)                                                   .parent,).toBe(BasicEnum.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithParent(BasicEnum.D,)                                                         .parent,).toBe(BasicEnum.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithParent(() => BasicEnum.D,)                                                   .parent,).toBe(BasicEnum.D,),)
    },)

},)

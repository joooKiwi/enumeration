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
import {BasicEnumWithGrandParent} from "./instance/BasicEnumWithGrandParent"

import {EnumConstants}          from "../src/EnumConstants"
import {NullReferenceException} from "../src/exception/NullReferenceException"

describe("EnumWithGrandParent tests", () => {

    describe("parent", () => {
        test("null",                    () => expect(() => new BasicEnumWithGrandParent(null,)                                                                .parent,).toThrow(NullReferenceException,),)
        test("undefined",               () => expect(() => new BasicEnumWithGrandParent(undefined,)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → null",               () => expect(() => new BasicEnumWithGrandParent(() => null,)                                                          .parent,).toThrow(NullReferenceException,),)
        test("() → undefined",          () => expect(() => new BasicEnumWithGrandParent(() => undefined,)                                                     .parent,).toThrow(NullReferenceException,),)
        test("null symbol",             () => expect(() => new BasicEnumWithGrandParent(EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .parent,).toThrow(NullReferenceException,),)
        test("() → null symbol",        () => expect(() => new BasicEnumWithGrandParent(() => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).parent,).toThrow(NullReferenceException,),)
        test("A as string",             () => expect(      new BasicEnumWithGrandParent('A',)                                                                 .parent,).toBe(BasicEnumWithParent.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithGrandParent(new String('A',),)                                                    .parent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithGrandParent(() => 'A',)                                                           .parent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithGrandParent(() => new String('A',),)                                              .parent,).toBe(BasicEnumWithParent.A,),)
        test("B as string",             () => expect(      new BasicEnumWithGrandParent('B',)                                                                 .parent,).toBe(BasicEnumWithParent.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithGrandParent(new String('B',),)                                                    .parent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithGrandParent(() => 'B',)                                                           .parent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithGrandParent(() => new String('B',),)                                              .parent,).toBe(BasicEnumWithParent.B,),)
        test("C as string",             () => expect(      new BasicEnumWithGrandParent('C',)                                                                 .parent,).toBe(BasicEnumWithParent.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithGrandParent(new String('C',),)                                                    .parent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithGrandParent(() => 'C',)                                                           .parent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithGrandParent(() => new String('C',),)                                              .parent,).toBe(BasicEnumWithParent.C,),)
        test("D as string",             () => expect(      new BasicEnumWithGrandParent('D',)                                                                 .parent,).toBe(BasicEnumWithParent.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithGrandParent(new String('D',),)                                                    .parent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithGrandParent(() => 'D',)                                                           .parent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithGrandParent(() => new String('D',),)                                              .parent,).toBe(BasicEnumWithParent.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithGrandParent('E',)                                                                 .parent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithGrandParent(new String('E',),)                                                    .parent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithGrandParent(() => 'E',)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithGrandParent(() => new String('E',),)                                              .parent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithGrandParent(BasicEnumWithParent.A,)                                                         .parent,).toBe(BasicEnumWithParent.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithGrandParent(() => BasicEnumWithParent.A,)                                                   .parent,).toBe(BasicEnumWithParent.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithGrandParent(BasicEnumWithParent.B,)                                                         .parent,).toBe(BasicEnumWithParent.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithGrandParent(() => BasicEnumWithParent.B,)                                                   .parent,).toBe(BasicEnumWithParent.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithGrandParent(BasicEnumWithParent.C,)                                                         .parent,).toBe(BasicEnumWithParent.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithGrandParent(() => BasicEnumWithParent.C,)                                                   .parent,).toBe(BasicEnumWithParent.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithGrandParent(BasicEnumWithParent.D,)                                                         .parent,).toBe(BasicEnumWithParent.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithGrandParent(() => BasicEnumWithParent.D,)                                                   .parent,).toBe(BasicEnumWithParent.D,),)
    },)
    describe("grandParent", () => {
        test("null",                    () => expect(() => new BasicEnumWithGrandParent(null, null,)                                                                .grandParent,).toThrow(NullReferenceException,),)
        test("undefined",               () => expect(() => new BasicEnumWithGrandParent(null, undefined,)                                                           .grandParent,).toThrow(NullReferenceException,),)
        test("() → null",               () => expect(() => new BasicEnumWithGrandParent(null, () => null,)                                                          .grandParent,).toThrow(NullReferenceException,),)
        test("() → undefined",          () => expect(() => new BasicEnumWithGrandParent(null, () => undefined,)                                                     .grandParent,).toThrow(NullReferenceException,),)
        test("null symbol",             () => expect(() => new BasicEnumWithGrandParent(null, EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .grandParent,).toThrow(NullReferenceException,),)
        test("() → null symbol",        () => expect(() => new BasicEnumWithGrandParent(null, () => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).grandParent,).toThrow(NullReferenceException,),)
        test("A as string",             () => expect(      new BasicEnumWithGrandParent(null, 'A',)                                                                 .grandParent,).toBe(BasicEnum.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithGrandParent(null, new String('A',),)                                                    .grandParent,).toBe(BasicEnum.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithGrandParent(null, () => 'A',)                                                           .grandParent,).toBe(BasicEnum.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithGrandParent(null, () => new String('A',),)                                              .grandParent,).toBe(BasicEnum.A,),)
        test("B as string",             () => expect(      new BasicEnumWithGrandParent(null, 'B',)                                                                 .grandParent,).toBe(BasicEnum.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithGrandParent(null, new String('B',),)                                                    .grandParent,).toBe(BasicEnum.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithGrandParent(null, () => 'B',)                                                           .grandParent,).toBe(BasicEnum.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithGrandParent(null, () => new String('B',),)                                              .grandParent,).toBe(BasicEnum.B,),)
        test("C as string",             () => expect(      new BasicEnumWithGrandParent(null, 'C',)                                                                 .grandParent,).toBe(BasicEnum.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithGrandParent(null, new String('C',),)                                                    .grandParent,).toBe(BasicEnum.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithGrandParent(null, () => 'C',)                                                           .grandParent,).toBe(BasicEnum.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithGrandParent(null, () => new String('C',),)                                              .grandParent,).toBe(BasicEnum.C,),)
        test("D as string",             () => expect(      new BasicEnumWithGrandParent(null, 'D',)                                                                 .grandParent,).toBe(BasicEnum.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithGrandParent(null, new String('D',),)                                                    .grandParent,).toBe(BasicEnum.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithGrandParent(null, () => 'D',)                                                           .grandParent,).toBe(BasicEnum.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithGrandParent(null, () => new String('D',),)                                              .grandParent,).toBe(BasicEnum.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithGrandParent(null, 'E',)                                                                 .grandParent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithGrandParent(null, new String('E',),)                                                    .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithGrandParent(null, () => 'E',)                                                           .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithGrandParent(null, () => new String('E',),)                                              .grandParent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithGrandParent(null, BasicEnum.A,)                                                         .grandParent,).toBe(BasicEnum.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithGrandParent(null, () => BasicEnum.A,)                                                   .grandParent,).toBe(BasicEnum.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithGrandParent(null, BasicEnum.B,)                                                         .grandParent,).toBe(BasicEnum.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithGrandParent(null, () => BasicEnum.B,)                                                   .grandParent,).toBe(BasicEnum.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithGrandParent(null, BasicEnum.C,)                                                         .grandParent,).toBe(BasicEnum.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithGrandParent(null, () => BasicEnum.C,)                                                   .grandParent,).toBe(BasicEnum.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithGrandParent(null, BasicEnum.D,)                                                         .grandParent,).toBe(BasicEnum.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithGrandParent(null, () => BasicEnum.D,)                                                   .grandParent,).toBe(BasicEnum.D,),)
    },)

},)

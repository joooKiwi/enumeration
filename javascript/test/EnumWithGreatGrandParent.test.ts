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

import {BasicEnum}                     from "./instance/BasicEnum"
import {BasicEnumWithGrandParent}     from "./instance/BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent} from "./instance/BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}           from "./instance/BasicEnumWithParent"

import {EnumConstants}                from "../src/EnumConstants"
import {NullReferenceException}       from "../src/exception/NullReferenceException"

describe("EnumWithGreatGrandParent tests", () => {

    describe("parent", () => {
        test("null",                    () => expect(() => new BasicEnumWithGreatGrandParent(null,)                                                                .parent,).toThrow(NullReferenceException,),)
        test("undefined",               () => expect(() => new BasicEnumWithGreatGrandParent(undefined,)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → null",               () => expect(() => new BasicEnumWithGreatGrandParent(() => null,)                                                          .parent,).toThrow(NullReferenceException,),)
        test("() → undefined",          () => expect(() => new BasicEnumWithGreatGrandParent(() => undefined,)                                                     .parent,).toThrow(NullReferenceException,),)
        test("null symbol",             () => expect(() => new BasicEnumWithGreatGrandParent(EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .parent,).toThrow(NullReferenceException,),)
        test("() → null symbol",        () => expect(() => new BasicEnumWithGreatGrandParent(() => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).parent,).toThrow(NullReferenceException,),)
        test("A as string",             () => expect(      new BasicEnumWithGreatGrandParent('A',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithGreatGrandParent(new String('A',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithGreatGrandParent(() => 'A',)                                                           .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithGreatGrandParent(() => new String('A',),)                                              .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("B as string",             () => expect(      new BasicEnumWithGreatGrandParent('B',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithGreatGrandParent(new String('B',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithGreatGrandParent(() => 'B',)                                                           .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithGreatGrandParent(() => new String('B',),)                                              .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("C as string",             () => expect(      new BasicEnumWithGreatGrandParent('C',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithGreatGrandParent(new String('C',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithGreatGrandParent(() => 'C',)                                                           .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithGreatGrandParent(() => new String('C',),)                                              .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("D as string",             () => expect(      new BasicEnumWithGreatGrandParent('D',)                                                                 .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithGreatGrandParent(new String('D',),)                                                    .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithGreatGrandParent(() => 'D',)                                                           .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithGreatGrandParent(() => new String('D',),)                                              .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithGreatGrandParent('E',)                                                                 .parent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithGreatGrandParent(new String('E',),)                                                    .parent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithGreatGrandParent(() => 'E',)                                                           .parent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithGreatGrandParent(() => new String('E',),)                                              .parent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.A,)                                                         .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithGreatGrandParent(() => BasicEnumWithGrandParent.A,)                                                   .parent,).toBe(BasicEnumWithGrandParent.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.B,)                                                         .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithGreatGrandParent(() => BasicEnumWithGrandParent.B,)                                                   .parent,).toBe(BasicEnumWithGrandParent.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.C,)                                                         .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithGreatGrandParent(() => BasicEnumWithGrandParent.C,)                                                   .parent,).toBe(BasicEnumWithGrandParent.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithGreatGrandParent(BasicEnumWithGrandParent.D,)                                                         .parent,).toBe(BasicEnumWithGrandParent.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithGreatGrandParent(() => BasicEnumWithGrandParent.D,)                                                   .parent,).toBe(BasicEnumWithGrandParent.D,),)
    },)
    describe("grandparent", () => {
        test("null",                    () => expect(() => new BasicEnumWithGreatGrandParent(null, null,)                                                                .grandParent,).toThrow(NullReferenceException,),)
        test("undefined",               () => expect(() => new BasicEnumWithGreatGrandParent(null, undefined,)                                                           .grandParent,).toThrow(NullReferenceException,),)
        test("() → null",               () => expect(() => new BasicEnumWithGreatGrandParent(null, () => null,)                                                          .grandParent,).toThrow(NullReferenceException,),)
        test("() → undefined",          () => expect(() => new BasicEnumWithGreatGrandParent(null, () => undefined,)                                                     .grandParent,).toThrow(NullReferenceException,),)
        test("null symbol",             () => expect(() => new BasicEnumWithGreatGrandParent(null, EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .grandParent,).toThrow(NullReferenceException,),)
        test("() → null symbol",        () => expect(() => new BasicEnumWithGreatGrandParent(null, () => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).grandParent,).toThrow(NullReferenceException,),)
        test("A as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, 'A',)                                                                 .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, new String('A',),)                                                    .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, () => 'A',)                                                           .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, () => new String('A',),)                                              .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("B as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, 'B',)                                                                 .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, new String('B',),)                                                    .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, () => 'B',)                                                           .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, () => new String('B',),)                                              .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("C as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, 'C',)                                                                 .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, new String('C',),)                                                    .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, () => 'C',)                                                           .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, () => new String('C',),)                                              .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("D as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, 'D',)                                                                 .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, new String('D',),)                                                    .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, () => 'D',)                                                           .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, () => new String('D',),)                                              .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithGreatGrandParent(null, 'E',)                                                                 .grandParent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithGreatGrandParent(null, new String('E',),)                                                    .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithGreatGrandParent(null, () => 'E',)                                                           .grandParent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithGreatGrandParent(null, () => new String('E',),)                                              .grandParent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithGreatGrandParent(null, BasicEnumWithParent.A,)                                                         .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithGreatGrandParent(null, () => BasicEnumWithParent.A,)                                                   .grandParent,).toBe(BasicEnumWithParent.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithGreatGrandParent(null, BasicEnumWithParent.B,)                                                         .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithGreatGrandParent(null, () => BasicEnumWithParent.B,)                                                   .grandParent,).toBe(BasicEnumWithParent.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithGreatGrandParent(null, BasicEnumWithParent.C,)                                                         .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithGreatGrandParent(null, () => BasicEnumWithParent.C,)                                                   .grandParent,).toBe(BasicEnumWithParent.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithGreatGrandParent(null, BasicEnumWithParent.D,)                                                         .grandParent,).toBe(BasicEnumWithParent.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithGreatGrandParent(null, () => BasicEnumWithParent.D,)                                                   .grandParent,).toBe(BasicEnumWithParent.D,),)
    },)
    describe("great-grandparent", () => {
        test("null",                    () => expect(() => new BasicEnumWithGreatGrandParent(null, null, null,)                                                                .greatGrandParent,).toThrow(NullReferenceException,),)
        test("undefined",               () => expect(() => new BasicEnumWithGreatGrandParent(null, null, undefined,)                                                           .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → null",               () => expect(() => new BasicEnumWithGreatGrandParent(null, null, () => null,)                                                          .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → undefined",          () => expect(() => new BasicEnumWithGreatGrandParent(null, null, () => undefined,)                                                     .greatGrandParent,).toThrow(NullReferenceException,),)
        test("null symbol",             () => expect(() => new BasicEnumWithGreatGrandParent(null, null, EnumConstants.NULL_ENUM_REFERENCE_SYMBOL,)                            .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → null symbol",        () => expect(() => new BasicEnumWithGreatGrandParent(null, null, () => EnumConstants.NULL_ENUM_REFERENCE_SYMBOL as PossibleEnumSymbol,).greatGrandParent,).toThrow(NullReferenceException,),)
        test("A as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, null, 'A',)                                                                 .greatGrandParent,).toBe(BasicEnum.A,),)
        test("A as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, null, new String('A',),)                                                    .greatGrandParent,).toBe(BasicEnum.A,),)
        test("() → A as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => 'A',)                                                           .greatGrandParent,).toBe(BasicEnum.A,),)
        test("() → A as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => new String('A',),)                                              .greatGrandParent,).toBe(BasicEnum.A,),)
        test("B as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, null, 'B',)                                                                 .greatGrandParent,).toBe(BasicEnum.B,),)
        test("B as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, null, new String('B',),)                                                    .greatGrandParent,).toBe(BasicEnum.B,),)
        test("() → B as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => 'B',)                                                           .greatGrandParent,).toBe(BasicEnum.B,),)
        test("() → B as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => new String('B',),)                                              .greatGrandParent,).toBe(BasicEnum.B,),)
        test("C as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, null, 'C',)                                                                 .greatGrandParent,).toBe(BasicEnum.C,),)
        test("C as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, null, new String('C',),)                                                    .greatGrandParent,).toBe(BasicEnum.C,),)
        test("() → C as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => 'C',)                                                           .greatGrandParent,).toBe(BasicEnum.C,),)
        test("() → C as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => new String('C',),)                                              .greatGrandParent,).toBe(BasicEnum.C,),)
        test("D as string",             () => expect(      new BasicEnumWithGreatGrandParent(null, null, 'D',)                                                                 .greatGrandParent,).toBe(BasicEnum.D,),)
        test("D as string object",      () => expect(      new BasicEnumWithGreatGrandParent(null, null, new String('D',),)                                                    .greatGrandParent,).toBe(BasicEnum.D,),)
        test("() → D as string",        () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => 'D',)                                                           .greatGrandParent,).toBe(BasicEnum.D,),)
        test("() → D as string object", () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => new String('D',),)                                              .greatGrandParent,).toBe(BasicEnum.D,),)
        test("E as string",             () => expect(() => new BasicEnumWithGreatGrandParent(null, null, 'E',)                                                                 .greatGrandParent,).toThrow(NullReferenceException,),)
        test("E as string object",      () => expect(() => new BasicEnumWithGreatGrandParent(null, null, new String('E',),)                                                    .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → E as string",        () => expect(() => new BasicEnumWithGreatGrandParent(null, null, () => 'E',)                                                           .greatGrandParent,).toThrow(NullReferenceException,),)
        test("() → E as string object", () => expect(() => new BasicEnumWithGreatGrandParent(null, null, () => new String('E',),)                                              .greatGrandParent,).toThrow(NullReferenceException,),)
        test("instance.A",              () => expect(      new BasicEnumWithGreatGrandParent(null, null, BasicEnum.A,)                                                         .greatGrandParent,).toBe(BasicEnum.A,),)
        test("() → instance.A",         () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => BasicEnum.A,)                                                   .greatGrandParent,).toBe(BasicEnum.A,),)
        test("instance.B",              () => expect(      new BasicEnumWithGreatGrandParent(null, null, BasicEnum.B,)                                                         .greatGrandParent,).toBe(BasicEnum.B,),)
        test("() → instance.B",         () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => BasicEnum.B,)                                                   .greatGrandParent,).toBe(BasicEnum.B,),)
        test("instance.C",              () => expect(      new BasicEnumWithGreatGrandParent(null, null, BasicEnum.C,)                                                         .greatGrandParent,).toBe(BasicEnum.C,),)
        test("() → instance.C",         () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => BasicEnum.C,)                                                   .greatGrandParent,).toBe(BasicEnum.C,),)
        test("instance.D",              () => expect(      new BasicEnumWithGreatGrandParent(null, null, BasicEnum.D,)                                                         .greatGrandParent,).toBe(BasicEnum.D,),)
        test("() → instance.D",         () => expect(      new BasicEnumWithGreatGrandParent(null, null, () => BasicEnum.D,)                                                   .greatGrandParent,).toBe(BasicEnum.D,),)
    },)

},)

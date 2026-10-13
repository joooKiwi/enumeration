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

import {BasicCompanionEnum}            from "./instance/BasicCompanionEnum"
import {BasicEnum}                     from "./instance/BasicEnum"
import {BasicEnumWithGrandParent}      from "./instance/BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent} from "./instance/BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}           from "./instance/BasicEnumWithParent"
import {CompanionEnum_Constructor}     from "./instance/CompanionEnum_Constructor"

import {ImpossibleOrdinalException} from "../src/exception/ImpossibleOrdinalException"
import {InvalidEnumerableException} from "../src/exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../src/exception/InvalidInstanceException"
import {NullEnumerableException}    from "../src/exception/NullEnumerableException"
import {NullInstanceException}      from "../src/exception/NullInstanceException"
import {NullReferenceException}     from "../src/exception/NullReferenceException"

describe("companionTests (CompanionEnum)", () => {

    describe("constructor", () => {
        // @ts-expect-error
        test("null",          () => expect(() => new CompanionEnum_Constructor(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("undefined",     () => expect(() => new CompanionEnum_Constructor(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("string",        () => expect(() => new CompanionEnum_Constructor("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("string object", () => expect(() => new CompanionEnum_Constructor(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("number",        () => expect(() => new CompanionEnum_Constructor(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("number object", () => expect(() => new CompanionEnum_Constructor(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("bigint",        () => expect(() => new CompanionEnum_Constructor(0n,),)               .toThrow(InvalidInstanceException,),)
        test("bigint object", () => expect(() => new CompanionEnum_Constructor(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("symbol",        () => expect(() => new CompanionEnum_Constructor(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("symbol object", () => expect(() => new CompanionEnum_Constructor(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("object",        () => expect(() => new CompanionEnum_Constructor({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("function",      () => expect(() => new CompanionEnum_Constructor(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("array",         () => expect(() => new CompanionEnum_Constructor([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("set",           () => expect(() => new CompanionEnum_Constructor(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("weak set",      () => expect(() => new CompanionEnum_Constructor(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("map",           () => expect(() => new CompanionEnum_Constructor(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("weak map",      () => expect(() => new CompanionEnum_Constructor(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        test("valid", () => expect(() => new CompanionEnum_Constructor(BasicEnum,),).not.toThrow(),)
    },)

    describe("set defaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnum().defaultValue = null,)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnum().defaultValue = undefined,)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnum().defaultValue = 0,)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnum().defaultValue = new Number(),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnum().defaultValue = 0n,)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnum().defaultValue = Object(0n,),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnum().defaultValue = '0',)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String(0,),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnum().defaultValue = 1,)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnum().defaultValue = new Number(1,),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnum().defaultValue = 1n,)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnum().defaultValue = Object(1n,),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnum().defaultValue = '1',)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String(1,),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnum().defaultValue = 2,)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnum().defaultValue = new Number(2,),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnum().defaultValue = 2n,)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnum().defaultValue = Object(2n,),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnum().defaultValue = '2',)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String(2,),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnum().defaultValue = 3,)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnum().defaultValue = new Number(3,),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnum().defaultValue = 3n,)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnum().defaultValue = Object(3n,),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnum().defaultValue = '3',)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String(3,),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnum().defaultValue = 4,)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnum().defaultValue = new Number(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnum().defaultValue = 4n,)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnum().defaultValue = Object(4n,),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnum().defaultValue = '4',)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnum().defaultValue = 'A',)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String('A',),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnum().defaultValue = 'B',)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String('B',),)               .not.toThrow(),)
        test("C as string",         () => expect(() => new BasicCompanionEnum().defaultValue = 'C',)                            .not.toThrow(),)
        test("C as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String('C',),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnum().defaultValue = 'D',)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String('D',),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnum().defaultValue = 'E',)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnum().defaultValue = new String('E',),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnum.A,)                    .not.toThrow(),)
        test("child.B",             () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnum.B,)                    .not.toThrow(),)
        test("child.C",             () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnum.C,)                    .not.toThrow(),)
        test("child.D",             () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnum.D,)                    .not.toThrow(),)
        // @ts-expect-error
        test("parent.A",            () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnumWithParent.A,)          .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnumWithGrandParent.A,)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnum().defaultValue = BasicEnumWithGreatGrandParent.A,).toThrow(InvalidEnumerableException,),)
    },)
    describe("setDefaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnum().setDefaultValue(null,),)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnum().setDefaultValue(undefined,),)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnum().setDefaultValue(0,),)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new Number(),),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnum().setDefaultValue(0n,),)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(Object(0n,),),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('0',),)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String(0,),),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnum().setDefaultValue(1,),)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new Number(1,),),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnum().setDefaultValue(1n,),)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(Object(1n,),),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('1',),)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String(1,),),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnum().setDefaultValue(2,),)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new Number(2,),),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnum().setDefaultValue(2n,),)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(Object(2n,),),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('2',),)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String(2,),),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnum().setDefaultValue(3,),)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new Number(3,),),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnum().setDefaultValue(3n,),)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(Object(3n,),),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('3',),)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String(3,),),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnum().setDefaultValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnum().setDefaultValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('A',),)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String('A',),),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('B',),)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String('B',),),)               .not.toThrow(),)
        test("C as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('C',),)                            .not.toThrow(),)
        test("C as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String('C',),),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('D',),)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String('D',),),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnum().setDefaultValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnum().setDefaultValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnum.A,),)                    .not.toThrow(),)
        test("child.B",             () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnum.B,),)                    .not.toThrow(),)
        test("child.C",             () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnum.C,),)                    .not.toThrow(),)
        test("child.D",             () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnum.D,),)                    .not.toThrow(),)
        // @ts-expect-error
        test("parent.A",            () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnumWithParent.A,),)          .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnum().setDefaultValue(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnum().getValue(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnum().getValue(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnum().getValue(0,),)                              .toBe(BasicEnum.A,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnum().getValue(new Number(),),)                   .toBe(BasicEnum.A,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnum().getValue(0n,),)                             .toBe(BasicEnum.A,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnum().getValue(Object(0n,),),)                    .toBe(BasicEnum.A,),)
        test("0 as string",         () => expect(      new BasicCompanionEnum().getValue('0',),)                            .toBe(BasicEnum.A,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnum().getValue(new String(0,),),)                 .toBe(BasicEnum.A,),)
        test("1 as number",         () => expect(      new BasicCompanionEnum().getValue(1,),)                              .toBe(BasicEnum.B,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnum().getValue(new Number(1,),),)                 .toBe(BasicEnum.B,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnum().getValue(1n,),)                             .toBe(BasicEnum.B,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnum().getValue(Object(1n,),),)                    .toBe(BasicEnum.B,),)
        test("1 as string",         () => expect(      new BasicCompanionEnum().getValue('1',),)                            .toBe(BasicEnum.B,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnum().getValue(new String(1,),),)                 .toBe(BasicEnum.B,),)
        test("2 as number",         () => expect(      new BasicCompanionEnum().getValue(2,),)                              .toBe(BasicEnum.C,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnum().getValue(new Number(2,),),)                 .toBe(BasicEnum.C,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnum().getValue(2n,),)                             .toBe(BasicEnum.C,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnum().getValue(Object(2n,),),)                    .toBe(BasicEnum.C,),)
        test("2 as string",         () => expect(      new BasicCompanionEnum().getValue('2',),)                            .toBe(BasicEnum.C,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnum().getValue(new String(2,),),)                 .toBe(BasicEnum.C,),)
        test("3 as number",         () => expect(      new BasicCompanionEnum().getValue(3,),)                              .toBe(BasicEnum.D,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnum().getValue(new Number(3,),),)                 .toBe(BasicEnum.D,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnum().getValue(3n,),)                             .toBe(BasicEnum.D,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnum().getValue(Object(3n,),),)                    .toBe(BasicEnum.D,),)
        test("3 as string",         () => expect(      new BasicCompanionEnum().getValue('3',),)                            .toBe(BasicEnum.D,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnum().getValue(new String(3,),),)                 .toBe(BasicEnum.D,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnum().getValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnum().getValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnum().getValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnum().getValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnum().getValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnum().getValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnum().getValue('A',),)                            .toBe(BasicEnum.A,),)
        test("A as string object",  () => expect(      new BasicCompanionEnum().getValue(new String('A',),),)               .toBe(BasicEnum.A,),)
        test("B as string",         () => expect(      new BasicCompanionEnum().getValue('B',),)                            .toBe(BasicEnum.B,),)
        test("B as string object",  () => expect(      new BasicCompanionEnum().getValue(new String('B',),),)               .toBe(BasicEnum.B,),)
        test("C as string",         () => expect(      new BasicCompanionEnum().getValue('C',),)                            .toBe(BasicEnum.C,),)
        test("C as string object",  () => expect(      new BasicCompanionEnum().getValue(new String('C',),),)               .toBe(BasicEnum.C,),)
        test("D as string",         () => expect(      new BasicCompanionEnum().getValue('D',),)                            .toBe(BasicEnum.D,),)
        test("D as string object",  () => expect(      new BasicCompanionEnum().getValue(new String('D',),),)               .toBe(BasicEnum.D,),)
        test("E as string",         () => expect(() => new BasicCompanionEnum().getValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnum().getValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(      new BasicCompanionEnum().getValue(BasicEnum.A,),)                    .toBe(BasicEnum.A,),)
        test("child.B",             () => expect(      new BasicCompanionEnum().getValue(BasicEnum.B,),)                    .toBe(BasicEnum.B,),)
        test("child.C",             () => expect(      new BasicCompanionEnum().getValue(BasicEnum.C,),)                    .toBe(BasicEnum.C,),)
        test("child.D",             () => expect(      new BasicCompanionEnum().getValue(BasicEnum.D,),)                    .toBe(BasicEnum.D,),)
        // @ts-expect-error
        test("parent.A",            () => expect(() => new BasicCompanionEnum().getValue(BasicEnumWithParent.A,),)          .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnum().getValue(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnum().getValue(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getName", () => {
        test("null",                () => expect(() => new BasicCompanionEnum().getName(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnum().getName(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnum().getName(0,),)                              .toBe('A',),)
        test("0 as number object",  () => expect(      new BasicCompanionEnum().getName(new Number(),),)                   .toBe('A',),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnum().getName(0n,),)                             .toBe('A',),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnum().getName(Object(0n,),),)                    .toBe('A',),)
        test("0 as string",         () => expect(      new BasicCompanionEnum().getName('0',),)                            .toBe('A',),)
        test("0 as string object",  () => expect(      new BasicCompanionEnum().getName(new String(0,),),)                 .toBe('A',),)
        test("1 as number",         () => expect(      new BasicCompanionEnum().getName(1,),)                              .toBe('B',),)
        test("1 as number object",  () => expect(      new BasicCompanionEnum().getName(new Number(1,),),)                 .toBe('B',),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnum().getName(1n,),)                             .toBe('B',),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnum().getName(Object(1n,),),)                    .toBe('B',),)
        test("1 as string",         () => expect(      new BasicCompanionEnum().getName('1',),)                            .toBe('B',),)
        test("1 as string object",  () => expect(      new BasicCompanionEnum().getName(new String(1,),),)                 .toBe('B',),)
        test("2 as number",         () => expect(      new BasicCompanionEnum().getName(2,),)                              .toBe('C',),)
        test("2 as number object",  () => expect(      new BasicCompanionEnum().getName(new Number(2,),),)                 .toBe('C',),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnum().getName(2n,),)                             .toBe('C',),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnum().getName(Object(2n,),),)                    .toBe('C',),)
        test("2 as string",         () => expect(      new BasicCompanionEnum().getName('2',),)                            .toBe('C',),)
        test("2 as string object",  () => expect(      new BasicCompanionEnum().getName(new String(2,),),)                 .toBe('C',),)
        test("3 as number",         () => expect(      new BasicCompanionEnum().getName(3,),)                              .toBe('D',),)
        test("3 as number object",  () => expect(      new BasicCompanionEnum().getName(new Number(3,),),)                 .toBe('D',),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnum().getName(3n,),)                             .toBe('D',),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnum().getName(Object(3n,),),)                    .toBe('D',),)
        test("3 as string",         () => expect(      new BasicCompanionEnum().getName('3',),)                            .toBe('D',),)
        test("3 as string object",  () => expect(      new BasicCompanionEnum().getName(new String(3,),),)                 .toBe('D',),)
        test("4 as number",         () => expect(() => new BasicCompanionEnum().getName(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnum().getName(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnum().getName(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnum().getName(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnum().getName('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnum().getName(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnum().getName('A',),)                            .toBe('A',),)
        test("A as string object",  () => expect(      new BasicCompanionEnum().getName(new String('A',),),)               .toBe('A',),)
        test("B as string",         () => expect(      new BasicCompanionEnum().getName('B',),)                            .toBe('B',),)
        test("B as string object",  () => expect(      new BasicCompanionEnum().getName(new String('B',),),)               .toBe('B',),)
        test("C as string",         () => expect(      new BasicCompanionEnum().getName('C',),)                            .toBe('C',),)
        test("C as string object",  () => expect(      new BasicCompanionEnum().getName(new String('C',),),)               .toBe('C',),)
        test("D as string",         () => expect(      new BasicCompanionEnum().getName('D',),)                            .toBe('D',),)
        test("D as string object",  () => expect(      new BasicCompanionEnum().getName(new String('D',),),)               .toBe('D',),)
        test("E as string",         () => expect(() => new BasicCompanionEnum().getName('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnum().getName(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(      new BasicCompanionEnum().getName(BasicEnum.A,),)                    .toBe('A',),)
        test("child.B",             () => expect(      new BasicCompanionEnum().getName(BasicEnum.B,),)                    .toBe('B',),)
        test("child.C",             () => expect(      new BasicCompanionEnum().getName(BasicEnum.C,),)                    .toBe('C',),)
        test("child.D",             () => expect(      new BasicCompanionEnum().getName(BasicEnum.D,),)                    .toBe('D',),)
        // @ts-expect-error
        test("parent.A",            () => expect(() => new BasicCompanionEnum().getName(BasicEnumWithParent.A,),)          .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnum().getName(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnum().getName(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    describe("getOrdinal", () => {
        test("null",                () => expect(() => new BasicCompanionEnum().getOrdinal(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnum().getOrdinal(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnum().getOrdinal(0,),)                              .toBe(0,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnum().getOrdinal(new Number(),),)                   .toBe(0,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnum().getOrdinal(0n,),)                             .toBe(0,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnum().getOrdinal(Object(0n,),),)                    .toBe(0,),)
        test("0 as string",         () => expect(      new BasicCompanionEnum().getOrdinal('0',),)                            .toBe(0,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String(0,),),)                 .toBe(0,),)
        test("1 as number",         () => expect(      new BasicCompanionEnum().getOrdinal(1,),)                              .toBe(1,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnum().getOrdinal(new Number(1,),),)                 .toBe(1,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnum().getOrdinal(1n,),)                             .toBe(1,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnum().getOrdinal(Object(1n,),),)                    .toBe(1,),)
        test("1 as string",         () => expect(      new BasicCompanionEnum().getOrdinal('1',),)                            .toBe(1,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String(1,),),)                 .toBe(1,),)
        test("2 as number",         () => expect(      new BasicCompanionEnum().getOrdinal(2,),)                              .toBe(2,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnum().getOrdinal(new Number(2,),),)                 .toBe(2,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnum().getOrdinal(2n,),)                             .toBe(2,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnum().getOrdinal(Object(2n,),),)                    .toBe(2,),)
        test("2 as string",         () => expect(      new BasicCompanionEnum().getOrdinal('2',),)                            .toBe(2,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String(2,),),)                 .toBe(2,),)
        test("3 as number",         () => expect(      new BasicCompanionEnum().getOrdinal(3,),)                              .toBe(3,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnum().getOrdinal(new Number(3,),),)                 .toBe(3,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnum().getOrdinal(3n,),)                             .toBe(3,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnum().getOrdinal(Object(3n,),),)                    .toBe(3,),)
        test("3 as string",         () => expect(      new BasicCompanionEnum().getOrdinal('3',),)                            .toBe(3,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String(3,),),)                 .toBe(3,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnum().getOrdinal(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnum().getOrdinal(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnum().getOrdinal(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnum().getOrdinal(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnum().getOrdinal('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnum().getOrdinal(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnum().getOrdinal('A',),)                            .toBe(0,),)
        test("A as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String('A',),),)               .toBe(0,),)
        test("B as string",         () => expect(      new BasicCompanionEnum().getOrdinal('B',),)                            .toBe(1,),)
        test("B as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String('B',),),)               .toBe(1,),)
        test("C as string",         () => expect(      new BasicCompanionEnum().getOrdinal('C',),)                            .toBe(2,),)
        test("C as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String('C',),),)               .toBe(2,),)
        test("D as string",         () => expect(      new BasicCompanionEnum().getOrdinal('D',),)                            .toBe(3,),)
        test("D as string object",  () => expect(      new BasicCompanionEnum().getOrdinal(new String('D',),),)               .toBe(3,),)
        test("E as string",         () => expect(() => new BasicCompanionEnum().getOrdinal('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnum().getOrdinal(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(      new BasicCompanionEnum().getOrdinal(BasicEnum.A,),)                    .toBe(0,),)
        test("child.B",             () => expect(      new BasicCompanionEnum().getOrdinal(BasicEnum.B,),)                    .toBe(1,),)
        test("child.C",             () => expect(      new BasicCompanionEnum().getOrdinal(BasicEnum.C,),)                    .toBe(2,),)
        test("child.D",             () => expect(      new BasicCompanionEnum().getOrdinal(BasicEnum.D,),)                    .toBe(3,),)
        // @ts-expect-error
        test("parent.A",            () => expect(() => new BasicCompanionEnum().getOrdinal(BasicEnumWithParent.A,),)          .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("grandparent.A",       () => expect(() => new BasicCompanionEnum().getOrdinal(BasicEnumWithGrandParent.A,),)     .toThrow(InvalidEnumerableException,),)
        // @ts-expect-error
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnum().getOrdinal(BasicEnumWithGreatGrandParent.A,),).toThrow(InvalidEnumerableException,),)
    },)
    
},)

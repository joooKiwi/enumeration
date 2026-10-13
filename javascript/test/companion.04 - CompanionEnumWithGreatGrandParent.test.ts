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

import {BasicCompanionEnumWithGreatGrandParent}     from "./instance/BasicCompanionEnumWithGreatGrandParent"
import {BasicEnum}                                  from "./instance/BasicEnum"
import {BasicEnumWithGrandParent}                   from "./instance/BasicEnumWithGrandParent"
import {BasicEnumWithGreatGrandParent}              from "./instance/BasicEnumWithGreatGrandParent"
import {BasicEnumWithParent}                        from "./instance/BasicEnumWithParent"
import {CompanionEnum_GreatGrandParentConstructor1} from "./instance/CompanionEnum_GreatGrandParentConstructor1"
import {CompanionEnum_GreatGrandParentConstructor2} from "./instance/CompanionEnum_GreatGrandParentConstructor2"
import {CompanionEnum_GreatGrandParentConstructor3} from "./instance/CompanionEnum_GreatGrandParentConstructor3"
import {CompanionEnum_GreatGrandParentConstructor4} from "./instance/CompanionEnum_GreatGrandParentConstructor4"
import {CompanionEnum_GreatGrandParentConstructor}  from "./instance/CompanionEnum_GreatGrandParentConstructor"

import {ImpossibleOrdinalException} from "../src/exception/ImpossibleOrdinalException"
import {InvalidInstanceException}   from "../src/exception/InvalidInstanceException"
import {NullEnumerableException}    from "../src/exception/NullEnumerableException"
import {NullInstanceException}      from "../src/exception/NullInstanceException"
import {NullReferenceException}     from "../src/exception/NullReferenceException"

describe("companionTests (CompanionEnumWithGreatGrandParent)", () => {

    describe("constructor", () => {
        // @ts-expect-error
        test("1st parameter - null",          () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("1st parameter - undefined",     () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("1st parameter - string",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor1("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - string object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - number",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - number object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - bigint",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(0n,),)               .toThrow(InvalidInstanceException,),)
        test("1st parameter - bigint object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - symbol",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("1st parameter - symbol object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - object",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor1({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - function",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - array",         () => expect(() => new CompanionEnum_GreatGrandParentConstructor1([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - set",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - weak set",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - map",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("1st parameter - weak map",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor1(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("2nd parameter - null",          () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - undefined",     () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - string",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor2("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - string object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - number",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - number object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - bigint",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(0n,),)               .toThrow(InvalidInstanceException,),)
        test("2nd parameter - bigint object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - symbol",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("2nd parameter - symbol object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - object",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor2({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - function",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - array",         () => expect(() => new CompanionEnum_GreatGrandParentConstructor2([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - set",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - weak set",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - map",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("2nd parameter - weak map",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor2(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("3rd parameter - null",          () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - undefined",     () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - string",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor3("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - string object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - number",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - number object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - bigint",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(0n,),)               .toThrow(InvalidInstanceException,),)
        test("3rd parameter - bigint object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - symbol",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("3rd parameter - symbol object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - object",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor3({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - function",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - array",         () => expect(() => new CompanionEnum_GreatGrandParentConstructor3([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - set",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - weak set",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - map",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("3rd parameter - weak map",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor3(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("4th parameter - null",          () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(null,),)             .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("4th parameter - undefined",     () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(undefined,),)        .toThrow(NullInstanceException,),)
        // @ts-expect-error
        test("4th parameter - string",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor4("",),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - string object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(new String(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - number",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(0,),)                .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - number object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(new Number(),),)     .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - bigint",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(0n,),)               .toThrow(InvalidInstanceException,),)
        test("4th parameter - bigint object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(Object(0n,),),)      .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - symbol",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(Symbol(),),)         .toThrow(InvalidInstanceException,),)
        test("4th parameter - symbol object", () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(Object(Symbol(),),),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - object",        () => expect(() => new CompanionEnum_GreatGrandParentConstructor4({},),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - function",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(() => {},),)         .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - array",         () => expect(() => new CompanionEnum_GreatGrandParentConstructor4([],),)               .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - set",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(new Set(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - weak set",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(new WeakSet(),),)    .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - map",           () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(new Map(),),)        .toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("4th parameter - weak map",      () => expect(() => new CompanionEnum_GreatGrandParentConstructor4(new WeakMap(),),)    .toThrow(InvalidInstanceException,),)

        // @ts-expect-error
        test("order - child, parent, grandparent, great-grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnum, BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - child, parent, great-grandparent, grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnum, BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - child, grandparent, parent, great-grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnumWithGreatGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - child, grandparent, great-grandparent, parent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnum, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - child, great-grandparent, grandparent, parent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - child, great-grandparent, parent, grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, child, grandparent, great-grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithParent, BasicEnum, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, child, great-grandparent, grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithParent, BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, grandparent, child, great-grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnum, BasicEnumWithGreatGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, grandparent, great-grandparent, child", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnum,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, great-grandparent, child, grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - parent, great-grandparent, grandparent, child", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnum,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, child, parent, great-grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGrandParent, BasicEnum, BasicEnumWithParent, BasicEnumWithGreatGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, child, great-grandparent, parent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGrandParent, BasicEnum, BasicEnumWithGreatGrandParent, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, parent, child, great-grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum, BasicEnumWithGreatGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, parent, great-grandparent, child", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnumWithGreatGrandParent, BasicEnum,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, great-grandparent, parent, child", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnum,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - grandparent, great-grandparent, child, parent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGrandParent, BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - great-grandparent, child, parent, grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithParent, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - great-grandparent, child, grandparent, parent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGreatGrandParent, BasicEnum, BasicEnumWithGrandParent, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - great-grandparent, parent, child, grandparent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnum, BasicEnumWithGrandParent,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - great-grandparent, parent, grandparent, child", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGreatGrandParent, BasicEnumWithParent, BasicEnumWithGrandParent, BasicEnum,),).toThrow(InvalidInstanceException,),)
        // @ts-expect-error
        test("order - great-grandparent, grandparent, child, parent", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnum, BasicEnumWithParent,),).toThrow(InvalidInstanceException,),)

        test("valid", () => expect(() => new CompanionEnum_GreatGrandParentConstructor(BasicEnumWithGreatGrandParent, BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,),).not.toThrow(),)
    },)

    describe("set defaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = null,)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = undefined,)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 0,)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new Number(),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 0n,)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = Object(0n,),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = '0',)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String(0,),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 1,)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new Number(1,),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 1n,)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = Object(1n,),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = '1',)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String(1,),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 2,)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new Number(2,),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 2n,)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = Object(2n,),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = '2',)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String(2,),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 3,)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new Number(3,),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 3n,)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = Object(3n,),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = '3',)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String(3,),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 4,)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new Number(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 4n,)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = Object(4n,),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = '4',)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String(4,),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 'A',)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String('A',),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 'B',)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String('B',),)               .not.toThrow(),)
        test("C as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 'C',)                            .not.toThrow(),)
        test("C as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String('C',),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 'D',)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String('D',),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = 'E',)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = new String('E',),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnum.A,)                    .not.toThrow(),)
        test("child.B",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnum.B,)                    .not.toThrow(),)
        test("child.C",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnum.C,)                    .not.toThrow(),)
        test("child.D",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnum.D,)                    .not.toThrow(),)
        test("parent.A",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithParent.A,)          .not.toThrow(),)
        test("parent.B",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithParent.B,)          .not.toThrow(),)
        test("parent.C",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithParent.C,)          .not.toThrow(),)
        test("parent.D",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithParent.D,)          .not.toThrow(),)
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGrandParent.A,)     .not.toThrow(),)
        test("grandparent.B",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGrandParent.B,)     .not.toThrow(),)
        test("grandparent.C",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGrandParent.C,)     .not.toThrow(),)
        test("grandparent.D",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGrandParent.D,)     .not.toThrow(),)
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGreatGrandParent.A,).not.toThrow(),)
        test("great-grandparent.B", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGreatGrandParent.B,).not.toThrow(),)
        test("great-grandparent.C", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGreatGrandParent.C,).not.toThrow(),)
        test("great-grandparent.D", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().defaultValue = BasicEnumWithGreatGrandParent.D,).not.toThrow(),)
    },)
    describe("setDefaultValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(null,),)                           .not.toThrow(),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(undefined,),)                      .not.toThrow(),)
        test("0 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(0,),)                              .not.toThrow(),)
        test("0 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new Number(),),)                   .not.toThrow(),)
        test("0 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(0n,),)                             .not.toThrow(),)
        test("0 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(Object(0n,),),)                    .not.toThrow(),)
        test("0 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('0',),)                            .not.toThrow(),)
        test("0 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String(0,),),)                 .not.toThrow(),)
        test("1 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(1,),)                              .not.toThrow(),)
        test("1 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new Number(1,),),)                 .not.toThrow(),)
        test("1 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(1n,),)                             .not.toThrow(),)
        test("1 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(Object(1n,),),)                    .not.toThrow(),)
        test("1 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('1',),)                            .not.toThrow(),)
        test("1 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String(1,),),)                 .not.toThrow(),)
        test("2 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(2,),)                              .not.toThrow(),)
        test("2 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new Number(2,),),)                 .not.toThrow(),)
        test("2 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(2n,),)                             .not.toThrow(),)
        test("2 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(Object(2n,),),)                    .not.toThrow(),)
        test("2 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('2',),)                            .not.toThrow(),)
        test("2 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String(2,),),)                 .not.toThrow(),)
        test("3 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(3,),)                              .not.toThrow(),)
        test("3 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new Number(3,),),)                 .not.toThrow(),)
        test("3 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(3n,),)                             .not.toThrow(),)
        test("3 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(Object(3n,),),)                    .not.toThrow(),)
        test("3 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('3',),)                            .not.toThrow(),)
        test("3 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String(3,),),)                 .not.toThrow(),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('A',),)                            .not.toThrow(),)
        test("A as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String('A',),),)               .not.toThrow(),)
        test("B as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('B',),)                            .not.toThrow(),)
        test("B as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String('B',),),)               .not.toThrow(),)
        test("D as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('D',),)                            .not.toThrow(),)
        test("D as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String('D',),),)               .not.toThrow(),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnum.A,),)                    .not.toThrow(),)
        test("child.B",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnum.B,),)                    .not.toThrow(),)
        test("child.C",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnum.C,),)                    .not.toThrow(),)
        test("child.D",             () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnum.D,),)                    .not.toThrow(),)
        test("parent.A",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithParent.A,),)          .not.toThrow(),)
        test("parent.B",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithParent.B,),)          .not.toThrow(),)
        test("parent.C",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithParent.C,),)          .not.toThrow(),)
        test("parent.D",            () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithParent.D,),)          .not.toThrow(),)
        test("grandparent.A",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGrandParent.A,),)     .not.toThrow(),)
        test("grandparent.B",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGrandParent.C,),)     .not.toThrow(),)
        test("grandparent.C",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGrandParent.B,),)     .not.toThrow(),)
        test("grandparent.D",       () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGrandParent.D,),)     .not.toThrow(),)
        test("great-grandparent.A", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGreatGrandParent.A,),).not.toThrow(),)
        test("great-grandparent.B", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGreatGrandParent.B,),).not.toThrow(),)
        test("great-grandparent.C", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGreatGrandParent.C,),).not.toThrow(),)
        test("great-grandparent.D", () => expect(() => new BasicCompanionEnumWithGreatGrandParent().setDefaultValue(BasicEnumWithGreatGrandParent.D,),).not.toThrow(),)
    },)
    describe("getValue", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(0,),)                              .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new Number(),),)                   .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(0n,),)                             .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(Object(0n,),),)                    .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('0',),)                            .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String(0,),),)                 .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(1,),)                              .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new Number(1,),),)                 .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(1n,),)                             .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(Object(1n,),),)                    .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('1',),)                            .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String(1,),),)                 .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(2,),)                              .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new Number(2,),),)                 .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(2n,),)                             .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(Object(2n,),),)                    .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('2',),)                            .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String(2,),),)                 .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(3,),)                              .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new Number(3,),),)                 .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(3n,),)                             .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(Object(3n,),),)                    .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('3',),)                            .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String(3,),),)                 .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('A',),)                            .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String('A',),),)               .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('B',),)                            .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String('B',),),)               .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('C',),)                            .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String('C',),),)               .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue('D',),)                            .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(new String('D',),),)               .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getValue(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnum.A,),)                    .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("child.B",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnum.B,),)                    .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("child.C",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnum.C,),)                    .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("child.D",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnum.D,),)                    .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithParent.A,),)          .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithParent.B,),)          .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithParent.C,),)          .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithParent.D,),)          .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("grandparent.A",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGrandParent.A,),)     .toBe(BasicEnumWithGreatGrandParent.A,),)
        test("grandparent.B",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGrandParent.B,),)     .toBe(BasicEnumWithGreatGrandParent.B,),)
        test("grandparent.C",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGrandParent.C,),)     .toBe(BasicEnumWithGreatGrandParent.C,),)
        test("grandparent.D",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGrandParent.D,),)     .toBe(BasicEnumWithGreatGrandParent.D,),)
        test("great-grandparent.A", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGreatGrandParent.A,),).toBe(BasicEnumWithGreatGrandParent.A,),)
        test("great-grandparent.B", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGreatGrandParent.B,),).toBe(BasicEnumWithGreatGrandParent.B,),)
        test("great-grandparent.C", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGreatGrandParent.C,),).toBe(BasicEnumWithGreatGrandParent.C,),)
        test("great-grandparent.D", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getValue(BasicEnumWithGreatGrandParent.D,),).toBe(BasicEnumWithGreatGrandParent.D,),)
    },)
    describe("getName", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(0,),)                              .toBe('A',),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new Number(),),)                   .toBe('A',),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(0n,),)                             .toBe('A',),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(Object(0n,),),)                    .toBe('A',),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('0',),)                            .toBe('A',),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String(0,),),)                 .toBe('A',),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(1,),)                              .toBe('B',),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new Number(1,),),)                 .toBe('B',),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(1n,),)                             .toBe('B',),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(Object(1n,),),)                    .toBe('B',),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('1',),)                            .toBe('B',),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String(1,),),)                 .toBe('B',),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(2,),)                              .toBe('C',),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new Number(2,),),)                 .toBe('C',),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(2n,),)                             .toBe('C',),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(Object(2n,),),)                    .toBe('C',),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('2',),)                            .toBe('C',),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String(2,),),)                 .toBe('C',),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(3,),)                              .toBe('D',),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new Number(3,),),)                 .toBe('D',),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(3n,),)                             .toBe('D',),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(Object(3n,),),)                    .toBe('D',),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('3',),)                            .toBe('D',),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String(3,),),)                 .toBe('D',),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('A',),)                            .toBe('A',),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String('A',),),)               .toBe('A',),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('B',),)                            .toBe('B',),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String('B',),),)               .toBe('B',),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('C',),)                            .toBe('C',),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String('C',),),)               .toBe('C',),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName('D',),)                            .toBe('D',),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(new String('D',),),)               .toBe('D',),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getName(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnum.A,),)                    .toBe('A',),)
        test("child.B",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnum.B,),)                    .toBe('B',),)
        test("child.C",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnum.C,),)                    .toBe('C',),)
        test("child.D",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnum.D,),)                    .toBe('D',),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithParent.A,),)          .toBe('A',),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithParent.B,),)          .toBe('B',),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithParent.C,),)          .toBe('C',),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithParent.D,),)          .toBe('D',),)
        test("grandparent.A",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGrandParent.A,),)     .toBe('A',),)
        test("grandparent.B",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGrandParent.B,),)     .toBe('B',),)
        test("grandparent.C",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGrandParent.C,),)     .toBe('C',),)
        test("grandparent.D",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGrandParent.D,),)     .toBe('D',),)
        test("great-grandparent.A", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGreatGrandParent.A,),).toBe('A',),)
        test("great-grandparent.B", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGreatGrandParent.B,),).toBe('B',),)
        test("great-grandparent.C", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGreatGrandParent.C,),).toBe('C',),)
        test("great-grandparent.D", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getName(BasicEnumWithGreatGrandParent.D,),).toBe('D',),)
    },)
    describe("getOrdinal", () => {
        test("null",                () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(null,),)                           .toThrow(NullEnumerableException,),)
        test("undefined",           () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(undefined,),)                      .toThrow(NullEnumerableException,),)
        test("0 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(0,),)                              .toBe(0,),)
        test("0 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new Number(),),)                   .toBe(0,),)
        test("0 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(0n,),)                             .toBe(0,),)
        test("0 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(Object(0n,),),)                    .toBe(0,),)
        test("0 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('0',),)                            .toBe(0,),)
        test("0 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String(0,),),)                 .toBe(0,),)
        test("1 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(1,),)                              .toBe(1,),)
        test("1 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new Number(1,),),)                 .toBe(1,),)
        test("1 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(1n,),)                             .toBe(1,),)
        test("1 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(Object(1n,),),)                    .toBe(1,),)
        test("1 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('1',),)                            .toBe(1,),)
        test("1 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String(1,),),)                 .toBe(1,),)
        test("2 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(2,),)                              .toBe(2,),)
        test("2 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new Number(2,),),)                 .toBe(2,),)
        test("2 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(2n,),)                             .toBe(2,),)
        test("2 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(Object(2n,),),)                    .toBe(2,),)
        test("2 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('2',),)                            .toBe(2,),)
        test("2 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String(2,),),)                 .toBe(2,),)
        test("3 as number",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(3,),)                              .toBe(3,),)
        test("3 as number object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new Number(3,),),)                 .toBe(3,),)
        test("3 as bigint",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(3n,),)                             .toBe(3,),)
        test("3 as bigint object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(Object(3n,),),)                    .toBe(3,),)
        test("3 as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('3',),)                            .toBe(3,),)
        test("3 as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String(3,),),)                 .toBe(3,),)
        test("4 as number",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(4,),)                              .toThrow(ImpossibleOrdinalException,),)
        test("4 as number object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new Number(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(4n,),)                             .toThrow(ImpossibleOrdinalException,),)
        test("4 as bigint object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(Object(4n,),),)                    .toThrow(ImpossibleOrdinalException,),)
        test("4 as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal('4',),)                            .toThrow(ImpossibleOrdinalException,),)
        test("4 as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String(4,),),)                 .toThrow(ImpossibleOrdinalException,),)
        test("A as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('A',),)                            .toBe(0,),)
        test("A as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String('A',),),)               .toBe(0,),)
        test("B as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('B',),)                            .toBe(1,),)
        test("B as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String('B',),),)               .toBe(1,),)
        test("C as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('C',),)                            .toBe(2,),)
        test("C as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String('C',),),)               .toBe(2,),)
        test("D as string",         () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal('D',),)                            .toBe(3,),)
        test("D as string object",  () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String('D',),),)               .toBe(3,),)
        test("E as string",         () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal('E',),)                            .toThrow(NullReferenceException,),)
        test("E as string object",  () => expect(() => new BasicCompanionEnumWithGreatGrandParent().getOrdinal(new String('E',),),)               .toThrow(NullReferenceException,),)
        test("child.A",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnum.A,),)                    .toBe(0,),)
        test("child.B",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnum.B,),)                    .toBe(1,),)
        test("child.C",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnum.C,),)                    .toBe(2,),)
        test("child.D",             () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnum.D,),)                    .toBe(3,),)
        test("parent.A",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithParent.A,),)          .toBe(0,),)
        test("parent.B",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithParent.B,),)          .toBe(1,),)
        test("parent.C",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithParent.C,),)          .toBe(2,),)
        test("parent.D",            () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithParent.D,),)          .toBe(3,),)
        test("grandparent.A",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGrandParent.A,),)     .toBe(0,),)
        test("grandparent.B",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGrandParent.B,),)     .toBe(1,),)
        test("grandparent.C",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGrandParent.C,),)     .toBe(2,),)
        test("grandparent.D",       () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGrandParent.D,),)     .toBe(3,),)
        test("great-grandparent.A", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGreatGrandParent.A,),).toBe(0,),)
        test("great-grandparent.B", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGreatGrandParent.B,),).toBe(1,),)
        test("great-grandparent.C", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGreatGrandParent.C,),).toBe(2,),)
        test("great-grandparent.D", () => expect(      new BasicCompanionEnumWithGreatGrandParent().getOrdinal(BasicEnumWithGreatGrandParent.D,),).toBe(3,),)
    },)

},)

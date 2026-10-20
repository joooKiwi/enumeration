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

import {describe, expectTypeOf} from "vitest"

import {BasicCompanionEnum} from "./instance/BasicCompanionEnum"
import {BasicEnum}          from "./instance/BasicEnum"

describe("setDefaultValue", () => {
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().setDefaultValue("greatGrandParent",),).toBeNever()
},)
describe("getValue", () => {
    expectTypeOf(new BasicCompanionEnum().getValue(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnum().getValue('A',),)         .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnum().getValue(0,),)           .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnum().getValue('0',),)         .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnum().getValue(`${0}`,),)      .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum.A,),) .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum[0],),).toEqualTypeOf<typeof BasicEnum.A>()

    expectTypeOf(new BasicCompanionEnum().getValue('B',),)         .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnum().getValue(1,),)           .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnum().getValue('1',),)         .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnum().getValue(`${1}`,),)      .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum.B,),) .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum[1],),).toEqualTypeOf<typeof BasicEnum.B>()

    expectTypeOf(new BasicCompanionEnum().getValue('C',),)         .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnum().getValue(2,),)           .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnum().getValue('2',),)         .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnum().getValue(`${2}`,),)      .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum.C,),) .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum[2],),).toEqualTypeOf<typeof BasicEnum.C>()

    expectTypeOf(new BasicCompanionEnum().getValue('D',),)         .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnum().getValue(3,),)           .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnum().getValue('3',),)         .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnum().getValue(`${3}`,),)      .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum.D,),) .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnum().getValue(BasicEnum[3],),).toEqualTypeOf<typeof BasicEnum.D>()

    expectTypeOf(new BasicCompanionEnum().getValue('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getValue(`${4}`,),).toBeNever()

},)
describe("getName", () => {
    expectTypeOf(new BasicCompanionEnum().getName(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnum().getName('A',),)         .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnum().getName(0,),)           .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnum().getName('0',),)         .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnum().getName(`${0}`,),)      .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum.A,),) .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum[0],),).toEqualTypeOf<'A'>()

    expectTypeOf(new BasicCompanionEnum().getName('B',),)         .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnum().getName(1,),)           .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnum().getName('1',),)         .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnum().getName(`${1}`,),)      .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum.B,),) .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum[1],),).toEqualTypeOf<'B'>()

    expectTypeOf(new BasicCompanionEnum().getName('C',),)         .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnum().getName(2,),)           .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnum().getName('2',),)         .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnum().getName(`${2}`,),)      .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum.C,),) .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum[2],),).toEqualTypeOf<'C'>()

    expectTypeOf(new BasicCompanionEnum().getName('D',),)         .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnum().getName(3,),)           .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnum().getName('3',),)         .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnum().getName(`${3}`,),)      .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum.D,),) .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnum().getName(BasicEnum[3],),).toEqualTypeOf<'D'>()

    expectTypeOf(new BasicCompanionEnum().getName('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getName(`${4}`,),).toBeNever()

},)
describe("getOrdinal", () => {
    expectTypeOf(new BasicCompanionEnum().getOrdinal(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnum().getOrdinal('A',),)         .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(0,),)           .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal('0',),)         .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(`${0}`,),)      .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum.A,),) .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum[0],),).toEqualTypeOf<0>()

    expectTypeOf(new BasicCompanionEnum().getOrdinal('B',),)         .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(1,),)           .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal('1',),)         .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(`${1}`,),)      .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum.B,),) .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum[1],),).toEqualTypeOf<1>()

    expectTypeOf(new BasicCompanionEnum().getOrdinal('C',),)         .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(2,),)           .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal('2',),)         .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(`${2}`,),)      .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum.C,),) .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum[2],),).toEqualTypeOf<2>()

    expectTypeOf(new BasicCompanionEnum().getOrdinal('D',),)         .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(3,),)           .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal('3',),)         .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(`${3}`,),)      .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum.D,),) .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(BasicEnum[3],),).toEqualTypeOf<3>()

    expectTypeOf(new BasicCompanionEnum().getOrdinal('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnum().getOrdinal(`${4}`,),).toBeNever()

},)

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

import {BasicCompanionEnumerable} from "./instance/BasicCompanionEnumerable"
import {BasicEnum}                from "./instance/BasicEnum"

describe("setDefaultValue", () => {
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().setDefaultValue("greatGrandParent",),).toBeNever()
},)
describe("getValue", () => {
    expectTypeOf(new BasicCompanionEnumerable().getValue(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumerable().getValue('A',),)         .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(0,),)           .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnumerable().getValue('0',),)         .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(`${0}`,),)      .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum.A,),) .toEqualTypeOf<typeof BasicEnum.A>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum[0],),).toEqualTypeOf<typeof BasicEnum.A>()

    expectTypeOf(new BasicCompanionEnumerable().getValue('B',),)         .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(1,),)           .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnumerable().getValue('1',),)         .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(`${1}`,),)      .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum.B,),) .toEqualTypeOf<typeof BasicEnum.B>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum[1],),).toEqualTypeOf<typeof BasicEnum.B>()

    expectTypeOf(new BasicCompanionEnumerable().getValue('C',),)         .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(2,),)           .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnumerable().getValue('2',),)         .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(`${2}`,),)      .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum.C,),) .toEqualTypeOf<typeof BasicEnum.C>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum[2],),).toEqualTypeOf<typeof BasicEnum.C>()

    expectTypeOf(new BasicCompanionEnumerable().getValue('D',),)         .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(3,),)           .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnumerable().getValue('3',),)         .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(`${3}`,),)      .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum.D,),) .toEqualTypeOf<typeof BasicEnum.D>()
    expectTypeOf(new BasicCompanionEnumerable().getValue(BasicEnum[3],),).toEqualTypeOf<typeof BasicEnum.D>()

    expectTypeOf(new BasicCompanionEnumerable().getValue('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getValue(`${4}`,),).toBeNever()

},)
describe("getName", () => {
    expectTypeOf(new BasicCompanionEnumerable().getName(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumerable().getName('A',),)         .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(0,),)           .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerable().getName('0',),)         .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(`${0}`,),)      .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum.A,),) .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum[0],),).toEqualTypeOf<'A'>()

    expectTypeOf(new BasicCompanionEnumerable().getName('B',),)         .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(1,),)           .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerable().getName('1',),)         .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(`${1}`,),)      .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum.B,),) .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum[1],),).toEqualTypeOf<'B'>()

    expectTypeOf(new BasicCompanionEnumerable().getName('C',),)         .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(2,),)           .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerable().getName('2',),)         .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(`${2}`,),)      .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum.C,),) .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum[2],),).toEqualTypeOf<'C'>()

    expectTypeOf(new BasicCompanionEnumerable().getName('D',),)         .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(3,),)           .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerable().getName('3',),)         .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(`${3}`,),)      .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum.D,),) .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerable().getName(BasicEnum[3],),).toEqualTypeOf<'D'>()

    expectTypeOf(new BasicCompanionEnumerable().getName('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getName(`${4}`,),).toBeNever()

},)
describe("getOrdinal", () => {
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('A',),)         .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(0,),)           .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('0',),)         .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(`${0}`,),)      .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum.A,),) .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum[0],),).toEqualTypeOf<0>()

    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('B',),)         .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(1,),)           .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('1',),)         .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(`${1}`,),)      .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum.B,),) .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum[1],),).toEqualTypeOf<1>()

    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('C',),)         .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(2,),)           .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('2',),)         .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(`${2}`,),)      .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum.C,),) .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum[2],),).toEqualTypeOf<2>()

    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('D',),)         .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(3,),)           .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('3',),)         .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(`${3}`,),)      .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum.D,),) .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(BasicEnum[3],),).toEqualTypeOf<3>()

    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerable().getOrdinal(`${4}`,),).toBeNever()

},)

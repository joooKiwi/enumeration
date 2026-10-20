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

import {BasicCompanionEnumWithParent} from "./instance/BasicCompanionEnumWithParent"
import {BasicEnum}                    from "./instance/BasicEnum"
import {BasicEnumWithParent}          from "./instance/BasicEnumWithParent"

describe("setDefaultValue", () => {
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().setDefaultValue("greatGrandParent",),).toBeNever()
},)
describe("getValue", () => {
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumWithParent().getValue('A',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(0,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue('0',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(`${0}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum.A,),)           .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum[0],),)          .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.A,),) .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent[0],),).toEqualTypeOf<typeof BasicEnumWithParent.A>()

    expectTypeOf(new BasicCompanionEnumWithParent().getValue('B',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(1,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue('1',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(`${1}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum.B,),)           .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum[1],),)          .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.B,),) .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent[1],),).toEqualTypeOf<typeof BasicEnumWithParent.B>()

    expectTypeOf(new BasicCompanionEnumWithParent().getValue('C',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(2,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue('2',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(`${2}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum.C,),)           .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum[2],),)          .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.C,),) .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent[2],),).toEqualTypeOf<typeof BasicEnumWithParent.C>()

    expectTypeOf(new BasicCompanionEnumWithParent().getValue('D',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(3,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue('3',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(`${3}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum.D,),)           .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnum[3],),)          .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent.D,),) .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(BasicEnumWithParent[3],),).toEqualTypeOf<typeof BasicEnumWithParent.D>()

    expectTypeOf(new BasicCompanionEnumWithParent().getValue('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getValue(`${4}`,),).toBeNever()

},)
describe("getName", () => {
    expectTypeOf(new BasicCompanionEnumWithParent().getName(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumWithParent().getName('A',),)                   .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(0,),)                     .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName('0',),)                   .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(`${0}`,),)                .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum.A,),)           .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum[0],),)          .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.A,),) .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent[0],),).toEqualTypeOf<'A'>()

    expectTypeOf(new BasicCompanionEnumWithParent().getName('B',),)                   .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(1,),)                     .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName('1',),)                   .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(`${1}`,),)                .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum.B,),)           .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum[1],),)          .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.B,),) .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent[1],),).toEqualTypeOf<'B'>()

    expectTypeOf(new BasicCompanionEnumWithParent().getName('C',),)                   .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(2,),)                     .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName('2',),)                   .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(`${2}`,),)                .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum.C,),)           .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum[2],),)          .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.C,),) .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent[2],),).toEqualTypeOf<'C'>()

    expectTypeOf(new BasicCompanionEnumWithParent().getName('D',),)                   .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(3,),)                     .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName('3',),)                   .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(`${3}`,),)                .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum.D,),)           .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnum[3],),)          .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent.D,),) .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(BasicEnumWithParent[3],),).toEqualTypeOf<'D'>()

    expectTypeOf(new BasicCompanionEnumWithParent().getName('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getName(`${4}`,),).toBeNever()

},)
describe("getOrdinal", () => {
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('A',),)                   .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(0,),)                     .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('0',),)                   .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(`${0}`,),)                .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.A,),)           .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum[0],),)          .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.A,),) .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent[0],),).toEqualTypeOf<0>()

    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('B',),)                   .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(1,),)                     .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('1',),)                   .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(`${1}`,),)                .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.B,),)           .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum[1],),)          .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.B,),) .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent[1],),).toEqualTypeOf<1>()

    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('C',),)                   .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(2,),)                     .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('2',),)                   .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(`${2}`,),)                .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.C,),)           .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum[2],),)          .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.C,),) .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent[2],),).toEqualTypeOf<2>()

    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('D',),)                   .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(3,),)                     .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('3',),)                   .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(`${3}`,),)                .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum.D,),)           .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnum[3],),)          .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent.D,),) .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(BasicEnumWithParent[3],),).toEqualTypeOf<3>()

    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumWithParent().getOrdinal(`${4}`,),).toBeNever()

},)

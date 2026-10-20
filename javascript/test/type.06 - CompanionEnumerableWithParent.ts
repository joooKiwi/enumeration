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

import {BasicCompanionEnumerableWithParent} from "./instance/BasicCompanionEnumerableWithParent"
import {BasicEnum}                          from "./instance/BasicEnum"
import {BasicEnumWithParent}                from "./instance/BasicEnumWithParent"

describe("setDefaultValue", () => {
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().setDefaultValue("greatGrandParent",),).toBeNever()
},)
describe("getValue", () => {
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('A',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(0,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('0',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(`${0}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum.A,),)           .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum[0],),)          .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent.A,),) .toEqualTypeOf<typeof BasicEnumWithParent.A>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent[0],),).toEqualTypeOf<typeof BasicEnumWithParent.A>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('B',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(1,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('1',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(`${1}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum.B,),)           .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum[1],),)          .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent.B,),) .toEqualTypeOf<typeof BasicEnumWithParent.B>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent[1],),).toEqualTypeOf<typeof BasicEnumWithParent.B>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('C',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(2,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('2',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(`${2}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum.C,),)           .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum[2],),)          .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent.C,),) .toEqualTypeOf<typeof BasicEnumWithParent.C>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent[2],),).toEqualTypeOf<typeof BasicEnumWithParent.C>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('D',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(3,),)                     .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('3',),)                   .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(`${3}`,),)                .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum.D,),)           .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnum[3],),)          .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent.D,),) .toEqualTypeOf<typeof BasicEnumWithParent.D>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(BasicEnumWithParent[3],),).toEqualTypeOf<typeof BasicEnumWithParent.D>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getValue(`${4}`,),).toBeNever()

},)
describe("getName", () => {
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('A',),)                   .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(0,),)                     .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('0',),)                   .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(`${0}`,),)                .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum.A,),)           .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum[0],),)          .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent.A,),) .toEqualTypeOf<'A'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent[0],),).toEqualTypeOf<'A'>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('B',),)                   .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(1,),)                     .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('1',),)                   .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(`${1}`,),)                .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum.B,),)           .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum[1],),)          .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent.B,),) .toEqualTypeOf<'B'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent[1],),).toEqualTypeOf<'B'>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('C',),)                   .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(2,),)                     .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('2',),)                   .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(`${2}`,),)                .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum.C,),)           .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum[2],),)          .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent.C,),) .toEqualTypeOf<'C'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent[2],),).toEqualTypeOf<'C'>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('D',),)                   .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(3,),)                     .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('3',),)                   .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(`${3}`,),)                .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum.D,),)           .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnum[3],),)          .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent.D,),) .toEqualTypeOf<'D'>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(BasicEnumWithParent[3],),).toEqualTypeOf<'D'>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getName(`${4}`,),).toBeNever()

},)
describe("getOrdinal", () => {
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(null,),)              .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(undefined,),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("NaN",),)             .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("Infinity",),)        .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("-Infinity",),)       .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("name",),)            .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("ordinal",),)         .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("parent",),)          .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("grandParent",),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal("greatGrandParent",),).toBeNever()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('A',),)                   .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(0,),)                     .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('0',),)                   .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(`${0}`,),)                .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum.A,),)           .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum[0],),)          .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent.A,),) .toEqualTypeOf<0>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent[0],),).toEqualTypeOf<0>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('B',),)                   .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(1,),)                     .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('1',),)                   .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(`${1}`,),)                .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum.B,),)           .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum[1],),)          .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent.B,),) .toEqualTypeOf<1>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent[1],),).toEqualTypeOf<1>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('C',),)                   .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(2,),)                     .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('2',),)                   .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(`${2}`,),)                .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum.C,),)           .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum[2],),)          .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent.C,),) .toEqualTypeOf<2>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent[2],),).toEqualTypeOf<2>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('D',),)                   .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(3,),)                     .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('3',),)                   .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(`${3}`,),)                .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum.D,),)           .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnum[3],),)          .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent.D,),) .toEqualTypeOf<3>()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(BasicEnumWithParent[3],),).toEqualTypeOf<3>()

    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('E',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(4,),)     .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal('4',),)   .toBeNever()
    expectTypeOf(new BasicCompanionEnumerableWithParent().getOrdinal(`${4}`,),).toBeNever()

},)

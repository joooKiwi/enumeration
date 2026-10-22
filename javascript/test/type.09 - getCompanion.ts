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

import {EmptyCompanionEnum}                           from "./instance/EmptyCompanionEnum"
import {EmptyCompanionEnumerable}                     from "./instance/EmptyCompanionEnumerable"
import {EmptyCompanionEnumerableWithGrandParent}      from "./instance/EmptyCompanionEnumerableWithGrandParent"
import {EmptyCompanionEnumerableWithGreatGrandParent} from "./instance/EmptyCompanionEnumerableWithGreatGrandParent"
import {EmptyCompanionEnumerableWithParent}           from "./instance/EmptyCompanionEnumerableWithParent"
import {EmptyCompanionEnumWithGrandParent}            from "./instance/EmptyCompanionEnumWithGrandParent"
import {EmptyCompanionEnumWithGreatGrandParent}       from "./instance/EmptyCompanionEnumWithGreatGrandParent"
import {EmptyCompanionEnumWithParent}                 from "./instance/EmptyCompanionEnumWithParent"
import {EmptyEnum}                                    from "./instance/EmptyEnum"
import {EmptyEnumerable}                              from "./instance/EmptyEnumerable"
import {EmptyEnumerableWithGrandParent}               from "./instance/EmptyEnumerableWithGrandParent"
import {EmptyEnumerableWithGreatGrandParent}          from "./instance/EmptyEnumerableWithGreatGrandParent"
import {EmptyEnumerableWithParent}                    from "./instance/EmptyEnumerableWithParent"
import {EmptyEnumWithGrandParent}                     from "./instance/EmptyEnumWithGrandParent"
import {EmptyEnumWithGreatGrandParent}                from "./instance/EmptyEnumWithGreatGrandParent"
import {EmptyEnumWithParent}                          from "./instance/EmptyEnumWithParent"

import {getCompanion} from "../src/method/getCompanion"

describe("getCompanion type tests", () => {

    expectTypeOf(getCompanion(undefined,),).toBeNever()
    expectTypeOf(getCompanion(null,),).toBeNever()

    expectTypeOf(getCompanion(EmptyEnum,),)                          .toEqualTypeOf<typeof EmptyEnum.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumWithParent,),)                .toEqualTypeOf<typeof EmptyEnumWithParent.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumWithGrandParent,),)           .toEqualTypeOf<typeof EmptyEnumWithGrandParent.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumWithGreatGrandParent,),)      .toEqualTypeOf<typeof EmptyEnumWithGreatGrandParent.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumerable,),)                    .toEqualTypeOf<typeof EmptyEnumerable.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumerableWithParent,),)          .toEqualTypeOf<typeof EmptyEnumerableWithParent.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumerableWithGrandParent,),)     .toEqualTypeOf<typeof EmptyEnumerableWithGrandParent.CompanionEnum.get>()
    expectTypeOf(getCompanion(EmptyEnumerableWithGreatGrandParent,),).toEqualTypeOf<typeof EmptyEnumerableWithGreatGrandParent.CompanionEnum.get>()

    expectTypeOf(getCompanion(new EmptyCompanionEnum(),),)                          .toEqualTypeOf<EmptyCompanionEnum>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumWithParent(),),)                .toEqualTypeOf<EmptyCompanionEnumWithParent>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumWithGrandParent(),),)           .toEqualTypeOf<EmptyCompanionEnumWithGrandParent>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumWithGreatGrandParent(),),)      .toEqualTypeOf<EmptyCompanionEnumWithGreatGrandParent>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumerable(),),)                    .toEqualTypeOf<EmptyCompanionEnumerable>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumerableWithParent(),),)          .toEqualTypeOf<EmptyCompanionEnumerableWithParent>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumerableWithGrandParent(),),)     .toEqualTypeOf<EmptyCompanionEnumerableWithGrandParent>()
    expectTypeOf(getCompanion(new EmptyCompanionEnumerableWithGreatGrandParent(),),).toEqualTypeOf<EmptyCompanionEnumerableWithGreatGrandParent>()

},)

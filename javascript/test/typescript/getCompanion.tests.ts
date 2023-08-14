/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {getCompanion}                 from "../../src/helper/getCompanion"
import {EnumWithDifferentComportment} from "../TemplateEnums"

throw new EvalError("This file was not made to be read by Javascript. It should only be compilable by Typescript.")

// @ts-ignore
const valueInstance: EnumWithDifferentComportment = EnumWithDifferentComportment.CompanionEnum.get.defaultValue // This is a type for the test

// @ts-expect-error
getCompanion(undefined,).toString()
// @ts-expect-error
getCompanion(null,).toString()

// @ts-expect-error
getCompanion('' as string,)
// @ts-expect-error
getCompanion(new String('',),)

// @ts-expect-error
getCompanion(0 as number,)
// @ts-expect-error
getCompanion(new Number(0,),)

// @ts-expect-error
getCompanion(0n as bigint,)
// @ts-expect-error
getCompanion(Object(0n,) as BigInt,)

// @ts-expect-error
getCompanion(Symbol(),)
// @ts-expect-error
getCompanion(Object(Symbol(),) as Symbol,)

// @ts-expect-error
getCompanion({},)

// @ts-expect-error
getCompanion([],)
// @ts-expect-error
getCompanion([] as readonly [],)
// @ts-expect-error
getCompanion(Object.freeze(new Array<unknown>(),) as ReadonlyArray<unknown>,)
// @ts-expect-error
getCompanion(new Array<unknown>(),)

// @ts-expect-error
getCompanion(Object.freeze(new Set<unknown>(),) as ReadonlySet<unknown>,)
// @ts-expect-error
getCompanion(new Set<unknown>(),)

// @ts-expect-error
getCompanion(Object.freeze(new Map<unknown, unknown>(),) as ReadonlyMap<unknown, unknown>,)
// @ts-expect-error
getCompanion(new Map<unknown, unknown>(),)

// @ts-expect-error
getCompanion(Object.freeze(new WeakSet<unknown, unknown>(),),)
// @ts-expect-error
getCompanion(new WeakSet<unknown, unknown>(),)

// @ts-expect-error
getCompanion(Object.freeze(new WeakMap<unknown, unknown>(),),)
// @ts-expect-error
getCompanion(new WeakMap<unknown, unknown>(),)

export const valueByConstructor = getCompanion(EnumWithDifferentComportment,) satisfies CompanionValue
// @ts-expect-error
getCompanion(EnumWithDifferentComportment.CompanionEnum,)
export const valueByCompanion = getCompanion(EnumWithDifferentComportment.CompanionEnum.get,) satisfies CompanionValue
// @ts-expect-error
getCompanion(valueInstance,)

/*** The simple enum type */
type EnumValue = EnumWithDifferentComportment
/** The companion instance of {@link EnumValue} */
type CompanionValue = typeof EnumWithDifferentComportment["CompanionEnum"]["get"]

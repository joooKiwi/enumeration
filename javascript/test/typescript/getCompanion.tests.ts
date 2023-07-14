/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {getCompanion}                 from "../../src/helper/getCompanion"
import {EnumWithDifferentComportment} from "../TemplateEnums"

throw new EvalError("This file was not made to be read by Javascript. It should only be compilable by Typescript.")

// @ts-ignore
const primitiveStringInstance: string = ''
const primitiveNumberInstance: number = 0
const primitiveBigIntInstance: bigint = 0n
const objectSymbolInstance: Symbol = Object(Symbol())
const emptyObjectInstance: {} = {}
const emptyMutableArrayInstance: [] = []
const emptyReadonlyArrayInstance: readonly [] = []
const readonlyArrayInstance: ReadonlyArray<unknown> = new Array<unknown>()
const readonlySetInstance: ReadonlySet<unknown> = new Set<unknown>()
const readonlyMapInstance: ReadonlyMap<unknown, unknown> = new Map<unknown, unknown>()
const valueInstance: EnumWithDifferentComportment = EnumWithDifferentComportment.CompanionEnum.get.default // This is a type for the test

// @ts-expect-error
getCompanion(undefined,).toString()
// @ts-expect-error
getCompanion(null,).toString()

// @ts-expect-error
getCompanion(primitiveStringInstance,)
// @ts-expect-error
getCompanion(new String('',),)

// @ts-expect-error
getCompanion(primitiveNumberInstance,)
// @ts-expect-error
getCompanion(new Number(0,),)

// @ts-expect-error
getCompanion(primitiveBigIntInstance,)
// @ts-expect-error
getCompanion(BigInt(0n),)

// @ts-expect-error
getCompanion(Symbol(),)
// @ts-expect-error
getCompanion(objectSymbolInstance,)

// @ts-expect-error
getCompanion(emptyObjectInstance,)

// @ts-expect-error
getCompanion(emptyMutableArrayInstance,)
// @ts-expect-error
getCompanion(emptyReadonlyArrayInstance,)
// @ts-expect-error
getCompanion(readonlyArrayInstance,)
// @ts-expect-error
getCompanion(new Array<unknown>(),)

// @ts-expect-error
getCompanion(readonlySetInstance,)
// @ts-expect-error
getCompanion(new Set<unknown>(),)

// @ts-expect-error
getCompanion(readonlyMapInstance,)
// @ts-expect-error
getCompanion(new Map<unknown, unknown>(),)

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

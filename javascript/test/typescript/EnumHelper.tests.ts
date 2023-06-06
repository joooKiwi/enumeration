import {EnumHelper}                   from "../../src/util/enumerable/EnumHelper"
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
EnumHelper.getCompanion(undefined,).toString()
// @ts-expect-error
EnumHelper.getCompanion(null,).toString()

// @ts-expect-error
EnumHelper.getCompanion(primitiveStringInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(new window.String(),).toString()

// @ts-expect-error
EnumHelper.getCompanion(primitiveNumberInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(new window.Number(),).toString()

// @ts-expect-error
EnumHelper.getCompanion(primitiveBigIntInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(window.BigInt(0n),).toString()

// @ts-expect-error
EnumHelper.getCompanion(window.Symbol(),).toString()
// @ts-expect-error
EnumHelper.getCompanion(objectSymbolInstance,).toString()

// @ts-expect-error
EnumHelper.getCompanion(emptyObjectInstance,).toString()

// @ts-expect-error
EnumHelper.getCompanion(emptyMutableArrayInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(emptyReadonlyArrayInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(readonlyArrayInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(new window.Array<unknown>(),).toString()

// @ts-expect-error
EnumHelper.getCompanion(readonlySetInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(new Set<unknown>(),).toString()

// @ts-expect-error
EnumHelper.getCompanion(readonlyMapInstance,).toString()
// @ts-expect-error
EnumHelper.getCompanion(new Map<unknown, unknown>(),).toString()

export const valueByConstructor = EnumHelper.getCompanion(EnumWithDifferentComportment,) satisfies CompanionValue
// @ts-expect-error
EnumHelper.getCompanion(EnumWithDifferentComportment.CompanionEnum,)
export const valueByCompanion = EnumHelper.getCompanion(EnumWithDifferentComportment.CompanionEnum.get,) satisfies CompanionValue
// @ts-expect-error
EnumHelper.getCompanion(valueInstance,)

/*** The simple enum type */
type EnumValue = EnumWithDifferentComportment
/** The companion instance of {@link EnumValue} */
type CompanionValue = typeof EnumWithDifferentComportment["CompanionEnum"]["get"]

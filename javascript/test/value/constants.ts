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

import {EnumConstants}                  from "../../src/EnumConstants"
import MAX_VALUE_AS_NUMBER =  EnumConstants.MAX_VALUE_AS_NUMBER
import MAX_VALUE_AS_BIG_INT = EnumConstants.MAX_VALUE_AS_BIG_INT

import type {EmptyEnumWithVariables} from "../TemplateEnums"
import {Holder}                      from "../Holder"

const MIN_SAFE_NUMBER_VALUE_AS_BIG_INT = BigInt(Number.MIN_SAFE_INTEGER,)
const MAX_SAFE_NUMBER_VALUE_AS_BIG_INT = BigInt(Number.MAX_SAFE_INTEGER,)
const MIN_NUMBER_VALUE_AS_BIG_INT = BigInt(-Number.MAX_VALUE,)
const MAX_NUMBER_VALUE_AS_BIG_INT = BigInt(Number.MAX_VALUE,)

export const nullValues = [null, undefined,] as const
export const unhandledValues = [
    new Holder(true,               "boolean",),
    new Holder(new Boolean(true,), "boolean object",),
    new Holder(Symbol(),           "symbol",),
    new Holder(Object(Symbol(),),  "symbol object"),
    new Holder({},                 "empty object",),
    new Holder([],                 "empty array",),
    new Holder(new Set(),          "empty set",),
    new Holder(new Map(),          "empty map",),
    new Holder(new WeakSet(),      "empty weak set",),
    new Holder(new WeakMap(),      "empty weak map",),
] as const
export const invalidInstances = [
    new Holder('',                "string",),
    new Holder(new String(),      "string object",),
    new Holder(1,                 "number",),
    new Holder(new Number(),      "number object",),
    new Holder(1n,                "bigint",),
    new Holder(Object(1n,),       "bigint object",),
    new Holder(true,              "boolean",),
    new Holder(new Boolean(),     "boolean object",),
    new Holder(Symbol(),          "symbol",),
    new Holder(Object(Symbol(),), "symbol object",),
    new Holder({},                "empty object",),
    new Holder([],                "empty array",),
    new Holder(new Set(),         "empty set",),
    new Holder(new Map(),         "empty map",),
    new Holder(new WeakSet(),     "empty weak set",),
    new Holder(new WeakMap(),     "empty weak map",),
] as const
export const impossibleOrdinals = [
    new Holder(-1,                                                 `-1 as number`,),
    new Holder(new Number(-1,),                                    `-1 as number object`,),
    new Holder(BigInt(-1,),                                        `-1 as bigint`,),
    new Holder(Object(BigInt(-1,),),                               `-1 as bigint object`,),
    new Holder('-1',                                               `-1 as string`,),
    new Holder(new String(-1,),                                    `-1 as string object`,),


    new Holder(MAX_VALUE_AS_NUMBER + 1,                            `"MAX_VALUE + 1" as number`,),
    new Holder(Object(MAX_VALUE_AS_NUMBER + 1,),                   `"MAX_VALUE + 1" as number object`,),
    new Holder(MAX_VALUE_AS_BIG_INT + 1n,                          `"MAX_VALUE + 1" as bigint`,),
    new Holder(Object(MAX_VALUE_AS_BIG_INT + 1n,),                 `"MAX_VALUE + 1" as bigint object`,),
    new Holder((MAX_VALUE_AS_NUMBER + 1).toString(),                     `"MAX_VALUE + 1" as string`,),
    new Holder(new String(MAX_VALUE_AS_NUMBER + 1,),               `"MAX_VALUE + 1" as string object`,),

    new Holder(BigInt(MAX_VALUE_AS_BIG_INT * 2n,),                 `"MAX_VALUE * 2" as bigint`,),
    new Holder(Object(BigInt(MAX_VALUE_AS_BIG_INT * 2n,),),        `"MAX_VALUE * 2" as bigint object`,),
    new Holder((MAX_VALUE_AS_BIG_INT * 2n).toString(),             `"MAX_VALUE * 2" as string`,),
    new Holder(new String(MAX_VALUE_AS_BIG_INT * 2n,),             `"MAX_VALUE * 2" as string object`,),


    new Holder(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n,              `"Number.MIN_SAFE_VALUE - 1" as bigint`,),
    new Holder(Object(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n,),     `"Number.MIN_SAFE_VALUE - 1" as bigint object`,),
    new Holder((MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n).toString(), `"Number.MIN_SAFE_VALUE - 1" as string`,),
    new Holder(new String(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n,), `"Number.MIN_SAFE_VALUE - 1" as string object`,),

    new Holder(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,              `"Number.MIN_SAFE_VALUE * 2" as bigint`,),
    new Holder(Object(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,),     `"Number.MIN_SAFE_VALUE * 2" as bigint object`,),
    new Holder((MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n).toString(), `"Number.MIN_SAFE_VALUE * 2" as string`,),
    new Holder(new String(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,), `"Number.MIN_SAFE_VALUE * 2" as string object`,),

    new Holder(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n,              `"Number.MAX_SAFE_VALUE + 1" as bigint`,),
    new Holder(Object(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n,),     `"Number.MAX_SAFE_VALUE + 1" as bigint object`,),
    new Holder((MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n).toString(), `"Number.MAX_SAFE_VALUE + 1" as string`,),
    new Holder(new String(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n,), `"Number.MAX_SAFE_VALUE + 1" as string object`,),

    new Holder(MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,              `"Number.MAX_SAFE_VALUE * 2" as bigint`,),
    new Holder(Object(MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,),     `"Number.MAX_SAFE_VALUE * 2" as bigint object`,),
    new Holder((MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n).toString(), `"Number.MAX_SAFE_VALUE * 2" as string`,),
    new Holder(new String(MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,), `"Number.MAX_SAFE_VALUE * 2" as string object`,),


    new Holder(MIN_NUMBER_VALUE_AS_BIG_INT - 1n,                   `"Number.MIN_VALUE - 1" as bigint`,),
    new Holder(Object(MIN_NUMBER_VALUE_AS_BIG_INT - 1n,),          `"Number.MIN_VALUE - 1" as bigint object`,),
    new Holder((MIN_NUMBER_VALUE_AS_BIG_INT - 1n).toString(),      `"Number.MIN_VALUE - 1" as string`,),
    new Holder(new String(MIN_NUMBER_VALUE_AS_BIG_INT - 1n,),      `"Number.MIN_VALUE - 1" as string object`,),

    new Holder(MIN_NUMBER_VALUE_AS_BIG_INT * 2n,                   `"Number.MIN_VALUE * 2" as bigint`,),
    new Holder(Object(MIN_NUMBER_VALUE_AS_BIG_INT * 2n,),          `"Number.MIN_VALUE * 2" as bigint object`,),
    new Holder((MIN_NUMBER_VALUE_AS_BIG_INT * 2n).toString(),      `"Number.MIN_VALUE * 2" as string`,),
    new Holder(new String(MIN_NUMBER_VALUE_AS_BIG_INT * 2n,),      `"Number.MIN_VALUE * 2" as string object`,),

    new Holder(MAX_NUMBER_VALUE_AS_BIG_INT + 1n,                   `"Number.MAX_VALUE + 1" as bigint`,),
    new Holder(Object(MAX_NUMBER_VALUE_AS_BIG_INT + 1n,),          `"Number.MAX_VALUE + 1" as bigint object`,),
    new Holder((MAX_NUMBER_VALUE_AS_BIG_INT + 1n).toString(),      `"Number.MAX_VALUE + 1" as string`,),
    new Holder(new String(MAX_NUMBER_VALUE_AS_BIG_INT + 1n,),      `"Number.MAX_VALUE + 1" as string object`,),

    new Holder(BigInt(MAX_NUMBER_VALUE_AS_BIG_INT * 2n,),          `"Number.MAX_VALUE * 2" as bigint`,),
    new Holder(Object(BigInt(MAX_NUMBER_VALUE_AS_BIG_INT * 2n,),), `"Number.MAX_VALUE * 2" as bigint object`,),
    new Holder((MAX_NUMBER_VALUE_AS_BIG_INT * 2n).toString(),      `"Number.MAX_VALUE * 2" as string`,),
    new Holder(new String(MAX_NUMBER_VALUE_AS_BIG_INT * 2n,),      `"Number.MAX_VALUE * 2" as string object`,),


    new Holder(1.1,                                                `1.1 as number`,),
    new Holder(new Number(1.1,),                                   `1.1 as number object`,),
    new Holder('1.1',                                              `1.1 as string`,),
    new Holder(new String(1.1,),                                   `1.1 as string object`,),

    new Holder(-1.1,                                               `-1.1 as number`,),
    new Holder(new Number(-1.1,),                                  `-1.1 as number object`,),
    new Holder('-1.1',                                             `-1.1 as string`,),
    new Holder(new String(-1.1,),                                  `-1.1 as string object`,),
] as const
export const forbiddenNumbers = [
    new Holder(NaN,                      `"NaN" as number`,),
    new Holder(new Number(NaN,),         `"NaN" as number object`,),
    new Holder("NaN",                    `"NaN" as string`,),
    new Holder(new String("NaN",),       `"NaN" as string object`,),

    new Holder(Infinity,                 `"Infinity" as number`,),
    new Holder(new Number(Infinity,),    `"Infinity" as number object`,),
    new Holder("Infinity",               `"Infinity" as string`,),
    new Holder(new String("Infinity",),  `"Infinity" as string object`,),

    new Holder(-Infinity,                `"-Infinity" as number`,),
    new Holder(new Number(-Infinity,),   `"-Infinity" as number object`,),
    new Holder("-Infinity",              `"-Infinity" as string`,),
    new Holder(new String("-Infinity",), `"-Infinity" as string object`,),
] as const
export const everyStringEnumerableMember = [
    new Holder("name",                          "name as string",),
    new Holder(new String("name",),             "name as string object",),
    new Holder("ordinal",                       "ordinal as string",),
    new Holder(new String("ordinal",),          "ordinal as string object",),
    new Holder("parent",                        "parent as string",),
    new Holder(new String("parent",),           "parent as string object",),
    new Holder("grandParent",                   "grandParent as string",),
    new Holder(new String("grandParent",),      "grandParent as string object",),
    new Holder("greatGrandParent",              "greatGrandParent as string",),
    new Holder(new String("greatGrandParent",), "greatGrandParent as string object",),
] as const
export const simpleEnumVariables = ["VARIABLE_STRING", "VARIABLE_NUMBER", "VARIABLE_BIGINT",] as const satisfies readonly (keyof typeof EmptyEnumWithVariables)[]
export const validValues = [
    new Holder(0,                   `0 as a number`,),
    new Holder(new Number(0,),      `0 as a number object`,),
    new Holder(BigInt(0,),          `0 as a bigint`,),
    new Holder(Object(BigInt(0,),), `0 as a bigint object`,),
    new Holder('0',                 `0 as a string`,),
    new Holder(new String(0,),      `0 as a string object`,),
    new Holder('A',                 `A as a string`,),
    new Holder(new String('A',),    `A as a string object`,),
] as const

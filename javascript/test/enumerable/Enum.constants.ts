/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {PossibleEnumerableMembers} from "../../src/Enumerable.types"
import {EnumConstants}                  from "../../src/EnumConstants"

import type {EmptyEnumWithVariables} from "../TemplateEnums"
import {Holder}                      from "../Holder"

const MAX_VALUE_AS_BIG_INT = EnumConstants.MAX_VALUE_AS_BIG_INT,
    MIN_SAFE_NUMBER_VALUE_AS_BIG_INT = BigInt(Number.MIN_SAFE_INTEGER,),
    MAX_SAFE_NUMBER_VALUE_AS_BIG_INT = BigInt(Number.MAX_SAFE_INTEGER,),
    MIN_NUMBER_VALUE_AS_BIG_INT = BigInt(-Number.MAX_VALUE,),
    MAX_NUMBER_VALUE_AS_BIG_INT = BigInt(Number.MAX_VALUE,)

export const nullValues = [null, undefined,] as const,
    unhandledValues = [
        new Holder(true, "boolean",),
        new Holder(new Boolean(true,), "object boolean",),
        new Holder(Symbol(), "symbol",),
        new Holder(Object(Symbol(),), "object symbol"),
        new Holder({}, "empty object",),
        new Holder([], "empty array",),
        new Holder(new Set(), "empty set",),
        new Holder(new Map(), "empty map",),
        new Holder(new WeakSet(), "empty weak set",),
        new Holder(new WeakMap(), "empty weak map",),
    ] as const,
    invalidInstances = [
        new Holder('', "string",),
        new Holder(new String(), "object string",),
        new Holder(1, "number",),
        new Holder(new Number(), "object number",),
        new Holder(1n, "bigint",),
        new Holder(Object(1n,), "object bigint",),
        new Holder(true, "boolean",),
        new Holder(new Boolean(), "object boolean",),
        new Holder(Symbol(), "symbol",),
        new Holder(Object(Symbol(),), "object symbol",),
        new Holder({}, "empty object",),
        new Holder([], "empty array",),
        new Holder(new Set(), "empty set",),
        new Holder(new Map(), "empty map",),
        new Holder(new WeakSet(), "empty weak set",),
        new Holder(new WeakMap(), "empty weak map",),
    ] as const,
    impossibleOrdinals = [
        new Holder(-1,                                                 `-1 as number`,),
        new Holder(new Number(-1,),                                    `-1 as object number`,),
        new Holder(BigInt(-1,),                                        `-1 as bigint`,),
        new Holder(Object(BigInt(-1,),),                               `-1 as object bigint`,),
        new Holder('-1',                                               `-1 as string`,),
        new Holder(new String(-1,),                                    `-1 as object string`,),


        new Holder(MAX_VALUE_AS_BIG_INT + 1n,                          `"MAX_VALUE + 1" as bigint`,),
        new Holder(Object(MAX_VALUE_AS_BIG_INT + 1n,),                 `"MAX_VALUE + 1" as object bigint`,),
        new Holder((MAX_VALUE_AS_BIG_INT + 1n).toString(),                   `"MAX_VALUE + 1" as string`,),
        new Holder(new String(MAX_VALUE_AS_BIG_INT + 1n,),             `"MAX_VALUE + 1" as object string`,),

        new Holder(BigInt(MAX_VALUE_AS_BIG_INT * 2n,),                 `"MAX_VALUE * 2" as bigint`,),
        new Holder(Object(BigInt(MAX_VALUE_AS_BIG_INT * 2n,),),        `"MAX_VALUE * 2" as object bigint`,),
        new Holder((MAX_VALUE_AS_BIG_INT * 2n).toString(),                   `"MAX_VALUE * 2" as string`,),
        new Holder(new String(MAX_VALUE_AS_BIG_INT * 2n,),             `"MAX_VALUE * 2" as object string`,),


        new Holder(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n,              `"Number.MIN_SAFE_VALUE - 1" as bigint`,),
        new Holder(Object(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n,),     `"Number.MIN_SAFE_VALUE - 1" as object bigint`,),
        new Holder((MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n).toString(),       `"Number.MIN_SAFE_VALUE - 1" as string`,),
        new Holder(new String(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT - 1n,), `"Number.MIN_SAFE_VALUE - 1" as object string`,),

        new Holder(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,              `"Number.MIN_SAFE_VALUE * 2" as bigint`,),
        new Holder(Object(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,),     `"Number.MIN_SAFE_VALUE * 2" as object bigint`,),
        new Holder((MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n).toString(),       `"Number.MIN_SAFE_VALUE * 2" as string`,),
        new Holder(new String(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,), `"Number.MIN_SAFE_VALUE * 2" as object string`,),

        new Holder(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n,              `"Number.MAX_SAFE_VALUE + 1" as bigint`,),
        new Holder(Object(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n,),     `"Number.MAX_SAFE_VALUE + 1" as object bigint`,),
        new Holder((MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n).toString(),       `"Number.MAX_SAFE_VALUE + 1" as string`,),
        new Holder(new String(MIN_SAFE_NUMBER_VALUE_AS_BIG_INT + 1n,), `"Number.MAX_SAFE_VALUE + 1" as object string`,),

        new Holder(MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,              `"Number.MAX_SAFE_VALUE * 2" as bigint`,),
        new Holder(Object(MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,),     `"Number.MAX_SAFE_VALUE * 2" as object bigint`,),
        new Holder((MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n).toString(),       `"Number.MAX_SAFE_VALUE * 2" as string`,),
        new Holder(new String(MAX_SAFE_NUMBER_VALUE_AS_BIG_INT * 2n,), `"Number.MAX_SAFE_VALUE * 2" as object string`,),


        new Holder(MIN_NUMBER_VALUE_AS_BIG_INT - 1n,                   `"Number.MIN_VALUE - 1" as bigint`,),
        new Holder(Object(MIN_NUMBER_VALUE_AS_BIG_INT - 1n,),          `"Number.MIN_VALUE - 1" as object bigint`,),
        new Holder((MIN_NUMBER_VALUE_AS_BIG_INT - 1n).toString(),            `"Number.MIN_VALUE - 1" as string`,),
        new Holder(new String(MIN_NUMBER_VALUE_AS_BIG_INT - 1n,),      `"Number.MIN_VALUE - 1" as object string`,),

        new Holder(MIN_NUMBER_VALUE_AS_BIG_INT * 2n,                   `"Number.MIN_VALUE * 2" as bigint`,),
        new Holder(Object(MIN_NUMBER_VALUE_AS_BIG_INT * 2n,),          `"Number.MIN_VALUE * 2" as object bigint`,),
        new Holder((MIN_NUMBER_VALUE_AS_BIG_INT * 2n).toString(),            `"Number.MIN_VALUE * 2" as string`,),
        new Holder(new String(MIN_NUMBER_VALUE_AS_BIG_INT * 2n,),      `"Number.MIN_VALUE * 2" as object string`,),

        new Holder(MAX_NUMBER_VALUE_AS_BIG_INT + 1n,                   `"Number.MAX_VALUE + 1" as bigint`,),
        new Holder(Object(MAX_NUMBER_VALUE_AS_BIG_INT + 1n,),          `"Number.MAX_VALUE + 1" as object bigint`,),
        new Holder((MAX_NUMBER_VALUE_AS_BIG_INT + 1n).toString(),            `"Number.MAX_VALUE + 1" as string`,),
        new Holder(new String(MAX_NUMBER_VALUE_AS_BIG_INT + 1n,),      `"Number.MAX_VALUE + 1" as object string`,),

        new Holder(BigInt(MAX_NUMBER_VALUE_AS_BIG_INT * 2n,),          `"Number.MAX_VALUE * 2" as bigint`,),
        new Holder(Object(BigInt(MAX_NUMBER_VALUE_AS_BIG_INT * 2n,),), `"Number.MAX_VALUE * 2" as object bigint`,),
        new Holder((MAX_NUMBER_VALUE_AS_BIG_INT * 2n).toString(),            `"Number.MAX_VALUE * 2" as string`,),
        new Holder(new String(MAX_NUMBER_VALUE_AS_BIG_INT * 2n,),      `"Number.MAX_VALUE * 2" as object string`,),


        new Holder(1.1,                                                `1.1 as number`,),
        new Holder(new Number(1.1,),                                   `1.1 as object number`,),
        new Holder('1.1',                                              `1.1 as string`,),
        new Holder(new String(1.1,),                                   `1.1 as object string`,),

        new Holder(-1.1,                                               `-1.1 as number`,),
        new Holder(new Number(-1.1,),                                  `-1.1 as object number`,),
        new Holder('-1.1',                                             `-1.1 as string`,),
        new Holder(new String(-1.1,),                                  `-1.1 as object string`,),
    ] as const,
    forbiddenNumbers = [
        new Holder(NaN,                            `"NaN" as number`,),
        new Holder(new Number(NaN,),               `"NaN" as object number`,),
        new Holder("NaN",                    `"NaN" as string`,),
        new Holder(new String("NaN",),       `"NaN" as object string`,),

        new Holder(Infinity,                       `"Infinity" as number`,),
        new Holder(new Number(Infinity,),          `"Infinity" as object number`,),
        new Holder("Infinity",               `"Infinity" as string`,),
        new Holder(new String("Infinity",),  `"Infinity" as object string`,),

        new Holder(-Infinity,                      `"-Infinity" as number`,),
        new Holder(new Number(-Infinity,),         `"-Infinity" as object number`,),
        new Holder("-Infinity",              `"-Infinity" as string`,),
        new Holder(new String("-Infinity",), `"-Infinity" as object string`,),
    ] as const,
    everyStringEnumerableMember = EnumConstants.EVERY_ENUMERABLE_MEMBERS.filterNot((it,): it is (& PossibleEnumerableMembers & symbol) => typeof it == "symbol").map(it => [
        new Holder(it, `${it} as sting`),
        new Holder(new String(it,), `${it}} as string object`,),
    ]).toArray().flat(),
    simpleEnumVariables = ["VARIABLE_STRING", "VARIABLE_NUMBER", "VARIABLE_BIGINT",] as const satisfies readonly (keyof typeof EmptyEnumWithVariables)[],
    validValues = [
        new Holder(0, `0 as a number`,),
        new Holder(new Number(0,), `0 as an object number`,),
        new Holder(BigInt(0,), `0 as a bigint`,),
        new Holder(Object(BigInt(0,),), `0 as an object bigint`,),
        new Holder('0', `0 as a string number`,),
        new Holder(new String(0,), `0 as an object string number`,),

        new Holder('A', `A as a string`,),
        new Holder(new String('A',), `A as an object string`,),
    ] as const

/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {EnumConstants} from "../../src/EnumConstants"

import type {EmptyEnumWithVariables} from "../TemplateEnums"
import {Holder}                      from "../Holder"

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
    ] as const,
    // bigIntMinValue = BigInt(Number.MIN_VALUE,),
    bigIntMaxValue = BigInt(Number.MAX_VALUE,),
    impossibleOrdinals = [
        ([-1,] as const).map(it => [
            new Holder(it, `${it} as number`,),
            new Holder(new Number(it,), `${it} as object number`,),
        ],),
        ([[-1, "-1",],
            // [bigIntMinValue - 1n, "Number.MIN_VALUE - 1",], [bigIntMinValue - bigIntMinValue, "Number.MIN_VALUE * 2",],
            [bigIntMaxValue + 1n, "Number.MAX_VALUE + 1"], [bigIntMaxValue + bigIntMaxValue, "Number.MAX_VALUE * 2",],] as const).map(([it, name,]) => [
            new Holder(BigInt(it,), `${name} as bigint`,),
            new Holder(Object(BigInt(it,),), `${name} as object bigint`,),
            new Holder(it.toString(), `${name} as string`,),
            new Holder(new String(it,), `${name} as object string`,),
        ],),
        ([1.1, -1.1,] as const).map(it => [
            new Holder(it, `${it} as number`,),
            new Holder(new Number(it,), `${it} as object number`,),
            new Holder(it.toString(), `${it} as string`,),
            new Holder(new String(it,), `${it} as object string`,),
        ],),
    ].flat(2,),
    forbiddenNumbers = [NaN, Infinity, -Infinity,].map(it => [
        new Holder(it, `${it} as number`,),
        new Holder(new Number(it,), `${it} as object number`,),
        new Holder(it.toString(), `${it} as string`,),
        new Holder(new String(it,), `${it} as object string`,),
    ],).flat(),
    forbiddenInheritedMembers = EnumConstants.INHERITED_ENUMERABLE_MEMBERS.map(it => [
        new Holder(it, `${it} as string`),
        new Holder(new String(it,), `${it} as object string`,),
    ]).flat(),
    simpleEnumVariables = ["VARIABLE_STRING", "VARIABLE_NUMBER", "VARIABLE_BIGINT",] as const satisfies readonly (keyof typeof EmptyEnumWithVariables)[],
    validValues = [
        ...([0,] as const).map(it => [
            new Holder(it, `${it} as a number`,),
            new Holder(new Number(it,), `${it} as an object number`,),
            new Holder(BigInt(it,), `${it} as a bigint`,),
            new Holder(Object(BigInt(it,),), `${it} as an object bigint`,),
            new Holder(it.toString(), `${it} as a string number`,),
            new Holder(new String(it,), `${it} as an object string number`,),
        ],).flat(),
        ...(['A',] as const).map(it => [
            new Holder(it, `${it} as a string`,),
            new Holder(new String(it,), `${it} as an object string`,),
        ],).flat(),
    ]
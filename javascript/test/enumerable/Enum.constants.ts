import {Enum}                               from "enumerable/Enum"
import {Child1Enum, Child2Enum, ParentEnum} from "./Enum.templateEnums"
import {Holder}                             from "./Holder"

export const nullValues = [null, undefined,] as const,
    unhandledValues = [
        new Holder(true, "boolean",),
        new Holder(new Boolean(true,), "object boolean",),
        ...([[1.1, "positive",], [-1.1, "negative",],] as const).map(([it, name,]) => [
            new Holder(it, `${name} floating number`,),
            new Holder(new Number(it,), `${name} object floating number`,),
            new Holder(it.toString(), `${name} string floating number`,),
            new Holder(new String(it,), `${name} object string floating number`,),
        ],).flat(),
        new Holder(Symbol(), "symbol",),
        new Holder(Object(Symbol(),), "object symbol"),
        new Holder({}, "empty object",),
        new Holder([], "empty array",),
        new Holder(new Set(), "empty set",),
        new Holder(new Map(), "empty map",),
    ] as const,
    invalidInstances = [
        new Holder("", "string",),
        new Holder(new String(), "object string",),
        new Holder(1, "number",),
        new Holder(new Number(), "object number",),
        new Holder(BigInt(1,), "bigint",),
        new Holder(Object(BigInt(1,),), "object bigint",),
        new Holder(true, "boolean",),
        new Holder(new Boolean(), "object boolean",),
        new Holder(Symbol(), "symbol",),
        new Holder(Object(Symbol(),), "object symbol",),
        new Holder({}, "empty object",),
        new Holder([], "empty array",),
        new Holder(new Set(), "empty set",),
        new Holder(new Map(), "empty map",),
        new Holder(Enum, "Enum",),
    ] as const,
    // bigIntMinValue = BigInt(Number.MIN_VALUE,),
    bigIntMaxValue = BigInt(Number.MAX_VALUE,),
    outOfBoundNumbers = [
        ...([-1,] as const).map(it => [
            new Holder(it, `${it} as number`,),
            new Holder(new Number(it,), `${it} as object number`,),
        ],).flat(),
        ...([[-1, "-1",],
            // [bigIntMinValue - 1n, "Number.MIN_VALUE - 1",], [bigIntMinValue - bigIntMinValue, "Number.MIN_VALUE * 2",],
            [bigIntMaxValue + 1n, "Number.MAX_VALUE + 1"], [bigIntMaxValue + bigIntMaxValue, "Number.MAX_VALUE * 2",],] as const).map(([it, name,]) => [
            new Holder(BigInt(it,), `${name} as bigint`,),
            new Holder(Object(BigInt(it,),), `${name} as object bigint`,),
            new Holder(it.toString(), `${name} as string`,),
            new Holder(new String(it,), `${name} as object string`,),
        ],).flat(),
    ],
    forbiddenNumbers = [NaN, Infinity, -Infinity,].map(it => [
        new Holder(it, `${it} as number`,),
        new Holder(new Number(it,), `${it} as object number`,),
        new Holder(it.toString(), `${it} as string`,),
        new Holder(new String(it,), `${it} as object string`,),
    ],).flat(),
    forbiddenEnumFunctions = (["getDefaultOn", "setDefaultOn", "getValueOn", "getValuesOn", "getNamesOn", "getOrdinalsOn",] as const).map(it => [
        new Holder(it, `${it} as string`),
        new Holder(new String(it,), `${it} as object string`,),
    ]).flat(),
    forbiddenInheritedMembers = (["default", "setDefault", "values", "names", "ordinals",] as const).map(it => [
        new Holder(it, `${it} as string`),
        new Holder(new String(it,), `${it} as object string`,),
    ]).flat(),
    simpleEnumVariables = ["VARIABLE_STRING", "VARIABLE_NUMBER", "VARIABLE_BIGINT",],
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
    ],
    parentChildValues = [
        new Holder(ParentEnum.A, "parent",),
        new Holder(Child1Enum.A, "child1",),
        new Holder(Child2Enum.A, "child2",),
    ] as const

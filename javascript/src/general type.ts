/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

//TODO relocate into a single typescript project
/**
 * A simple encapsulation type toward a specified type to be the value, <b>null</b>
 *
 * @see Nullable
 */
export type NullOr<T, > = | T | null
/** A simple type to join both nullable value (<b>null</b> and <b>undefined</b>) */
export type NullOrUndefined = | null | undefined
/**
 * A simple encapsulation type toward a specified type to be the value, <b>null</b> or <b>undefined</b>
 *
 * @see NullOr
 */
export type Nullable<T, > = | T | null | undefined

/** The possible hint received from javascript interpolation & conversion */
export type PossiblePrimitiveHint = "string" | "number" | "default"

/** A possible {@link Number} (primitive or object) */
export type PossibleNumber<T extends number = number, > = | T | Number
/** A simple {@link Number} in a {@link String} format */
export type NumberInAString<T extends number = number, > = `${T}`
/** A possible {@link Number} (primitive, object or in a {@link String} format) */
export type PossibleNumberOrTemplate<T extends number = number, > = | PossibleNumber<T> | NumberInAString<T>

/** A possible {@link BigInt} (primitive or object) */
export type PossibleBigInt<T extends bigint = bigint, > = | T | BigInt
/** A simple {@link BigInt} in a {@link String} format */
export type BigIntInAString<T extends bigint = bigint, > = `${T}`
/** A possible {@link BigInt} (primitive, object or in a {@link String} format) */
export type PossibleBigIntOrTemplate<T extends bigint = bigint, > = | PossibleBigInt<T> | BigIntInAString<T>

/** A possible {@link Number} or {@link BigInt} (primitive or object) */
export type PossibleNumeric<NUMBER extends number = number, BIG_INT extends bigint = bigint, > = | PossibleNumber<NUMBER> | PossibleBigInt<BIG_INT>
/** A possible {@link Number} or {@link BigInt} (primitive, object or in a {@link String} format) */
export type PossibleNumericOrTemplate<NUMBER extends number = number, BIG_INT extends bigint = bigint, >
    = | PossibleNumberOrTemplate<NUMBER> | PossibleBigIntOrTemplate<BIG_INT>

/** A possible {@link String} (primitive or object) */
export type PossibleString<T extends string = string, > = | T | String
/** A possible {@link String}, {@link Number} or {@link BigInt} (primitive or object) */
export type PossibleStringOrNumeric<STRING extends string = string, NUMBER extends number = number, BIG_INT extends bigint = bigint, >
    = | PossibleString<STRING> | PossibleNumeric<NUMBER, BIG_INT>

/** The possible edge case {@link Number} for number conversion from a {@link String} */
export type PossibleEdgeCaseNumericName = | "NaN" | `${| "" | "-"}Infinity`

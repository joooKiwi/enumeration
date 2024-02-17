/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

//TODO relocate into a single typescript project
/**
 * An encapsulation type toward a specified type to be the value, <b>null</b>
 *
 * @see Nullable
 */
export type NullOr<T, > = | T | null
/** A type to join both nullable value (<b>null</b> and <b>undefined</b>) */
export type NullOrUndefined = | null | undefined
/**
 * An encapsulation type toward a specified type to be the value, <b>null</b> or <b>undefined</b>
 *
 * @see NullOr
 */
export type Nullable<T, > = | T | null | undefined

/** The possible hint received from javascript interpolation & conversion */
export type PossiblePrimitiveHint = "string" | "number" | "default"

/** A possible {@link Number} (primitive or object) */
export type PossibleNumber<T extends number = number, > = | T | Number
/** A {@link Number} in a {@link String} template */
export type NumberTemplate<T extends number = number, > = `${T}`
/** A possible {@link Number} (primitive, object or in a {@link String} template) */
export type PossibleNumberOrTemplate<T extends number = number, > = | T | Number | `${T}`

/** A possible {@link BigInt} (primitive or object) */
export type PossibleBigInt<T extends bigint = bigint, > = | T | BigInt
/** A {@link BigInt} in a {@link String} template */
export type BigIntTemplate<T extends bigint = bigint, > = `${T}`
/** A possible {@link BigInt} (primitive, object or in a {@link String} template) */
export type PossibleBigIntOrTemplate<T extends bigint = bigint, > = | T | BigInt | `${T}`

/** A possible {@link Number} or {@link BigInt} (primitive or object) */
export type PossibleNumeric<NUMBER extends number = number, BIG_INT extends bigint = bigint, > = | NUMBER | BIG_INT | Number | BigInt
/** A possible {@link Number} or {@link BigInt} (primitive or object) in a {@link String} template */
export type NumericTemplate<NUMBER extends number = number, BIG_INT extends bigint = bigint, > = `${| NUMBER | BIG_INT}`
/** A possible {@link Number} or {@link BigInt} (primitive, object or in a {@link String} template) */
export type PossibleNumericOrTemplate<NUMBER extends number = number, BIG_INT extends bigint = bigint, >
    = | NUMBER | BIG_INT | Number | BigInt | `${| NUMBER | BIG_INT}`

/** A possible {@link String} (primitive or object) */
export type PossibleString<T extends string = string, > = | T | String
/** A possible {@link String}, {@link Number} or {@link BigInt} (primitive or object) */
export type PossibleStringOrNumeric<STRING extends string = string, NUMBER extends number = number, BIG_INT extends bigint = bigint, >
    = | STRING | NUMBER | BIG_INT | String | Number | BigInt

/** The possible edge case {@link Number} for number conversion from a {@link String} */
export type PossibleEdgeCaseNumericName = | "NaN" | `${| "" | "-"}Infinity`

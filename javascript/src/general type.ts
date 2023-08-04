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

/** A possible {@link String string} (primitive or object) */
export type PossibleString = | string | String
/** A possible {@link Number number} or {@link BigInt bigint} (primitive or object) */
export type PossibleNumeric = | PossibleNumber | PossibleBigInt
/** A possible {@link Number number} (primitive or object) */
export type PossibleNumber = | number | Number
/** A possible {@link BigInt bigint} (primitive or object) */
export type PossibleBigInt = | bigint | BigInt
/** A possible {@link String string}, {@link Number number} or {@link BigInt bigint} (primitive or object) */
export type PossibleStringOrNumeric = | PossibleString | PossibleNumeric

/** The possible edge case {@link Number} for number conversion from a {@link String} */
export type PossibleEdgeCaseNumericName = | "NaN" | `${| "" | "-"}Infinity`

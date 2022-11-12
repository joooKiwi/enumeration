export type NullOr<T, > = | T | null
export type Nullable<T, > = | T | null | undefined

/** The possible hint received from javascript interpolation & conversion */
export type PossiblePrimitiveHint = "string" | "number" | "default"

/** A possible {@link String string} (primitive or object) */
export type PossibleString = | string | String
/** A possible {@link Number number} or {@link BigInt bigint} (primitive or object) */
export type PossibleNumeric = | number | Number | bigint | BigInt
/** A possible {@link String string}, {@link Number number} or {@link BigInt bigint} (primitive or object) */
export type PossibleStringOrNumeric = | PossibleString | PossibleNumeric

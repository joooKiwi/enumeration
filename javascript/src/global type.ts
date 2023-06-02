//TODO relocate into a single typescript project
/**
 * A simple encapsulation type toward a specified type to be the value, <b>null</b>
 *
 * @see Nullable
 */
type NullOr<T, > = | T | null
/** A simple type to join both nullable value (<b>null</b> and <b>undefined</b>) */
type NullOrUndefined = | null | undefined
/**
 * A simple encapsulation type toward a specified type to be the value, <b>null</b> or <b>undefined</b>
 *
 * @see NullOr
 */
type Nullable<T, > = | T | null | undefined

/** The possible hint received from javascript interpolation & conversion */
type PossiblePrimitiveHint = "string" | "number" | "default"

/** A possible {@link String string} (primitive or object) */
type PossibleString = | string | String
/** A possible {@link Number number} or {@link BigInt bigint} (primitive or object) */
type PossibleNumeric = | PossibleNumber | PossibleBigInt
/** A possible {@link Number number} (primitive or object) */
type PossibleNumber = | number | Number
/** A possible {@link BigInt bigint} (primitive or object) */
type PossibleBigInt = | bigint | BigInt
/** A possible {@link String string}, {@link Number number} or {@link BigInt bigint} (primitive or object) */
type PossibleStringOrNumeric = | PossibleString | PossibleNumeric

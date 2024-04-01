/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * An encapsulation type toward a specified type to be the value, <b>null</b>
 *
 * @see Nullable
 * @deprecated Use NullOr from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type NullOr<T, > = | T | null
/**
 * A type to join both nullable value (<b>null</b> and <b>undefined</b>)
 *
 * @deprecated Use NullOrUndefined from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type NullOrUndefined = | null | undefined
/**
 * An encapsulation type toward a specified type to be the value, <b>null</b> or <b>undefined</b>
 *
 * @see NullOr
 * @deprecated Use Nullable from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type Nullable<T, > = | T | null | undefined

/**
 * The possible hint received from javascript interpolation & conversion
 *
 * @deprecated Use PossiblePrimitiveHint from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossiblePrimitiveHint = "string" | "number" | "default"

/**
 * A possible {@link Number} (primitive or object)
 *
 * @deprecated Use NumberOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleNumber<T extends number = number, > = | T | Number
/**
 * A {@link Number} in a {@link String} template
 *
 * @deprecated Use NumberTemplate from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type NumberTemplate<T extends number = number, > = `${T}`
/**
 * A possible {@link Number} (primitive, object or in a {@link String} template)
 *
 * @deprecated Use TemplateOrNumberOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleNumberOrTemplate<T extends number = number, > = | T | Number | `${T}`

/**
 * A possible {@link BigInt} (primitive or object)
 *
 * @deprecated Use BigIntOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleBigInt<T extends bigint = bigint, > = | T | BigInt
/**
 * A {@link BigInt} in a {@link String} template
 *
 * @deprecated Use BigIntTemplate from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type BigIntTemplate<T extends bigint = bigint, > = `${T}`
/**
 * A possible {@link BigInt} (primitive, object or in a {@link String} template)
 *
 * @deprecated Use TemplateOrBigIntOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleBigIntOrTemplate<T extends bigint = bigint, > = | T | BigInt | `${T}`

/**
 * A possible {@link Number} or {@link BigInt} (primitive or object)
 *
 * @deprecated Use NumericOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleNumeric<NUMBER extends number = number, BIG_INT extends bigint = bigint, > = | NUMBER | BIG_INT | Number | BigInt
/**
 * A possible {@link Number} or {@link BigInt} (primitive or object) in a {@link String} template
 *
 * @deprecated Use NumericTemplate from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type NumericTemplate<NUMBER extends number = number, BIG_INT extends bigint = bigint, > = `${| NUMBER | BIG_INT}`
/**
 * A possible {@link Number} or {@link BigInt} (primitive, object or in a {@link String} template)
 *
 * @deprecated Use TemplateOrNumericOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleNumericOrTemplate<NUMBER extends number = number, BIG_INT extends bigint = bigint, >
    = | NUMBER | BIG_INT | Number | BigInt | `${| NUMBER | BIG_INT}`

/**
 * A possible {@link String} (primitive or object)
 *
 * @deprecated Use StringOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleString<T extends string = string, > = | T | String
/**
 * A possible {@link String}, {@link Number} or {@link BigInt} (primitive or object)
 *
 * @deprecated Use StringOrNumericOrObject from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleStringOrNumeric<STRING extends string = string, NUMBER extends number = number, BIG_INT extends bigint = bigint, >
    = | STRING | NUMBER | BIG_INT | String | Number | BigInt

/**
 * The possible edge case {@link Number} for number conversion from a {@link String}
 *
 * @deprecated Use PossibleEdgeCaseNumericName from "@joookiwi/type" instead. This will be removed in version 3.6.
 */
export type PossibleEdgeCaseNumericName = | "NaN" | `${| "" | "-"}Infinity`

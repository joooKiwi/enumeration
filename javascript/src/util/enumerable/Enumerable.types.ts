import type {Enumerable}                                               from "enumerable/Enumerable"
import type {EnumerableConstructor}                                    from "enumerable/EnumerableConstructor.type"
import type {Nullable, PossiblePrimitiveHint, PossibleStringOrNumeric} from "../../type"

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = "Enum"

/** A conversion from an {@link Enumerable} to a primitive value ({@link String} or {@link Number}) */
export type EnumerableToPrimitive<HINT extends PossiblePrimitiveHint, ENUMERABLE extends Enumerable = Enumerable, > =
    | (HINT extends "number" ? ENUMERABLE["ordinal"] : never)
    | (HINT extends ("string" | "default") ? ENUMERABLE["name"] : never)

/** A simple object with the names as the key & the {@link Enumerable} as the value */
export type SimpleEnumerableFromName<NAME extends string, ENUMERABLE extends Enumerable = Enumerable<number, NAME>, > = Record<NAME, ENUMERABLE>
// export type SimpleEnumerableFromOrdinal<ORDINAL extends number, ENUMERABLE extends Enumerable = Enumerable<ORDINAL>, > = Record<ORDINAL, ENUMERABLE>

/** A possible {@link EnumerableConstructor} based on a {@link Enumerable} */
export type PossibleEnumerableConstructorByEnumerable<ENUMERABLE extends Enumerable, > = Nullable<EnumerableConstructor<ENUMERABLE["ordinal"], ENUMERABLE["name"], any>>
/** A possible value based on a {@link Enumerable} */
export type PossibleValueByEnumerable<ENUMERABLE extends Enumerable, > = Nullable<| PossibleStringOrNumeric | Enumerable<ENUMERABLE["ordinal"], ENUMERABLE["name"]>>
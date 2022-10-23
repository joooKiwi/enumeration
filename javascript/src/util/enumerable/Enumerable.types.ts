import type {Enumerable} from "enumerable/Enumerable"

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = "Enum"

/** A simple object with the names as the key & the {@link Enumerable} as the value */
export type SimpleEnumerableFromName<NAME extends string, ENUMERABLE extends Enumerable = Enumerable<number, NAME>, > = Record<NAME, ENUMERABLE>
// export type SimpleEnumerableFromOrdinal<ORDINAL extends number, ENUMERABLE extends Enumerable = Enumerable<ORDINAL>, > = Record<ORDINAL, ENUMERABLE>

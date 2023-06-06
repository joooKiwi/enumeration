import type {PossibleBigInt}                from "../../general type"
import type {EnumConstants}                 from "./EnumConstants"
import type {Enumerable}                    from "./Enumerable"
import type {EnumerableConstructor}         from "./EnumerableConstructor"
import type {BasicCompanionEnumDeclaration} from "./companion/BasicCompanionEnum.declaration"

/** The {@link Enumerable} name in a {@link Object.toString toString()} method */
export type EnumerableName = typeof EnumConstants["ENUM_TO_STRING_TAG"]

/** A conversion from an {@link Enumerable} to a primitive value ({@link String} or {@link Number}) */
export type EnumerableToPrimitive<HINT extends string, ENUMERABLE extends Enumerable = Enumerable, > =
    | (Lowercase<HINT> extends "number" ? ENUMERABLE["ordinal"] : never)
    | (Lowercase<HINT> extends ("string" | "default") ? ENUMERABLE["name"] : never)

/** A simple {@link String} or {@link Enumerable.name} value */
export type PossibleNameOf<NAME extends string, ENUMERABLE extends Enumerable, > = | NAME | NameOf<ENUMERABLE>
/** A simple {@link String} or {@link Enumerable.ordinal} value */
export type PossibleOrdinalOf<ORDINAL extends number, ENUMERABLE extends Enumerable, > = | ORDINAL | OrdinalOf<ENUMERABLE>

/** A join of both {@link String} and {@link Enumerable.name} */
export type SpecificNameOf<NAME extends string, ENUMERABLE extends Enumerable, > = & NAME & NameOf<ENUMERABLE>
/** A join of both {@link Number} and {@link Enumerable.ordinal} */
export type SpecificOrdinalOf<ORDINAL extends number, ENUMERABLE extends Enumerable, > = & ORDINAL & OrdinalOf<ENUMERABLE>

/**
 * A simple type to retrieve the {@link Enumerable.name name} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.name
 */
export type NameOf<ENUMERABLE extends Enumerable, > = ENUMERABLE["name"]
/**
 * A simple type to retrieve the {@link Enumerable.ordinal ordinal} of an {@link Enumerable}
 * with the combinaison of an {@link EnumerableConstructor} keys
 * and a {@link CompanionEnum} {@link CompanionEnum.instance instance} keys
 *
 * @see Enumerable.ordinal
 */
export type OrdinalOf<ENUMERABLE extends Enumerable, > = ENUMERABLE["ordinal"]
/** The {@link BasicCompanionEnumDeclaration Companion enum} reference of an {@link EnumerableConstructor} */
export type CompanionOf<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, > = ENUMERABLE_CONSTRUCTOR["CompanionEnum"]["get"]


/** A general {@link Enumerable} type possibility */
export type PossibleEnumerableValue<ENUMERABLE extends Enumerable = Enumerable, ORDINAL extends number = number, NAME extends string = string, > =
    | String | Number | PossibleBigInt
    | ORDINAL | NAME | ENUMERABLE
/** A strict {@link Enumerable} type possibility */
export type PossibleEnumerableValueBy<ENUMERABLE extends Enumerable, >
    = | String | Number | PossibleBigInt
      | ENUMERABLE[ | "ordinal" | "name"]
      | ENUMERABLE

//#region -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------

export type ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, ORDINAL extends number, >
    = ENUMERABLE_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, NAME extends string, >
    = ENUMERABLE_CONSTRUCTOR[& SpecificNameOf<NAME, ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR]
export type ValueByEnumerableConstructorAndEnumerableOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, >
    = ENUMERABLE_CONSTRUCTOR[& OrdinalOf<ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR]

export type EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUMERABLE_CONSTRUCTOR[& NAME & keyof ENUMERABLE_CONSTRUCTOR] & ENUMERABLE>
export type EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUMERABLE_CONSTRUCTOR[& ORDINAL & keyof ENUMERABLE_CONSTRUCTOR] & ENUMERABLE>


//#endregion -------------------- Enumerable by Enumerable & EnumerableConstructor --------------------
//#region -------------------- Enumerable by EnumerableConstructor --------------------

export type EnumerableByEnumerableConstructor<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, VALUE extends PossibleEnumerableValue<any>, >
    = | (VALUE extends number ? EnumerableByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
      | (VALUE extends `${infer ORDINAL extends number}` ? EnumerableByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, ORDINAL> : never)
      | (VALUE extends string ? EnumerableByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
      | (VALUE extends Enumerable<any, any> ? EnumerableByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
export type EnumerableNameByEnumerableConstructor<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, VALUE extends PossibleEnumerableValue<any>, >
    = | (VALUE extends number ? EnumerableNameByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
      | (VALUE extends `${infer ORDINAL extends number}` ? EnumerableNameByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, ORDINAL> : never)
      | (VALUE extends string ? EnumerableNameByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
      | (VALUE extends Enumerable<any, any> ? EnumerableNameByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
export type EnumerableOrdinalByEnumerableConstructor<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, VALUE extends PossibleEnumerableValue<any>, >
    = | (VALUE extends number ? EnumerableOrdinalByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
      | (VALUE extends `${infer ORDINAL extends number}` ? EnumerableOrdinalByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, ORDINAL> : never)
      | (VALUE extends string ? EnumerableOrdinalByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR, VALUE> : never)
      | (VALUE extends Enumerable<any, any> ? EnumerableOrdinalByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR, VALUE> : never)


export type EnumerableByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, >
    = & ENUMERABLE_CONSTRUCTOR[& NameOf<ENUMERABLE> & keyof ENUMERABLE_CONSTRUCTOR] & ENUMERABLE
export type EnumerableOrdinalByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, >
    = OrdinalOf<EnumerableByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR, ENUMERABLE>>
export type EnumerableNameByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUMERABLE extends Enumerable, >
    = NameOf<EnumerableByEnumerableConstructorAndEnumerable<ENUMERABLE_CONSTRUCTOR, ENUMERABLE>>

export type EnumerableByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, NAME extends string, >
    = & ENUMERABLE_CONSTRUCTOR[& NAME & keyof ENUMERABLE_CONSTRUCTOR] & Enumerable
export type EnumerableOrdinalByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, NAME extends string, >
    = & OrdinalOf<EnumerableByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR, NAME>>
export type EnumerableNameByEnumerableConstructorAndName<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, NAME extends string, >
    = & keyof ENUMERABLE_CONSTRUCTOR & NAME

export type EnumerableByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ORDINAL extends number, >
    = & ENUMERABLE_CONSTRUCTOR[& ORDINAL & keyof ENUMERABLE_CONSTRUCTOR] & Enumerable
export type EnumerableOrdinalByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ORDINAL extends number, >
    = & keyof ENUMERABLE_CONSTRUCTOR & ORDINAL
export type EnumerableNameByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR extends EnumerableConstructor<any, any>, ORDINAL extends number, >
    = NameOf<EnumerableByEnumerableConstructorAndOrdinal<ENUMERABLE_CONSTRUCTOR, ORDINAL>>

//#endregion -------------------- Enumerable by EnumerableConstructor --------------------

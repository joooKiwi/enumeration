import type {BasicEnumerableConstructor}                     from "enumerable/BasicEnumerableConstructor"
import type {BasicEnumerableConstructorWithNamesAndOrdinals} from "enumerable/BasicEnumerableConstructorWithNamesAndOrdinals"
import type {BasicEnumerableConstructorWithEverything}       from "enumerable/BasicEnumerableConstructorWithEverything"
import type {Enumerable}                                     from "enumerable/Enumerable"
import type {SimpleEnumerableFromName}                       from "enumerable/Enumerable.types"
import type {BasicEnumerableConstructorWithDefault}          from "enumerable/BasicEnumerableConstructorWithDefault"

type TemplateEnumerableConstructor<T, ORDINAL extends number, NAME extends string, ENUMERABLE extends Enumerable<ORDINAL, NAME>, > =
    & T
    & SimpleEnumerableFromName<NAME, ENUMERABLE>
//& SimpleEnumerableFromOrdinal<ORDINAL, ENUMERABLE>//TODO Try adding it while being implemented in the Enum section (not their child)

/** The {@link BasicEnumerableConstructor} definition for the {@link Enum._static} type definition */
export type EnumerableConstructor<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    = TemplateEnumerableConstructor<BasicEnumerableConstructor<ORDINAL, NAME, ENUMERABLE>, ORDINAL, NAME, ENUMERABLE>
/** The {@link BasicEnumerableConstructorWithDefault} definition for the {@link Enum._static} type definition */
export type EnumerableConstructorWithDefault<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    = TemplateEnumerableConstructor<BasicEnumerableConstructorWithDefault<ORDINAL, NAME, ENUMERABLE>, ORDINAL, NAME, ENUMERABLE>
/** The {@link BasicEnumerableConstructorWithNamesAndOrdinals} definition for the {@link Enum._static} type definition */
export type EnumerableConstructorWithNamesAndOrdinals<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    = TemplateEnumerableConstructor<BasicEnumerableConstructorWithNamesAndOrdinals<ORDINAL, NAME, ENUMERABLE>, ORDINAL, NAME, ENUMERABLE>
/** The {@link BasicEnumerableConstructorWithEverything} definition for the {@link Enum._static} type definition */
export type EnumerableConstructorWithEverything<ORDINAL extends number = number, NAME extends string = string, ENUMERABLE extends Enumerable<ORDINAL, NAME> = Enumerable<ORDINAL, NAME>, >
    = TemplateEnumerableConstructor<BasicEnumerableConstructorWithEverything<ORDINAL, NAME, ENUMERABLE>, ORDINAL, NAME, ENUMERABLE>

export type AnyEnumerableConstructor = EnumerableConstructor<any, any, any>

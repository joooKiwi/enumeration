//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Enumerable}                   from "../Enumerable"
import type {EnumerableConstructor}        from "../EnumerableConstructor"
import type {OrdinalOf, SpecificOrdinalOf} from "./ordinalOf"
import type {NameOf, SpecificNameOf}       from "./nameOf"

/** @deprecated Replace with {@link ValueBySpecificOrdinal} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = ENUM_CONSTRUCTOR[& SpecificOrdinalOf<ORDINAL, ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Replace with {@link ValueBySpecificName} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = ENUM_CONSTRUCTOR[& SpecificNameOf<NAME, ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Replace with {@link ValueByOrdinal} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& OrdinalOf<ENUM> & keyof ENUM_CONSTRUCTOR]
/** @deprecated Replace with {@link ValueByName} instead. This will be removed in version 3.14 */
export type ValueByEnumerableConstructorAndEnumerableName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, >
    = ENUM_CONSTRUCTOR[& NameOf<ENUM> & keyof ENUM_CONSTRUCTOR]

/** @deprecated Replace with {@link OrdinalByName} instead. This will be removed in version 3.14 */
export type EnumerableOrdinalByEnumerableConstructorAndEnumerableNameAndName<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, NAME extends string, >
    = OrdinalOf<& ENUM_CONSTRUCTOR[& NAME & keyof ENUM_CONSTRUCTOR] & ENUM>
/** @deprecated Replace with {@link NameByOrdinal} instead. This will be removed in version 3.14 */
export type EnumerableNameByEnumerableConstructorAndEnumerableOrdinalAndOrdinal<ENUM_CONSTRUCTOR extends EnumerableConstructor<any, any>, ENUM extends Enumerable, ORDINAL extends number, >
    = NameOf<& ENUM_CONSTRUCTOR[& ORDINAL & keyof ENUM_CONSTRUCTOR] & ENUM>

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

import type {Enumerable}                    from "../Enumerable"
import type {EnumerableConstructor}         from "../EnumerableConstructor"
import type {EnumerableWithNullableParent}  from "../EnumerableWithNullableParent"
import type {CompanionEnumerable}           from "./CompanionEnumerable"
import type {CompanionEnumerableWithParent} from "./CompanionEnumerableWithParent"

/** @deprecated Replace with {@link CompanionEnumerableWithParent} instead. This will be removed in version 3.14 */
export interface CompanionEnumWithParentDeclaration<out ENUM extends EnumerableWithNullableParent<PARENT_ENUM>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>,
    out PARENT_ENUM extends Enumerable,
    PARENT_ENUM_CONSTRUCTOR extends EnumerableConstructor<PARENT_ENUM, CompanionEnumerable<PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR>>, > extends CompanionEnumerableWithParent<ENUM, ENUM_CONSTRUCTOR, PARENT_ENUM, PARENT_ENUM_CONSTRUCTOR> {}

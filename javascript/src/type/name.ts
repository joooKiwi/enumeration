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

import type {PossibleEdgeCaseNumericName} from "@joookiwi/type"

/**
 * Every possible string that throws an {@link ForbiddenNameException}
 * when being retrieving in a {@link CompanionEnumerable}
 *
 * @see PossibleEdgeCaseNumericName
 * @see PossibleEnumerableMembers
 */
export type ImpossibleNames = | PossibleEdgeCaseNumericName
                              | "name" | "ordinal" | "parent" | "grandParent" | "greatGrandParent"

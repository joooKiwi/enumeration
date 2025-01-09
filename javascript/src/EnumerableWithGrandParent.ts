//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableGrandParent} from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithParent}              from "./EnumerableWithParent"

export interface EnumerableWithGrandParent<out PARENT extends EnumerableWithParent<GRAND_PARENT>,
    out GRAND_PARENT extends Enumerable,
    out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumerableWithParent<PARENT, ORDINAL, NAME>,
            EnumerableWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    /** The parent of the current instance */
    get parent(): PARENT

    /** The grandparent of the current instance */
    get grandParent(): GRAND_PARENT

}

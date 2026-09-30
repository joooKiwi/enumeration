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

import type {Enumerable}                        from "./Enumerable"
import type {EnumerableWithNullableGrandParent} from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithParent}              from "./EnumerableWithParent"
import type {PossibleNameOf}                    from "./type/nameOf"
import type {PossibleOrdinalOf}                 from "./type/ordinalOf"

export interface EnumerableWithGrandParent<out PARENT extends EnumerableWithParent<GRAND_PARENT>,
    out GRAND_PARENT extends Enumerable,
    out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumerableWithParent<PARENT, ORDINAL, NAME>,
            EnumerableWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    /** The parent of the current instance */
    readonly parent: PARENT

    /** The grandparent of the current instance */
    readonly grandParent: GRAND_PARENT

}

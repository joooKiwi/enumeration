/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}      from "./EnumerableWithNullableParent"
import type {NullOr}                            from "./general type"

export interface EnumerableWithNullableGrandParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends EnumerableWithNullableParent<PossibleOrdinalOf<number, GRAND_PARENT>, PossibleNameOf<string, GRAND_PARENT>, GRAND_PARENT> = EnumerableWithNullableParent<number, string, never>,
    GRAND_PARENT extends Enumerable = Enumerable, >
    extends EnumerableWithNullableParent<ORDINAL, NAME, PARENT> {

    /** The {@link NullOr nullable} grandparent of the current instance */
    get grandParent(): NullOr<GRAND_PARENT>

}

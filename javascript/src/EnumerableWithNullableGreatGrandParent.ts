/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableGrandParent} from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}      from "./EnumerableWithNullableParent"
import type {NullOr}                            from "./general type"

export interface EnumerableWithNullableGreatGrandParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends EnumerableWithNullableGrandParent<PossibleOrdinalOf<number, GRAND_PARENT>, PossibleNameOf<string, GRAND_PARENT>, GRAND_PARENT, GREAT_GRAND_PARENT> = EnumerableWithNullableGrandParent<number, string, never, never>,
    GRAND_PARENT extends EnumerableWithNullableParent<PossibleOrdinalOf<number, GREAT_GRAND_PARENT>, PossibleNameOf<string, GREAT_GRAND_PARENT>, GREAT_GRAND_PARENT> = EnumerableWithNullableParent<number, string, never>,
    GREAT_GRAND_PARENT extends Enumerable = Enumerable, >
    extends EnumerableWithNullableGrandParent<ORDINAL, NAME, PARENT, GRAND_PARENT> {

    /** The {@link NullOr nullable} great-grandparent of the current instance */
    get greatGrandParent(): NullOr<GREAT_GRAND_PARENT>

}

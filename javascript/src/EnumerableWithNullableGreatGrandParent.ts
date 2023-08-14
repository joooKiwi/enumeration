/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableGrandParent} from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableParent}      from "./EnumerableWithNullableParent"
import type {NullOr}                            from "./general type"

export interface EnumerableWithNullableGreatGrandParent<out PARENT extends EnumerableWithNullableGrandParent<GRAND_PARENT, GREAT_GRAND_PARENT>,
    out GRAND_PARENT extends EnumerableWithNullableParent<GREAT_GRAND_PARENT>,
    out GREAT_GRAND_PARENT extends Enumerable,
    out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumerableWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    /** The {@link NullOr nullable} great-grandparent of the current instance */
    get greatGrandParent(): NullOr<GREAT_GRAND_PARENT>

}

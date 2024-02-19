/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}      from "./EnumerableWithNullableParent"
import type {NullOr}                            from "./general type"

export interface EnumerableWithNullableGrandParent<out PARENT extends EnumerableWithNullableParent<GRAND_PARENT>,
    out GRAND_PARENT extends Enumerable,
    out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumerableWithNullableParent<PARENT, ORDINAL, NAME> {

    /** The {@link NullOr nullable} grandparent of the current instance */
    get grandParent(): NullOr<GRAND_PARENT>

}

/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                             from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf}      from "./Enumerable.types"
import type {EnumerableWithGrandParent}              from "./EnumerableWithGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithParent}                   from "./EnumerableWithParent"

export interface EnumerableWithGreatGrandParent<out PARENT extends EnumerableWithGrandParent<GRAND_PARENT, GREAT_GRAND_PARENT>,
    out GRAND_PARENT extends EnumerableWithParent<GREAT_GRAND_PARENT>,
    out GREAT_GRAND_PARENT extends Enumerable,
    out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumerableWithGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME>,
            EnumerableWithNullableGreatGrandParent<PARENT, GRAND_PARENT, GREAT_GRAND_PARENT, ORDINAL, NAME> {

    /** The parent of the current instance */
    get parent(): PARENT

    /** The grandparent of the current instance */
    get grandParent(): GRAND_PARENT

    /** The great-grandparent of the current instance */
    get greatGrandParent(): GREAT_GRAND_PARENT

}

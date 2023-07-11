/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                             from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf}      from "./Enumerable.types"
import type {EnumerableWithGrandParent}              from "./EnumerableWithGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithParent}                   from "./EnumerableWithParent"

export interface EnumerableWithGreatGrandParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends EnumerableWithGrandParent<PossibleOrdinalOf<number, GRAND_PARENT>, PossibleNameOf<string, GRAND_PARENT>, GRAND_PARENT, GREAT_GRAND_PARENT> = EnumerableWithGrandParent<number, string, never, never>,
    GRAND_PARENT extends EnumerableWithParent<PossibleOrdinalOf<number, GREAT_GRAND_PARENT>, PossibleNameOf<string, GREAT_GRAND_PARENT>, GREAT_GRAND_PARENT> = EnumerableWithParent<number, string, never>,
    GREAT_GRAND_PARENT extends Enumerable = Enumerable, >
    extends EnumerableWithGrandParent<ORDINAL, NAME, PARENT, GRAND_PARENT>,
            EnumerableWithNullableGreatGrandParent<ORDINAL, NAME, PARENT, GRAND_PARENT, GREAT_GRAND_PARENT> {

    /** The parent of the current instance */
    get parent(): PARENT

    /** The grandparent of the current instance */
    get grandParent(): GRAND_PARENT

    /** The great-grandparent of the current instance */
    get greatGrandParent(): GREAT_GRAND_PARENT

}

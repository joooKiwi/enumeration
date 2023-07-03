/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithParent}              from "./EnumerableWithParent"
import type {NullOr}                            from "./general type"

export interface EnumerableWithGrandParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends EnumerableWithParent<PossibleOrdinalOf<number, GRAND_PARENT>, PossibleNameOf<string, GRAND_PARENT>, GRAND_PARENT> = EnumerableWithParent<number, string, never>,
    GRAND_PARENT extends Enumerable = Enumerable, >
    extends EnumerableWithParent<ORDINAL, NAME, PARENT> {

    /** The direct grandparent of the current {@link Enumerable} instance */
    get grandParent(): NullOr<GRAND_PARENT>

}

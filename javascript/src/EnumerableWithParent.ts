/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}      from "./EnumerableWithNullableParent"

export interface EnumerableWithParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends Enumerable = Enumerable, >
    extends Enumerable<ORDINAL, NAME>,
            EnumerableWithNullableParent<ORDINAL, NAME, PARENT> {

    /** The parent of the current instance */
    get parent(): PARENT

}

/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {NullOr}                            from "./general type"

export interface EnumerableWithNullableParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends Enumerable = Enumerable, >
    extends Enumerable<ORDINAL, NAME> {

    /** The {@link NullOr nullable} parent of the current instance */
    get parent(): NullOr<PARENT>

}

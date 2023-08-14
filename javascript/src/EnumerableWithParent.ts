/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}      from "./EnumerableWithNullableParent"

export interface EnumerableWithParent<out PARENT extends Enumerable,
    out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends Enumerable<ORDINAL, NAME>,
            EnumerableWithNullableParent<PARENT, ORDINAL, NAME> {

    /** The parent of the current instance */
    get parent(): PARENT

}

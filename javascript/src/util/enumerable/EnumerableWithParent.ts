import type {Enumerable}                        from "enumerable/Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "enumerable/Enumerable.types"

export interface EnumerableWithParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends Enumerable = Enumerable, >
    extends Enumerable<ORDINAL, NAME> {

    /** The direct parent of the current {@link Enumerable} instance */
    get parent(): NullOr<PARENT>

}

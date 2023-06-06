import type {NullOr}                            from "../../general type"
import type {Enumerable}                        from "./Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"

export interface EnumerableWithParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends Enumerable = Enumerable, >
    extends Enumerable<ORDINAL, NAME> {

    /** The direct parent of the current {@link Enumerable} instance */
    get parent(): NullOr<PARENT>

}

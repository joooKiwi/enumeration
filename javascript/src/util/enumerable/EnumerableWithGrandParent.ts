import type {Enumerable}                        from "enumerable/Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "enumerable/Enumerable.types"
import type {EnumerableWithParent}              from "enumerable/EnumerableWithParent"

export interface EnumerableWithGrandParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends EnumerableWithParent<PossibleOrdinalOf<number, GRAND_PARENT>, PossibleNameOf<string, GRAND_PARENT>, GRAND_PARENT> = EnumerableWithParent<number, string, never>,
    GRAND_PARENT extends Enumerable = Enumerable, >
    extends EnumerableWithParent<ORDINAL, NAME, PARENT> {

    /** The direct grandparent of the current {@link Enumerable} instance */
    get grandParent(): NullOr<GRAND_PARENT>

}

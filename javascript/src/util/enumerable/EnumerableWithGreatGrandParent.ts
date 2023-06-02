import type {Enumerable}                        from "enumerable/Enumerable"
import type {PossibleNameOf, PossibleOrdinalOf} from "enumerable/Enumerable.types"
import type {EnumerableWithGrandParent}         from "enumerable/EnumerableWithGrandParent"
import type {EnumerableWithParent}              from "enumerable/EnumerableWithParent"

export interface EnumerableWithGreatGrandParent<ORDINAL extends PossibleOrdinalOf<number, PARENT> = number, NAME extends PossibleNameOf<string, PARENT> = string,
    PARENT extends EnumerableWithGrandParent<PossibleOrdinalOf<number, GRAND_PARENT>, PossibleNameOf<string, GRAND_PARENT>, GRAND_PARENT, GREAT_GRAND_PARENT> = EnumerableWithGrandParent<number, string, never, never>,
    GRAND_PARENT extends EnumerableWithParent<PossibleOrdinalOf<number, GREAT_GRAND_PARENT>, PossibleNameOf<string, GREAT_GRAND_PARENT>, GREAT_GRAND_PARENT> = EnumerableWithParent<number, string, never>,
    GREAT_GRAND_PARENT extends Enumerable = Enumerable, >
    extends EnumerableWithGrandParent<ORDINAL, NAME, PARENT, GRAND_PARENT> {

    /** The direct great-grandparent of the current {@link Enumerable} instance */
    get greatGrandParent(): NullOr<GREAT_GRAND_PARENT>

}

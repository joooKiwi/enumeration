import {GenericCollectionHolder} from "../../src/util/collection/GenericCollectionHolder"

export const EMPTY = new GenericCollectionHolder([],),
    AB = new GenericCollectionHolder(["a", "b",],),
    A_NULL_B_UNDEFINED = new GenericCollectionHolder(["a", null, "b", undefined,],),
    AB12 = new GenericCollectionHolder(["a", "b", 1, 2,],),
    ABCD = new GenericCollectionHolder(["a", "b", "c", "d",],),
    ABCD_ABCD = new GenericCollectionHolder(["a", "b", "c", "d", "A", "B", "C", "D",],),
    NULL_ABCD = new GenericCollectionHolder([null, "a", "b", "c", "d",],),
    ABCD_NULL = new GenericCollectionHolder(["a", "b", "c", "d", null,],),
    UNDEFINED_ABCD = new GenericCollectionHolder([undefined, "a", "b", "c", "d",],),
    ABCD_UNDEFINED = new GenericCollectionHolder(["a", "b", "c", "d", undefined,],)
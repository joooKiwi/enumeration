import {GenericCollectionHolder} from "../../src/util/collection/GenericCollectionHolder"
import {Holder}                  from "../Holder"

export const sizeValues = [
        new Holder({collection: new GenericCollectionHolder([],), size: 0,}, '0',),
        new Holder({collection: new GenericCollectionHolder([1,],), size: 1,}, '1',),
    ] as const,
    templateItems = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j',
        true, false,
    ] as const,
    nonPresentItem = Symbol(),
    templateCollection = new GenericCollectionHolder(templateItems,)

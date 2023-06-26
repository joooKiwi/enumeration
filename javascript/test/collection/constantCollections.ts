/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {GenericCollectionHolder} from "../../src/util/collection/GenericCollectionHolder"

export const EMPTY = () => new GenericCollectionHolder([],),
    A = () => new GenericCollectionHolder(['a',],),
    AB = () => new GenericCollectionHolder(['a', 'b',],),
    SINGULAR_A_OBJECT = new String('a',),
    SINGULAR_B_OBJECT = new String('a',),
    AB_OBJECT = () => new GenericCollectionHolder([SINGULAR_A_OBJECT, SINGULAR_B_OBJECT,],),
    A_NULL_B_UNDEFINED = () => new GenericCollectionHolder(['a', null, 'b', undefined,],),
    AB12 = () => new GenericCollectionHolder(['a', 'b', 1, 2,],),
    ABCD = () => new GenericCollectionHolder(['a', 'b', 'c', 'd',],),
    ABAB = () => new GenericCollectionHolder(['a', 'b', 'a', 'b',],),
    ABCDEFGHIJ = () => new GenericCollectionHolder(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',],),
    ABCD_ABCD = () => new GenericCollectionHolder(['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D',],),
    NULL_ABCD = () => new GenericCollectionHolder([null, 'a', 'b', 'c', 'd',],),
    ABCD_NULL = () => new GenericCollectionHolder(['a', 'b', 'c', 'd', null,],),
    UNDEFINED_ABCD = () => new GenericCollectionHolder([undefined, 'a', 'b', 'c', 'd',],),
    ABCD_UNDEFINED = () => new GenericCollectionHolder(['a', 'b', 'c', 'd', undefined,],)

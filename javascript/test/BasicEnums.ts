/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {Enum}                                        from "../src/Enum"
import type {Enumerable}                             from "../src/Enumerable"
import type {EnumerableWithNullableParent}           from "../src/EnumerableWithNullableParent"
import type {EnumerableWithNullableGrandParent}      from "../src/EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "../src/EnumerableWithNullableGreatGrandParent"

export class BasicEnumByEnum extends Enum<any, any> {
    constructor() { super() }
}
export class BasicEnumByParentEnum extends Enum<any, any> implements EnumerableWithNullableParent<any, any, any> {
    get parent() { return null }
    constructor() { super() }
}
export class BasicEnumByGrandParentEnum extends Enum<any, any> implements EnumerableWithNullableGrandParent<any, any, any, any> {
    get grandParent() { return null }
    get parent() { return null }
    constructor() { super() }
}
export class BasicEnumByGreatGrandParentEnum extends Enum<any, any> implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    get greatGrandParent() { return null }
    get grandParent() { return null }
    get parent() { return null }
    constructor() { super() }
}

export class BasicEnumByEnumerable implements Enumerable<any, any> {

    get name() { return '' }
    get ordinal() { return -1 }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never {
        throw new Error()
    }

}
export class BasicEnumByParentEnumerable implements EnumerableWithNullableParent<any, any, any> {

    get name() { return '' }
    get ordinal() { return -1 }
    get parent() { return null }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never { throw new Error() }

}
export class BasicEnumByGrandParentEnumerable implements EnumerableWithNullableGrandParent<any, any, any, any> {

    get name() { return '' }
    get ordinal() { return -1 }
    get grandParent() { return null }
    get parent() { return null }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never { throw new Error() }

}
export class BasicEnumByGreatGrandParentEnumerable implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {

    get name() { return null }
    get ordinal() { return null }
    get greatGrandParent() { return null }
    get grandParent() { return null }
    get parent() { return null }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never { throw new Error() }

}

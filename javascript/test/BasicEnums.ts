import {Enum}                                from "enumerable/Enum"
import type {Enumerable}                     from "enumerable/Enumerable"
import type {EnumerableWithParent}           from "enumerable/EnumerableWithParent"
import type {EnumerableWithGrandParent}      from "enumerable/EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent} from "enumerable/EnumerableWithGreatGrandParent"

export class BasicEnumByEnum extends Enum<any, any> {
    constructor() { super() }
}
export class BasicEnumByParentEnum extends Enum<any, any> implements EnumerableWithParent<any, any, any> {
    get parent() { return null }
    constructor() { super() }
}
export class BasicEnumByGrandParentEnum extends Enum<any, any> implements EnumerableWithGrandParent<any, any, any, any> {
    get grandParent() { return null }
    get parent() { return null }
    constructor() { super() }
}
export class BasicEnumByGreatGrandParentEnum extends Enum<any, any> implements EnumerableWithGreatGrandParent<any, any, any, any> {
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
export class BasicEnumByParentEnumerable implements EnumerableWithParent<any, any, any> {

    get name() { return '' }
    get ordinal() { return -1 }
    get parent() { return null }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never { throw new Error() }

}
export class BasicEnumByGrandParentEnumerable implements EnumerableWithGrandParent<any, any, any, any> {

    get name() { return '' }
    get ordinal() { return -1 }
    get grandParent() { return null }
    get parent() { return null }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never { throw new Error() }

}
export class BasicEnumByGreatGrandParentEnumerable implements EnumerableWithGreatGrandParent<any, any, any, any> {

    get name() { return null }
    get ordinal() { return null }
    get greatGrandParent() { return null }
    get grandParent() { return null }
    get parent() { return null }
    readonly [Symbol.toStringTag] = "Enum";

    [Symbol.toPrimitive](): never { throw new Error() }

}

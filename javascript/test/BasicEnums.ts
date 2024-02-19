/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {Enum}                                        from "../src/Enum"
import type {Enumerable}                             from "../src/Enumerable"
import type {EnumerableWithNullableGrandParent}      from "../src/EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent} from "../src/EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}           from "../src/EnumerableWithNullableParent"
import {EnumWithGrandParent}                         from "../src/EnumWithGrandParent"
import {EnumWithGreatGrandParent}                    from "../src/EnumWithGreatGrandParent"
import {EnumWithNullableGrandParent}                 from "../src/EnumWithNullableGrandParent"
import {EnumWithNullableGreatGrandParent}            from "../src/EnumWithNullableGreatGrandParent"
import {EnumWithNullableParent}                      from "../src/EnumWithNullableParent"
import {EnumWithParent}                              from "../src/EnumWithParent"

export class Enum_Enum extends Enum<any, any> { constructor() { super() } }
export class Enum_Enumerable implements Enumerable<any, any> {
    get name(): never { throw new Error() }
    get ordinal(): never { throw new Error() }
    get [Symbol.toStringTag]() { return "Enum" as const }
    [Symbol.toPrimitive](): never { throw new Error() }
}

export class Enum_Enum_ParentEnumerable extends Enum<any, any> implements EnumerableWithNullableParent<any, any, any> {
    constructor() { super() }
    get parent(): never { throw new Error() }
}
export class Enum_ParentEnumerable implements EnumerableWithNullableParent<any, any, any> {
    get name(): never { throw new Error() }
    get ordinal(): never { throw new Error() }
    get parent(): never { throw new Error() }
    get [Symbol.toStringTag]() { return "Enum" as const }
    [Symbol.toPrimitive](): never { throw new Error() }
}
export class Enum_ParentEnum extends EnumWithParent<any, any, any> { constructor() { super() } }
export class Enum_NullableParentEnum extends EnumWithNullableParent<any, any, any> { constructor() { super() } }

export class Enum_Enum_GrandParentEnumerable extends Enum<any, any> implements EnumerableWithNullableGrandParent<any, any, any, any> {
    constructor() { super() }
    get parent(): never { throw new Error() }
    get grandParent(): never { throw new Error() }
}
export class Enum_ParentEnum_GrandParentEnumerable extends EnumWithParent<any, any, any> implements EnumerableWithNullableGrandParent<any, any, any, any> {
    constructor() { super() }
    get grandParent(): never { throw new Error() }
}
export class Enum_NullableParentEnum_GrandParentEnumerable extends EnumWithNullableParent<any, any, any> implements EnumerableWithNullableGrandParent<any, any, any, any> {
    constructor() { super() }
    get grandParent(): never { throw new Error() }
}
export class Enum_GrandParentEnumerable implements EnumerableWithNullableGrandParent<any, any, any, any> {
    get name(): never { throw new Error() }
    get ordinal(): never { throw new Error() }
    get grandParent(): never { throw new Error() }
    get parent(): never { throw new Error() }
    get [Symbol.toStringTag]() { return "Enum" as const }
    [Symbol.toPrimitive](): never { throw new Error() }
}
export class Enum_GrandParentEnum extends EnumWithGrandParent<any, any, any, any> { constructor() { super() } }
export class Enum_NullableGrandParentEnum extends EnumWithNullableGrandParent<any, any, any, any> { constructor() { super() } }

export class Enum_Enum_GreatGrandParentEnumerable extends Enum<any, any> implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    constructor() { super() }
    get parent(): never { throw new Error() }
    get grandParent(): never { throw new Error() }
    get greatGrandParent(): never { throw new Error() }
}
export class Enum_ParentEnum_GreatGrandParentEnumerable extends EnumWithParent<any, any, any> implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    constructor() { super() }
    get grandParent(): never { throw new Error() }
    get greatGrandParent(): never { throw new Error() }
}
export class Enum_NullableParentEnum_GreatGrandParentEnumerable extends EnumWithNullableParent<any, any, any> implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    constructor() { super() }
    get grandParent(): never { throw new Error() }
    get greatGrandParent(): never { throw new Error() }
}
export class Enum_GrandParentEnum_GreatGrandParentEnumerable extends EnumWithGrandParent<any, any, any, any> implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    constructor() { super() }
    get greatGrandParent(): never { throw new Error() }
}
export class Enum_NullableGrandParentEnum_GreatGrandParentEnumerable extends EnumWithNullableGrandParent<any, any, any, any> implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    constructor() { super() }
    get greatGrandParent(): never { throw new Error() }
}
export class Enum_GreatGrandParentEnumerable implements EnumerableWithNullableGreatGrandParent<any, any, any, any> {
    get name(): never { throw new Error() }
    get ordinal(): never { throw new Error() }
    get greatGrandParent(): never { throw new Error() }
    get grandParent(): never { throw new Error() }
    get parent(): never { throw new Error() }
    get [Symbol.toStringTag]() { return "Enum" as const }
    [Symbol.toPrimitive](): never { throw new Error() }
}
export class Enum_GreatGrandParentEnum extends EnumWithGreatGrandParent<any, any, any, any, any> { constructor() { super() } }
export class Enum_NullableGreatGrandParentEnum extends EnumWithNullableGreatGrandParent<any, any, any, any, any> { constructor() { super() } }

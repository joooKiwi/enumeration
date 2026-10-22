//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Nullable, StringOrObject} from "@joookiwi/type"

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnum}                    from "./BasicEnum"
import {BasicEnumWithGrandParent}     from "./BasicEnumWithGrandParent"
import {BasicEnumWithParent}          from "./BasicEnumWithParent"

/**
 * A {@link CompanionEnumWithGrandParent} that has the purpose to give
 * the {@link BasicEnumWithGrandParent} for its {@link EnumWithGrandParent} type,
 * the {@link BasicEnumWithParent} for its {@link EnumWithParent} type and
 * the {@link BasicEnum} for its {@link Enum} type
 * plus a default name
 */
export class DefaultedNameCompanionEnumWithGrandParent<const DEFAULT_NAME extends Nullable<StringOrObject>, >
    extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    protected override readonly _DEFAULT_NAME: DEFAULT_NAME

    public constructor(public readonly defaultName: DEFAULT_NAME,) {
        super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,)
        this._DEFAULT_NAME = defaultName
    }

}

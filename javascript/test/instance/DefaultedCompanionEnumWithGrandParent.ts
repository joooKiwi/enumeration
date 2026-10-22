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

import type {Nullable} from "@joookiwi/type"

import {CompanionEnumWithGrandParent} from "../../src/companion/CompanionEnumWithGrandParent"
import {BasicEnum}                    from "./BasicEnum"
import {BasicEnumWithGrandParent}     from "./BasicEnumWithGrandParent"
import {BasicEnumWithParent}          from "./BasicEnumWithParent"

/**
 * A {@link CompanionEnumWithGrandParent} that has the purpose to give
 * the {@link BasicEnumWithGrandParent} for its {@link EnumWithGrandParent} type,
 * the {@link BasicEnumWithParent} for its {@link EnumWithParent} type and
 * the {@link BasicEnum} for its {@link Enum} type
 * plus a default value
 */
export class DefaultedCompanionEnumWithGrandParent<const DEFAULT extends Nullable<BasicEnumWithGrandParent>, >
    extends CompanionEnumWithGrandParent<BasicEnumWithGrandParent, typeof BasicEnumWithGrandParent, BasicEnumWithParent, typeof BasicEnumWithParent, BasicEnum, typeof BasicEnum> {

    protected override readonly _DEFAULT: DEFAULT

    public constructor(defaultValue: DEFAULT,) {
        super(BasicEnumWithGrandParent, BasicEnumWithParent, BasicEnum,)
        this._DEFAULT = defaultValue
    }

}

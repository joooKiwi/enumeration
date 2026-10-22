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

import type {Nullable, NumericOrObject} from "@joookiwi/type"

import {CompanionEnum} from "../../src/companion/CompanionEnum"
import {BasicEnum}     from "./BasicEnum"

/**
 * A {@link CompanionEnum} that has the purpose to give the {@link BasicEnum} for its {@link Enum} type
 * plus a default ordinal
 */
export class DefaultedOrdinalCompanionEnum<const DEFAULT_ORDINAL extends Nullable<NumericOrObject>, >
    extends CompanionEnum<BasicEnum, typeof BasicEnum> {

    protected override readonly _DEFAULT_ORDINAL: DEFAULT_ORDINAL

    public constructor(public readonly defaultOrdinal: DEFAULT_ORDINAL,) {
        super(BasicEnum,)
        this._DEFAULT_ORDINAL = defaultOrdinal
    }

}

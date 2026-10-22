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

import type {Lazy}     from "@joookiwi/lazy"
import type {Nullable} from "@joookiwi/type"
import {lazy}          from "@joookiwi/lazy"

import type {EnumerableWithGrandParent}                      from "./EnumerableWithGrandParent"
import type {EnumerableWithGreatGrandParent}                 from "./EnumerableWithGreatGrandParent"
import type {EnumerableWithParent}                           from "./EnumerableWithParent"
import type {Enumerable}                                     from "./Enumerable"
import type {NameOf, PossibleNameOf}                         from "./type/nameOf"
import type {PossibleOrdinalOf}                              from "./type/ordinalOf"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "./type/possibleInstance"

import {EnumConstants}                     from "./EnumConstants"
import {EnumWithGrandParent}               from "./EnumWithGrandParent"
import {KnownEnumConstructors}             from "./KnownEnumConstructors"
import {NullReferenceException}            from "./exception/NullReferenceException"
import {_getGreatGrandParentValueFromName} from "./method/_getGreatGrandParentValueFromName"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithGreatGrandParent}.
 *
 * Compared to its sibling {@link EnumWithNullableGreatGrandParent}, it does not want `null`.
 *
 * It can throw a {@link NullReferenceException} in different scenarios:
 *  - A `null` is received during the construction
 *  - A `null` is interpreted on the {@link EnumWithGreatGrandParent.parent parent},
 * {@link EnumWithGreatGrandParent.grandParent grandparent} & {@link EnumWithGreatGrandParent.greatGrandParent great-grandparent}
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGreatGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGreatGrandParentDeclaration.getValue getValue()}
 *
 * @see EnumWithNullableGreatGrandParent
 */
export class EnumWithGreatGrandParent<const PARENT extends EnumerableWithGrandParent<GRAND_PARENT, GREAT_GRAND_PARENT>,
    const GRAND_PARENT extends EnumerableWithParent<GREAT_GRAND_PARENT>,
    const GREAT_GRAND_PARENT extends Enumerable,
    const ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME>
    implements EnumerableWithGreatGrandParent<PARENT, GRAND_PARENT, GREAT_GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #greatGrandParent: Lazy<GREAT_GRAND_PARENT>

    static {
        KnownEnumConstructors.add(EnumWithGreatGrandParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with {@link EnumerableWithGreatGrandParent.parent parent},
     * {@link EnumerableWithGreatGrandParent.grandParent grandparent}
     * & {@link EnumerableWithGreatGrandParent.greatGrandParent great-grandparent} references
     * with the same {@link Enum.name name} as the current instance
     */
    protected constructor()
    protected constructor(parent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParent: Nullable<GRAND_PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, greatGrandParentName: Nullable<NameOf<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>, lateGreatGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    /**
     * Create the instance with a parent & a grandparent from any possible values (in Javascript)
     *
     * @param parent The parent value (from any possibilities in Javascript)
     * @param grandParent The grandparent value (from any possibilities in Javascript)
     * @param greatGrandParent The great-grandparent value (from any possibilities in Javascript)
     *
     * @typescriptDefinition
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>, greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GREAT_GRAND_PARENT>,)
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>, greatGrandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GREAT_GRAND_PARENT>,) {
        if (arguments.length === 0) { // We default to the name of the instance
            super()
            this.#greatGrandParent = lazy(() => _getGreatGrandParentValueFromName(this, this.name,),)
            return
        }

        if (arguments.length === 1) {
            super(parent,)
            this.#greatGrandParent = lazy(() => _getGreatGrandParentValueFromName(this, this.name,),)
            return
        }

        super(parent, grandParent,)
        if (arguments.length === 2) {
            this.#greatGrandParent = lazy(() => _getGreatGrandParentValueFromName(this, this.name,),)
            return
        }

        if (greatGrandParent instanceof Function)
            greatGrandParent = greatGrandParent()
        this.#greatGrandParent = lazy(() => {
            if (greatGrandParent == null)
                throw new NullReferenceException(`The value received on the “${this.constructor.name}” cannot be null on an Enumerable with non-null value.`, greatGrandParent,)
            if (typeof greatGrandParent == "string")
                return _getGreatGrandParentValueFromName(this, greatGrandParent,)

            if (greatGrandParent === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
                return _getGreatGrandParentValueFromName(this, this.name,)
            if (greatGrandParent === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
                throw new NullReferenceException(`The value received on the “${this.constructor.name}” cannot be null on an Enumerable with non-null value.`, greatGrandParent,)

            if (greatGrandParent instanceof String)
                return _getGreatGrandParentValueFromName(this, greatGrandParent.valueOf(),)
            return greatGrandParent
        },)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The great-grandparent of the current instance
     *
     * @lazy
     * @throws NullReferenceException An error happened while attempting to retrieve the great-grandparent value
     */
    public get greatGrandParent(): GREAT_GRAND_PARENT {
        return this.#greatGrandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}

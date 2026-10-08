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

import type {Lazy}             from "@joookiwi/lazy"
import type {Nullable, NullOr} from "@joookiwi/type"
import {lazy}                  from "@joookiwi/lazy"

import type {EnumerableWithNullableGrandParent}              from "./EnumerableWithNullableGrandParent"
import type {EnumerableWithNullableGreatGrandParent}         from "./EnumerableWithNullableGreatGrandParent"
import type {EnumerableWithNullableParent}                   from "./EnumerableWithNullableParent"
import type {Enumerable}                                     from "./Enumerable"
import type {NameOf, PossibleNameOf}                         from "./type/nameOf"
import type {PossibleOrdinalOf}                              from "./type/ordinalOf"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "./type/possibleInstance"

import {EnumWithNullableGrandParent}       from "./EnumWithNullableGrandParent"
import {KnownEnumConstructors}             from "./KnownEnumConstructors"
import {ImpossibleIntegrityException}      from "./exception/ImpossibleIntegrityException"
import {_getGreatGrandParentValueFromName} from "./method/_getGreatGrandParentValueFromName"
import {_getNullableGreatGrandParentValue} from "./method/_getNullableGreatGrandParentValue"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithNullableGreatGrandParent}.
 *
 * Compared to its sibling {@link EnumWithGreatGrandParent}, it can receive `null`.
 *
 * But it can still throw a {@link NullReferenceException} in different scenarios:
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGreatGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGreatGrandParentDeclaration.getValue getValue()}
 *
 * Also, it can throw a {@link ImpossibleIntegrityException} when receiving a `null`
 * on a value not expected to be null on the {@link EnumWithNullableGreatGrandParent.parent parent} &
 * {@link EnumWithNullableGreatGrandParent.grandParent grandparent} methods.
 *
 * @see EnumWithGreatGrandParent
 */
export class EnumWithNullableGreatGrandParent<const PARENT extends EnumerableWithNullableGrandParent<GRAND_PARENT, GREAT_GRAND_PARENT>,
    const GRAND_PARENT extends EnumerableWithNullableParent<GREAT_GRAND_PARENT>,
    const GREAT_GRAND_PARENT extends Enumerable,
    const ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME>
    implements EnumerableWithNullableGreatGrandParent<PARENT, GRAND_PARENT, GREAT_GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #grandParent: Lazy<NullOr<GRAND_PARENT>>
    readonly #greatGrandParent: Lazy<NullOr<GREAT_GRAND_PARENT>>

    static {
        KnownEnumConstructors.add(EnumWithNullableGreatGrandParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with {@link EnumerableWithNullableGreatGrandParent.parent parent},
     * {@link EnumerableWithNullableGreatGrandParent.grandParent grandparent}
     * & {@link EnumerableWithNullableGreatGrandParent.greatGrandParent great-grandparent} references
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
        if (arguments.length === 0) {
            super()
            this.#grandParent = lazy(() => super.grandParent,)
            this.#greatGrandParent = lazy(() => _getGreatGrandParentValueFromName(this, this.name,),)
            return
        }

        if (arguments.length === 1)
            super(parent,)
        else
            super(parent, grandParent,)

        this.#grandParent = lazy(() => {
            const grandParent = super.grandParent
            const greatGrandParent = this.greatGrandParent

            if (grandParent == null)
                if (greatGrandParent != null)
                    throw new ImpossibleIntegrityException(`The grandparent reference in “${this.constructor.name}” was not expected to be null when its great-grandparent is not-null.`, this,)
            return grandParent
        },)

        if (greatGrandParent instanceof Function)
            this.#greatGrandParent = lazy(() => _getNullableGreatGrandParentValue(this, greatGrandParent(),),)
        else
            this.#greatGrandParent = lazy(() => _getNullableGreatGrandParentValue(this, greatGrandParent,),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The {@link NullOr nullable} grandparent of the current instance
     *
     * @lazy
     * @throws {ImpossibleIntegrityException}
     * @throws {NullReferenceException}
     */
    public override get grandParent(): NullOr<GRAND_PARENT> {
        return this.#grandParent.value
    }

    /**
     * The {@link NullOr nullable} great-grandparent of the current instance
     *
     * @lazy
     * @throws {NullReferenceException}
     */
    public get greatGrandParent(): NullOr<GREAT_GRAND_PARENT> {
        return this.#greatGrandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}

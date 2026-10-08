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
import type {EnumerableWithNullableParent}                   from "./EnumerableWithNullableParent"
import type {Enumerable}                                     from "./Enumerable"
import type {NameOf, PossibleNameOf}                         from "./type/nameOf"
import type {PossibleOrdinalOf}                              from "./type/ordinalOf"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "./type/possibleInstance"

import {EnumWithNullableParent}       from "./EnumWithNullableParent"
import {KnownEnumConstructors}        from "./KnownEnumConstructors"
import {ImpossibleIntegrityException} from "./exception/ImpossibleIntegrityException"
import {_getGrandParentValueFromName} from "./method/_getGrandParentValueFromName"
import {_getNullableGrandParentValue} from "./method/_getNullableGrandParentValue"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithNullableGrandParent}.
 *
 * Compared to its sibling {@link EnumWithGrandParent}, it can receive `null`.
 *
 * But it can still throw a {@link NullReferenceException} in different scenarios:
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGrandParentDeclaration.getValue getValue()}
 *
 * Also, it can throw a {@link ImpossibleIntegrityException} when receiving a `null`
 * on a value that was not expected to be null on the {@link EnumWithNullableGrandParent.parent parent} method.
 *
 * @see EnumWithGrandParent
 */
export class EnumWithNullableGrandParent<const PARENT extends EnumerableWithNullableParent<GRAND_PARENT>,
    const GRAND_PARENT extends Enumerable,
    const ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithNullableParent<PARENT, ORDINAL, NAME>
    implements EnumerableWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #parent: Lazy<NullOr<PARENT>>
    readonly #grandParent: Lazy<NullOr<GRAND_PARENT>>

    static {
        KnownEnumConstructors.add(EnumWithNullableGrandParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with both {@link EnumerableWithNullableGrandParent.parent parent}
     * & {@link EnumerableWithNullableGrandParent.grandParent grandparent} references
     * with the same {@link Enum.name name} as the current instance
     */
    protected constructor()
    protected constructor(parent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParent: Nullable<PARENT>,)
    protected constructor(parent: Nullable<PARENT>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parent: Nullable<PARENT>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(parentName: Nullable<NameOf<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParent: Nullable<() => Nullable<PARENT>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParent: Nullable<PARENT>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, grandParentName: Nullable<NameOf<PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParent: Nullable<() => Nullable<GRAND_PARENT>>,)
    protected constructor(lateParentName: Nullable<() => Nullable<NameOf<PARENT>>>, lateGrandParentName: Nullable<() => Nullable<NameOf<GRAND_PARENT>>>,)
    /**
     * Create the instance with a parent & a grandparent from any possible values (in Javascript)
     *
     * @param parent The parent value (from any possibilities in Javascript)
     * @param grandParent The grandparent value (from any possibilities in Javascript)
     *
     * @typescriptDefinition
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>,)
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>,) {
        if (arguments.length === 0) {
            super()
            this.#parent = lazy(() => super.parent,)
            this.#grandParent = lazy(() => _getGrandParentValueFromName(this, this.name,),)
            return
        }

        super(parent,)

        this.#parent = lazy(() => {
            const parent = super.parent
            const grandParent = this.grandParent

            if (parent == null)
                if (grandParent != null)
                    throw new ImpossibleIntegrityException(`The parent reference in “${this.constructor.name}” was not expected to be null when its grandparent is not-null.`, this,)
            return parent
        },)
        if (grandParent instanceof Function)
            this.#grandParent = lazy(() => _getNullableGrandParentValue(this, grandParent(),),)
        else
            this.#grandParent = lazy(() => _getNullableGrandParentValue(this, grandParent,),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The {@link NullOr nullable} parent of the current instance
     *
     * @lazy
     * @throws ImpossibleIntegrityException The value was `null` when the {@link grandParent} was not `null`
     * @throws NullReferenceException An error happened while attempting to retrieve the parent value
     */
    public override get parent(): NullOr<PARENT> {
        return this.#parent.value
    }

    /**
     * The {@link NullOr nullable} grandparent of the current instance
     *
     * @lazy
     * @throws NullReferenceException An error happened while attempting to retrieve the grandparent value
     */
    public get grandParent(): NullOr<GRAND_PARENT> {
        return this.#grandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}

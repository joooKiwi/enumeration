/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "@joookiwi/lazy"
import {lazy}      from "@joookiwi/lazy"

import type {EnumerableWithNullableGrandParent}                                                         from "./EnumerableWithNullableGrandParent"
import type {NameOf, PossibleEnumerableValueOrNameByValueOrCallback, PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithNullableParent}                                                              from "./EnumerableWithNullableParent"
import type {Enumerable}                                                                                from "./Enumerable"
import type {Nullable, NullOr}                                                                          from "./general type"

import {EnumWithNullableParent}       from "./EnumWithNullableParent"
import {ImpossibleIntegrityException} from "./exception/ImpossibleIntegrityException"
import {Helper}                       from "./helper/Helper"
import {KnownEnumConstructors}        from "./helper/KnownEnumConstructors"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithNullableGrandParent}.
 *
 * Compared to its sibling {@link EnumWithGrandParent}, it can receive <b>null</b>.
 *
 * But it can still throw a {@link NullReferenceException} in different scenarios:
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGrandParentDeclaration.getValue getValue()}
 *
 * Also, it can throw a {@link ImpossibleIntegrityException} when receiving a <b>null</b>
 * on a value that was not expected to be null on the {@link EnumWithNullableGrandParent.parent parent} method.
 *
 * @see EnumWithGrandParent
 */
export class EnumWithNullableGrandParent<const out PARENT extends EnumerableWithNullableParent<GRAND_PARENT>,
    const out GRAND_PARENT extends Enumerable ,
    const out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithNullableParent<PARENT, ORDINAL, NAME>
    implements EnumerableWithNullableGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #parent: Lazy<NullOr<PARENT>>
    readonly #grandParent: Lazy<NullOr<GRAND_PARENT>>

    static {
        KnownEnumConstructors.get.add(EnumWithNullableGrandParent,)
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
     * @throws {NullReferenceException}
     */
    protected constructor(parent?: PossibleEnumerableValueOrNameByValueOrCallback<PARENT>, grandParent?: PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>,)
    protected constructor(...args: readonly [PossibleEnumerableValueOrNameByValueOrCallback<PARENT>?, PossibleEnumerableValueOrNameByValueOrCallback<GRAND_PARENT>?]) {
        let argumentsToSuper: readonly [PossibleEnumerableValueOrNameByValueOrCallback<PARENT>?,]
        if (args.length === 0)
            argumentsToSuper = []
        else
            argumentsToSuper = [args[0],]
        super(...argumentsToSuper,)

        if (args.length === 0) {
            this.#parent = lazy(() => super.parent,)
            this.#grandParent = lazy(() => Helper.getValueFromInstanceName<GRAND_PARENT>(this, "grandparent",),)
            return
        }
        this.#parent = lazy(() => {
            const parent = super.parent,
                grandParent = this.grandParent
            if (parent == null && grandParent != null)
                throw new ImpossibleIntegrityException(`The parent reference in "${this.constructor.name}" was not expected to be null when its grandparent is not-null.`, this,)
            return parent
        },)
        if (args.length <= 1)
            this.#grandParent = lazy(() => Helper.getValueFromInstanceName<GRAND_PARENT>(this,"grandparent",),)
        else
            this.#grandParent = lazy(() => Helper.getNullableValue(this, args[1], "grandparent",),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The {@link NullOr nullable} parent of the current instance
     *
     * @lazy
     * @throws {ImpossibleIntegrityException}
     * @throws {NullReferenceException}
     */
    public override get parent(): NullOr<PARENT> {
        return this.#parent.value
    }

    /**
     * The {@link NullOr nullable} grandparent of the current instance
     *
     * @lazy
     * @throws {NullReferenceException}
     */
    public get grandParent(): NullOr<GRAND_PARENT> {
        return this.#grandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}

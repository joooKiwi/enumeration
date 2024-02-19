/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "@joookiwi/lazy"
import {lazy}      from "@joookiwi/lazy"

import type {NameOf, PossibleEnumerableValueOrNameByValueOrCallback, PossibleNameOf, PossibleOrdinalOf} from "./Enumerable.types"
import type {EnumerableWithGrandParent}                                                                 from "./EnumerableWithGrandParent"
import type {EnumerableWithParent}                                                                      from "./EnumerableWithParent"
import type {Enumerable}                                                                                from "./Enumerable"
import type {Nullable}                                                                                  from "./general type"

import {EnumWithParent}        from "./EnumWithParent"
import {Helper}                from "./helper/Helper"
import {KnownEnumConstructors} from "./helper/KnownEnumConstructors"

/**
 * An {@link Enum} class in conjuncture with the {@link EnumerableWithGrandParent}.
 *
 * Compared to its sibling {@link EnumWithNullableGrandParent}, it does not want <b>null</b>.
 *
 * It can throw a {@link NullReferenceException} in different scenarios:
 *  - A <b>null</b> is received during the construction
 *  - A <b>null</b> is interpreted on the {@link EnumWithGrandParent.parent parent}
 * & {@link EnumWithGrandParent.grandParent grandparent}
 *  - An exception is thrown when attempting to retrieve its {@link CompanionEnumWithGrandParent}
 *  - An exception is thrown when attempting to retrieve the value by {@link CompanionEnumWithGrandParentDeclaration.getValue getValue()}
 *
 * @see EnumWithNullableGrandParent
 */
export class EnumWithGrandParent<const out PARENT extends EnumerableWithParent<GRAND_PARENT>,
    const out GRAND_PARENT extends Enumerable,
    const out ORDINAL extends PossibleOrdinalOf<number, PARENT> = PossibleOrdinalOf<number, PARENT>,
    const out NAME extends PossibleNameOf<string, PARENT> = PossibleNameOf<string, PARENT>, >
    extends EnumWithParent<PARENT, ORDINAL, NAME>
    implements EnumerableWithGrandParent<PARENT, GRAND_PARENT, ORDINAL, NAME> {

    //#region -------------------- Fields --------------------

    readonly #grandParent: Lazy<GRAND_PARENT>

    static {
        KnownEnumConstructors.get.add(EnumWithGrandParent,)
    }

    //#endregion -------------------- Fields --------------------
    //#region -------------------- Constructor --------------------

    /**
     * Create the instance with both {@link EnumerableWithGrandParent.parent parent}
     * & {@link EnumerableWithGrandParent.grandParent grandparent} references
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

        if (args.length <= 1)
            this.#grandParent = lazy(() => Helper.getValueFromInstanceName(this, "grandparent",),)
        else
            this.#grandParent = lazy(() => Helper.getValue(this, args[1], "grandparent",),)
    }

    //#endregion -------------------- Constructor --------------------
    //#region -------------------- Getter methods --------------------

    /**
     * The grandparent of the current instance
     *
     * @lazy
     * @throws {NullReferenceException}
     */
    public get grandParent(): GRAND_PARENT {
        return this.#grandParent.value
    }

    //#endregion -------------------- Getter methods --------------------

}

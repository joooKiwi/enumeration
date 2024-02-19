/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CompanionEnumDeclaration}                       from "../companion"
import type {NullOr}                                         from "../general type"
import type {Enumerable}                                     from "../Enumerable"
import type {PossibleEnumerableValueOrNameByValueOrCallback} from "../Enumerable.types"
import type {PossibleCompanionTypeName}                      from "./CompanionTypes.types"

import {Enum}                       from "../Enum"
import {EnumConstants}              from "../EnumConstants"
import {CompanionEnum}              from "../companion/CompanionEnum"
import {InvalidEnumerableException} from "../exception/InvalidEnumerableException"
import {InvalidInstanceException}   from "../exception/InvalidInstanceException"
import {NullReferenceException}     from "../exception/NullReferenceException"
import {CompanionTypes}             from "./CompanionTypes"

/**
 * A namespace to encapsulate the methods applicable
 * to the {@link Enum} children in the project
 *  - {@link EnumWithNullableParent}
 *  - {@link EnumWithParent}
 *  - {@link EnumWithNullableGrandParent}
 *  - {@link EnumWithGrandParent}
 *  - {@link EnumWithNullableGreatGrandParent}
 *  - {@link EnumWithGreatGrandParent}
 *
 * The methods in here are not intent to be used publicly even though they can be accessible.
 * They will eventually be accessible with some proper tests.
 *
 * @internal
 */
export namespace Helper {

    /**
     * Get a {@link NonNullable non-nullable} value.
     *
     * If the {@link value value received} is <b>null</b> or <b>undefined</b>,
     * a {@link NullReferenceException} is thrown.
     *
     * If the {@link value value received} is a {@link String} (primitive or object),
     * it retrieves the value via {@link CompanionEnumDeclaration.getValue} method.
     *
     * If the {@link value value received} is a {@link Enumerable},
     * it assumes that the value is correct.
     *
     * @param instance The instance to retrieve its {@link CompanionEnum} and use its {@link CompanionEnumDeclaration.getValue} method
     * @param value The value to retrieve
     * @param type The type of {@link CompanionEnum} inheritor
     * @throws {NonExistantKeyException} The {@link type} is not a {@link PossibleCompanionTypeName companion type name}
     * @throws {NullReferenceException}
     *
     * @todo Move to be used publicly
     * @note This method may not work properly if used outside of the "@joookiwi/enumerable" project
     * @throwsOnNullSymbol
     * @internal
     */
    export function getValue<const INSTANCE extends Enumerable, >(instance: Enumerable, value: PossibleEnumerableValueOrNameByValueOrCallback<INSTANCE>, type: PossibleCompanionTypeName,): INSTANCE {
        if (value == null)
            throw new NullReferenceException(`The value received on the ${instance.constructor.name} cannot be null on an Enumerable with non-null value.`, value,)
        if (typeof value == "string")
            return getValueFromName(instance, value, CompanionTypes.CompanionEnum.get.getValueByType(type,),)

        if (value === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
            return getValueFromInstanceName(instance, type,)
        if (value === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
            throw new NullReferenceException(`The value received on the ${instance.constructor.name} cannot be null on an Enumerable with non-null value.`, value,)

        if (value instanceof Function)
            return getValue(instance, value(), type,)

        if (value instanceof String)
            return getValueFromName(instance, value.valueOf(), CompanionTypes.CompanionEnum.get.getValueByType(type,),)
        return value
    }

    /**
     * Get a {@link Nullable nullable} value.
     *
     * If the {@link value value received} is <b>null</b> or <b>undefined</b>,
     * it send <b>null</b>.
     *
     * If the {@link value value received} is a {@link String} (primitive or object),
     * it retrieves the value via {@link CompanionEnumDeclaration.getValue} method.
     *
     * If the {@link value value received} is a {@link Enumerable},
     * it assumes that the value is correct.
     *
     * @param instance The instance to retrieve its {@link CompanionEnum} and use its {@link CompanionEnumDeclaration.getValue} method
     * @param value The value to retrieve
     * @param type The type of {@link CompanionEnum} inheritor
     * @throws {NonExistantKeyException} The {@link type} is not a {@link PossibleCompanionTypeName companion type name}
     * @throws {NullReferenceException}
     *
     * @todo Move to be used publicly
     * @note This method may not work properly if used outside of the "@joookiwi/enumerable" project
     * @internal
     */
    export function getNullableValue<const INSTANCE extends Enumerable, >(instance: Enumerable, value: PossibleEnumerableValueOrNameByValueOrCallback<INSTANCE>, type: PossibleCompanionTypeName,): NullOr<INSTANCE> {
        if (value == null)
            return null
        if (typeof value == "string")
            return getValueFromName<INSTANCE>(instance, value, CompanionTypes.CompanionEnum.get.getValueByType(type,),)

        if (value === EnumConstants.NULL_ENUM_REFERENCE_SYMBOL)
            return null
        if (value === EnumConstants.ENUM_REFERENCE_BY_ITS_NAME_SYMBOL)
            return getValueFromInstanceName<INSTANCE>(instance, type,)

        if (value instanceof Function)
            return getNullableValue(instance, value(), type,)

        if (value instanceof String)
            return getValueFromName<INSTANCE>(instance, value.valueOf(), CompanionTypes.CompanionEnum.get.getValueByType(type,),)
        return value
    }


    /**
     * Get the value via {@link CompanionEnumDeclaration.getValue} from the {@link instance} {@link Enumerable.name name} received.
     * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
     *
     * @param instance The instance to retrieve another value via its {@link Enumerable.name name}
     * @param type The type of {@link CompanionEnum} inheritor
     * @throws {NullReferenceException}
     *
     * @todo Move to be used publicly
     * @note This method may not work properly if used outside of the "@joookiwi/enumerable" project
     * @internal
     */
    export function getValueFromInstanceName<const INSTANCE extends Enumerable, >(instance: Enumerable, type: PossibleCompanionTypeName,): INSTANCE {
        return getValueFromName(instance, instance.name, CompanionTypes.CompanionEnum.get.getValueByType(type,),)
    }

    /**
     * Get the value via {@link CompanionEnumDeclaration.getValue} from a {@link name} received.
     * In during the process, every {@link Error} are captured in a {@link NullReferenceException} if they are thrown.
     *
     * @param instance The instance to retrieve its {@link CompanionEnum} instance
     * @param name The name to retrieve
     * @param type The type of {@link CompanionEnum} inheritor
     * @param originalValue The original value received from {@link getValue} or {@link getNullableValue}
     * @throws {NullReferenceException}
     *
     * @private
     */
    function getValueFromName<const INSTANCE extends Enumerable, >(instance: Enumerable, name: string, type: CompanionTypes,): INSTANCE {
        const companionEnum = type.getInstance(instance,)
        try {
            return companionEnum.getValue(name,)
        } catch (exception) {
            if (exception instanceof InvalidEnumerableException
                || exception instanceof InvalidInstanceException
                || exception instanceof NullReferenceException)
                throw new NullReferenceException(`There were an error while retrieving the parent value on the "${companionEnum.constructor.name}" companion enum.`, instance, exception,)
            throw exception
        }
    }

}

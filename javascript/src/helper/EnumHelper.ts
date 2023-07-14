/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import {getCompanion as _getCompanion}                                                                     from "./getCompanion"
import {getLastPrototype as _getLastPrototype}                                                             from "./getLastPrototype"
import {isCompanionEnum as _isCompanionEnum}                                                               from "./isCompanionEnum"
import {isCompanionEnumByStructure as _isCompanionEnumByStructure}                                         from "./isCompanionEnumByStructure"
import {isCompanionEnumWithParent as _isCompanionEnumWithParent}                                           from "./isCompanionEnumWithParent"
import {isCompanionEnumWithParentByStructure as _isCompanionEnumWithParentByStructure}                     from "./isCompanionEnumWithParentByStructure"
import {isCompanionEnumWithGrandParent as _isCompanionEnumWithGrandParent}                                 from "./isCompanionEnumWithGrandParent"
import {isCompanionEnumWithGrandParentByStructure as _isCompanionEnumWithGrandParentByStructure}           from "./isCompanionEnumWithGrandParentByStructure"
import {isCompanionEnumWithGreatGrandParent as _isCompanionEnumWithGreatGrandParent}                       from "./isCompanionEnumWithGreatGrandParent"
import {isCompanionEnumWithGreatGrandParentByStructure as _isCompanionEnumWithGreatGrandParentByStructure} from "./isCompanionEnumWithGreatGrandParentByStructure"
import {isEnum as _isEnum}                                                                                 from "./isEnum"
import {isEnumByStructure as _isEnumByStructure}                                                           from "./isEnumByStructure"
import {isEnumWithNullableGrandParent as _isEnumWithNullableGrandParent}                                   from "./isEnumWithNullableGrandParent"
import {isEnumWithNullableGreatGrandParent as _isEnumWithNullableGreatGrandParent}                         from "./isEnumWithNullableGreatGrandParent"
import {isEnumWithNullableParent as _isEnumWithNullableParent}                                             from "./isEnumWithNullableParent"
import {isEnumWithGrandParent as _isEnumWithGrandParent}                                                   from "./isEnumWithGrandParent"
import {isEnumWithGrandParentByStructure as _isEnumWithGrandParentByStructure}                             from "./isEnumWithGrandParentByStructure"
import {isEnumWithGreatGrandParent as _isEnumWithGreatGrandParent}                                         from "./isEnumWithGreatGrandParent"
import {isEnumWithGreatGrandParentByStructure as _isEnumWithGreatGrandParentByStructure}                   from "./isEnumWithGreatGrandParentByStructure"
import {isEnumWithParent as _isEnumWithParent}                                                             from "./isEnumWithParent"
import {isEnumWithParentByStructure as _isEnumWithParentByStructure}                                       from "./isEnumWithParentByStructure"
import {KnownEnumConstructors as _KnownEnumConstructors}                                                   from "./KnownEnumConstructors"

/**
 * Every method (from the version 2.4) of the "helper" folder encapsulated in a variable.
 *
 * It only contains alias of the files within the directory
 * @deprecated This file will be removed in the next version. Use the methods directly instead
 */
export namespace EnumHelper {

    export const getCompanion = _getCompanion
    export const getLastPrototype = _getLastPrototype

    export const isEnum = _isEnum
    export const isEnumByStructure = _isEnumByStructure

    export const isCompanionEnum = _isCompanionEnum
    export const isCompanionEnumByStructure = _isCompanionEnumByStructure

}

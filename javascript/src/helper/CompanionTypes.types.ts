/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {CompanionTypes}           from "./CompanionTypes"
import type {CompanionEnumDeclaration} from "../companion/CompanionEnum.declaration"

/** @internal */export type CompanionTypesName = | "PARENT" | "GRAND_PARENT" | "GREAT_GRAND_PARENT"
/** @internal */export type CompanionTypesOrdinal = | 0 | 1 | 2
/** @internal */export type PossibleCompanionTypeName = | "parent" | "grandparent" | "great-grandparent"

/** @internal */export interface CompanionEnum_CompanionTypesDeclaration
    extends CompanionEnumDeclaration<CompanionTypes, typeof CompanionTypes> {
    /**
     * Get the {@link CompanionTypes} from a type received in parameter
     *
     * @param type The type that is possibly {@link PossibleCompanionTypeName}
     * @throws {NonExistantKeyException}
     */
    getValueByType(type: string,): CompanionTypes
}
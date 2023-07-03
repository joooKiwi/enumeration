/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {EnumConstants} from "./EnumConstants"

/** The forbidden names or {@link String strings} to use when trying to find a value from the {@link EnumHelper} */
export type ForbiddenNames = | typeof EnumConstants["EDGE_CASE_NUMERIC_NAME"][number]
                             | typeof EnumConstants["INHERITED_ENUMERABLE_MEMBERS"][number]

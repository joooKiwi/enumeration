/******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi                             *
 *                                                                            *
 * This project is free to use.                                               *
 * All the right is reserved to the author of this project.                   *
 ******************************************************************************/

import type {NullOr} from "../../general type"

/** A simple {@link Error exception} declaration with a nullable {@link Error.cause cause} */
export interface ExceptionWithNullableCause<ERROR extends Error = never, >
    extends Error {

    /** The cause of the {@link Error exception} */
    get cause(): NullOr<ERROR>

}

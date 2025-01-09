//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {NullOr} from "@joookiwi/type"

/** An {@link Error exception} declaration with a nullable {@link Error.cause cause} */
export interface ExceptionWithNullableCause<out ERROR extends Error = never, >
    extends Error {

    /** The cause of the {@link Error exception} */
    get cause(): NullOr<ERROR>

}

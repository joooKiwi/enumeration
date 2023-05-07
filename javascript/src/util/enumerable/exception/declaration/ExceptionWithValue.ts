/** A simple {@link Error exception} with a value */
export interface ExceptionWithValue<T, >
    extends Error {

    /** A generic value in the {@link ExceptionWithValue exception} */
    get value(): T

}

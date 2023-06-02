/** A singleton signature to retrieve the instance via a getter method */
export interface Singleton<T, > {

    /** Get or create the instance */
    get get(): T

}

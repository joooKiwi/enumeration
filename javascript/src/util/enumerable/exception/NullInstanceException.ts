export class NullInstanceException
    extends TypeError {

    public constructor() {
        super("The instance received cannot be null!",)
    }

}

import { Either } from "../../helpers/Either";
import { IApplicationService } from "./IApplicationService";

export abstract class BaseDecorator <T,L,R> implements IApplicationService<T,L,R>{

    wrapee: IApplicationService<T,L,R>

    execute(data: T): Either<L, R> {
        return this.wrapee.execute(data)
    }
    constructor(wrappee:IApplicationService<T,L,R>){
        this.wrapee=wrappee
    }
}
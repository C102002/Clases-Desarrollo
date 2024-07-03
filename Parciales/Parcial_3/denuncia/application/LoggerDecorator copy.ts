import { Either } from "../../helpers/Either";
import { BaseDecorator } from "../../shared/application/BaseDecorator";
import { IApplicationService } from "../../shared/application/IApplicationService";

export class LoggerDecorator <T,L,R>  extends BaseDecorator<T,L,R>{
    execute(data: T): Either<L, R> {
        console.log('LogDecorator',data)
        return super.execute(data)
    }
    constructor(wrapee:IApplicationService<T,L,R>){
        super(wrapee)
    }
}
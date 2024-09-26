import { Either } from "../../helpers/Either";
import { BaseDecorator } from "../../shared/application/BaseDecorator";
import { IApplicationService } from "../../shared/application/IApplicationService";
import { DomainError } from "../../shared/domain/DomainError";
import { IErrorMapper } from "./IErrorMapper";

export class ErrorHandlerDecorator <T,L,InfraestructureError>  extends BaseDecorator<T,L,Error>{

    execute(data: T): Either<L, Error> {
        try{
        let value=super.execute(data)
        if (!value.isRight()) return value
        let error=this.ErrorMapper.execute(value.getRight())
        return Either.makeRight(error)
        }catch(err){
            let error=this.ErrorMapper.execute(err)
            return Either.makeRight(error)
        }
    }
    constructor(wrapee:IApplicationService<T,L,Error>,private ErrorMapper:IErrorMapper){
        super(wrapee)
    }
}
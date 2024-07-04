import { Either } from "../../helpers/Either";
import { BaseDecorator } from "../../shared/application/BaseDecorator";
import { IApplicationService } from "../../shared/application/IApplicationService";
import { PermisosInvalidos } from "../../shared/infraestructure/errors/PermisosInvalidos";
import { DTOEntryInfraestructure, UserType } from '../infraestructure/DenunciaInfraestructureService';

export class SecurityDecorator <T extends DTOEntryInfraestructure,L> extends BaseDecorator <T,L,Error>{

    execute(data: T): Either<L, Error> {
        if(this.roles.includes(data.type))
        return this.wrapee.execute(data)
        return Either.makeRight(new PermisosInvalidos())
    }
    constructor(wrappee:IApplicationService<T,L,Error>, private roles:string[]){
        super(wrappee)
    }
}
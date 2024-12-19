import { ICredential } from "../../credential/credential.interface"
import { Result } from "../../../../helpers/Result"
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator"
import { IService } from "../../app-service/service.interface"
import { SecurityException } from "../../application-exceptions/security-exception"
import { UserRoles } from "../../../../aspects/domain/user/value-objects/user.roles"
import { Either } from "../../../../helpers/Either"

export class SecurityDecorator <
        I,
        E,
        O
> 
extends BaseDecorator <I,Error,O>{
    constructor ( 
        decoratee: IService<I,Error, O>,
        private readonly userContetx:ICredential,
        private readonly permitedRoles:UserRoles[]
    ) {
        super(decoratee)
    }

    async execute ( input: I ): Promise<Either<Error,O>> {
        let result=this.permitedRoles.find(rol=>rol===this.userContetx.getUserRol())
        if(!result)
            return Either.makeLeft(
                new SecurityException(this.userContetx.getUserRol(),this.permitedRoles)
            )        

        return await this.wrapper.execute(input)
    }
}
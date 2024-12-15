import { UserRoles } from "../../../aspects/domain/user/value-objects/user.roles"
import { ICredential } from "../../application/credential/credential.interface";


export class UserCredential implements ICredential{
    constructor(
        private readonly name:string,
        private readonly userRole:UserRoles
    ){}
    getName():string{ return this.name}
    getUserRol():UserRoles{return this.userRole}
}
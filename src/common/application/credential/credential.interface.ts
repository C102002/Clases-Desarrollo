import { UserRoles } from "../../../aspects/domain/user/value-objects/user.roles"


export interface ICredential{
    getId():string
    getName():string
    getUserRol():UserRoles
}
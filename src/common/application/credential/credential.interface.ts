import { UserRoles } from "../../../aspects/domain/user/value-objects/user.roles"


export interface ICredential{
    getName():string
    getUserRol():UserRoles
}
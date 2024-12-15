import { UserRoles } from "../../../aspects/domain/user/value-objects/user.roles";

export class SecurityException extends Error{
    constructor(rol:string,roles:UserRoles[]) {
        super(`Error the user rol: ${rol} is not in the avaleable user roles ${roles} `);
    }
}
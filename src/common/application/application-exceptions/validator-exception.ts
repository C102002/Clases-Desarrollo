import { UserRoles } from "../../../aspects/domain/user/value-objects/user.roles";

export class ValidatorException <T> extends Error{
    constructor(data:T) {
        super(`Error the request dto: ${JSON.stringify(data)} is not valid, please enter a acepted DTO `);
    }
}
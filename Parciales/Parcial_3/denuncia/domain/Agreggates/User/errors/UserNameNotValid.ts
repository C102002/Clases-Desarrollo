import { DomainError } from "../../../../../shared/domain/DomainError";

export class UserNameNotValid extends DomainError{
    constructor(){
        const message='UserName not valid the lenth is more than 30'
        super(message)
    }
}
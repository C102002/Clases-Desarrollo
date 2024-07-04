import { DomainError } from "../../../../../shared/domain/DomainError";

export class PostNotFound extends DomainError{
    constructor(){
        super('Post Not Found Error')
    }
}
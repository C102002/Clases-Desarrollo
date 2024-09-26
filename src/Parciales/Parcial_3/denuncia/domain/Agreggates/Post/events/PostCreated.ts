import { DomainEvent } from "../../../../../shared/domain/DomainEvent";
import { IdPost } from '../valueObjects/idPost';

export class PostCreated extends DomainEvent{
    IdPost:IdPost
    private constructor(id:IdPost){
        super('PostCreated')
        this.IdPost=id
    }
    static create(id:IdPost){
        return new PostCreated(id)
    }
}
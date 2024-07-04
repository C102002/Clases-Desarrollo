import { AgregateRoot } from "../../../../shared/domain/AgregateRoot";
import { DomainEvent } from "../../../../shared/domain/DomainEvent";
import { IdUser } from '../User/valueObjects/idUser';
import { PostCreated } from "./events/PostCreated";
import { IdPost } from "./valueObjects/idPost";

export class Post extends AgregateRoot<IdPost>{
    IdUser:IdUser
    when(event: DomainEvent): void {
        if(event instanceof PostCreated){
            this.id=event.IdPost
        }
    }
    equals(object: IdPost): boolean {
        if (this.id.getPostId===object.getPostId) return true
        return false
    }

    private constructor(idPost:IdPost,IdUser:IdUser) {
        super(idPost,PostCreated.create(idPost))
        this.IdUser=IdUser
    }
    static create(id:IdPost,IdUser:IdUser){
        return new Post(id,IdUser)
    }
}
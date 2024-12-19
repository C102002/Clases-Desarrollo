import { AggregateRoot } from "../../../../../../common/domain/aggregate-root/aggregate-root";
import { DomainEvent } from "../../../../../../common/domain/domain-event/domain-event";
import { InvalidUserException } from "../../../user/domain/domain-exception/invalid-user-exception";
import { UserId } from "../../../user/domain/value-objetcs/user-id";
import { Content } from "../value-objects/content";
import { PostImage } from "../value-objects/image";
import { Likes } from "../value-objects/likes";
import { PostId } from "../value-objects/post-id";


export class Post extends AggregateRoot<PostId>{
    protected when(event: DomainEvent): void {
        throw new Error('Method not implemented.');
    }
    protected validateState(): void {
        if (! this.getId() ||
            ! this.userId ||
            ! this.content ||
            ! this.images ||
            ! this.likes
        )
            throw new InvalidUserException()
    }

    constructor(
        postId:PostId,
        private readonly userId:UserId,
        private readonly content:Content,
        private readonly images:PostImage[],
        private readonly likes:Likes
    ){
        super(postId)
    }

    static create(
        postId:PostId,
        userId:UserId,
        content:Content,
        images:PostImage[],
        likes:Likes
    ){
        return new Post(
            postId,
            userId,
            content,
            images,
            likes
        )
    }

    get UserId():UserId{return this.userId}
    get Content():Content{return this.content}
    get Images():PostImage[]{return this.images}
    get Likes():Likes{ return this.likes}

}
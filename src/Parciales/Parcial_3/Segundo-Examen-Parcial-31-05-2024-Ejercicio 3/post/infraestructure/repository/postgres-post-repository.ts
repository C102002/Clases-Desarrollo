import { Either } from "../../../../../../helpers/Either"
import { Post } from "../../domain/agregate/post"
import { IPostRepository } from "../../domain/repository/post.repository"
import { PostId } from "../../domain/value-objects/post-id"
import { PostData } from "../data/post.data"

export class PostgresPostRepository implements IPostRepository{

    findPostById(id: PostId): Either<Error, Post> {
        const post= PostData.find(post=>post.getId().equals(id))
        if (!post)
            return Either.makeLeft(new Error(`Post with id ${id} not found`))
        return Either.makeRight(post)
    }

}
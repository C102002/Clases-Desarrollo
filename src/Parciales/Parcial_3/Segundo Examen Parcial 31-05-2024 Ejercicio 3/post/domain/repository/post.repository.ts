import { PostId } from '../value-objects/post-id';
import { Post } from '../agregate/post';
import { Either } from '../../../../../../helpers/Either';


export interface IUserRepository{
    findPostById(id:PostId):Either<Error,Post>
}
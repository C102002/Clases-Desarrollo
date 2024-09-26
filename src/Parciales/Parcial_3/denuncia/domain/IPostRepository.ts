import { Optional } from "../../helpers/Optional";
import { Post } from './Agreggates/Post/Post.model';
import { IdPost } from "./Agreggates/Post/valueObjects/idPost";

export interface IPostRepository{
    getPostByID(id:IdPost):Optional<Post>
}
import { UserId } from "../../../user/domain/value-objetcs/user-id";
import { Post } from "../../domain/agregate/post";
import { Content } from "../../domain/value-objects/content";
import { PostImage } from "../../domain/value-objects/image";
import { Likes } from "../../domain/value-objects/likes";
import { PostId } from "../../domain/value-objects/post-id";


export const PostData:Post[]=[
    Post.create(
        PostId.create("06626ac8-1b6d-4605-9cba-ca468f7ef766"),
        UserId.create("235ced34-e7bf-4742-8801-a235c342e5bc"),
        Content.create("post de imagenes de perritos"),
        [PostImage.create('url1')],
        Likes.create(50)
    ),
    Post.create(
        PostId.create("1e42e8b2-6852-4131-a941-79d4401e7465"),
        UserId.create("57aab313-a1f0-4785-8a09-e73ac7c441ff"),
        Content.create("post de imagenes de perritos"),
        [PostImage.create('url2')],
        Likes.create(50)
    )
]
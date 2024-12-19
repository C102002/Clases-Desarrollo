import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class PostImage implements ValueObject<PostImage> {
    private readonly PostImage: string;

    equals(valueObject: PostImage): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.PostImage;
    }

    static create(postImage: string): PostImage {
        return new PostImage(postImage);
    }

    private constructor(PostImage: string) {
        this.PostImage = PostImage;
    }
}

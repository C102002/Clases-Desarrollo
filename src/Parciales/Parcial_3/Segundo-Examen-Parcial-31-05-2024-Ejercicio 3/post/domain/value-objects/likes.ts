import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Likes implements ValueObject<Likes> {
    private readonly likes: number;

    equals(valueObject: Likes): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.likes;
    }

    static create(likes: number): Likes {
        return new Likes(likes);
    }

    private constructor(likes:number) {
        this.likes = likes;
    }
}

import { ValueObject } from '../../../../../../common/domain/value-object/value-object';
import { InvalidPostIdException } from '../domain-exception/invalid-post-id-exception';


export class PostId implements ValueObject<PostId> {
    private readonly id: string;

    equals(valueObject: PostId): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.id;
    }

    static create(id: string): PostId {
        return new PostId(id);
    }

    private constructor(id: string) {
        const regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        if (!regex.test(id)) {
            throw new InvalidPostIdException();
        }
        this.id = id;
    }
}

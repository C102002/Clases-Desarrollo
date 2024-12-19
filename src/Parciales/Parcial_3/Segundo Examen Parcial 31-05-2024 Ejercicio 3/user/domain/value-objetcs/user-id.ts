import { ValueObject } from '../../../../../../common/domain/value-object/value-object';
import { InvalidUserIdException } from '../domain-exception/invalid-user-id-exception';


export class UserId implements ValueObject<UserId> {
    private readonly id: string;

    equals(valueObject: UserId): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.id;
    }

    static create(id: string): UserId {
        return new UserId(id);
    }

    private constructor(id: string) {
        const regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        if (!regex.test(id)) {
            throw new InvalidUserIdException();
        }
        this.id = id;
    }
}

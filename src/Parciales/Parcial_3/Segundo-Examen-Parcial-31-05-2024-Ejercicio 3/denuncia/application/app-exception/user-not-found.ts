import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class UserNotFound extends DomainException {
    constructor() {
        super("The provided User ID is not founded.");
    }
}

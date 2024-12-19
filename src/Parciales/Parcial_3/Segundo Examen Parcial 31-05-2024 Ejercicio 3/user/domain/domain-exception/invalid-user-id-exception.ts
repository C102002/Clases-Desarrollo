import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class InvalidUserIdException extends DomainException {
    constructor() {
        super("The provided User ID is invalid.");
    }
}

import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class InvalidUserException extends DomainException {
    constructor() {
        super("The provided User is invalid.");
    }
}

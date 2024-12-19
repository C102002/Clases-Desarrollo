import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class InvalidPostIdException extends DomainException {
    constructor() {
        super("The provided Post ID is invalid.");
    }
}

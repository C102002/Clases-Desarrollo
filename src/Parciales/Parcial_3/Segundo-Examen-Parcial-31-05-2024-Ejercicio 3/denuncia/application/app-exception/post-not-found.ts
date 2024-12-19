import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class PostNotFound extends DomainException {
    constructor() {
        super("The provided Post ID is not founded.");
    }
}

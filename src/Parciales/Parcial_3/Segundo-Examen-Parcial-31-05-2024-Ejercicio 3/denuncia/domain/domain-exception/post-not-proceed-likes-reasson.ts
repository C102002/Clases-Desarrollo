import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class PostNotProceedLikesReasson extends DomainException {
    constructor() {
        super("The provided Post is invalid to make a denuncia because their likes are more or equals 1000");
    }
}

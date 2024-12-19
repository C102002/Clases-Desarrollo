import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class PostNotProceedAiReasson extends DomainException {
    constructor() {
        super("The provided Post is invalid to make a denuncia because their response of the AI was correct and doesnt found any mistakes");
    }
}

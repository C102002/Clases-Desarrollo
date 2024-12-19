import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class InvalidDenunciaException extends DomainException {
    constructor() {
        super("The provided Denuncia is invalid.");
    }
}

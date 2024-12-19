import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class InvalidDenunciaIdException extends DomainException {
    constructor() {
        super("The provided Denuncia ID is invalid.");
    }
}

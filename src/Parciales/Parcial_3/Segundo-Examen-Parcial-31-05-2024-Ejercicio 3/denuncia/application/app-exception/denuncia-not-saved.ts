import { DomainException } from '../../../../../../common/domain/domain-exeption/domain-exception';

export class DenunciaNotSaved extends DomainException {
    constructor() {
        super("The provided denuncia couldnt be saved");
    }
}

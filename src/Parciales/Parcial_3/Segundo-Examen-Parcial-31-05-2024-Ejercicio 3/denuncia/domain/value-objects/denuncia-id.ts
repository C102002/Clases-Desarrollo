import { ValueObject } from '../../../../../../common/domain/value-object/value-object';
import { InvalidDenunciaIdException } from '../domain-exception/invalid-denuncia-id-exception';


export class DenunciaId implements ValueObject<DenunciaId> {
    private readonly id: string;

    equals(valueObject: DenunciaId): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.id;
    }

    static create(id: string): DenunciaId {
        return new DenunciaId(id);
    }

    private constructor(id: string) {
        const regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        if (!regex.test(id)) {
            throw new InvalidDenunciaIdException();
        }
        this.id = id;
    }
}

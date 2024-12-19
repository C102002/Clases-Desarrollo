import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Name implements ValueObject<Name> {
    private readonly name: string;

    equals(valueObject: Name): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.name;
    }

    static create(name: string): Name {
        return new Name(name);
    }

    private constructor(name: string) {
        this.name = name;
    }
}

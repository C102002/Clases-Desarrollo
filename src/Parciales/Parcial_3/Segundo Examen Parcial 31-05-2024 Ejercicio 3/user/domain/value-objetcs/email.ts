import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Email implements ValueObject<Email> {
    private readonly email: string;

    equals(valueObject: Email): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.email;
    }

    static create(email: string): Email {
        return new Email(email);
    }

    private constructor(email: string) {
        if (email.length<=5)
            throw new Error('The email lenthg is not larger of 5')
        this.email = email;
    }
}

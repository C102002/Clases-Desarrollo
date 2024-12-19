import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Text implements ValueObject<Text> {
    private readonly text: string;

    equals(valueObject: Text): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.text;
    }

    static create(text: string): Text {
        return new Text(text);
    }

    private constructor(text: string) {
        if (Text.length<=5)
            throw new Error('The Text lenthg is not larger of 5')
        this.text = text;
    }
}

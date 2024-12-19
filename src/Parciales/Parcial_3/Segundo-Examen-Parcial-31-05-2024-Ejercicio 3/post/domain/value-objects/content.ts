import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Content implements ValueObject<Content> {
    private readonly Content: string;

    equals(valueObject: Content): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.Content;
    }

    static create(content: string): Content {
        return new Content(content);
    }

    private constructor(Content: string) {
        if (Content.length<=5)
            throw new Error('The Content lenthg is not larger of 5')
        this.Content = Content;
    }
}

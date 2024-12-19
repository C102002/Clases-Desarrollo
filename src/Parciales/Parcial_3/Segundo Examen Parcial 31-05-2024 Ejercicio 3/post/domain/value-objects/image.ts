import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Image implements ValueObject<Image> {
    private readonly Image: string;

    equals(valueObject: Image): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.Image;
    }

    static create(image: string): Image {
        return new Image(image);
    }

    private constructor(Image: string) {
        this.Image = Image;
    }
}

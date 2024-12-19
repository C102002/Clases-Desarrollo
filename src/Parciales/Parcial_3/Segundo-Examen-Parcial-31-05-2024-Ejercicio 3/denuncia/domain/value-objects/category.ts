import { ValueObject } from '../../../../../../common/domain/value-object/value-object';


export class Category implements ValueObject<Category> {
    private readonly Category: string;

    equals(valueObject: Category): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.Category;
    }

    static create(category: string): Category {
        return new Category(category);
    }

    private constructor(Category:string) {
        this.Category = Category;
    }
}

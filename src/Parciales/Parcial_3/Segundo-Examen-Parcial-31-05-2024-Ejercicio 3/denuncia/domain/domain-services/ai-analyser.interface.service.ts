import { Either } from "../../../../../../helpers/Either";
import { Category } from "../value-objects/category";
import { Text } from "../value-objects/text";

export interface AIAnalizerService{
    analyze(text:Text, category:Category):Promise<Either<Error,boolean>>
}
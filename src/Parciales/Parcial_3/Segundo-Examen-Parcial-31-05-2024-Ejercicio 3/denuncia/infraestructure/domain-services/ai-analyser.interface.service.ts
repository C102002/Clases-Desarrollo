import { Either } from "../../../../../../helpers/Either";
import { AIAnalizerService } from "../../domain/domain-services/ai-analyser.interface.service";
import { Category } from "../../domain/value-objects/category";
import { Text } from "../../domain/value-objects/text";


export class ChatGptAnalizer implements AIAnalizerService{
    async analyze(text:Text, category:Category):Promise<Either<Error,boolean>>{
        //! Ojo ejemplo de codigo de implementacion
        if (category.Value=='prueba')
            return Either.makeRight(true)
        return Either.makeLeft(new Error('service doesnt match data'))
    }
}
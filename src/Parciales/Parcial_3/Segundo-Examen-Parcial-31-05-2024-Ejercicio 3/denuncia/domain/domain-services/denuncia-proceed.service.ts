import { Either } from "../../../../../../helpers/Either";
import { Post } from "../../../post/domain/agregate/post";
import { Category } from "../value-objects/category";
import { Text } from "../value-objects/text";
import { AIAnalizerService } from "./ai-analyser.interface.service";
import { User } from '../../../../Segundo-Examen-Parcial-31-05-2024-Ejercicio 3/user/domain/agregate/user';
import { PostNotProceedLikesReasson } from "../domain-exception/post-not-proceed-likes-reasson";
import { PostNotProceedAiReasson } from "../domain-exception/post-not-proceed-ai-reasson";

export class DenunciaProceedService{

    constructor(
        private readonly aiService:AIAnalizerService
    ){}
    async execute(post:Post,text:Text,
        category:Category,author:User,denunciante:User):Promise<Either<Error,boolean>>{
                
        let aiResponse=await this.aiService.analyze(
                text,category
            )
            
        if (aiResponse.isLeft())
             return aiResponse
                
        const aiPolitics=aiResponse.getRight()
           
        if (author.UserState.isWarned() && aiPolitics)
                return Either.makeRight(true)
                
        if (post.Likes.AreGreaterOrEqualsThanOneThousend())
            return Either.makeLeft(new PostNotProceedLikesReasson())
        if (!aiPolitics)
            return Either.makeLeft(new PostNotProceedAiReasson())
                
        return Either.makeRight(true)
    }
}
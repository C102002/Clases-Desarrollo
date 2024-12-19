import { IUserRepository } from '../../../user/domain/repository/user.repository';
import { IService } from '../../../../../../common/application/app-service/service.interface';
import { Either } from '../../../../../../helpers/Either';
import { DenunciarPostAppRequestDTO } from '../dto/request/denunciar.post.app.request.dto';
import { DenunciarPostAppResponseDTO } from '../dto/response/aply.coupon.app.response.dto';
import { IDenunciaRepository } from '../../domain/repository/denuncia.repository';
import { IPostRepository } from '../../../post/domain/repository/post.repository';
import { DenunciaProceedService } from '../../domain/domain-services/denuncia-proceed.service';
import { UserId } from '../../../user/domain/value-objetcs/user-id';
import { UserNotFound } from '../app-exception/user-not-found';
import { PostId } from '../../../post/domain/value-objects/post-id';
import { PostNotFound } from '../app-exception/post-not-found';
import { Category } from '../../domain/value-objects/category';
import { Text } from '../../domain/value-objects/text';
import { Denuncia } from '../../domain/agregate/denuncia';
import { IIdGen } from '../../../../../../common/application/id-gen/id-gen.interface';
import { DenunciaId } from '../../domain/value-objects/denuncia-id';
import { DenunciaNotSaved } from '../app-exception/denuncia-not-saved';
export class DenunciarPostService implements IService
<  
    DenunciarPostAppRequestDTO,
    Error,
    DenunciarPostAppResponseDTO
>
{
    constructor(
        private readonly denunciaRepo:IDenunciaRepository,
        private readonly userRepo:IUserRepository,
        private readonly postRepo:IPostRepository,
        private readonly denunciaProceedService:DenunciaProceedService,
        private readonly idGen:IIdGen<string>
    ){}
    async execute(data: DenunciarPostAppRequestDTO): Promise<Either<Error, DenunciarPostAppResponseDTO>> {
        	
        let denuncianteResponse=this.userRepo.findUserById(UserId.create(data.idDenunciante))
        if (denuncianteResponse.isLeft())
            return Either.makeLeft(new UserNotFound())
        
        let postResponse=this.postRepo.findPostById(
            PostId.create(data.idPost)
        )
        if (postResponse.isLeft())
            return Either.makeLeft(new PostNotFound())
            
        let userResponse=this.userRepo.findUserById(
            postResponse.getRight().UserId
        )
        if (userResponse.isLeft())
            return Either.makeLeft(new UserNotFound())
            
        let denunciaProceed=await this.denunciaProceedService.execute(
            postResponse.getRight(),
            Text.create(data.text),
            Category.create(data.category),
            userResponse.getRight(),
            denuncianteResponse.getRight()
            )
        
        
        if (denunciaProceed.isLeft())
            return Either.makeLeft(denunciaProceed.getLeft())
            
        const denuncia=Denuncia.create(
            DenunciaId.create(await this.idGen.genId()),
            UserId.create(userResponse.getRight().getId().Value),
            PostId.create(postResponse.getRight().getId().Value),
            UserId.create(
                denuncianteResponse.getRight().getId().Value
            ),
            Text.create(data.text),
            Category.create(data.category)
        )
            

        let denunciaResponse= this.denunciaRepo.save(denuncia)

        if (denunciaResponse.isLeft())
            return Either.makeLeft(new DenunciaNotSaved())
        
        //this.publisher.publish(denuncia.pullEvents())
            
        return Either.makeRight({...data, sucess:true})
    }
    
}
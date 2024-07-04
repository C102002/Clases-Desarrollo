import { Either } from '../../helpers/Either';
import { IApplicationService } from '../../shared/application/IApplicationService';
import { PostNotFound } from '../domain/Agreggates/Post/Errors/PostNotFound';
import { IdPost } from '../domain/Agreggates/Post/valueObjects/idPost';
import { UserNotFound } from '../domain/Agreggates/User/errors/UserNotFound';
import { IdUser } from '../domain/Agreggates/User/valueObjects/idUser';
import { IPostRepository } from '../domain/IPostRepository';
import { IUserRepository } from '../domain/IUserRepository';
import { DTOEntryInfraestructure } from '../infraestructure/DenunciaInfraestructureService';
export class DenunciaPostAplicationService implements IApplicationService<DTOEntryInfraestructure,boolean,Error>{
    constructor(private userRepository:IUserRepository,
        private postRepository:IPostRepository
    ){}
    
    execute(data: DTOEntryInfraestructure): Either<boolean, Error> {
        let post=this.postRepository.getPostByID(IdPost.create(data.idPost))
        if (!post.hasValue()) return Either.makeRight(new PostNotFound())
        let user=this.userRepository.getUserById(IdUser.create(post.getValue().IdUser.getValue))
        if (!user.hasValue()) return Either.makeRight(new UserNotFound())
        console.log('Denuncia App Service');
        return Either.makeLeft(true)
    }
}
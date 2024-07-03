import { Either } from '../../helpers/Either';
import { IApplicationService } from '../../shared/application/IApplicationService';
import { IUserRepository } from '../domain/IUserRepository';
import { DTOEntryInfraestructure } from '../infraestructure/DenunciaInfraestructureService';
export class DenunciaPostAplicationService implements IApplicationService<DTOEntryInfraestructure,boolean,Error>{
    constructor(private userRepository:IUserRepository){}
    
    execute(data: DTOEntryInfraestructure): Either<boolean, Error> {
        this.userRepository.getUserById(data.idPost)
        console.log('Denuncia App Service');
        return Either.makeLeft(true)
    }
}
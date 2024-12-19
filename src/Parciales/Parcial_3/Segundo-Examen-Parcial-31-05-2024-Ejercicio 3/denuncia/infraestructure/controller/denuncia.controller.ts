import { PostgresPostRepository } from './../../../../Segundo-Examen-Parcial-31-05-2024-Ejercicio 3/post/infraestructure/repository/postgres-post-repository';
import { PostgresUserRepository } from './../../../../Segundo-Examen-Parcial-31-05-2024-Ejercicio 3/user/infraestructure/repository/postgres-user-repository';
import { DenunciarPostService } from "../../application/services/denunciar.post.service";
import { DenunciarPostDTO } from "../dto/denunciar-post.dto";
import { PostgresDenunciaRepository } from '../repository/postgres-denuncia-repository';
import { DenunciaProceedService } from '../../domain/domain-services/denuncia-proceed.service';
import { ChatGptAnalizer } from '../domain-services/ai-analyser.interface.service';
import { UuidGen } from '../../../../../../common/infraestructure/id-gen/uuid-gen';
import { DenunciarPostAppResponseDTO } from '../../application/dto/response/aply.coupon.app.response.dto';

export class DenunciaController{
    constructor(){}

    async denunciarPost(data:DenunciarPostDTO):Promise<DenunciarPostAppResponseDTO>{
        const service= new DenunciarPostService(
            new PostgresDenunciaRepository(),
            new PostgresUserRepository(),
            new PostgresPostRepository(),
            new DenunciaProceedService(
                new ChatGptAnalizer()
            ),
            new UuidGen()
        )   
        let response=await service.execute({...data})

        return response.getRight()

    }

}
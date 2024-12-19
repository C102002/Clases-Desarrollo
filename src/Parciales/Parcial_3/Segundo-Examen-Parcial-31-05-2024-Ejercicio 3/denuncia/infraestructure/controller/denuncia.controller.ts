import { PostgresPostRepository } from './../../../../Segundo-Examen-Parcial-31-05-2024-Ejercicio 3/post/infraestructure/repository/postgres-post-repository';
import { PostgresUserRepository } from './../../../../Segundo-Examen-Parcial-31-05-2024-Ejercicio 3/user/infraestructure/repository/postgres-user-repository';
import { DenunciarPostService } from "../../application/services/denunciar.post.service";
import { DenunciarPostDTO } from "../dto/denunciar-post.dto";
import { PostgresDenunciaRepository } from '../repository/postgres-denuncia-repository';
import { DenunciaProceedService } from '../../domain/domain-services/denuncia-proceed.service';
import { ChatGptAnalizer } from '../domain-services/ai-analyser.interface.service';
import { UuidGen } from '../../../../../../common/infraestructure/id-gen/uuid-gen';
import { DenunciarPostAppResponseDTO } from '../../application/dto/response/aply.coupon.app.response.dto';
import { LoggerDecorator } from '../../../../../../common/application/aspects/logger-decorator/logger-decorator';
import { NativeLogger } from '../../../../../../common/infraestructure/logger/native-logger';
import { PerformanceDecorator } from '../../../../../../common/application/aspects/performance-decorator/performance-decorator';
import { NativeTimer } from '../../../../../../common/infraestructure/timer/native-timer';
import { ExceptionDecorator } from '../../../../../../common/application/aspects/exeption-decorator/exception-decorator';
import { SecurityDecorator } from '../../../../../../common/application/aspects/security-decorator/security-decorator';
import { ICredential } from '../../../../../../common/application/credential/credential.interface';
import { UserCredential } from '../../../../../../common/infraestructure/credential/user-credential';
import { UserRoles } from '../../../../../../aspects/domain/user/value-objects/user.roles';
import { AuditDecorator } from '../../../../../../common/application/aspects/audit-decorator/audit-decorator';
import { PostgresAuditContext } from '../../../../../../common/infraestructure/audit-repository/postgres-audit-repository';
import { NativeDateHandler } from '../../../../../../common/infraestructure/date-handler/native-date-handler';
import { DenunciarPostAppRequestDTO } from '../../application/dto/request/denunciar.post.app.request.dto';

export class DenunciaController{
    constructor(){}

    async denunciarPost(data:DenunciarPostDTO){

        const credential:ICredential=new UserCredential(
            "pedro",UserRoles.client
        )

        const service=
        new ExceptionDecorator<DenunciarPostAppRequestDTO,Error,DenunciarPostAppResponseDTO>(
            new AuditDecorator<DenunciarPostAppRequestDTO,Error,DenunciarPostAppResponseDTO>(
                new SecurityDecorator<DenunciarPostAppRequestDTO,Error,DenunciarPostAppResponseDTO>(
                    new LoggerDecorator<DenunciarPostAppRequestDTO,Error,DenunciarPostAppResponseDTO>(
                        new PerformanceDecorator<DenunciarPostAppRequestDTO,Error,DenunciarPostAppResponseDTO>(
                            new DenunciarPostService(
                                new PostgresDenunciaRepository(),
                                new PostgresUserRepository(),
                                new PostgresPostRepository(),
                                new DenunciaProceedService(
                                new ChatGptAnalizer()
                                ),
                                new UuidGen()
                            ),new NativeTimer(),new NativeLogger()
                        ), new NativeLogger()
                    ),credential,[UserRoles.client]
                ),new PostgresAuditContext(),new NativeDateHandler()
            ) 
        ) 
        let response=await service.execute({...data})
        return response.getRight()
    }

}
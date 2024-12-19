import { ExceptionDecorator } from "../../../common/application/aspects/exeption-decorator/exception-decorator"
import { LoggerDecorator } from "../../../common/application/aspects/logger-decorator/logger-decorator"
import { UserCredential } from "../../../common/infraestructure/credential/user-credential"
import { AplyCouponAppRequestDTO } from "../../application/dto/request/aply.coupon.app.request.dto"
import { AplyCouponAppResponseDTO } from "../../application/dto/response/aply.coupon.app.response.dto"
import { AplyCouponApplicationService } from "../../application/services/aply.coupon.application.service"
import { UserRoles } from "../../domain/user/value-objects/user.roles"
import { NativeLogger } from '../../../common/infraestructure/logger/native-logger';
import { PerformanceDecorator } from "../../../common/application/aspects/performance-decorator/performance-decorator"
import { NativeTimer } from "../../../common/infraestructure/timer/native-timer"
import { SecurityDecorator } from "../../../common/application/aspects/security-decorator/security-decorator"
import { ValidatorDecorator } from '../../../common/application/aspects/validator-decorator/validator-decorator';
import { AplyCuponValidator } from "../../../common/infraestructure/validator/aply.cupon.validator"


export class UserController{
    
    async aplyCoupon(data:{
        idCupon:string
        idSuscripcion:string
    }){
        const user=new UserCredential(
            'alfredo',
            UserRoles.client
        )
        //! CompositionRoot

        const service= new ExceptionDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
        (
            new SecurityDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
            (
                new LoggerDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                (
                    new PerformanceDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                    (
                        new AplyCouponApplicationService(
                            // inject the repositories
                            // new CouponRepository()
                            // new SuscriptionRepsitory()
                        ), new NativeTimer(), new NativeLogger()
                    ),
                    new NativeLogger()
                ),user,[UserRoles.client]
            )
        )

        let response= await service.execute({...data})
        return response.getRight
    }

    async aplyCouponGuarded(data:{
        idCupon:string
        idSuscripcion:string
    }){
        const user=new UserCredential(
            'alfredo',
            UserRoles.client
        )
        //! CompositionRoot

        const service= new ExceptionDecorator<AplyCouponAppRequestDTO, Error, AplyCouponAppResponseDTO>
        (
            new SecurityDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
            (
                new LoggerDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                (
                    new PerformanceDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                    (
                        new AplyCouponApplicationService(
                            // inject the repositories
                            // new CouponRepository()
                            // new SuscriptionRepsitory()
                        ), new NativeTimer(), new NativeLogger()
                    ),
                    new NativeLogger()
                ),user,[UserRoles.admin,UserRoles.user]
            )
        )

        let response= await service.execute({...data})
        return response.getRight
    }

    async aplyCouponDTOValidator(data:{
        idCupon:string
        idSuscripcion:string
    }){
        const user=new UserCredential(
            'alfredo',
            UserRoles.client
        )
        //! CompositionRoot

        const service= new ExceptionDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
        (
            new ValidatorDecorator
            (
                new SecurityDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                (
                    new LoggerDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                    (
                        new PerformanceDecorator<AplyCouponAppRequestDTO,Error, AplyCouponAppResponseDTO>
                        (
                            new AplyCouponApplicationService(
                                // inject the repositories
                                // new CouponRepository()
                                // new SuscriptionRepsitory()
                            ), new NativeTimer(), new NativeLogger()
                        ),
                        new NativeLogger()
                    ),user,[UserRoles.client]
                )
                ,new AplyCuponValidator()
            )
        )

        let response= await service.execute({...data})
        return response.getRight
    }
}
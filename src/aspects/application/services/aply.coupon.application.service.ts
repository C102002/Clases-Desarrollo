import { IService } from "../../../common/application/app-service/service.interface";
import { Either } from "../../../helpers/Either";
import { Result } from "../../../helpers/Result";
import { AplyCouponAppRequestDTO } from "../dto/request/aply.coupon.app.request.dto";
import { AplyCouponAppResponseDTO } from "../dto/response/aply.coupon.app.response.dto";

export class AplyCouponApplicationService implements IService 
<   
    AplyCouponAppRequestDTO,
    Error,
    AplyCouponAppResponseDTO
>
{
    async execute(data: AplyCouponAppRequestDTO): Promise<Either<Error,AplyCouponAppResponseDTO>> {
        console.log('coupon aplied')
        return Either.makeRight({...data, sucsess:true})
    }

}
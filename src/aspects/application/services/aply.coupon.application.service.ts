import { IService } from "../../../common/application/app-service/service.interface";
import { Result } from "../../../helpers/Result";
import { AplyCouponAppRequestDTO } from "../dto/request/aply.coupon.app.request.dto";
import { AplyCouponAppResponseDTO } from "../dto/response/aply.coupon.app.response.dto";

export class AplyCouponApplicationService implements IService 
<   
    AplyCouponAppRequestDTO,
    AplyCouponAppResponseDTO
>
{
    async execute(data: AplyCouponAppRequestDTO): Promise<Result<AplyCouponAppResponseDTO>> {
        console.log('coupon aplied')
        return Result.makeResult({...data, sucsess:true})
    }

}
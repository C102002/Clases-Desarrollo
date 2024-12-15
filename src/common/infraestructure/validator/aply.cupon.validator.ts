import { Validator } from '../../application/validator/validator.interface';
import { AplyCouponAppRequestDTO } from './../../../aspects/application/dto/request/aply.coupon.app.request.dto';
export class AplyCuponValidator implements Validator<AplyCouponAppRequestDTO,Error>{
    private readonly regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');

    validate(data: AplyCouponAppRequestDTO): boolean {

        return (
            this.regex.test(data.idCupon) &&
            this.regex.test(data.idSuscripcion)
        )
    }
    getErrors(data: AplyCouponAppRequestDTO): Error[] {

        //TODO To do it better is best to use chain of responsability Pattern 
        //TODO so the code of each validator is exentensive

        let errors:Error[]=[]

        if (!this.regex.test(data.idCupon))
            errors.push(new Error(`The id of coupon is not an avaleable id data:${data.idCupon}`))
        if (!this.regex.test(data.idSuscripcion))
            errors.push(new Error(`The id of suscription is not an avaleable id data:${data.idSuscripcion}`))
    
        return errors
    }

}
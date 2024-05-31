import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result"
import { BaseServiceDecorator } from "./BaseServiceDecorator"

export class LoggerDecorator extends BaseServiceDecorator{
    directory:string ='PepeDirectory'
    execute(params: number): Result<boolean> {
        let value=super.execute(params)
        if(!value.isError())
        console.log(`Logger service ${params}`);
        else{
            console.log(`Logger service Error ${value.getError()}`);  
        }
        return value
    }
}
import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result"
import { BaseServiceDecorator } from "./BaseServiceDecorator"

export class LoggerDecorator extends BaseServiceDecorator{
    directory:string ='PepeDirectory'
    execute(params: number): Result<boolean> {
        let value=super.execute(params)
        console.log(`Logger service ${params}`);
        return value
    }
}
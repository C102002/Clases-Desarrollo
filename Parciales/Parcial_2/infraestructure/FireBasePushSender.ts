import { Result } from '../../../Practica Orientado a aspectos/helpers/Result';
import { IPushSender } from '../aplication/interfaces/IPushSender';
export class FireBasePushSender implements IPushSender <boolean>{
    ApiKey:string
    send(token: string, message: string): Result<boolean> {
        console.log(`Notificacion Push Data:${token} ${message}`);
        return Result.makeResult(true)
    }
    constructor(apiKey:string){
        this.ApiKey=apiKey
    }
}
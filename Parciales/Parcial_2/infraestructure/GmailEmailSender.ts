import { Result } from '../../../Practica Orientado a aspectos/helpers/Result';
import { IEmailSender } from '../aplication/interfaces/IEmailSender';
export class GmailEmailSender implements IEmailSender <boolean>{
    emailDomain:string
    constructor(email:string) { this.emailDomain=email}
    
    send(email: string, message: string): Result<boolean> {
        console.log(`Notificacion Push Data:${email} ${message}`);
        return Result.makeResult(true)
    }
}
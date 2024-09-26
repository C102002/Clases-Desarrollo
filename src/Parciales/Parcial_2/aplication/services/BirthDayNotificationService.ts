import { Result } from '../../../../Practica Orientado a aspectos/helpers/Result';
import { IService } from '../interfaces/IService';
import { IPushSender } from '../interfaces/IPushSender';
import { Optional } from '../../../../Practica Orientado a aspectos/helpers/Optional';
import { ISubscriptionRepository } from '../../domain/interfaces/ISubsctiptionRepository';
import { SubscriptionState } from '../../domain/class/SubscriptionState';
import { Subscriber } from '../../shared/Subscriber';
import { Subscription } from '../../domain/class/Subscription';

export class UserNotFoundError extends Error{
    constructor() {
        super('Error Usuario No encontrado')
    }
}
export class BirthDayNotificationService implements IService <number,boolean> , Subscriber <Subscription>  {
    message:string
    pushSender:IPushSender<boolean>
    subsRepository:ISubscriptionRepository

    execute(params: number): Result<boolean> {
        let subAnswer= new Optional(this.subsRepository.findSubscriptionByUserID(params))
        //if (!subAnswer.hasValue()) return Result.makeError(new Error(`Error no esta el usuario de la subscripcion ${params}`))
        if (!subAnswer.hasValue()) return Result.makeError(new UserNotFoundError())
            let sub=subAnswer.getValue()
        if (sub.subscirptionState===SubscriptionState.Valid){
            this.pushSender.send(sub.getUser().getToken()|| '54654645',this.message)
            Result.makeResult(true)
        }
        return Result.makeError(new Error(`Error no esta el usuario: ${sub.getUser().name} con el estadus ${SubscriptionState.Invalid}`))
    }
    constructor(message:string,pushService:IPushSender<boolean>,subService:ISubscriptionRepository){
        this.message=message
        this.pushSender=pushService
        this.subsRepository=subService
    }
    update(context: Subscription): Result<boolean> {
        this.execute(context.getUserUUID())
        return Result.makeResult(true)
    }
}
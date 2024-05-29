import { Result } from '../../../../Practica Orientado a aspectos/helpers/Result';
import { IService } from '../interfaces/IService';
import { IPushSender } from '../interfaces/IPushSender';
import { Optional } from '../../../../Practica Orientado a aspectos/helpers/Optional';
import { ISubscriptionRepository } from '../../domain/interfaces/ISubsctiptionRepository';
import { SubscriptionState } from '../../domain/class/SubscriptionState';
import { IEmailSender } from '../interfaces/IEmailSender';
export class BirthDayReniewNotificationService implements IService <number,boolean> {
    message:string
    emailSender:IEmailSender<boolean>
    subsRepository:ISubscriptionRepository

    execute(params: number): Result<boolean> {
        let subAnswer= new Optional(this.subsRepository.findSubscriptionByUserID(params))
        if (!subAnswer.hasValue()) return Result.makeError(new Error(`Error no esta el usuario de la subscripcion ${params}`))
        let sub=subAnswer.getValue()
        if (sub.subscirptionState===SubscriptionState.Invalid){
            const currentDate=new Date()
            if(sub.getreniewSubscription().getMonth() <= currentDate.getMonth() -3)
            {
                this.emailSender.send(sub.getUser().getEmail()|| '54654645',this.message)
                Result.makeResult(true)
            }
            else
            Result.makeError(new Error(`Error no esta el usuario: ${sub.getUser().name} con el estatus ${SubscriptionState.Invalid} tiene una fecha de fencimiento > 3 meses`))
        }
        return Result.makeError(new Error(`Error no esta el usuario: ${sub.getUser().name} con el estatus ${SubscriptionState.Invalid}`))
    }
    constructor(message:string,pushService:IEmailSender<boolean>,subService:ISubscriptionRepository){
        this.message=message
        this.emailSender=pushService
        this.subsRepository=subService
    }
}
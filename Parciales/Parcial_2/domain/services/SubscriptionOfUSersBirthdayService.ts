import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result"
import { Subscription } from "../class/Subscription"
import { ISubscriptionRepository } from "../interfaces/ISubsctiptionRepository"
import { IUserRepository } from "../interfaces/IUserRepository"

export class SubscriptionOfUSersBirthdayService{
    userRepo:IUserRepository
    subRepo:ISubscriptionRepository

    findSubsOfUSersTodaysBirthDay():Result<Subscription[]>{
        let birthDayUser=this.subRepo.findSubscriptionByReniewSubscription(new Date())
        if (!birthDayUser) return Result.makeError<Subscription []>(new Error('Error no hay cumpleañeros'))
        else return Result.makeResult<Subscription[]>(birthDayUser)
    }
    constructor(repUser:IUserRepository,repSub:ISubscriptionRepository){
    this.userRepo=repUser
    this.subRepo=repSub   
    }
}
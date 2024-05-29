import { Result } from "../../../Practica Orientado a aspectos/helpers/Result";
import { ISubscriptionRepository } from "../domain/interfaces/ISubsctiptionRepository";
import { IUserRepository } from "../domain/interfaces/IUserRepository";
import { SubscriptionOfUSersBirthdayService } from "../domain/services/SubscriptionOfUSersBirthdayService";
import { Subject } from "./Subject";
import { Subscriber } from './Subscriber';

export class EventObserver <T,E> implements Subject <T,E>{
    subscribe(subscriber: Subscriber<T>): void {
        this.subscribers.push(subscriber)   
    }
    unsubscribe(subscriber: Subscriber<T>): void {
        this.subscribers=this.subscribers.filter((sub)=>{
            sub!==subscriber
        })
    }
    notify(): Result<boolean> {
        let service = new SubscriptionOfUSersBirthdayService(this.userRepo,this.subRepo)
        let subResult= service.findSubsOfUSersTodaysBirthDay()
        if (!subResult.isError()) return  Result.makeError(new Error('Error consiguiendo cumpleañeros'))
    //     subResult.getValue().forEach((sub)=>{
    //         for (const subscriber of this.subscribers) {
    //             subscriber.update(<T>sub)
    //         }
    // })
    return Result.makeResult(true)
    }

    private subscribers: Subscriber<T>[]=[]
    public userRepo:IUserRepository
    public subRepo:ISubscriptionRepository

    constructor(userService:IUserRepository,serviceSub:ISubscriptionRepository){
        this.userRepo=userService
        this.subRepo=serviceSub
    }
}
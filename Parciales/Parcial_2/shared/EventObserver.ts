import { Result } from "../../../Practica Orientado a aspectos/helpers/Result";
import { Subscription } from "../domain/class/Subscription";
import { ISubscriptionRepository } from "../domain/interfaces/ISubsctiptionRepository";
import { IUserRepository } from "../domain/interfaces/IUserRepository";
import { SubscriptionOfUSersBirthdayService } from "../domain/services/SubscriptionOfUSersBirthdayService";
import { Subject } from "./Subject";
import { Subscriber } from './Subscriber';

export class EventObserver <Subscription> implements Subject <Subscription,boolean>{
    subscribe(subscriber: Subscriber<Subscription>): void {
        this.subscribers.push(subscriber)
        // console.log('Agregado servicio',subscriber);
    }
    unsubscribe(subscriber: Subscriber<Subscription>): void {
        this.subscribers=this.subscribers.filter((sub)=>{
            sub!==subscriber
        })
        console.log('Eliminado servicio',subscriber);
    }
    notify(): Result<boolean> {
        
        let service = new SubscriptionOfUSersBirthdayService(this.userRepo,this.subRepo)
        
        
        let subResult= service.findSubsOfUSersTodaysBirthDay()
        if (!subResult.isError()) return  Result.makeError(new Error('Error consiguiendo cumpleañeros'))
        subResult.getValue().forEach((sub)=>{
            console.log(sub);
            for (const subscriber of this.subscribers) {               
                
            }
    })
    return Result.makeResult(true)
    }

    private subscribers: Subscriber<Subscription>[]=[]
    public userRepo:IUserRepository
    public subRepo:ISubscriptionRepository

    constructor(userService:IUserRepository,serviceSub:ISubscriptionRepository){
        this.userRepo=userService
        this.subRepo=serviceSub
    }
}
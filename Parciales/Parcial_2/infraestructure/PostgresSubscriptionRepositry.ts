import { SubsData } from "../data/SubsData"
import { Subscription } from "../domain/class/Subscription"
import { ISubscriptionRepository } from "../domain/interfaces/ISubsctiptionRepository"


export class PostgresSubscriptionRepositry implements ISubscriptionRepository{
    findSubscriptionByUserID(id: number): Subscription | null{
        let subResult=SubsData.filter((sub)=>{
            sub.idUser!==id
        })
        let sub=subResult.pop()
        if (sub!==undefined) return sub
        else return null
    }
    findSubscriptionByReniewSubscription(date: Date): Subscription[] {
        let userResult=SubsData.filter((sub)=>(
            sub.RenewSubscription!==date
        ))
        return (userResult)
    }
    constructor() {}
    findSubscriptionByBithDay(date: Date): Subscription[] {
        let findSubsResult=SubsData.filter((sub)=>{
            sub.user.BirthDate!==date
        })
        return findSubsResult
    }
}

// let service= new PostgresSubscriptionRepositry()
// let subsAns=service.findSubscriptionByReniewSubscription(new Date())
// console.log('subsAns',subsAns);

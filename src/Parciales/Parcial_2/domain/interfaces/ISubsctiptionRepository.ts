import { Subscription } from "../class/Subscription"

export interface ISubscriptionRepository{
    findSubscriptionByUserID(id:number):Subscription | null
    findSubscriptionByReniewSubscription(date:Date):Subscription [] | null
    findSubscriptionByBithDay(date:Date):Subscription [] | null
}
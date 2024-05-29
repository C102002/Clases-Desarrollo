import { SubscriptionState } from "./SubscriptionState"
import { User } from "./User"

export class Subscription{
    idUser : number
    RenewSubscription: Date
    subscirptionState: SubscriptionState
    user: User
    constructor(
        idUser : number,
        RenewSubscription: Date,
        subscirption: SubscriptionState,
        user: User
    )
    {
        this.idUser=idUser
        this.RenewSubscription=RenewSubscription
        this.subscirptionState=subscirption
        this.user=user
    }
    getUserUUID():Number{return this.idUser}
    getUser():User{return this.user}
    getreniewSubscription():Date{return this.RenewSubscription}
    getS
}
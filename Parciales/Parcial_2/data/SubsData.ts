import { Subscription } from "../domain/class/Subscription"
import { SubscriptionState } from "../domain/class/SubscriptionState"
import { User } from "../domain/class/User"

export let SubsData:Subscription[]=[]



for (let i=0;i<=20;i++){
    if(i%2==0){
        let sub= new Subscription(i,new Date(),SubscriptionState.Invalid,
        new User(i,'pepe',new Date(),'pepe@gmail.com','acjasvcjsavc'))
        SubsData.push(sub)
        // console.log(SubsData)

    }
    else{
        let sub= new Subscription(i,new Date(),SubscriptionState.Valid,
        new User(i,'pepe',new Date(),'pepe@gmail.com','acjasvcjsavc'))
        SubsData.push(sub)
        // console.log(SubsData)
    }
}

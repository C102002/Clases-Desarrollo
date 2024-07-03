export abstract class DomainEvent{
    time:Date
    eventName:string
    constructor(eventName:string){
        this.time=new Date()
        this.eventName=eventName
    }
}
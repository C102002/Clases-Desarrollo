import { Entity } from "./Entity";
import { ValueObject } from "./ValueObject";
import { DomainEvent } from './DomainEvent';

export abstract class AgregateRoot <T extends ValueObject <T>> extends Entity<T>{
    events:DomainEvent[]=[]
    constructor(id:T, event:DomainEvent) {
        super(id)
        this.apply(event)
    }
    apply(event:DomainEvent){
        this.events.push(event)
        // console.log(this.events);
        this.when(event)
    }
    ///Es el asqueroso TypeOf de eventos de dominio (Fuchi)
    abstract when(event:DomainEvent):void

    pullDomain():DomainEvent[]{
        let events=this.events
        this.events=[]
        return events
    }
}
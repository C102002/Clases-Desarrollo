import { ValueObject } from "./ValueObject"

export abstract class AgregateRoot <T extends ValueObject <T> >{
    id:T

    constructor(id:T){
        this.id=id
    }
}
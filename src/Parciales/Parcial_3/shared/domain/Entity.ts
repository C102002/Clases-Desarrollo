import { ValueObject } from './ValueObject';
export abstract class Entity <T>{
    id: T
    abstract equals(object:T):boolean
    constructor(id:T){
        this.id=id
    }
} 
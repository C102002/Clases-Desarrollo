import { DomainException } from "../domain-exeption/domain-exception";

export class DomainExceptionNotHandled extends DomainException{
    constructor(error:string){
        super(`Domain Exception not handled with this data:${error}`)
    }
}
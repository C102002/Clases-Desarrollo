import { ValueObject } from "../../../../../shared/domain/ValueObject"

export class UserName implements ValueObject<UserName>{
    userName:string
    
    private constructor(userData:string){
        this.userName=userData
    }

    equals(valueObject: UserName): boolean {
        if (this.getValue===valueObject.getValue) return true
        return false
    }

    static create(userData:string){
        return new UserName(userData)
    }

    get getValue(){return this.userName}
}
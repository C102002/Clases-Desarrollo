import { ValueObject } from "../../../../../shared/domain/ValueObject"

export class UserStatus implements ValueObject<UserStatus>{
    userStatus:UserStatus
    
    private constructor(userStatus:UserStatus
    ){
        this.userStatus=userStatus
    }
    equals(valueObject: UserStatus): boolean {
        if (this.getValue===valueObject.getValue) return true
        return false
    }

    static create(userStatus:UserStatus){
        return new UserStatus(userStatus)
    }

    get getValue(){return this.userStatus}
}
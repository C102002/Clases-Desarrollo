import { DomainEvent } from "../../../../../shared/domain/DomainEvent";
import { Email } from "../valueObjects/Email";
import { UserName } from "../valueObjects/UserName";
import { IdUser } from "../valueObjects/idUser";

export class UserCreated extends DomainEvent{
    private constructor(
        public id:IdUser,
        public username:UserName,
        public email:Email,
    ){
        super('UserCreated');
    }
    static create(
        id:IdUser,
        username:UserName,
        email:Email){
            return new UserCreated(id,username,email)
        }
}
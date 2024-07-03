import { DomainEvent } from "../../../../../shared/domain/DomainEvent";
import { Email } from "../valueObjects/Email";
import { UserName } from "../valueObjects/UserName";
import { IdUser } from "../valueObjects/idUser";

export class UserUpdatedName extends DomainEvent{
    private constructor(
        public id:IdUser,
        public username:UserName,
    ){
        super('UserUpdatedName');
    }
    static create(
        id:IdUser,
        username:UserName,
        ){
            return new UserUpdatedName(id,username)
        }
}
import { IdUser } from './valueObjects/idUser';
import { UserName } from './valueObjects/UserName';
import { Email } from './valueObjects/Email';
import { AgregateRoot } from '../../../../shared/domain/AgregateRoot';
import { DomainEvent } from '../../../../shared/domain/DomainEvent';
import { UserCreated } from './events/UserCreated';
import { UserUpdatedEmail } from './events/UserUpdatedEmail';
import { UserUpdatedName } from './events/UserUpdatedName';
export class UserAggregate extends AgregateRoot<IdUser>{
    username:UserName
    email:Email
    static createUser(
        id:IdUser,
        username:UserName,
        email:Email,
    ){    
        return new UserAggregate(id,username,email)
    }
        
    private constructor(
        id:IdUser,
        username:UserName,
        email:Email,
    ){
        let event= UserCreated.create(id,username,email)
        super(id,event)
        this.email=event.email
        this.username=event.username
    }
    when(event: DomainEvent) {
        if(event instanceof UserCreated){
            this.email=event.email
            this.username=event.username
        }
        if(event instanceof UserUpdatedEmail){
            this.email=event.email
        }
        if(event instanceof UserUpdatedName){
            this.username=event.username
        }
    }
    equals(object: IdUser): boolean {
        if (this.id.getValue===object.getValue) return true
        return false
    }
    changeEmail(email:Email)
    {
        this.apply(UserUpdatedEmail.create(this.id,email))
    }
    changeUsername(username:UserName)
    {
        this.apply(UserUpdatedName.create(this.id,username))
    }
}
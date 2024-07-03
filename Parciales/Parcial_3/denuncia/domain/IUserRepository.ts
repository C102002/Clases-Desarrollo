import { Optional } from '../../helpers/Optional';
import { UserAggregate } from './Agreggates/User/User.model';
export interface IUserRepository{
    getUserById(id:number):Optional<UserAggregate>
}
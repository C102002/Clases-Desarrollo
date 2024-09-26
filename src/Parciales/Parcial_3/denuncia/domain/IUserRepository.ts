import { Optional } from '../../helpers/Optional';
import { UserAggregate } from './Agreggates/User/User.model';
import { IdUser } from './Agreggates/User/valueObjects/idUser';
export interface IUserRepository{
    getUserById(id:IdUser):Optional<UserAggregate>
}
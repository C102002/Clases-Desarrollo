import { Either } from '../../../helpers/Either';
export interface IService <T,E,D>{
    execute(data:T):Promise<Either<E,D>>
}
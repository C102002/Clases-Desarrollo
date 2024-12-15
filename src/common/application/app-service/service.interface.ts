import { Result } from '../../../helpers/Result';
export interface IService <T,E>{
    execute(data:T):Promise<Result<E>>
}
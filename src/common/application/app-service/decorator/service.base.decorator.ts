import { Result } from '../../../../helpers/Result';
import { IService } from '../service.interface';
export abstract class BaseDecorator <T,E> implements IService<T,E>{
    constructor(
        readonly wrapper:IService<T,E>
    ){}
    async execute(data:T):Promise<Result<E>>{
        return await this.wrapper.execute(data)
    }
    public get WrapperName():string{return this.wrapper.constructor.name}
}
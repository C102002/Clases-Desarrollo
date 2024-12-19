import { Either } from '../../../../helpers/Either';
import { IService } from '../service.interface';
export abstract class BaseDecorator <T,E,D> implements IService<T,E,D>{
    constructor(
        readonly wrapper:IService<T,E,D>
    ){}
    async execute(data:T):Promise<Either<E,D>>{
        return await this.wrapper.execute(data)
    }
    public get WrapperName():string{return this.wrapper.constructor.name}
}
import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result";
import { IService } from "../interfaces/IService";

export class BaseServiceDecorator implements IService <number,boolean>
{
    private wrapper: IService<number,boolean>
    execute(params: number): Result<boolean> {
        return this.wrapper.execute(params)
    }
    constructor(wrapper: IService<number,boolean>)
    {
        this.wrapper=wrapper
    }
}
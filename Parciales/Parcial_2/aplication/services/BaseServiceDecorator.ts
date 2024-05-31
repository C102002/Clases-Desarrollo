import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result";
import { Subscription } from "../../domain/class/Subscription";
import { Subscriber } from "../../shared/Subscriber";
import { IService } from "../interfaces/IService";

export class BaseServiceDecorator implements IService <number,boolean>, Subscriber <Subscription>
{
    private wrapper: IService<number,boolean>
    execute(params: number): Result<boolean> {
        return this.wrapper.execute(params)
    }
    constructor(wrapper: IService<number,boolean>)
    {
        this.wrapper=wrapper
    }
    update(context: Subscription): Result<boolean> {
        let answer=this.execute(context.getUserUUID())
        return answer
    }
}
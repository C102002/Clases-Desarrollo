import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result";
import { IService } from "../interfaces/IService";

export class BaseServiceDecorator implements IService <number,boolean>
{

    execute(params: number): Result<boolean> {
        throw new Error("Method not implemented.");
    }
}

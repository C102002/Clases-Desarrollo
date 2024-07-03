import { DomainError } from "../../shared/domain/DomainError";
import { InfraestructureError } from '../../shared/infraestructure/InfraestructureError';

export interface IErrorMapper{
    execute(error:DomainError):InfraestructureError
}
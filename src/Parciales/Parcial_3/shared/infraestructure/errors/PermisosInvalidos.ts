import { InfraestructureError } from "../../../shared/infraestructure/InfraestructureError";

export class PermisosInvalidos extends InfraestructureError{
    constructor(){
        super('Error Permisos Invalidos')
    }   
}
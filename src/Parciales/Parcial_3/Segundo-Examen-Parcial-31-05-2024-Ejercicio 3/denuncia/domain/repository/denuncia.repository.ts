import { Either } from '../../../../../../helpers/Either';
import { DenunciaId } from '../value-objects/denuncia-id';
import { Denuncia } from '../agregate/denuncia';


export interface IDenunciaRepository{
    findDenunciaById(id:DenunciaId):Either<Error,Denuncia>
    save(denuncia:Denuncia):Either<Error,Denuncia>
}
import { Either } from "../../../../../../helpers/Either"
import { Denuncia } from "../../domain/agregate/denuncia"
import { IDenunciaRepository } from "../../domain/repository/denuncia.repository"
import { DenunciaId } from "../../domain/value-objects/denuncia-id"
import { DenunciaData } from "../data/denuncia.data"

export class PostgresDenunciaRepository implements IDenunciaRepository{

    findDenunciaById(id: DenunciaId): Either<Error, Denuncia> {
        const denuncia= DenunciaData.find(denuncia=>denuncia.getId().equals(id))
        if (!denuncia)
            return Either.makeLeft(new Error(`Denuncia with id ${id} not found`))
        return Either.makeRight(denuncia)    
    }
}
import { AuditingDto } from "../../application/aspects/dto/audit.dto"
import { IAuditContext } from "../../application/audit-context/audit.context"

export class PostgresAuditContext implements IAuditContext {
    async saveLog(data:AuditingDto): Promise<void>{
    try{
        console.log(`message saved in ${this.constructor.name} with message:${data.data}, made at ${data.madeAt},by user ${data.userId}`)
    }
        catch(e){
            throw e
        }
    }
}
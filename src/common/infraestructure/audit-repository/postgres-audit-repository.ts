import { IAuditRepository } from "../../application/audit-repository/audit.repository";

export class PostgresAuditRepository implements IAuditRepository {
    async saveLog(message: string): Promise<void>{
    try{
        console.log(`message saved in ${this.constructor.name} with message:${message}`)
    }
        catch(e){
            throw e
        }
    }
}
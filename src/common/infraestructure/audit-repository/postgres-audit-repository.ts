import { IAuditContext } from "../../application/audit-context/audit.context"

export class PostgresAuditContext implements IAuditContext {
    async saveLog(message: string): Promise<void>{
    try{
        console.log(`message saved in ${this.constructor.name} with message:${message}`)
    }
        catch(e){
            throw e
        }
    }
}
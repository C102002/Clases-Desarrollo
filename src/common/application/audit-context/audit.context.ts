import { AuditingDto } from "../aspects/dto/audit.dto";

export interface IAuditContext {
    saveLog(data:AuditingDto): Promise<void>;
}

//! Para ser mas fiel al seeman
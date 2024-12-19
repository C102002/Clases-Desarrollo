export interface IAuditContext {
    saveLog(message: string): Promise<void>;
}

//! Para ser mas fiel al seeman
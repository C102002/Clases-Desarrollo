export interface IAuditRepository {
    saveLog(message: string): Promise<void>;
}
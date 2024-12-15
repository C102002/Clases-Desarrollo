import { ITransactionHandler } from "../../application/transaction-handler/transaction-handler.interface";

export class QueryRunner implements ITransactionHandler {
    async startTransaction(): Promise<void>{
        console.log('start transaction')
    }
    async commitTransaction(): Promise<void>{
        console.log('transaction ended sucsessfully')

    }
    async rollbackTransaction(): Promise<void>{
        console.log('transaction ended unsucsessfully')
    }
}
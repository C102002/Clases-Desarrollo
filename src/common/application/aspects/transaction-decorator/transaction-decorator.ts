import { ITransactionHandler } from "../../transaction-handler/transaction-handler.interface"
import { Result } from "../../../../helpers/Result"
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator"
import { IService } from "../../app-service/service.interface"


export class TransactionDecorator <
        I ,
        O
> 
extends BaseDecorator <I,O>{
    constructor ( 
        applicationService: IService<I, O>,
        private readonly transactionHandler: ITransactionHandler
    ) {
        super(applicationService)
    }

    async execute ( input: I ): Promise<Result<O>> {
        await this.transactionHandler.startTransaction()

        let result = await this.wrapper.execute(input)
        
        if(!result.isError()) 
            await this.transactionHandler.commitTransaction()
        else
            await this.transactionHandler.rollbackTransaction()
        
            return result
    }
}
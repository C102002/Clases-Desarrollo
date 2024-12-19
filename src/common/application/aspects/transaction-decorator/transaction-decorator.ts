import { ITransactionHandler } from "../../transaction-handler/transaction-handler.interface"
import { Result } from "../../../../helpers/Result"
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator"
import { IService } from "../../app-service/service.interface"
import { Either } from "../../../../helpers/Either"


export class TransactionDecorator <
        I ,
        E,
        O
> 
extends BaseDecorator <I,E,O>{
    constructor ( 
        applicationService: IService<I,E, O>,
        private readonly transactionHandler: ITransactionHandler
    ) {
        super(applicationService)
    }

    async execute ( input: I ): Promise<Either<E,O>> {
        await this.transactionHandler.startTransaction()

        let result = await this.wrapper.execute(input)
        
        if(result.isRight()) 
            await this.transactionHandler.commitTransaction()
        else
            await this.transactionHandler.rollbackTransaction()
        
            return result
    }
}
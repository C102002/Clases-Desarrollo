import { ILogger } from "../../logger/logger.interface"
import { ITimer } from "../../timer/timer.interface"
import { Result } from "../../../../helpers/Result"
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator"
import { IService } from "../../app-service/service.interface"



export class PerformanceDecorator <
    I,
    O 
> 
extends BaseDecorator <I,O>{
    constructor ( 
        applicationService: IService<I, O>,
        private readonly timer: ITimer,
        private readonly logger: ILogger,
    ) {
        super(applicationService)
    }

    async execute ( input: I ): Promise<Result<O>> {
        let beginingTime=performance.now()
        let result= await this.wrapper.execute( input )
        let endingTime=performance.now()
        let time=endingTime-beginingTime
		if (result.isError()) 
			this.logger.logPerformance(
				this.WrapperName,
				`Error execute: Error: ${result.getError} -- in time:`,
				time.toString()
			)
		 else 
			this.logger.logPerformance(
				this.WrapperName,
				`Successful execute in time:`,
				time.toString()
			);
        return result
    }
}
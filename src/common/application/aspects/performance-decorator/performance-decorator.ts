import { ILogger } from "../../logger/logger.interface"
import { ITimer } from "../../timer/timer.interface"
import { Result } from "../../../../helpers/Result"
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator"
import { IService } from "../../app-service/service.interface"
import { Either } from "../../../../helpers/Either"



export class PerformanceDecorator <
    I,
    E,
    O 
> 
extends BaseDecorator <I,E,O>{
    constructor ( 
        applicationService: IService<I,E, O>,
        private readonly timer: ITimer,
        private readonly logger: ILogger,
    ) {
        super(applicationService)
    }

    async execute ( input: I ): Promise<Either<E,O>> {
        let beginingTime=this.timer.getTime()
        let result= await this.wrapper.execute( input )
        let endingTime=this.timer.getTime()
        let time=endingTime-beginingTime
		if (result.isLeft()) 
			this.logger.logPerformance(
				this.WrapperName,
				`Error execute: Error: ${result.getLeft()} -- in time:`,
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
import { ILogger } from "../../logger/logger.interface";
import { Result } from "../../../../helpers/Result";
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator";
import { IService } from "../../app-service/service.interface";

export class LoggerDecorator<
	I,
	O,
> extends BaseDecorator<I,O> {


	constructor(decoratee: IService<I, O>,
		private readonly logger: ILogger
	) {
		super(decoratee);
	}

	async execute(input: I): Promise<Result<O>> {
		const r = await this.wrapper.execute(input);
		if (r.isError()) {
			this.logger.errorLog(
				this.WrapperName,
				`Error execute: Error: ${r.getError} -- `,
				JSON.stringify(input)
			);
		} else {
			this.logger.successLog(
				this.WrapperName,
				`Successful execute: -- `,
				JSON.stringify(input)
			);
		}
		return r;
	}
}

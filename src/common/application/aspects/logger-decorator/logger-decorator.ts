import { ILogger } from "../../logger/logger.interface";
import { Result } from "../../../../helpers/Result";
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator";
import { IService } from "../../app-service/service.interface";
import { Either } from "../../../../helpers/Either";

export class LoggerDecorator<
	I,
	E,
	O,
> extends BaseDecorator<I,E,O> {


	constructor(decoratee: IService<I,E, O>,
		private readonly logger: ILogger
	) {
		super(decoratee);
	}

	async execute(input: I): Promise<Either<E,O>> {
		const r = await this.wrapper.execute(input);
		if (r.isLeft()) {
			this.logger.errorLog(
				this.WrapperName,
				`Error execute: Error: ${r.getLeft} -- `,
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

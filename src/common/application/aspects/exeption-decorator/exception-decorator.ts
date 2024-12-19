import { Either } from "../../../../helpers/Either";
import { Result } from "../../../../helpers/Result";
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator";

export class ExceptionDecorator<
	I,
	E,
	O,
> extends BaseDecorator<I,E,O> {
	async execute(input: I): Promise<Either<E,O>> {
		try {
			const res = await this.wrapper.execute(input);
			if (res.isLeft()) {
				throw res.getLeft()
				// ExceptionMapper.toHttp(res.getError,res.getError.message);
			}
			return res;
		} 
		catch (error) {
			throw error
		}
	}
}

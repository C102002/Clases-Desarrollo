import { Result } from "../../../../helpers/Result";
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator";

export class ExceptionDecorator<
	I,
	O,
> extends BaseDecorator<I, O> {
	async execute(input: I): Promise<Result<O>> {
		try {
			const res = await this.wrapper.execute(input);
			if (res.isError()) {
				throw res.getError()
				// ExceptionMapper.toHttp(res.getError,res.getError.message);
			}
			return res;
		} 
		catch (error) {
			throw error
		}
	}
}

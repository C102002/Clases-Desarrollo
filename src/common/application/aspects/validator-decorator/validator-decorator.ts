import { Result } from "../../../../helpers/Result";
import { BaseDecorator } from "../../app-service/decorator/service.base.decorator";
import { IService } from "../../app-service/service.interface";
import { ValidatorException } from "../../application-exceptions/validator-exception";
import { Validator } from "../../validator/validator.interface";

export class ValidatorDecorator<
	I,
	O,
> extends BaseDecorator<I, O> {
	constructor(
		wrapper:IService<I,O>,
		private readonly validator:Validator<I,Error>
	){
		super(wrapper)
	}
	async execute(input: I): Promise<Result<O>> {
		if(!this.validator.validate(input))
			return Result.makeError(new ValidatorException(input))
		let result= await this.wrapper.execute(input)
		return result
	}
}

import { IAuditRepository } from '../../audit-repository/audit.repository';
import { IDateHandler } from '../../date-handler/date.handler.interface';
import { Result } from '../../../../helpers/Result';
import { BaseDecorator } from '../../app-service/decorator/service.base.decorator';
import { IService } from '../../app-service/service.interface';

export class AuditDecorator<
	I,
	O,
> extends BaseDecorator<I, O> {

	constructor(decoratee: IService<I, O>, 
		private audit: IAuditRepository,
		private date:IDateHandler
	){
		super(decoratee);
	}

	async execute(service: I): Promise<Result<O>> {
		let r = await this.wrapper.execute(service);

		if (!r.isError()) {
			this.audit.saveLog(
				"Time: " +
					this.date.currentDate() +
					" | Service: " +
					this.WrapperName +
					" | InputData: " +
					JSON.stringify(service)+
					" | ResponseData: " +
					JSON.stringify(r.getValue)
			);
		}

		return r;
	}
}

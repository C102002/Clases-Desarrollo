import { IAuditRepository } from '../../audit-repository/audit.repository';
import { IDateHandler } from '../../date-handler/date.handler.interface';
import { Result } from '../../../../helpers/Result';
import { BaseDecorator } from '../../app-service/decorator/service.base.decorator';
import { IService } from '../../app-service/service.interface';
import { Either } from '../../../../helpers/Either';

export class AuditDecorator<
	I,
	O,
	E
> extends BaseDecorator<I,E,O> {

	constructor(decoratee: IService<I,E, O>, 
		private audit: IAuditRepository,
		private date:IDateHandler
	){
		super(decoratee);
	}

	async execute(service: I): Promise<Either<E,O>> {
		let r = await this.wrapper.execute(service);

		if (!r.isLeft()) {
			this.audit.saveLog(
				"Time: " +
					this.date.currentDate() +
					" | Service: " +
					this.WrapperName +
					" | InputData: " +
					JSON.stringify(service)+
					" | ResponseData: " +
					JSON.stringify(r.getRight)
			);
		}

		return r;
	}
}

import { IDateHandler } from '../../date-handler/date.handler.interface';
import { Result } from '../../../../helpers/Result';
import { BaseDecorator } from '../../app-service/decorator/service.base.decorator';
import { IService } from '../../app-service/service.interface';
import { Either } from '../../../../helpers/Either';
import { IAuditContext } from '../../audit-context/audit.context';
import { ICredential } from '../../credential/credential.interface';

export class AuditDecorator<
I,
E,
O,
> extends BaseDecorator<I,E,O>{

	constructor(decoratee: IService<I,E, O>, 
		private audit: IAuditContext,
		private date:IDateHandler,
		private readonly userContetx:ICredential
	){
		super(decoratee);
	}

	async execute(service: I): Promise<Either<E,O>> {
		let r = await this.wrapper.execute(service);

		if (!r.isLeft()) {
			await this.audit.saveLog({
				userId:this.userContetx.getId(),
				operation:this.WrapperName,
				data:JSON.stringify(service),
				madeAt:this.date.currentDate()
			}
			);
		}

		return r;
	}
}

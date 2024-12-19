export abstract class DomainEvent {
	private ocurredOn: Date;
	private eventName: string;

	protected constructor() {
		this.ocurredOn = new Date();
		this.eventName = this.constructor.name;
	}

	get getOcurredOn(): Date {
		return this.ocurredOn;
	}

	get getEventName(): string {
		return this.eventName;
	}

	abstract serialize(): string;
}

import { IPrototype } from "../interface/prototype.interface";

export abstract class Entity<T>{
	private id: T;

	protected constructor(id: T) {
		this.id = id;
	}
	// abstract clone(): Entity<T> //? para cuando se quiera devolver una entity

	public getId(): T {
		return this.id;
	}

	equals(entity: Entity<T>): boolean {
		return this.id === entity.id;
	}
}

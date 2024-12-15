import { IDateHandler } from "../../application/date-handler/date.handler.interface";

export class NativeDateHandler implements IDateHandler{
    currentDate(): Date{
        return new Date()
    }
}
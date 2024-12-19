import {v4 as uuidv4} from 'uuid';
import { IIdGen } from '../../application/id-gen/id-gen.interface';

export class UuidGen implements IIdGen <string> {
    async genId(): Promise<string> {
        return uuidv4()
    }

}
import { Either } from "../../helpers/Either";

export interface IApplicationService <T,L,R>{
    execute(data:T):Either<L,R>
}
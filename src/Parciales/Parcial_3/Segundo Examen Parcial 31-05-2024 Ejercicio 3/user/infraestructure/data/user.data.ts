import { User } from "../../domain/agregate/user";
import { Email } from "../../domain/value-objetcs/email";
import { Name } from "../../domain/value-objetcs/name";
import { UserId } from "../../domain/value-objetcs/user-id";
import { UserState } from "../../domain/value-objetcs/user-state";

export const UserData:User[]=[
    User.create(
        UserId.create("235ced34-e7bf-4742-8801-a235c342e5bc"),
        Email.create("prueba@gmail.com"),
        Name.create("prueba"),
        UserState.createActive()
    ),
    User.create(
        UserId.create("57aab313-a1f0-4785-8a09-e73ac7c441ff"),
        Email.create("jose@gmail.com"),
        Name.create("jose"),
        UserState.createActive()
    )
]
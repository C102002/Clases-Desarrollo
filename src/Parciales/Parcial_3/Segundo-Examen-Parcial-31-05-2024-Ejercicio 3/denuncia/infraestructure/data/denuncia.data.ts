import { PostId } from "../../../post/domain/value-objects/post-id";
import { UserId } from "../../../user/domain/value-objetcs/user-id";
import { Denuncia } from "../../domain/agregate/denuncia";
import { Category } from "../../domain/value-objects/category";
import { DenunciaId } from "../../domain/value-objects/denuncia-id";
import { Text } from "../../domain/value-objects/text";


export const DenunciaData:Denuncia[]=[
    Denuncia.create(
        DenunciaId.create("049fc775-29c9-44fe-a9e4-df7dff1ae267"),
        UserId.create("57aab313-a1f0-4785-8a09-e73ac7c441ff"),
        PostId.create("1e42e8b2-6852-4131-a941-79d4401e7465"),
        UserId.create("235ced34-e7bf-4742-8801-a235c342e5bc"),
        Text.create("texto de pueba"),
        Category.create("violencia")

    )
]
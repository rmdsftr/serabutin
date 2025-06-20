import { $Enums } from "../../../../prisma/generated/prisma";

export interface ProfileResponse{
    username:string;
    nama:string;
    email:string;
    gender:$Enums.gender_enum;
    birthdate:Date;
    foto:Buffer;
    bio:string | null;
    join:Date | null;
}
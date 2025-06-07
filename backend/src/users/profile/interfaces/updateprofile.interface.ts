import { $Enums } from "../../../../prisma/generated/prisma";

export interface UpdateProfileResponse{
    message:string;
    nama:string;
    birthdate:Date;
    bio:string | null;
    gender:$Enums.gender_enum;
}
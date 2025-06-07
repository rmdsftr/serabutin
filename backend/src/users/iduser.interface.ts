import { jwtPayLoad } from "../auth/interfaces/payload.interface";

export interface AuthenticatedRequest extends Request{
    user: jwtPayLoad;
}
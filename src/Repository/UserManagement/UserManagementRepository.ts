import { IUser } from "Model";
import { post } from "Repository";
import { Observable } from "rxjs";

export const authenticate = (email: string, password: string): Observable<IUser> => {
    return post("api.spcfy.de/v1/user/authenticate", {email, password});
}
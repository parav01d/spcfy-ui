import { IUser } from "Model"
import { Observable } from "rxjs";
import { ajax } from 'rxjs/ajax';

export * from "Repository/UserManagement/UserManagementRepository";

const request = <B,P,R>(path: string, user?: IUser, body?: B, params?: P): Observable<R> => {
    return ajax.getJSON("");
}


export const post = <B,R>(path: string, body: B, user?: IUser): Observable<R> => {
    return request(path, user, body);
}

export const get = <P,R>(path: string, params: P, user?: IUser): Observable<R> => {
    return request(path, user, undefined, params);
}

export const remove = <R>(path: string, user?: IUser): Observable<R> => {
    return request(path, user);
}

export const put = <B,R>(path: string, body: B, user?: IUser): Observable<R> => {
    return request(path, user, body);
}
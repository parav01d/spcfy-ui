import { combineEpics } from 'redux-observable';
import { userManagementEpics } from './UserManagement';
import { Observable, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export default combineEpics(
    userManagementEpics
);

export const genericRetryStrategy = (attempts: Observable<any>) => {
    return attempts.pipe(
        mergeMap((error, i) => {
            const retryAttempt = i + 1;
            if (
                retryAttempt > 3 ||
                [403, 401].find(e => e === error.status)
            ) {
                return throwError(() => new Error(error));
            }
            console.log(
                `Attempt ${retryAttempt}: retrying in ${retryAttempt * 1000}ms`
            );
            return timer(retryAttempt * 1000);
        })
    );
};
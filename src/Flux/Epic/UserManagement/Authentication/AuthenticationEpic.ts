import Action, { Epic } from 'Flux';
import { genericRetryStrategy } from 'Flux/Epic';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, retryWhen, catchError } from 'rxjs/operators';

export const authenticationEpic: Epic = (action$, _, { authenticate }) => action$.pipe(
    ofType(Action.authenticateRequest.type),
    mergeMap((action: any) => authenticate(action.payload.email, action.payload.password)
        .pipe(
            mergeMap((user) => of(Action.authenticateSuccess({ user }))),
            retryWhen(genericRetryStrategy),
            catchError(error => of(Action.authenticateFailure({ error })))
        )
    )
);
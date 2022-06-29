import Action, { Epic } from 'Flux';
import { ofType } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

export const authenticationEpic: Epic = (action$, _, { authenticate }) => action$.pipe(
    ofType(Action.authenticateRequest.type),
    mergeMap((action: any) => EMPTY)
);
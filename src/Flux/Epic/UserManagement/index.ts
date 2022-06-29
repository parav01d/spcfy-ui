
import { combineEpics } from 'redux-observable';
import { authenticationEpic } from './Authentication/AuthenticationEpic';

export const userManagementEpics = combineEpics(
    authenticationEpic
)
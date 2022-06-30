import { combineReducers } from 'redux';
import Epics from 'Flux/Epic';
import { configureStore, Action, AnyAction } from '@reduxjs/toolkit';
import { Reducer, State, Actions } from './Slice';
import { Observable } from 'rxjs';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import * as Requests from "Repository"
import { TypedUseSelectorHook, useDispatch as useRRDispatch, useSelector as useRRSelector } from 'react-redux';

export type TActions = typeof Actions;
export type TDependencies = typeof Requests;

export default Actions;

export const epicMiddleware = createEpicMiddleware<Action, Action, typeof State, TDependencies & TActions>({
    dependencies: {
        ...Actions,
        ...Requests
    },
});

export const Store = configureStore({
    reducer: combineReducers({ ...Reducer }),
    middleware: [epicMiddleware as any, logger],
    devTools: process.env.NODE_ENV === 'development',
})

export type AppDispatch = typeof Store.dispatch
export type Epic = (
    actions$: Observable<AnyAction>,
    state$: Observable<typeof State>,
    dependencies: TDependencies & TActions
) => (Observable<AnyAction>)

export const useDispatch: () => AppDispatch = useRRDispatch
export const useSelector: TypedUseSelectorHook<typeof State> = useRRSelector

epicMiddleware.run(Epics);
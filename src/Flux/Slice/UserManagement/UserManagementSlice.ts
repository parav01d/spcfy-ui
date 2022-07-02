import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { removeRequest } from 'Flux';
import { IUser } from 'Model';

export interface IUserManagementState {
    updatedAt: number,
    user?: IUser,
    openRequests: string[]
}

const initialState = {
    updatedAt: 0,
    user: undefined,
    openRequests: []
}

const reducers = {
    authenticateRequest: (state: Draft<IUserManagementState>, action: PayloadAction<{ email: string, password: string }>) => {
        state.updatedAt = Date.now();
        state.openRequests.push(action.type)
    },
    authenticateSuccess: (state: Draft<IUserManagementState>, action: PayloadAction<{ user: IUser }>) => {
        state.updatedAt = Date.now();
        state.user = action.payload.user;
        state.openRequests = removeRequest(state, action);
    },
    authenticateFailure: (state: Draft<IUserManagementState>, action: PayloadAction<{ error: Error }>) => {
        state.updatedAt = Date.now();
        state.openRequests = removeRequest(state, action);
    },
    registerRequest: (state: Draft<IUserManagementState>, action: PayloadAction<{ firstName: string, lastName: string, email: string, company: string }>) => {
        state.updatedAt = Date.now();
        state.openRequests.push(action.type);
    },
    registerSuccess: (state: Draft<IUserManagementState>, action: PayloadAction<{ user: IUser }>) => {
        state.updatedAt = Date.now();
        state.user = action.payload.user;
        state.openRequests = removeRequest(state, action);
    },
    registerFailure: (state: Draft<IUserManagementState>, action: PayloadAction<{ error: Error }>) => {
        state.updatedAt = Date.now();
        state.openRequests = removeRequest(state, action);
    },

}

export const userManagementSlice = createSlice<IUserManagementState, typeof reducers, 'userManagement'>({
    name: 'userManagement',
    initialState,
    reducers
})
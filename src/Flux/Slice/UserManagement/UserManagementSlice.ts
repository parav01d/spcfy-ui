import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
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
        state.openRequests = state.openRequests.filter((type) => type === action.type.replace("Success", "Request"));
    },
    authenticateFailure: (state: Draft<IUserManagementState>, action: PayloadAction<{ error: Error }>) => {
        state.updatedAt = Date.now();
        state.openRequests = state.openRequests.filter((type) => type === action.type.replace("Success", "Request"));
    },
}

export const userManagementSlice = createSlice<IUserManagementState, typeof reducers, 'userManagement'>({
    name: 'userManagement',
    initialState,
    reducers
})
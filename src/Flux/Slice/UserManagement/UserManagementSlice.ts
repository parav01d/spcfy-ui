import { createSlice, Draft, PayloadAction }          from '@reduxjs/toolkit';
import { IUser } from 'Model';

export interface IUserManagementState {
    updatedAt: number,
}

const initialState = {
    updatedAt: 0,
}

const reducers = {
    authenticateRequest: (state: Draft<IUserManagementState>, action: PayloadAction<{ email: string, password: string }>) => {
        state.updatedAt = Date.now();
    },
    authenticateSuccess: (state: Draft<IUserManagementState>, action: PayloadAction<{ user: IUser }>) => {
        state.updatedAt = Date.now();
    },
    authenticateFailure: (state: Draft<IUserManagementState>, action: PayloadAction<{ error: Error }>) => {
        state.updatedAt = Date.now();
    },
}

export const userManagementSlice = createSlice<IUserManagementState, typeof reducers, 'userManagement'>({
    name: 'userManagement',
    initialState,
    reducers
})
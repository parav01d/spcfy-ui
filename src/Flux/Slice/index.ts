import { userManagementSlice } from "./UserManagement/UserManagementSlice";

export const Actions = {
    ...userManagementSlice.actions
}

export const State = {
    [userManagementSlice.name]: userManagementSlice.getInitialState()
}

export const Reducer = {
    [userManagementSlice.name]: userManagementSlice.reducer
}
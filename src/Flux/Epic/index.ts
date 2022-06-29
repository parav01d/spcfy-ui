import { combineEpics }       from 'redux-observable';
import { userManagementEpics }   from './UserManagement';

export default combineEpics(
    userManagementEpics
);
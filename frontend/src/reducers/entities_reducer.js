import { combineReducers } from 'redux';

import users from './entities/users_reducer';
import auth from './entities/auth_reducer';

export default combineReducers({
    users,
    auth
});
import { combineReducers } from 'redux';

import auth from './auth';
import resources from './resources';

export default combineReducers({auth, resources});
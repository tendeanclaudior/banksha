import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {userReducer} from './user';
import {bankReducer} from './bank';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  userReducer,
  bankReducer,
});

export default reducer;

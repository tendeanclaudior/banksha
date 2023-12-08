import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {userReducer} from './user';
import {bankReducer} from './bank';
import {providerReducer} from './provider';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  userReducer,
  bankReducer,
  providerReducer,
});

export default reducer;

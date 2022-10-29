import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

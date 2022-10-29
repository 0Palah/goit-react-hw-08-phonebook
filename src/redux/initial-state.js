import { authInitialState } from './auth/auth-slice';
import { contactsInitialState } from './contacts/initiale-state.contacts';
import { filterInitialState } from './filter/initiale-state.filter';

export const initialState = {
  contacts: contactsInitialState,
  filter: filterInitialState,
  auth: authInitialState,
};

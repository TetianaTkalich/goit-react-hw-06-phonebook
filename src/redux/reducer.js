import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './Filter/filterSlice';
import { contactsReducer } from './Contacts/contactsSlice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
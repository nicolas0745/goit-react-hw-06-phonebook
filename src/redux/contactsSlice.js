import { createSlice } from '@reduxjs/toolkit';

const contacts = JSON.parse(localStorage.getItem('contacts')) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialContactsState = {
  contactsList: contacts,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare({ id, name, number }) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    searchContact(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      const index = state.contactsList.findIndex(e => e.id === action.payload);
      state.contactsList.splice(index, 1);
    },
  },
});

export const { addContact, searchContact, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

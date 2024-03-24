import { ContactForm } from '../contact-form/ContactForm';
import { ContactList } from '../contact-list/ContactList';
import { Filter } from '../filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.div_container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/Contacts/contactsSlice';
import { ElementContacts } from 'components/ElementContacts/ElementContacts';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact({ id: contactId }));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ElementContacts
            contacts={contact}
            onDeleteContact={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
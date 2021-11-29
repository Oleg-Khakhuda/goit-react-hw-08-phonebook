import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import operations from '../../redux/contacts/operations';
import s from './ContactsList.module.css';
import Button from 'react-bootstrap/Button';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const onDeleteContacts = e => dispatch(operations.deleteContact(e.target.id));

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          {contact.name}: {contact.phone}
          <Button
            variant='dark'  
            type="button"
            id={contact.id}
            onClick={onDeleteContacts}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

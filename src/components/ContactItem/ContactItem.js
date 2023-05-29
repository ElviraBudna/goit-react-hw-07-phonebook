import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, Container, Text } from './ContactItem.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactItem() {
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const searchContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const dispatch = useDispatch();
  return (
    <Container>
      {filter === ''
        ? contacts.map(contact => (
            <li key={contact.id}>
              <Text>
                {contact.name}: <span>{contact.number}</span>
              </Text>
              <DeleteButton
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </DeleteButton>
            </li>
          ))
        : searchContact.map(contact => (
            <li key={contact.id}>
              <Text>
                {contact.name}: <span>{contact.number}</span>
              </Text>
              <DeleteButton
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </DeleteButton>
            </li>
          ))}
    </Container>
  );
}

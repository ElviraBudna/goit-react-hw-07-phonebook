import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  return (
    <List>
      <ContactItem contact={contacts} />
    </List>
  );
}

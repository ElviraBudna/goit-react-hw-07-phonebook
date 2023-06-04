import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError, getVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && !error && <b>Loading...</b>}
      <ContactItem contact={visibleContacts} />
    </List>
  );
}

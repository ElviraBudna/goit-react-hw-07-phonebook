import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, Container, Text } from './ContactItem.styled';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getIsLoading, getError, getVisibleContacts } from 'redux/selectors';

export default function ContactItem({ contact }) {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => dispatch(deleteContact(contactId));
  toast.error('One contact has been deleted');

  return (
    <Container>
      {isLoading && !error && <b>Loading...</b>}
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Text>
            {name}: <span>{number}</span>
          </Text>

          <DeleteButton type="button" onClick={() => handleDelete(id)}>
            Delete
          </DeleteButton>
        </li>
      ))}
    </Container>
  );
}

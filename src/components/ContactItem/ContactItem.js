import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { DeleteButton, Container, Text } from './ContactItem.styled';
// import { useEffect } from 'react';
import { deleteContact } from 'redux/operations';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const handleDelete = contactId =>
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(originalPromiseResult => {
        // handle result here
        toast.success(`Contact delete successfully`);
      })
      .catch(rejectedValueOrSerializedError => {
        // handle error here
        toast.error(`Error`);
      });

  return (
    <Container>
      {contact.map(({ id, name, number }) => (
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

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  TitleForm,
  InputBox,
  ButtonForm,
  Input,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts!`)
      : dispatch(addContacts({ name, number, id: nanoid() }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <TitleForm>Phonebook</TitleForm>
      <InputBox>
        <Label htmlFor="name">Name</Label>
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="number">Number</Label>
        <Input
          onChange={handleInputChange}
          type="tel"
          name="number"
          placeholder="Enter number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputBox>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
}

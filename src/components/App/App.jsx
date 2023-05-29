import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { AppContainer, ContactsContainer, Title } from './App.styled';

export function App() {
  return (
    <AppContainer>
      <ContactForm />
      <ContactsContainer>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </ContactsContainer>
    </AppContainer>
  );
}

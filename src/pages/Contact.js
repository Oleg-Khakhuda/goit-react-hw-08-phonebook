import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from "../components/ContactsList/ContactsList";
import Filter from "../components/Filter/Filter";

export function Contact() {
  return (
    <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </>
    );
}
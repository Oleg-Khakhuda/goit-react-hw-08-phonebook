import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from "../components/ContactsList/ContactsList";
import Filter from "../components/Filter/Filter";

export function Contact() {
  return (
    <>
        <ContactForm />
        <Filter />
        <ContactsList />
      </>
    );
}
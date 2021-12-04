import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from "../components/ContactsList/ContactsList";
import Filter from "../components/Filter/Filter";
import { Container, Row, Col } from 'react-bootstrap';

export function Contact() {
  return (
    <>
        {/* <ContactForm />
        <Filter />
        <ContactsList /> */}
      <Container>
        <Row >
          <Col>
            <ContactForm />
            <Filter />
          </Col>
          <Col className='mt-5'>
            <ContactsList />
          </Col>
        </Row>
      </Container>
    </>
    );
}
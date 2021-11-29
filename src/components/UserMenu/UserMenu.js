import { useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunks';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import s from '../UserMenu/UserMenu.module.css'

export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector((state => state.auth.user.name));
    
    const handleClick = () => dispatch(logoutThunk());
    
    return (
        <div>
            <Navbar bg="dark" variant={'dark'} expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />        
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/contacts">Phonebook</Nav.Link>
                    </Nav>
                    <div>
                        <span className={s.Name}>Hi {name}</span>
                        <Button
                            variant={'dark'}
                            onClick={handleClick}
                            type="button">
                            Log Out
                        </Button>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
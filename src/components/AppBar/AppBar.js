import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';

export function AppBar() {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <header>
      <div>
        <NavLink to="/contacts">
          Phonebook
        </NavLink>
      </div>

      {isAuth ? <UserMenu /> : <Navigation />}
    </header>
  );
}
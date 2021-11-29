import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';

export function AppBar() {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
      <div>
        {isAuth ? <UserMenu /> : <Navigation />}
      </div>
  );
}
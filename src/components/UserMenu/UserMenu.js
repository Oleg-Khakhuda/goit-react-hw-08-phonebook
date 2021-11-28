import { useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunks';
import { useDispatch } from 'react-redux';

export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector((state => state.auth.user.name));
    
    const handleClick = () => dispatch(logoutThunk());
    
    return (
        <div>
            <span>Hi {name}</span>
            <button
                onClick={handleClick}
                type="button">
                Logout
            </button>
        </div>
    )
}
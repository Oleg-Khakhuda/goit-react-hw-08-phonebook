import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/auth/thunks";
import { Navigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    const handleChange = (e) => {
        switch (e.target.name) {
        case 'email':
            setEmail(e.target.value);
            break;
        case 'password':
            setPassword(e.target.value);
            break;
        default:
            alert('Check input name please')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        dispatch(loginThunk(user));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('')
    }

    return (
        <>
            <h2>Login form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='email'
                    value={email}
                    placeholder='email'
                    onChange={handleChange}>
                </input>
                <br />
                <input
                    type='text'
                    name='password'
                    value={password}
                    placeholder='password'
                    onChange={handleChange}>
                </input>
                <br />
                <button type='submit'>Login</button>
            </form>
            { isAuth && <Navigate to="/contacts" /> }
        </>
    )
}
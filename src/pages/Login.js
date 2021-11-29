import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/auth/thunks";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css";
import Button from 'react-bootstrap/Button';

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
            <h2 className={s.title}>Login form</h2>
            <form onSubmit={handleSubmit} className={s.form}>
                <label className={s.label}>Email</label>
                <input
                    className={s.input}
                    type='text'
                    name='email'
                    value={email}
                    placeholder='email'
                    onChange={handleChange}>
                </input>
               
                <label className={s.label}>Password</label>
                <input
                    className={s.input}
                    type='password'
                    name='password'
                    value={password}
                    placeholder='password'
                    onChange={handleChange}>
                </input>
                <br />
                <Button className={s.button} variant='dark' type='submit'>Login</Button>
            </form>
            { isAuth && <Navigate to="/contacts" /> }
        </>
    )
}
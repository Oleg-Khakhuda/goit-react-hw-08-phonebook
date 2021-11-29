import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../redux/auth/thunks";
import { Navigate } from "react-router-dom";
import s from './Register.module.css';
import Button from 'react-bootstrap/Button';

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
            setName(e.target.value);
            break;
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
        const user = { name, email, password };
        dispatch(registerThunk(user));
        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('')
    }

    return (
        <>
            <h2 className={s.title}>Register form</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>Name</label>
                <input
                    className={s.input} 
                    type='text'
                    name='name'
                    value={name}
                    placeholder='name'
                    onChange={handleChange}>
                </input>
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
                
                <Button className={s.button} variant='dark' type='submit'>Register</Button>
            </form>
            { isAuth && <Navigate to="/contacts" /> }
        </>
    )
}
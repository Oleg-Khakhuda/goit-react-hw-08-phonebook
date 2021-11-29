import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_USER_URL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogout = '/users/logout';
const userCurrent = '/users/current';

export const registerThunk = createAsyncThunk(
    'user/register',
    async (user, { rejectWithValue }) => {
        try {
            const response = await fetch(BASE_USER_URL + userRegister, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.status === 200) {
                const data = await response.json();
                return data
            } else {
                throw response;
            }
        } catch (error) {
            return rejectWithValue({ error: error.message })
        }
    });

export const loginThunk = createAsyncThunk(
    'user/login',
    async (user, { rejectWithValue }) => {
        try {
            const response = await fetch(BASE_USER_URL + userLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.status === 200) {
                const data = await response.json();
                return data
                } else {
                throw response;
                }
        } catch (error) {
            return rejectWithValue({ error: error.message })
            }
    });

export const currentThunk = createAsyncThunk(
    'user/current',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const token = state.auth.token;
        
        if (!token) return;
        try {
            const response = await fetch(BASE_USER_URL + userCurrent, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            rejectWithValue({ error: error.message })
        }
    });
    
export const logoutThunk = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const token = state.auth.token;
        try {
            const response = await fetch(BASE_USER_URL + userLogout, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            rejectWithValue({ error: error.message })
        }
    });     
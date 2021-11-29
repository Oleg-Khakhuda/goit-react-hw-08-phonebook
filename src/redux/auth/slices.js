import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, currentThunk, logoutThunk } from "./thunks";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: '', email: '' },
        token: '',
        error: null,
        isLoading: false,
        isAuth: false,
    },
    
    extraReducers: {
        [registerThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [registerThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            }
        },
        [registerThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        },

        [loginThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [loginThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            }
        },
        [loginThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.error,
                isAuth: false,
            }
        },

        [currentThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [currentThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        },
        [currentThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isAuth: false,
            }
        },
        [logoutThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [logoutThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: { name: '', email: '' },
                token: '',
                isAuth: false,
            }
        },
        [logoutThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        },
    }
});

export default authSlice.reducer;


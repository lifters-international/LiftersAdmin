import { AuthState } from "./index.types";

import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
    isAuth: false,
    token: localStorage.getItem("token") || "",
}

export const Auth = createSlice({
    name: "@auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            return { 
                ...state,
                isAuth: action.payload,
            }
        },

        setToken: (state, action: PayloadAction<string>) => {
            return { ...state, token: action.payload }
        },

        logout: (state) => {
            return {
                isAuth: false,
                token: "",
            }
        }

    }

});

export const { setAuth, setToken, logout } = Auth.actions;
export default Auth.reducer;
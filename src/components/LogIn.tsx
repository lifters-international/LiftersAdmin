import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppLayout } from './AppLayout';
import { AppLoading } from './AppLoading';
import { LabelInputDiv } from "./LabelInputDiv";
import { RegisterButton } from "./RegisterButton";

import { fetchGraphQl } from '../utils';

import { adminLogin } from "../graphQlQuieries";

import { useAppDispatch } from "../store";
import { setToken } from "../store/features";

export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ loadingLogin, setLoadingLogin ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (
            email.length <= 0 ||
            password.length <= 0
        ) return alert("Please fill all the fields.")

        setLoadingLogin(true);

        const response = await fetchGraphQl(adminLogin, {
            email,
            password
        });

        setLoadingLogin(false);

        if (response.errors) return alert("Invalid email or password");

        localStorage.setItem("token", response.data.AdminLogIn.token);
        dispatch(setToken(response.data.AdminLogIn.token));
        alert("User logged in successfully");
        navigate("/");
    }

    if (loadingLogin) return <AppLoading />
    
    return (
        <AppLayout>
            <div className="FormContainer">
                <h1>Login To Your Lifter Account</h1>
                <div>
                    <LabelInputDiv>
                        <label htmlFor="email">Email Address</label>
                        <input placeholder="Admin Email Address" title="email" type="email-address" onChange={( input ) => setEmail(input.target.value)}/>
                    </LabelInputDiv>

                    <LabelInputDiv>
                        <label htmlFor="password">Pasword</label>
                        <input placeholder="Admin Password" title="password" type="password" onChange={( input ) => setPassword(input.target.value)}/>
                    </LabelInputDiv>
                </div>
                <RegisterButton title="LogIn" onClick={handleSubmit} />
            </div>
        </AppLayout>
    )
}
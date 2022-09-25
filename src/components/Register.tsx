import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppLayout } from './AppLayout';
import { AppLoading } from './AppLoading';
import { LabelInputDiv } from "./LabelInputDiv";
import { RegisterButton } from "./RegisterButton";

import { useGetAdminRoles } from '../hooks';

import { fetchGraphQl } from '../utils';

import { CreateAdminWithApiKey } from "../graphQlQuieries";

export const Register: React.FC = () => {
    const { adminRoles, loading, error } = useGetAdminRoles();
    const [currentAdminRoleSelection, setCurrentAdminRoleSelection] = useState(0);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ apiKey, setApiKey ] = useState("");
    const navigate = useNavigate();

    const [ loadingRegister, setLoadingRegister ] = useState(false);

    const handleSubmit = async () => {
        if (
            name.length <= 0 ||
            email.length <= 0 ||
            password.length <= 0 ||
            apiKey.length <= 0
        ) return alert("Please fill all the fields");

        setLoadingRegister(true);
        const response = await fetchGraphQl(CreateAdminWithApiKey, {
            adminUserInput: {
                name,
                email,
                password,
                status: 1,
                role: adminRoles[currentAdminRoleSelection]
            },
            apiKey
        });
        setLoadingRegister(false);

        if (response.errors) return alert(response.errors[0].message);

        alert("Admin created successfully");
        navigate("/login");
    }


    if (loading || loadingRegister ) return <AppLoading />

    if (error) return (
        <AppLayout>
            <h1> There was an Error, can you please try again. </h1>
        </AppLayout>
    );

    return (
        <AppLayout>
            <div className="FormContainer">
                <h1>Register a Lifter Admin</h1>
                <div>
                    <LabelInputDiv>
                        <label htmlFor="password">Name</label>
                        <input placeholder="Admin Name" title="name" onChange={( input ) => setName(input.target.value)}/>
                    </LabelInputDiv>

                    <LabelInputDiv>
                        <label htmlFor="email">Email Address</label>
                        <input placeholder="Admin Email Address" title="email" type="email-address" onChange={( input ) => setEmail(input.target.value)}/>
                    </LabelInputDiv>

                    <LabelInputDiv>
                        <label htmlFor="password">Pasword</label>
                        <input placeholder="Admin Password" title="password" type="password" onChange={( input ) => setPassword(input.target.value)}/>
                    </LabelInputDiv>

                    <LabelInputDiv>
                        <label htmlFor="Admin Role">New Admin Role</label>
                        <select
                            title="Admin Role"
                            value={currentAdminRoleSelection}
                            onChange={(e) => setCurrentAdminRoleSelection(parseInt(e.target.value))}
                        >
                            {
                                adminRoles.map((adminRole, index) => (
                                    <option
                                        key={`AdminRole-${adminRole}`}
                                        value={index}
                                    >
                                        {adminRole}
                                    </option>
                                ))
                            }
                        </select>
                    </LabelInputDiv>

                    <LabelInputDiv>
                        <label htmlFor="apiKey">API KEY</label>
                        <input placeholder="***************" title="apiKey" type="password" onChange={( input ) => setApiKey(input.target.value)}/>
                    </LabelInputDiv>
                </div>

                <RegisterButton title="Register" onClick={handleSubmit} />
            </div>
        </AppLayout>
    )
}
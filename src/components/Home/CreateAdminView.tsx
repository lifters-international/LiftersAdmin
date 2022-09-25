import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LabelInputDiv } from "../LabelInputDiv";
import { RegisterButton } from "../RegisterButton";

import { useGetAdminRoles } from '../../hooks';

import { fetchGraphQl } from '../../utils';

import { CreateAdminWithOutApiKey } from "../../graphQlQuieries";

import { AppLoading } from '../AppLoading';


export const CreateAdminView: React.FC = () => {
    const { token } = useSelector((state: any) => state.Auth);
    const { adminRoles, loading, error } = useGetAdminRoles();
    const [currentAdminRoleSelection, setCurrentAdminRoleSelection] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [customLoading, setCustomLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (
            name.length <= 0 ||
            email.length <= 0 ||
            password.length <= 0
        ) return alert("Please fill all the fields");

        setCustomLoading(true);
        const response = await fetchGraphQl(CreateAdminWithOutApiKey, {
            adminUserInput: {
                name,
                email,
                password,
                status: 1,
                role: adminRoles[currentAdminRoleSelection]
            },
            token
        });
        setCustomLoading(false);

        if (response.errors) return alert(response.errors[0].message);

        else {
            alert("Admin created successfully");
            navigate(0)
        }
    }

    if (loading || customLoading) return <AppLoading />

    if (error) return <h1> There was an Error, can you please try again. </h1>

    return (
        <div className="FormContainer">
            <h1>Create Admin</h1>

            <LabelInputDiv>
                <label htmlFor="name">Name</label>
                <input placeholder="Admin Name" title="name" onChange={( input ) => setName(input.target.value)}/>
            </LabelInputDiv>

            <LabelInputDiv>
                <label htmlFor="email">Email</label>
                <input placeholder="Admin Email" title="email" type="email-address" onChange={( input ) => setEmail(input.target.value)}/>
            </LabelInputDiv>

            <LabelInputDiv>
                <label htmlFor="password">Password</label>
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

            <RegisterButton title="Register" onClick={handleSubmit} />
        </div>
    );
}
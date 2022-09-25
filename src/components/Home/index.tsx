import React from "react";

import { LoggedInLayout } from "../LoggedInLayout";

export const Home: React.FC = () => {
    return (
        <LoggedInLayout>
            <div>
                <h1>Home</h1>

                <div>
                    <button type="button">Create Admin</button>
                    <button type="button">Food</button>
                    <button  type="button">LogOut</button>
                </div>
            </div>
        </LoggedInLayout>
    );
}
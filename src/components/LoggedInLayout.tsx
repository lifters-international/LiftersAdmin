import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useVerifyToken } from "../hooks";
import { AppLayout } from "./AppLayout";
import { AppLoading } from "./AppLoading";
import { Navigate } from "react-router-dom";

interface LogInRequiredProps { 
    children: React.ReactNode | React.ReactNode[];
}

export const LoggedInLayout: FC<LogInRequiredProps> = ({ children }) => {
    const { token } = useSelector((state: any) => state.Auth);
    const { loading, error, loggedIn } = useVerifyToken(token);

    if (loading) <AppLoading />;

    if ( error || !loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}
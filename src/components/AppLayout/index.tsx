import React, { FC } from "react";

import "./index.css";

interface AppLayoutProps {
    children?: React.ReactNode | React.ReactNode[];
} 

export const AppLayout: FC<AppLayoutProps> = ( { children } ) => {
    return (
        <div className="AppLayout">
            {children}
        </div>
    );
} 
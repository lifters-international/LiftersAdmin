import React, { useState } from "react";

import { LoggedInLayout } from "../LoggedInLayout";

import { CreateAdminView } from "./CreateAdminView";
import { CreateFoodView } from "./CreateFoodView";
import { CreateAnnoucement } from "./CreateAnnoucement";
import { HomeView } from "./HomeView";

import "./index.css"

export const Home: React.FC = () => {
    const [ currentView, setCurrentView ] = useState("Home");

    return (
        <LoggedInLayout>
            <div className="header">
                <h1 className="header-title" onClick={() => setCurrentView("Home")}>Home</h1>

                <div className="header-content">
                    <button type="button" className="header-content-button" onClick={() => setCurrentView("Create Admin")}>
                        Create Admin
                    </button>
                    <button type="button" className="header-content-button" onClick={() => setCurrentView("Create Food")}>
                        Create Food
                    </button>
                    <button type="button" className="header-content-button" onClick={() => setCurrentView("Create Annoucement")}>
                        Create Annoucement
                    </button>
                    <button  type="button" className="header-content-button">
                        LogOut
                    </button>
                </div>
            </div>

            {
                currentView === "Home" ? (
                    <HomeView />
                ) : currentView === "Create Admin" ? (
                    <CreateAdminView />
                ) : currentView === "Create Food" ? (
                    <CreateFoodView />
                ) : currentView === "Create Annoucement" ? (
                    <CreateAnnoucement token={localStorage.getItem("token") || ""}/>
                ) : null

            }
        </LoggedInLayout>
    );
}
import React, { FC } from "react";

import Loading from "../assests/loading.json";

import Lottie from "react-lottie-player";

import { AppLayout } from "./AppLayout";

export const AppLoading: FC = () => {
    
        return (
            <AppLayout>
                <div className="app-loading">
                    <Lottie
                        loop
                        animationData={Loading}
                        play
                        style={{ position: "fixed", bottom: "-12%", left: "20%" }}
                    ></Lottie>
                </div>
            </AppLayout>
        )
}
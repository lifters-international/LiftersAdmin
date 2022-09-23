import React, { FC } from "react";

import notFound from "../../assests/404.json";

import Lottie from "react-lottie-player";

import { AppLayout } from "../AppLayout";

import "./index.css";

export const NotFound404: FC = () => {

    return (
        <AppLayout>
            <div className="Frame404">
                <Lottie
                    loop
                    animationData={notFound}
                    play
                ></Lottie>
            </div>
            <div className="div404">Sorry the page you are looking for does not exist</div>
        </AppLayout>
    )
} 
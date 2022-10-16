import React from 'react';

import { useGetFood, useGetAnnoucements } from "../../hooks";
import { AppLoading } from '../AppLoading';

import FoodDetails from "./FoodDetails";
import AnnoucementView from "../Annoucement/";

export const HomeView: React.FC = () => {
    const { foods, loading, error } = useGetFood();
    const { annoucements, loading: annoucementsLoading, error: annoucementsError } = useGetAnnoucements();

    if ( loading || annoucementsLoading ) return <AppLoading />;

    if ( error || annoucementsError ) return <h1>error</h1>;

    return (
        <>
            <div className="HomeContainer">
                <h1>Food</h1>
                <div className="homeFood">
                    {
                        foods.map( food => (
                            <div key={ `food-${food.id}` } className="FoodView">
                                <FoodDetails {...food} token={localStorage.getItem("token") || ""}/>    
                            </div>
                        ) )
                    }
                </div>
            </div>

            <div className="HomeContainer">
                <h1>Annoucements</h1>
                <div className="homeAnnoucements">
                    {
                        annoucements.map( annoucement => (
                            <div key={ `annoucement-${annoucement.id}` }>
                                <AnnoucementView {...annoucement} editable={true} token={localStorage.getItem("token")} />
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    );
}

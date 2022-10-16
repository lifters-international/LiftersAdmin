import React from 'react';
import { useSelector } from "react-redux";
import { useGetFood } from "../../hooks";
import { AppLoading } from '../AppLoading';

import FoodDetails from "./FoodDetails";

export const HomeView: React.FC = () => {
    const { token } = useSelector((state: any) => state.Auth);
    const { foods, loading, error } = useGetFood();

    if ( loading ) return <AppLoading />;

    if ( error ) return <h1>error</h1>;

    return (
        <>
            <div className="HomeContainer">
                <h1 className="Header">Food</h1>
                <div className="homeFood">
                    {
                        foods.map( food => (
                            <div key={ `food-${food.id}` } className="FoodView">
                                <FoodDetails {...food} token={token}/>    
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    );
}

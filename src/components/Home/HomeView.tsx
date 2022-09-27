import React from 'react';

import { useGetFood } from "../../hooks";
import { AppLoading } from '../AppLoading';

import FoodDetails from "./FoodDetails";

export const HomeView: React.FC = () => {
    const { foods, loading, error } = useGetFood();

    if ( loading ) return <AppLoading />;

    if ( error ) return <h1>error</h1>;

    return (
        <div className="home">
            {
                foods.map( food => (
                    <div key={ `food-${food.id}` } className="FoodView">
                        <FoodDetails {...food} />    
                    </div>
                ) )
            }
        </div>
    );
}
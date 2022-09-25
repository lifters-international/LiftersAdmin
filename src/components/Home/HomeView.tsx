import React from 'react';

import { useGetFood } from "../../hooks";
import { AppLoading } from '../AppLoading';

export const HomeView: React.FC = () => {
    const { foods, loading, error } = useGetFood();

    if ( loading ) return <AppLoading />;

    if ( error ) return <h1>error</h1>;

    return (
        <div className="home">
            {
                foods.map( food => (
                    <div key={ `food-${food.id}` } className="FoodView">
                        <h1>{ food.name }</h1>
                        <p>Calories: {food.calories}</p>
                        <p>Serving Size: {food.servingSize.measurment}{food.servingSize.unit}</p>
                        <p>Protien: {food.nutritionFacts.protein.measurment}{food.nutritionFacts.protein.unit}</p>
                    </div>
                ) )
            }
        </div>
    );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteFood as deleteFoodQuery } from "../graphQlQuieries";

import { fetchGraphQl, delay } from "../utils";

export type DeleteFoodState = {
    deleteFood: ( foodId : string ) => Promise < void > ;
    statement: string;
}

export const useDeleteFood = ( token : string ): DeleteFoodState => {
    const [ statement, SetStatement ] = useState("Delete Food");
    const navigation = useNavigate();

    const deleteFood = async ( foodId : string ) => {
        if ( token == null ) return;

        SetStatement("Deleting Food");

        const response = await fetchGraphQl(deleteFoodQuery, { token, foodId });

        if ( response.errors ) SetStatement("Problem Deleting Food, please try again later.")
        else SetStatement("Deleted Food");

        await delay(2000);

        SetStatement("Delete Food");

        navigation(0);
    }

    return { deleteFood, statement }
}
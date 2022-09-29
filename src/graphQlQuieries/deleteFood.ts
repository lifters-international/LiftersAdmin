export const deleteFood = `
    mutation DeleteFood($token : String!, $foodId : String!) {
        deleteFood(token: $token, foodId: $foodId)
    }
`
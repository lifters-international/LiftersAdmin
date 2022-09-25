export const AdminCreateFood = `
    mutation AdminCreateFood($foodInput: FoodInformationInput!, $token: String!) {
        AdminCreateFood(foodInput: $foodInput, token: $token) {
            id

            name

            servingSize {
                measurment
                unit
            }

            calories

            nutritionFacts {
                totalFat {
                    measurment
                    unit
                }

                saturatedFat {
                    measurment
                    unit
                }

                transFat {
                    measurment
                    unit
                }

                cholesterol {
                    measurment
                    unit
                }

                sodium {
                    measurment
                    unit
                }

                totalCarbohydrate {
                    measurment
                    unit
                }

                dietaryFiber {
                    measurment
                    unit
                }

                totalSugars {
                    measurment
                    unit
                }

                addedSugars {
                    measurment
                    unit
                }

                protein {
                    measurment
                    unit
                }

                vitaminD {
                    measurment
                    unit
                }

                calcium {
                    measurment
                    unit
                }

                iron {
                    measurment
                    unit
                }

                potassium {
                    measurment
                    unit
                }
            }
        }
    }
`
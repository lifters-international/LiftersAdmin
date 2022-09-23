export const isLoggedInMutation = `
    mutation IsLoggedIn($token: String!) {
        isAdminLoggedIn(token: $token)
    }
`
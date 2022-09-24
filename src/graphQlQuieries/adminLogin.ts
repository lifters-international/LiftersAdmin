export const adminLogin = `
    mutation AdminLogIn($password: String!, $email: String!) {
        AdminLogIn(password: $password, email: $email) {
            token
        }
    }
`
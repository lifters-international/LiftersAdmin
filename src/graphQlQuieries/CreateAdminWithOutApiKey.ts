export const CreateAdminWithOutApiKey = `
    mutation CreateAdmin($adminUserInput: CreateAdminInput!, $token: String!) {
        createAdmin(adminUserInput: $adminUserInput, token: $token) {
            id
            name
            email
            role
            status
            created_at
            updated_at
            deleted_at
        }
    }
`
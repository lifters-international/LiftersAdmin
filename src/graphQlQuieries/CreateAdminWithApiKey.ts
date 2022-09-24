export const CreateAdminWithApiKey = `
    mutation CreateAdminWithApiKey($adminUserInput: CreateAdminInput!, $apiKey: String!) {
        createAdminWithApiKey(adminUserInput: $adminUserInput, api_key: $apiKey) {
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
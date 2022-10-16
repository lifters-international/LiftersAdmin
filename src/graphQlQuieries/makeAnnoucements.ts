export const makeAnnoucements = `
    mutation MakeAnnoucements($sendEmail: Boolean!, $annoucement: String!, $token: String!) {
        makeAnnoucements(sendEmail: $sendEmail, annoucement: $annoucement, token: $token) {
            id
            annoucement
            createdAt
            updateAt
        }
    }
`;
export const editAnnoucement = `
    mutation EditAnnoucement($annoucement: String!, $editAnnoucementId: String!, $token: String!) {
        editAnnoucement(annoucement: $annoucement, id: $editAnnoucementId, token: $token) {
            id
            annoucement
            createdAt
            updateAt
        }
    }
`;
export const getApiUrl = () => {
    return `${getServerUrl()}graphql`;
}

export const getWSApiUrl = () => {
    return  `wss://${process.env.NODE_ENV === "production" ? "lifters-server.herokuapp.com" : "localhost:5000"}/graphql`;
}

export const getImageUploadApi = () => {
    return `${getServerUrl()}upload/image`;
}

export const getServerUrl = () => {
    return process.env.NODE_ENV === "production" ? "https://lifters-server.herokuapp.com/" : "http://localhost:5000/";
}
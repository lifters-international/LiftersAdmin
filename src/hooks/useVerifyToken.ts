import React, { useState, useEffect } from 'react';

import { isLoggedInMutation } from '../graphQlQuieries';

import { fetchGraphQl } from '../utils';

export type VerifyTokenState = {
    loading: boolean;
    error: boolean;
    loggedIn: boolean;
}

export const useVerifyToken = (token: string) => {

    const [verifyTokenState, setVerifyTokenState] = useState<VerifyTokenState>({ loading: true, error: false, loggedIn: false });

    useEffect(() => {
        const verifyToken = async () => {
            const resp = await fetchGraphQl(isLoggedInMutation, { token });

            if (resp.data) {
                setVerifyTokenState({ loading: false, error: false, loggedIn: resp.data.isAdminLoggedIn });
            } else {
                setVerifyTokenState({ loading: false, error: true, loggedIn: false });
            }

        }
        verifyToken();
    }, [token]);

    return verifyTokenState;
}
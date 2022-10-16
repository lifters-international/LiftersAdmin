import React, { useState, useEffect } from 'react';

import { GetAnnoucements } from '../graphQlQuieries';

import { fetchGraphQl, Annoucement } from '../utils';

export type GetAnnoucementsState = {
    loading: boolean;
    error: boolean;
    annoucements: Annoucement[];
}

export const useGetAnnoucements = () => {

    const [getAnnoucementsState, setGetAnnoucementsState] = useState<GetAnnoucementsState>({ loading: true, error: false, annoucements: [] });

    useEffect(() => {
        const getAnnoucements = async () => {
            const resp = await fetchGraphQl(GetAnnoucements, {});

            if (resp.data) {
                setGetAnnoucementsState({ loading: false, error: false, annoucements: resp.data.GetAnnoucements });
            } else {
                setGetAnnoucementsState({ loading: false, error: true, annoucements: [] });
            }

        }
        getAnnoucements();
    }, []);
    return getAnnoucementsState;
}
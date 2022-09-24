import React, { useState, useEffect } from 'react';

import { getAdminRoles } from '../graphQlQuieries';

import { fetchGraphQl } from '../utils';

export type GetAdminRolesState = {
    loading: boolean;
    error: boolean;
    adminRoles: string[];
}

export const useGetAdminRoles = () => {

    const [getAdminRolesState, setGetAdminRolesState] = useState<GetAdminRolesState>({ loading: true, error: false, adminRoles: [] });

    useEffect(() => {
        const getAdminRole = async () => {
            const resp = await fetchGraphQl(getAdminRoles, {});

            if (resp.data) {
                setGetAdminRolesState({ loading: false, error: false, adminRoles: resp.data.getAdminRoles });
            } else {
                setGetAdminRolesState({ loading: false, error: true, adminRoles: [] });
            }

        }
        getAdminRole();
    }, []);
    return getAdminRolesState;
}
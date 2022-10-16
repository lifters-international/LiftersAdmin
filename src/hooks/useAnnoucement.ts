import React from 'react';

import { makeAnnoucements, editAnnoucement } from '../graphQlQuieries';

import { fetchGraphQl } from '../utils';


export type AnnoucementsState = { 
    loading: boolean;
    error: boolean;
    makeAnnoucement: ( annoucement: string, sendEmail: boolean ) => Promise<void>;
    editAnnoucement: ( annoucement: string, editAnnoucementId: string ) => Promise<void>;
}

export const useAnnouncement = ( token : string ) => {
    const [ makeAnnoucement, setAnnoucement ] = React.useState<AnnoucementsState>( { 
        loading: false,
        error: false,
        makeAnnoucement: async ( annoucement: string, sendEmail: boolean ) => {
            if ( token == null ) return;

            setAnnoucement( { ...makeAnnoucement, loading: true } );
            const resp = await fetchGraphQl( makeAnnoucements, { annoucement, sendEmail, token } );
            if ( resp.data ) {
                setAnnoucement( { ...makeAnnoucement, loading: false, error: false } );
            } else {
                setAnnoucement( { ...makeAnnoucement, loading: false, error: true } );
            }
        },
        
        editAnnoucement: async ( annoucement: string, editAnnoucementId: string ) => {
            if ( token == null ) return;

            setAnnoucement( { ...makeAnnoucement, loading: true } );
            const resp = await fetchGraphQl( editAnnoucement, { annoucement, editAnnoucementId, token } );
            if ( resp.data ) {
                setAnnoucement( { ...makeAnnoucement, loading: false, error: false } );
            } else {
                setAnnoucement( { ...makeAnnoucement, loading: false, error: true } );
            }
        }

    } );

    return makeAnnoucement;
}
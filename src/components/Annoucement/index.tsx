import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Markup } from 'interweave';

import { Annoucement } from '../../utils';
import { useAnnouncement } from "../../hooks";

import './index.css';
import { RegisterButton } from '../RegisterButton';
import { AppLoading } from "../AppLoading";

export type AnnoucementProps = {
    editable?: boolean;
    token?: string | null;
} & Annoucement;

const AnnoucementView: React.FC<AnnoucementProps> = ({ id, annoucement, createdAt, updateAt, editable, token }) => {
    const [ editing, setEditing ] = React.useState(false);
    const [ annoucementText, setAnnoucementText ] = React.useState(annoucement);
    const { loading, error, editAnnoucement } = useAnnouncement(token!);
    const navigate = useNavigate();
    
    const toCustomDateString = ( date : Date ) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
    }

    const handleEdit = async () => {
        await editAnnoucement(annoucementText, id);
        setEditing(false);
        if (!error) navigate(0);
    }

    if ( loading ) return <AppLoading />

    if ( error ) alert("Problem with editing annoucement");
    
    return (
        <div className="AnnoucementView">
            <div className="annoucement-header">
                <h4>{`Created At: ${toCustomDateString(new Date(createdAt))}`}</h4>
                <h4>{`Updated At: ${toCustomDateString(new Date(updateAt))}`}</h4>
            </div>

            {
                !editing ? (
                    <div className="annoucement-text">
                        <Markup content={annoucement} />
                    </div>
                ) : null
            }

            {
                
                editable && !editing ? <RegisterButton title="Edit" onClick={() => setEditing(true) }/> : null
            }

            {
                editing && editable ? (
                    <div className="annoucement-edit">
                        <textarea 
                            title="edit-annoucement-textarea"
                            className="annoucement-edit-textarea" 
                            value={annoucementText} onChange={( event ) => setAnnoucementText(event.target.value)}
                        />
                        <div className="annoucement-edit-buttons">
                            <RegisterButton title="Save" onClick={handleEdit}/>
                            <RegisterButton title="Cancel" onClick={() => setEditing(false) }/>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

AnnoucementView.defaultProps = {
    editable: false, 
    token: null
}

export default AnnoucementView;

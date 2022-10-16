import React from 'react';

import { LabelInputDiv } from "../LabelInputDiv";
import { RegisterButton } from "../RegisterButton";
import { AppLoading } from "../AppLoading";

import { useAnnouncement } from "../../hooks";

export type Props = {
    token: string;
}

export const CreateAnnoucement: React.FC<Props> = ({ token }) => {
    const sendEmailRef = React.useRef<HTMLInputElement>(null);
    const [ content, setContent ] = React.useState("");
    const { loading, error, makeAnnoucement } = useAnnouncement(token);

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    }

    const handleCreateAnnoucement = () => {
        if( !sendEmailRef.current ) return alert("Something went wrong");

        const sendEmail = sendEmailRef.current.checked;

        makeAnnoucement(`<h1>${content}<h1>`, sendEmail);
    }
    
    if ( loading ) return <AppLoading />

    if ( error ) alert("Problem with creating annoucement");

    return (
        <div className="FormContainer CreateAnnouncementForm">
            <div className="CreateAnnouncementForm__QuillContainer" >
                <LabelInputDiv>
                    <label htmlFor="sendEmail">Send Email</label>
                    <input type="checkbox" name="sendEmail" value="checked" title="sendEmail" ref={sendEmailRef}/>
                </LabelInputDiv>

                <div>
                    <textarea title="annoucement" value={content} onChange={handleContentChange} />
                </div>

                <RegisterButton title="Create Annoucement" onClick={handleCreateAnnoucement} />
            </div>
        </div>
    )
}

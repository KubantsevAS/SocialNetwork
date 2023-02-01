import React from 'react';
import { Contact } from '../ProfileInfo';

export default function ProfileData(props) {
    return (

        <div>
            {props.checkIsOwner &&
                <div><button onClick={props.activateEditMode}>edit</button></div>}

            <div>
                <div>Full name: {props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe}</div>

                <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                {props.profile.lookingForAJob &&
                    <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
                }

            </div>

            <div>Contacts: 
                {Object.keys(props.profile.contacts)
                    .filter(key => props.profile.contacts[key] !== null && props.profile.contacts[key] !== '')
                    .map(key => {
                        return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })}
            </div>
        </div>
    )


}

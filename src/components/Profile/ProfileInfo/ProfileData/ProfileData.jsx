import React from 'react';
import { Contact } from '../ProfileInfo';
import styles from './ProfileData.module.css'

export default function ProfileData(props) {
    return (

        <div>
            

            <div className={styles.mainInfo}>
                <div className={styles.mainInfo__item} subscribe='Full Name'>
                    {props.profile.fullName}
                </div>
                <div className={styles.mainInfo__item} subscribe='About Me'>
                    {props.profile.aboutMe || 'No info'}
                </div>

                <div className={styles.mainInfo__item} subscribe='Job Status'>
                    {props.profile.lookingForAJob ? "Looking for a job" : "Not looking for a job"}
                </div>
                {props.profile.lookingForAJob &&
                    <div className={styles.mainInfo__item} subscribe='My Professional Skills'>
                        {props.profile.lookingForAJobDescription}
                    </div>
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

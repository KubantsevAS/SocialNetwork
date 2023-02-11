import React from 'react';
import styles from './ProfileData.module.css'
import facebookIcon from './../../../../redux/images/icons/contacts/facebook.png'
import websiteIcon from './../../../../redux/images/icons/contacts/website.png'
import vkIcon from './../../../../redux/images/icons/contacts/vk.png'
import twitterIcon from './../../../../redux/images/icons/contacts/twitter.png'
import instagramIcon from './../../../../redux/images/icons/contacts/instagram.png'
import youtubeIcon from './../../../../redux/images/icons/contacts/youtube.png'
import githubIcon from './../../../../redux/images/icons/contacts/github.png'
import mainLinkIcon from './../../../../redux/images/icons/contacts/mainLink.png'


export default function ProfileData(props) {

    let iconArr = [facebookIcon, websiteIcon, vkIcon, twitterIcon, instagramIcon, youtubeIcon, githubIcon, mainLinkIcon];

    return (

        <div>
            

            <div className={styles.mainInfo}>
                <div className={styles.mainInfo__item} subscribe='Full Name'>
                    <b>{props.profile.fullName}</b>
                </div>
                <div className={styles.mainInfo__item} subscribe='About Me'>
                    {props.profile.aboutMe || 'No info'}
                </div>

                <div className={styles.mainInfo__item} subscribe='Job Status'>
                    {props.profile.lookingForAJob ? <>Looking for a job: <b>YES</b></> : <>Looking for a job: <b>NO</b></>}
                </div>
                {props.profile.lookingForAJob &&
                    <div className={styles.mainInfo__item} subscribe='My Professional Skills'>
                        {props.profile.lookingForAJobDescription}
                    </div>
                }

            </div>

            <div>
                <div className={styles.contactsHeader}>My contacts:</div>
                <div className={styles.contactsContainer}>
                    {Object.keys(props.profile.contacts)
                        .filter(key => props.profile.contacts[key] !== null && props.profile.contacts[key] !== '')
                        .length 
                            ? Object.keys(props.profile.contacts)
                                .map((key, index) => {
                                    if (props.profile.contacts[key] === null || props.profile.contacts[key] === '') {
                                        return false
                                    }
                                    return (
                                        <a href={props.profile.contacts[key]} target='_blank' rel='noreferrer'>
                                            <img src={iconArr[index]} alt={props.profile.contacts[key]} className={styles.contactIcon}></img>
                                        </a>
                                        
                                    )
                                })
                            : <div className={styles.emptyContacts}>No contacts available...</div>
                    }
                </div>
                

            </div>
        </div>
    )


}

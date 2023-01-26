import React, {useState, useEffect} from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defAva from './../../../redux/images/avatars/AvaDefault.png'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({saveProfile, ...props}) => {

    const onSubmit = (values) => {
        saveProfile(values);
        setEditMode(false);
    }
    

    let [editMode, setEditMode] = useState(false);
    
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
    }

    let checkIsOwner;
    if (!props.profile) {
        return <Preloader />
    } else {
        checkIsOwner = props.isOwner === props.profile.userId;
    }

    const onMainPhotoSelected = (elem) => {
        if (elem.target.files.length) {
            props.uploadPhoto(elem.target.files[0])
        }
    }

    return (
        <div className={classes.profile__info}>
            <div>
                <img src={props.profile.photos.large || defAva} className={classes.profile__avatar} alt='ava' />
                <div>
                    {checkIsOwner &&
                        <>
                            <label htmlFor='photoInp'>INPUT PHOTO</label>
                            <input id='photoInp' type={'file'} onChange={onMainPhotoSelected} className={classes.inputPhoto} />
                        </>
                    }
                </div>
            </div>

            <div className={classes.profile__description}>
                <div>Full name: {props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                
                {editMode ?  
                    <ProfileDataForm 
                        profile={props.profile}
                        onSubmit={onSubmit}
                    /> : 
                    <ProfileData 
                        profile={props.profile} 
                        checkIsOwner={checkIsOwner}
                        activateEditMode={() => {setEditMode(true)}}
                    />
                }
                


            </div>

        </div>
    )
}


const ProfileData = (props) => {
    return (
        <div>
            { props.checkIsOwner && 
            <div><button onClick={props.activateEditMode}>edit</button></div>}

            <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
            {props.profile.lookingForAJob &&
                <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
            }

            <div>About me: {props.profile.aboutMe}</div>

            <div>Contacts: {Object.keys(props.profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}</div>
        </div>
    )
}



export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            {contactTitle} : {contactValue}
        </div>
    )
}

export default ProfileInfo;
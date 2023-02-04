import React, {useState, useEffect} from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ProfileAvatarAndBtn from './ProfileAvatarAndBtn/ProfileAvatarAndBtn';
import ProfileData from './ProfileData/ProfileData';

const ProfileInfo = ({saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);
    
    
    
    let checkIsOwner;
    if (!props.profile) {
        return <Preloader />
    } else {
        checkIsOwner = props.isOwner === props.profile.userId;
    }

    return (
        <div className={classes.profile__info}> 
            
            <ProfileAvatarAndBtn 
                photo={props.profile.photos.large} 
                checkIsOwner={checkIsOwner} 
                uploadPhoto={props.uploadPhoto}
                editMode={editMode}
                activateEditMode={() => {setEditMode(true)}}
                />

            <div className={classes.profile__description}>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                
                {editMode ?  
                    <ProfileDataForm 
                        profile={props.profile}
                        formError={props.formError}
                        setEditMode={setEditMode}
                        saveProfile={saveProfile}
                    /> : 
                    <ProfileData 
                        profile={props.profile} 
                    />
                }
                


            </div>

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
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import AdminAva from './../../../redux/images/avatars/adminAva.jpg'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (elem) => {
        if (elem.target.files.length) {
            props.uploadPhoto(elem.target.files[0])
        }
    }

    return (
        <div className={classes.profile__info}>
            <div>
                <img src={props.profile.photos.large || AdminAva} className={classes.profile__avatar} alt='ava'/>
                <div>
                    {props.isOwner && 
                        <>
                            <label htmlFor='photoInp'>INPUT PHOTO</label>
                            <input id='photoInp' type={'file'} onChange={onMainPhotoSelected} className={classes.inputPhoto}/>
                        </>
                    }
                </div>
            </div>
            <div className={classes.profile__description}>
                <div className={classes.profile__name}>Full name: {props.profile.fullName}</div>
                <div className={classes.profile__age}>About me: {props.profile.aboutMe}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            
        </div>
    )
}

export default ProfileInfo;
import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profile__info}>
            <div className={classes.profile__avatar}>
            </div>
            <div className={classes.profile__description}>
                <div className={classes.profile__name}>User Name: Mr Pugls</div>
                <div className={classes.profile__age}>Age: 7</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
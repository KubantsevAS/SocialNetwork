import React from 'react'
import styles from './ProfileAvatarAndBtn.module.css'
import defAva from './../../../../redux/images/avatars/AvaDefault.png'

export default function ProfileAvatarAndBtn(props) {

    const onMainPhotoSelected = (elem) => {
        if (elem.target.files.length) {
            props.uploadPhoto(elem.target.files[0])
        }
    }

    return (
        <div>
            <img src={props.photo || defAva} className={styles.profile__avatar} alt='ava' />
            <div>
                {props.checkIsOwner &&
                    <>
                        <label htmlFor='photoInp' className={styles.avatar__input}>Upload new photo</label>
                        <input id='photoInp' type={'file'} onChange={onMainPhotoSelected} className={styles.inputPhoto} />
                    </>
                }
            </div>
        </div>
    )
}

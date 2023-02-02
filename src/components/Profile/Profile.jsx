import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            {/* <div>{`Secret info: Is Owner ${props.isOwner}`}</div> */}
            <ProfileInfo 
                profile={props.profile} 
                status={props.status} 
                updateStatus={props.updateStatus} 
                isOwner={props.isOwner}
                uploadPhoto={props.uploadPhoto}
                saveProfile={props.saveProfile}
                />
            <MyPostsContainer/>
            
        </div>
    );
}

export default Profile;
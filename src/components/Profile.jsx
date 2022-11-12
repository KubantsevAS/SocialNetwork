import React from 'react'
import './styles/Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div className='topImage'>
                {/* <img src="https://pbs.twimg.com/media/BowtSahIAAATtcn.jpg"></img> */}
            </div>


            <div>
                <img src="https://avatarfiles.alphacoders.com/813/81325.jpg" width="200px"></img>
            </div>

            <div>
                MyPosts
                <div>
                    newPosts
                </div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
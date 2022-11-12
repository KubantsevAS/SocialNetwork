import React from 'react';
import PostItem from './PostItem/PostItem';

const AllPosts = () => {
    return (
        <div className='AllPosts'>
            <PostItem message='Hi, how are you?' number='20'/>
            <PostItem message="It's my first post" number='15'/>
            <PostItem number='12'/>
        </div>
    )
}

export default AllPosts;
import React from 'react';
import PostItem from './PostItem/PostItem';

const AllPosts = (props) => {

    let postDataTags = props.postsData.slice().reverse().map(el => ( 
        <PostItem message={el.message} number={el.number} key={el.id} 
            profile={props.profile}
            />
        ))


    return (
        <div className='AllPosts'>

            {postDataTags}
            
        </div>
    )
}

export default AllPosts;
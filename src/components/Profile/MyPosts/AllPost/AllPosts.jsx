import React from 'react';
import PostItem from './PostItem/PostItem';

const AllPosts = () => {

    let postsData = [
        {id : 1, message: 'Hi, how are you?', number : 20},
        {id : 2, message: "It's my first post", number : 15},
        {id : 3, message: "Let's go!", number : 32},
    ];

    let postDataTags = postsData.map(el => ( <PostItem message={el.message} number={el.number} />))


    return (
        <div className='AllPosts'>

            {postDataTags}
            
        </div>
    )
}

export default AllPosts;
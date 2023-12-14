import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,title,remove}) => {

    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                No Posts!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>

            {posts.map((posts,index) =>
                <PostItem remove={remove} number={index+1} post={posts}/>)}
        </div>
    );
};

export default PostList;
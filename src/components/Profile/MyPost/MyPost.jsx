import React from 'react';
import classesMyPost from './MyPost.module.css';
import NewPosts from './NewPost';



const MyPost = () => {
    return (<div>
        <div className={classesMyPost.content__myPost}>
            <h2> My post </h2>
            <textarea className={classesMyPost.input} placeholder='your news...'></textarea>
            <button className={classesMyPost.btn}> Send </button>
        </div>
        <div className={classesMyPost.content__otherPosts}>
            <NewPosts massage = "Hi, my name Alex" like = "10"/>
            <NewPosts massage = "I am is inginer" like = "20"/>
            <NewPosts massage = "My life book is Djeck London" like = "15"/>
        </div>



    </div>
    );
};


export default MyPost;
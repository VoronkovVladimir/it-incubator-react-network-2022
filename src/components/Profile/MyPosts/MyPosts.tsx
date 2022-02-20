import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'HI! How are you?', like: 5},
        {id: 2, message: 'Its OK', like: 4},
        {id: 3, message: 'YO', like: 3},
    ]

    return (
        <div className={s.postsBlock}>
            <div>
                <h3 className={s.postsBlockTitle}>MY POSTS</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} like={postData[0].like}/>
                <Post message={postData[1].message} like={postData[1].like}/>
                <Post message={postData[2].message} like={postData[2].like}/>
            </div>
        </div>
    );
};

export default MyPosts;
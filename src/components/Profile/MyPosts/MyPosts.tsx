import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='HI! How are you?' like={5}/>
                <Post message='Its OK' like={4}/>
                <Post message='YO' like={3}/>
            </div>
        </div>
    );
};

export default MyPosts;
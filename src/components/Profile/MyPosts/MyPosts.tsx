import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'HI! How are you?', like: 5},
        {id: 2, message: 'Its OK', like: 4},
        {id: 3, message: 'YO', like: 3},
        {id: 4, message: 'YO!!!', like: 2},
    ]

    let postsElements = posts.map(post => <Post message={post.message} like={post.like}/>)

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
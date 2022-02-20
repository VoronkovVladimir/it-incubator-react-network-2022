import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content__mainImg} src="https://www.worldbook.com/images/WBBlog_KidsCoding.jpg"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
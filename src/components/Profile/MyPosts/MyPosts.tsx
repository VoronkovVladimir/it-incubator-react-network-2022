import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <div>
                MY POSTS
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img className={s.avatar} src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-technologist.png" alt="avatar"/>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
                <div className={s.item}>
                    post 3
                </div>
                <div className={s.item}>
                    post 4
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
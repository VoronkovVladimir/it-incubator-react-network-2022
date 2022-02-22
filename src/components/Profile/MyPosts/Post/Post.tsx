import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    like: number
}
const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar}
                 src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-technologist.png"
                 alt="avatar"/>
            {props.message}
            <div>
                <span>{props.like} like</span>
            </div>

        </div>
    );
};

export default Post;
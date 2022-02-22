import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

type PropsType = {
    posts: Array<PostPropsType>
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} like={post.like}/>)

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
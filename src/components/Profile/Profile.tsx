import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

type PropsType = {
    profileState: {
        posts: Array<PostPropsType>
    }
}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profileState.posts}/>
        </div>
    );
};

export default Profile;
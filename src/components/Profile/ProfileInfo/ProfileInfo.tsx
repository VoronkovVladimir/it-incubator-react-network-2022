import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content__mainImg} src="https://www.worldbook.com/images/WBBlog_KidsCoding.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
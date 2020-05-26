import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../../Photos/avatar.png";
import Status from "./Status/Status";

const Profile = (props)=>{
    return(
        <div className={styles.profile}>
            <div className={styles.photos}>
                <img src={!props.profile.photos.large ?avatar :props.profile.photos.large} alt=""/>
            </div>
            <div className={styles.fullName}>
                {props.profile.fullName}
            </div>
            <div className={styles.aboutMe}>
                О себе: {props.profile.aboutMe}
            </div>
            <div className={styles.status}>
            <Status  status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} />
            </div>
            <div className={styles.lookingForAJob}>
               В поиске работы: {props.profile.lookingForAJob === true ? <span>Да</span> :<span>Нет</span>}
            </div>
        </div>
    )
};

export default Profile;
import React from "react";
import styles from "./OneFriend.module.css";
import Avatar from "../../../../Forms/Avatar";




const OneFriend =(props)=>{
    let unfollow = ()=>{
        props.unfollowThunkCreator(props.id)
    };

    return(
        <div className={styles.oneuser}>
            <div className={styles.photo}>{props.photos.smail === null ?props.photos.small :<Avatar/>}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.status}>Статус: {props.status}</div>
            <div className={styles.followed}>
            <button className={styles.unfollow} onClick={unfollow} >Удалить</button>
            </div>
        </div>


    )
};

export default OneFriend;
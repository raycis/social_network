import React from "react";
import styles from "./OneUser.module.css";
import Avatar from "../../../../Forms/Avatar";

const OneUser =(props)=>{
    let follow = ()=>{
        props.followThunkCreator(props.id)
    };


    let unfollow = ()=>{
        props.unfollowThunkCreator(props.id)
    };

    return(
        <div className={styles.oneuser}>
            <div className={styles.photo}>{props.photos.smail === null ?props.photos.smail :<Avatar/>}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.status}>Статус: {props.status}</div>
            <div className={styles.followed}>{props.followed

                ? <button className={styles.unfollow} onClick={unfollow} disabled={props.followProgress.some(id=>id === props.id)}>Удалить</button>
                : <button className={styles.follow} onClick={follow} disabled={props.followProgress.some(id=>id === props.id)}>Добавить</button>}
        </div>
        </div>
    )
};

export default OneUser;
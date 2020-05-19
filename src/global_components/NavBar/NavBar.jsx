import React from "react";
import styles from "./NavBar.module.css";


const NavBar =()=>{

    return(
        <div className={styles.navbar}>
            <div>Моя страница</div>
            <div>Пользователи</div>
            <div>Сообщения</div>
            <div>Логин</div>
        </div>
    )
}

export default NavBar;
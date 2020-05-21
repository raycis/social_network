import React from "react";
import styles from "./NavBar.module.css";
import {NavLink} from "react-router-dom";


const NavBar =()=>{

    return(
        <div className={styles.navbar}>
            <NavLink to='/profile'>Моя страница</NavLink>
            <br/>
            <NavLink to='/allusers'>Пользователи</NavLink>
            <br/>
            <NavLink to='/friends'>Друзья</NavLink>
            <br/>
            <NavLink to='/message'>Сообщения</NavLink>
            <br/>
        </div>
    )
}

export default NavBar;
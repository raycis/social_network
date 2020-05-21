import React from "react";
import styles from './Header.module.css';
import {connect} from "react-redux";
import {logoutThunkCreator} from "../Redux/Reducer/AuthReduser";

class Header extends React.Component{

    render(){
        return (
            <div className={styles.header}>
                <div className={styles.left_bar}>
                    Социальная сеть
                </div>
                <div className={styles.right_bar}>
                    <div className={styles.login_info}>
                    {this.props.authInfo.email} <button onClick={this.props.logoutThunkCreator}>Сменить пользователя</button>
                    </div>
                </div>
            </div>
        )
    }

}
let mapStateToProps =(state) =>{
    return{
        authInfo: state.auth
    };
}

export default connect (mapStateToProps, {logoutThunkCreator}) (Header);
import React from 'react';
import styles from './App.module.css';
import Header from "./global_components/Header/Header";
import NavBar from "./global_components/NavBar/NavBar";
import Content from "./global_components/Content/Content";
import {connect} from "react-redux";
import {AuthInfoThunk} from "./global_components/Redux/Reducer/AuthReduser";
import LoginContainer from "./global_components/loginContainer/LoginContainer";


class App extends React.Component{
    componentDidMount(){
        this.props.AuthInfoThunk()
        
    }
    render() {
        if(this.props.authInfo.email === null){

            return <LoginContainer/>

        }
        return (
            <div className={styles.app}>
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.navbar}>
                    <NavBar/>
                </div>
                <div className={styles.content}>
                    <Content/>
                </div>
            </div>
        );
    }


}

let mapStateToProps = (state) => {
    return {
        authInfo: state.auth
    }
}

export default connect (mapStateToProps,{AuthInfoThunk})(App);

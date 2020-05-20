import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {loginThunkCreator} from "../Redux/Reducer/AuthReduser";
import {connect} from "react-redux";


class LoginContainer extends React.Component{

    render() {
        const onSubmit = (formData)=>{
            this.props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)

        }
        return (
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }
}


export default connect(null, {loginThunkCreator}) (LoginContainer);
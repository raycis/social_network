import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Forms/Input";
import styles from "./Login.module.css";


const LoginForm = (props) => {
    return (
        <div className={styles.login_form}>
            <form onSubmit={props.handleSubmit}>
                <h1>Добро пожаловать</h1>
                <div className={styles.field}>

                    <Field placeholder={'email'} component={Input} name={'email'}/>
                </div>
                <div className={styles.field}>
                    <Field placeholder={'Password'} component={Input} name={'password'} type='password'/>
                </div>
                <div className={styles.field}>
                    <Field placeholder={'Login'} component={Input} type={"checkbox"} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
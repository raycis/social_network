import React from 'react';
import styles from './Message.module.css';
import {Field, reduxForm} from 'redux-form';
import avatar from '../../../Photos/avatar.png';

const Message = (props) =>{
    let onSubmit = (text) =>{
        props.addMessageActionCreater(text.newMessage)
        text.newMessage = '';
    };


    return(
        <div className={styles.messagebar}>
            <div className={styles.message}>
                {props.message.message
                    .map(message=><div className={styles.onemessage} key={message.text}>
                        <img src= {avatar} alt=""/>{message.text}</div>)}
            </div>
            <div>
                <AddMessageFormRedux onSubmit ={onSubmit} />
            </div>
        </div>


    )
};

const AddMessageForm =(props)=>{

    return(
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component='input' name='newMessage' placeholder='Введите сообщение...' />
            <button>Отправить</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form:'MessageForm'})(AddMessageForm)
export default Message;
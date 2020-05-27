import React from "react";
import styles from "./PostBar.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../Forms/Input";
import avatar from "../../../../Photos/avatar.png";

const PostBarForm = (props) =>{

    return(
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Что у вас нового...'} component={Input} name={'post'} />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
};

const PostBarReduxForm = reduxForm({form: 'PostBar'})(PostBarForm);

const PostBar=(props)=>{

    const onSubmit = (formText)=>{
        props.addPostAC(formText.post)
        formText.post = '';
    };

    return(
        <div className={styles.postbar}>
            <div>
                <PostBarReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={styles.post}>
                {props.post.map(post=><div key={post.text} className={styles.postelement}><img src={props.photo ===null ?avatar :props.photo} alt=""/>
                <div className={styles.text}>{post.text}</div></div>)}
            </div>
        </div>
    )
};


export default PostBar;
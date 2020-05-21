import React from "react";
import styles from "./Counter.module.css";


const Counter = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let pagesElements = pages.map(page => {
        return <span key={page} className={props.curentPage === page  ?styles.number_active :styles.number} onClick={(e) => {
            props.onClickCurrent(page)
        }}>{page}</span>
    });

    return (
        <div className={styles.counter_all}>
            <button>Назад</button>
            <div className={styles.counter}>{pagesElements}</div>
            <button>Вперед</button>
        </div>
    )
};

export default Counter;
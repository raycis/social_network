import React, {useState} from "react";
import styles from "./Counter.module.css";

const Counter = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.counter}>
        <div className={styles.counter_all}>
            <div className={styles.counter_left}>
                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Назад</button>}
            </div>
            <div className={styles.counter_center}>
                {pages
                    .filter(pages => pages >= leftPortionPageNumber && pages <= rightPortionPageNumber)
                    .map((pages) => <span className={props.curentPage === pages ? styles.number_active
                        : styles.number}
                                          key={pages} onClick={(e) => {
                        props.onClickCurrent(pages)
                    }}> {pages}</span>)}
            </div>
            <div className={styles.counter_right}>
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Вперед</button>}
            </div>
        </div>
    </div>

};

export default Counter;
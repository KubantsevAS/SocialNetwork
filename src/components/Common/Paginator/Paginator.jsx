import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize, portionSize }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.pages}>
            {portionNumber > 1 &&
                <label htmlFor='sprev' className={styles.pageItem}>{"<<"}
                    <button id="sprev" onClick={() => { setPortionNumber(portionNumber = 1) }} className={styles.btn}></button>
                </label>
            }

            {portionNumber > 1 &&
                <label htmlFor='prev' className={styles.pageItem}>{"< prev"}
                    <button id="prev" onClick={() => { setPortionNumber(portionNumber - 1) }} className={styles.btn}></button>
                </label>
            }

            {pages
                .filter(elem => elem >= leftPortionPageNumber && elem <= rightPortionPageNumber)
                .map(elem => {
                    return <span
                        key={elem}
                        onClick={() => { onPageChanged(elem) }}
                        className={currentPage === elem ? styles.selectedPage : styles.pageItem}
                    >
                        {elem}
                    </span>
                })}

            {portionNumber < portionCount &&
                <label htmlFor='next' className={styles.pageItem}>{"next >"}
                    <button id="next" onClick={() => { setPortionNumber(portionNumber + 1) }} className={styles.btn}></button>
                </label>
            }

            {portionNumber < portionCount &&
                <label htmlFor='snext' className={styles.pageItem}>{">>"}
                    <button id="snext" onClick={() => { setPortionNumber(portionNumber = portionCount) }} className={styles.btn}></button>
                </label>
            }
        </div>
    );
}

export default Paginator;



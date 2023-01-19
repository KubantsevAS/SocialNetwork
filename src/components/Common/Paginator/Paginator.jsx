import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.pages}>
            {pages.map(elem => {
                return <div
                    key={elem}
                    onClick={() => { onPageChanged(elem) }}
                    className={currentPage === elem ? styles.selectedPage : styles.pageItem}
                >
                    {elem}
                </div>
            })}

        </div>
    );
}

export default Paginator;



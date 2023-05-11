import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  portionSize,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / 10));
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pages}>
      {portionNumber > 1 && (
        <label
          htmlFor="sprev"
          className={styles.pageItem + ' ' + styles.btnLabel}
        >
          {'<<'}
          <button
            id="sprev"
            onClick={() => {
              setPortionNumber((portionNumber = 1));
            }}
            className={styles.btn}
          ></button>
        </label>
      )}

      {portionNumber > 1 && (
        <label
          htmlFor="prev"
          className={styles.pageItem + ' ' + styles.btnLabel}
        >
          {'< prev'}
          <button
            id="prev"
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
            className={styles.btn}
          ></button>
        </label>
      )}

      {pages
        .filter(
          (elem) =>
            elem >= leftPortionPageNumber && elem <= rightPortionPageNumber
        )
        .map((elem) => {
          return (
            <span
              key={elem}
              onClick={() => {
                onPageChanged(elem);
              }}
              className={
                currentPage === elem ? styles.selectedPage : styles.pageItem
              }
            >
              {elem}
            </span>
          );
        })}

      {portionNumber < portionCount && (
        <label
          htmlFor="next"
          className={styles.pageItem + ' ' + styles.btnLabel}
        >
          {'next >'}
          <button
            id="next"
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
            className={styles.btn}
          ></button>
        </label>
      )}

      {portionNumber < portionCount && (
        <label
          htmlFor="snext"
          className={styles.pageItem + ' ' + styles.btnLabel}
        >
          {'>>'}
          <button
            id="snext"
            onClick={() => {
              setPortionNumber((portionNumber = portionCount));
            }}
            className={styles.btn}
          ></button>
        </label>
      )}
    </div>
  );
};

export default Paginator;

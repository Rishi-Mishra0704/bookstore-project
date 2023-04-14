import React from 'react';
import classes from '../css/Loading.module.css';

const numbers = ['12', '23', '34', '100'];
const chapterArr = ['Introduction', 'Chapter 17', 'Chapter 23', 'Chapter 35', 'Chapter 45', 'Chapter 100'];
const Loading = () => {
  const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  const randomChapter = chapterArr[Math.floor(Math.random() * chapterArr.length)];
  return (
    <>
      <div className={classes.container}>
        <div className={classes.circle} />
        <div className={classes.percent}>
          <p className={classes.number}>
            {randomNum}
            %
          </p>
          <p className={classes.text}>Completed</p>
        </div>
        <div className={classes.chapter}>
          <p className={classes.current}>Current Chapter</p>
          <p className={classes['chapter-number']}>{randomChapter}</p>
          <button type="button" className={classes['btn-update']}>UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

export default Loading;

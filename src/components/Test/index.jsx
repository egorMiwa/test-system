import React from 'react';
import styles from './index.module.css';

function Test({ name, successlyPassed, total }) {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <p>name : {name}</p>
                <p>passedTotal : {successlyPassed}</p>
                <p>total : {total}</p>
            </div>
        </div>
    );
}

export default Test;

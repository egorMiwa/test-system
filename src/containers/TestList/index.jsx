import React from 'react';
import styles from './index.module.css';
import Test from '../../components/Test/index';

function TestList({tests}) {
    return (
        <div className={styles.container}>
            {tests.map((test) => {
                return (
                    <Test name={test.name} successlyPassed={test.successlyPassed} total={test.total}></Test>
                )
            })}
        </div>
    );
}

export default TestList;

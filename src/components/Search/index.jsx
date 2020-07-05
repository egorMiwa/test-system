import React from 'react';
import styles from './index.module.css';

function Search({value,handleChange}) {
    return (
        <div className={styles.container}>
            <input className={styles.input} value={value} onChange={handleChange} type="text"/>
        </div>
    );
}   

export default Search;

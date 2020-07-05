import React, { useState } from 'react';
import styles from './index.module.css';
import Search from '../../components/Search/index'
import TestList from '../TestList/index'
import AddTestButton from '../../components/AddTestButton/index'

function TestListShell() {
    const [word, setWord] = useState("");
    const [tests] = useState([{ name: "asdasd", successlyPassed: 5, total: 10 },
    { name: "asdasd", successlyPassed: 5, total: 10 },
    { name: "asdasd", successlyPassed: 5, total: 10 },
    { name: "asdasd", successlyPassed: 5, total: 10 },
    { name: "asdasd", successlyPassed: 5, total: 10 }]);
    const [filterDisplay, setFilterDisplay] = useState([]);
    const handleChange = e => {
        setWord(e);
        let oldList = tests.slice();
        if (word !== "") {
            let newList = [];
            newList = oldList.filter((test) => {
                return  test.name.includes(word)
            })
            console.log(newList)
            setFilterDisplay(newList);
        } else {
            setFilterDisplay(tests);
        }
    }
    return (
        <div className={styles.container}>
            <Search value={word} handleChange={e => handleChange(e.target.value)} />
            <TestList tests={word.length <= 1 ? tests : filterDisplay} />
            <AddTestButton></AddTestButton>
        </div>
    );
}

export default TestListShell;

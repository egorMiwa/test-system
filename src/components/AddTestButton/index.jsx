import React from 'react';
import styles from './index.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from "react-router-dom";
const buttonStyle = {
    icon: {
        fontSize: 100,
        color: '#fffff'
    },
};

function AddTestButton() {
    const history = useHistory();

    const routeChange = () => {
        let path = `addTest`;
        history.push(path);
    }
    return (
        <div className={styles.button} onClick={routeChange}>
            <IconButton aria-label="delete" size="large">
                <AddCircleIcon style={buttonStyle.icon} />
            </IconButton>
        </div>
    );
}

export default AddTestButton;

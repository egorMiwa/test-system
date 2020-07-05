import React from 'react';
import styles from './index.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

function AddTestButton() {
    return (
        <div className={styles.button}>
            {/* <IconButton aria-label="delete" size="large">
                <AddCircleIcon />
            </IconButton> */}
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddCircleIcon />}
            ></Button>
        </div>
    );
}

export default AddTestButton;

import React from "react";
import { Button } from "react-bootstrap";
import styles from  '../Button/Button.module.css'

export default function FeedBackButton({text}){

    return (
        // <button type="button" className={styles.FeedbackButton}>{text}</button>
        <Button variant="contained" className={styles.FeedbackButton}>{text}</Button>
    )
}
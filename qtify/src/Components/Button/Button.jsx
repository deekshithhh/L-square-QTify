import React from "react";
import style from './Button.module.css'

export default function FeedBackButton({text}){

    return (
        // <button type="button" className={styles.FeedbackButton}>{text}</button>
        <button variant="contained" className={style.FeedbackButton} >{text}</button>
    )
}
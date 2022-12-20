import React from 'react'
import styles from './FormsControls.module.css'

const FormControl = (props) => {
    const hasError = (props.meta.error || props.meta.submitError) && props.meta.touched;
    return (
        <span className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <>{props.children}</>
            {hasError && <span>{props.meta.error || props.meta.submitError}</span>}
        </span>
    )
}

export const TextArea = (props) => {
    return <FormControl {...props}><textarea {...props}/></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}><input {...props}/></FormControl>
}